<template>
    <div v-loading="loading">
        <v-sheet height="200">
            <Selector @got-link="schedule" />
        </v-sheet>
        <v-sheet height="600">
            <el-calendar ref="calendar">
                <template #date-cell="{ data }">
                    <p>
                        {{ data.day.split("-").slice(1).join("-") }}
                    </p>
                    <p></p>
                </template>
            </el-calendar>
        </v-sheet>
        <!-- <ul :key="index" v-for="(group, index) in response">
                    <li>{{ group.group }}</li>
                    <li :key="index" v-for="(days, index) in group">
                        <li :key="index" v-for="(hours, index) in days">
                            {{hours}} - {{index}}
                        </li>
                    </li>      
                </ul> -->
    </div>
</template>

<script setup lang="ts">
import { getStudentSchedule } from "../api/scrapperCalls";
import Selector from "./Selector.vue";
import { ref } from "vue";

const loading = ref(false);
const response: any = ref([]);
const groups = reactive([""]);
const calendar = ref();
const newObject: Array<DataSchedule> = reactive([]);

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

const test: Array<DataSchedule> = reactive([
    new DataSchedule("s1PAM", [
        new DataDays("Wtorek-24.24.21", [
            new DataHours("8:00-9:45", [new DataLecture("-", "-", "-")]),
        ]),
    ]),
]);

async function schedule(link: string) {
    try {
        loading.value = true;
        const res = await getStudentSchedule(link);
        console.log(`Schedule function result:`);
        console.log(res?.data);
        response.value = res?.data;
        loading.value = false;
        console.log("Response value: ");
        console.log(response.value);
        transformData(res?.data);
        console.log(newObject);
        //sort(res?.data);
    } catch (error) {
        console.log(error);
    }
}

function sort(data: Array<Object>) {
    let element: any;
    for (element of data) {
        groups.push(element.group);
        for (let key in element) {
            console.log("key");
            console.log(element[key]);
            for (const [key2, value] of Object.entries(element[key])) {
                console.log(`${key2}: ${value}`);
            }
        }
    }
}

function transformData(data: Array<any>) {
    for (let a in data) {
        const groups = new DataSchedule(data[a].group);
        for (let b in data[a]) {
            const days = new DataDays(data[a][b].day);
            if (b != "group") {
                for (let hours in data[a][b]) {
                    if (hours != "day") {
                        console.log("Hours: ");
                        console.log(hours);
                        const type = data[a][b][hours][0][0];
                        const professor = data[a][b][hours][0][1];
                        const room = data[a][b][hours][0][2];
                        console.log(data[a][b][hours]);
                        const lecture = new DataLecture(type, professor, room);
                        const hour = new DataHours(hours);
                        hour.addLectures(lecture);
                        days.addHours(hour);
                        console.log("Hours");
                        console.log(hour);
                        console.log("Days");
                        console.log(days);
                    }
                }
            }
            groups.addDays(days);
        }
        newObject.push(groups);
    }
    console.log(newObject);
}
</script>
