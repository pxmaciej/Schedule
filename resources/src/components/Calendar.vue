<template>
    <v-container>
        <v-row>
            <v-col>
                <Selector @got-link="schedule" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    variant="outlined"
                    rounded="lg"
                    :model-value="loadingButton"
                    :disabled="notReadyToExport"
                    @click="postLinkToExport(linkToExport)"
                >
                    Export to ICal
                </v-btn>
            </v-col>
            <v-col>
                <!--Where icons-->
                <v-icon icon="mdi-access-point"></v-icon>
                <v-select
                    label="Group"
                    clearable
                    :items="groupArray"
                    :disabled="notReadyToExport"
                    v-model="eventsId"
                    @update:model-value="filterByGroup"
                >
                </v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <FullCalendar
                    ref="fullCalendar"
                    :options="calendarOptions"
                ></FullCalendar>
            </v-col>
        </v-row>
        <v-overlay :model-value="loading" class="align-center justify-center">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import iCalendarPlugin from "@fullcalendar/icalendar";
import plLocale from "@fullcalendar/core/locales/pl";
import { getStudentSchedule, getICal } from "../api/apiCalls";
import Selector from "./Selector.vue";
import { ref, onMounted } from "vue";

const loading = ref(false);
const loadingButton = ref(false);
const notReadyToExport = ref(true);
const linkToExport = ref("");
const Schedule: Array<any> = reactive([]);

const groupArray = ref([""]);
const eventsId = ref("");

const calendarOptions = ref({
    plugins: [
        timeGridPlugin,
        dayGridPlugin,
        interactionPlugin,
        iCalendarPlugin,
    ],
    initialView: "dayGridMonth",
    headerToolbar: {
        start: "dayGridMonth,dayGridWeek,timeGridDay",
        center: "title",
    },
    views: {
        dayGridMonth: { showNonCurrentDates: false },
        dayGridWeek: {},
        timeGridDay: {
            allDaySlot: false,
            slotMinTime: "08:00",
            slotMaxTime: "20:30",
            slotLabelFormat: {
                hour: "numeric",
                minute: "2-digit",
                omitZeroMinute: false,
            },
            slotDuration: "00:15:00",
            expandRows: true,
            nowIndicator: true,
        },
    },
    locale: plLocale,
    events: [{}],
    eventContent: function (arg: { event: { title: string } }) {
        return {
            html: arg.event.title.replace(/\n/g, "<br>"),
        };
    },
    eventDisplay: "block",
    displayEventEnd: true,
    eventTimeFormat: {
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
    },
});

const fullCalendar = ref<InstanceType<typeof FullCalendar>>();
let calendar: any;

onMounted(() => {
    calendar = fullCalendar.value?.getApi();
});

interface Event {
    title: string;
    start: string;
    end: string;
}

class Event implements Event {
    id: string;
    title: string;
    start: string;
    end: string;
    color: string;
    display: string;

    constructor(
        id: string,
        title: string,
        start: Date,
        end: Date,
        color: string,
        display: string
    ) {
        this.id = id;
        this.title = title;
        this.start = start.toJSON();
        this.end = end.toJSON();
        this.color = color;
        this.display = display;
    }
}

async function schedule(link: string) {
    try {
        loading.value = true;
        linkToExport.value = link;
        const res = await getStudentSchedule(link);
        const schedule = res?.data.map((x: any) => x);
        loading.value = false;
        notReadyToExport.value = false;
        Schedule.splice(0, Schedule.length);
        Schedule.push(schedule);
        console.log(Schedule);

        addEventsToCalendar(Schedule);
    } catch (error) {
        console.log(error);
    }
}

function addEventsToCalendar(schedule: Array<any>) {
    calendarOptions.value.events.length = 0;
    groupArray.value.length = 0;
    for (let a in schedule) {
        for (let b in schedule[a]) {
            let group = schedule[a][b].group;
            groupArray.value.push(group);
            for (let c in schedule[a][b]) {
                if (c != "group") {
                    for (let d in schedule[a][b][c]) {
                        if (d != "day") {
                            let start = new Date(
                                schedule[a][b][c][d].startEvent
                            );
                            let end = new Date(schedule[a][b][c][d].endEvent);
                            let lecture: Array<string> =
                                schedule[a][b][c][d].lecture;
                            lecture = lecture.map((i) => i + "\n");
                            let transformedLecture: string =
                                lecture[0] + lecture[1] + lecture[2];
                            if (lecture[0] != "-\n") {
                                let colours = [
                                    "blue",
                                    "green",
                                    "#58114f",
                                    "#cf3a2f",
                                    "orange",
                                    "#5f383e",
                                    "#e2ba74",
                                    "#3f4280",
                                ];

                                let index = groupArray.value.length - 1;

                                let color = colours[index];

                                let hoursStart =
                                    start.getHours() +
                                    ":" +
                                    String(start.getMinutes()).padStart(2, "0");

                                let hoursEnd =
                                    end.getHours() +
                                    ":" +
                                    String(end.getMinutes()).padStart(2, "0");

                                let lesson = new Event(
                                    group,
                                    "Grupa: " +
                                        group +
                                        "\n Godziny: " +
                                        hoursStart +
                                        " - " +
                                        hoursEnd +
                                        "\n" +
                                        transformedLecture,
                                    start,
                                    end,
                                    color,
                                    ""
                                );
                                calendarOptions.value.events.push(lesson);
                            }
                        }
                    }
                }
            }
        }
    }
}

function filterByGroup(id: string) {
    console.log(id);
    for (let e in calendarOptions.value.events) {
        calendarOptions.value.events[e].display = "block";
        if (id != null) {
            if (calendarOptions.value.events[e].id != id) {
                calendarOptions.value.events[e].display = "none";
            }
        }
    }
}

async function postLinkToExport(link: string) {
    try {
        loadingButton.value = true;
        await getICal(link).then((res) => {
            let blob = new Blob([res?.data], { type: "" });
            let link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "Calendar.ical";

            link.click();
        });
        loadingButton.value = false;
    } catch (error) {
        console.log(error);
    }
}
</script>

<style>
#calendar {
    margin: 40px auto;
}

.fc-event-title .fc-sticky {
    margin: 1px;
    padding: 1px;
    white-space: normal;
}

.fc-event-time {
    margin: 1px;
    padding: 1px;
    white-space: normal;
    font-size: 0.9em;
    width: fit-content;
}

.fc-h-event .fc-event-main-frame {
    display: block; /* for make fc-event-title-container expand */
    white-space: normal;
}
.fc .fc-daygrid-event-harness {
    margin-bottom: 5px;
    white-space: normal;
}
.fc-event {
    font-size: small;
    font-weight: bold;
}
:root {
    --fc-border-color: white;
    --fc-today-bg-color: rgba(188, 224, 26, 0.178);
}
</style>
