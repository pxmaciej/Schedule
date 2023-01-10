<template>
    <v-container>
        <v-row>
            <v-col>
                <Selector @got-link="schedule" />
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
import plLocale from "@fullcalendar/core/locales/pl";
import { getStudentSchedule } from "../api/scrapperCalls";
import Selector from "./Selector.vue";
import { ref } from "vue";
import { group } from "console";

const loading = ref(false);
const Schedule: Array<DataSchedule> = reactive([]);
const calendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    selectable: true,
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
    events: [
        {
            title: "EventTest",
            start: "2023-01-12T08:00:00",
            end: "2023-01-12T09:30:00",
        },
    ],
};

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

async function schedule(link: string) {
    try {
        loading.value = true;
        const res = await getStudentSchedule(link);
        const schedule = res?.data.map((x: any) => x);
        loading.value = false;
        Schedule.push(schedule);

        const regexp = new RegExp(
            "[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/g"
        );

        for (let i = 0; i < Schedule.length; i++) {
            for (let b = 0; b < Schedule[i].days.length; b++) {
                console.log(Schedule[i].days[b].day.match(regexp));
            }
        }
        console.log(Schedule);
        //fullCalendar.value?.getApi().addEvent();
    } catch (error) {
        console.log(error);
    }
}
</script>

<style>
:root {
    --fc-border-color: white;
    --fc-today-bg-color: rgba(188, 224, 26, 0.178);
}
</style>
