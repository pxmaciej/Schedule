<script lang="ts" setup>
//Change values to something more subtle
const options = [
    {
        value: "value1",
        label: "Wydział Nauk o Zdrowiu i Kulturze Fizycznej",
    },
    {
        value: "value2",
        label: "Wydział Nauk Technicznych i Ekonomicznych",
    },
    {
        value: "value3",
        label: "Wydział Nauk Społecznych i Humanistycznych",
    },
    {
        value: "value4",
        label: "Wychowanie fizyczne",
    },
    {
        value: "value5",
        label: "Erasmus",
    },
];
</script>

<template>
    <div>
        <v-sheet height="600">
            <el-calendar> </el-calendar>
        </v-sheet>
    </div>
</template>
