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
        </v-row>
        <v-row>
            <v-col>
                <FullCalendar :options="calendarOptions"></FullCalendar>
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
import { getStudentSchedule, getICal, getURL } from "../api/apiCalls";
import Selector from "./Selector.vue";
import { ref } from "vue";

const loading = ref(false);
const loadingButton = ref(false);
const notReadyToExport = ref(true);
const linkToExport = ref("");
const Schedule: Array<DataSchedule> = reactive([]);
const lessons = ref<Array<Event>>([]);
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

interface Schedule {
    group: string;
    days: Array<Days>;
}

interface Days {
    day: string;
    hours: Array<Hours>;
}

interface Hours {
    hour: string;
    lecture: Array<Lectures>;
}

interface Lectures {
    type: string;
    professor: string;
    room: string;
}

class DataSchedule implements Schedule {
    group: string;
    days: Array<Days>;

    constructor(group: string, days?: Array<Days>) {
        this.group = group;
        this.days = days || [];
    }

    addDays(days: Days): void {
        this.days.push(days);
    }
}

class DataDays implements Days {
    day: string;
    hours: Array<Hours>;

    constructor(day: string, hours?: Array<Hours>) {
        this.day = day;
        this.hours = hours || [];
    }

    addHours(hours: Hours): void {
        this.hours.push(hours);
    }
}

class DataHours implements Hours {
    hour: string;
    lecture: Array<Lectures>;

    constructor(hour: string, lectures?: Array<Lectures>) {
        this.hour = hour;
        this.lecture = lectures || [];
    }

    addLectures(lectures: Lectures): void {
        this.lecture.push(lectures);
    }
}

class DataLecture implements Lectures {
    type: string;
    professor: string;
    room: string;

    constructor(type: string, professor: string, room: string) {
        this.type = type;
        this.professor = professor;
        this.room = room;
    }
}

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

    constructor(
        id: string,
        title: string,
        start: Date,
        end: Date,
        color: string
    ) {
        this.id = id;
        this.title = title;
        this.start = start.toJSON();
        this.end = end.toJSON();
        this.color = color;
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
        Schedule.push(schedule);
        console.log(Schedule);

        addEventsToCalendar(Schedule);
    } catch (error) {
        console.log(error);
    }
}

function addEventsToCalendar(schedule: Array<any>) {
    for (let a in schedule) {
        for (let b in schedule[a]) {
            let group = schedule[a][b].group;
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
                                let lesson = new Event(
                                    group,
                                    "Grupa: " +
                                        group +
                                        "\n" +
                                        transformedLecture,
                                    start,
                                    end,
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
html,
body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
}

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
:root {
    --fc-border-color: white;
    --fc-today-bg-color: rgba(188, 224, 26, 0.178);
}
</style>
