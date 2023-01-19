<template>
    <v-container>
        <v-row justify="space-around">
            <v-col>
                <v-select
                    label="Wydział"
                    :items="data"
                    v-model="selectedDepartmentId"
                    item-title="department"
                    @update:model-value="selector"
                    variant="solo"
                ></v-select>
            </v-col>
            <v-col>
                <v-select
                    label="Kierunek"
                    :items="data[index].cours"
                    v-model="link"
                    item-title="name"
                    item-value="name"
                    :disabled="isDepartmentNotSelected"
                    return-object
                    @update:model-value="getLink"
                    variant="solo"
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import * as data from "./../data/scheduleStudentLinks";

export default {
    data: function () {
        return {
            data: data.items(),
            selectedDepartmentId: "",
            isDepartmentNotSelected: true,
            index: 0,
            link: { name: "", link: "" },
        };
    },
    emits: ["gotLink"],
    methods: {
        selector() {
            this.isDepartmentNotSelected = false;
            this.index = this.data.findIndex((object) => {
                return object.department == this.selectedDepartmentId;
            });
            return this.selectedDepartmentId;
        },
        getLink() {
            this.$emit("gotLink", this.link.link);
            return this.link.link;
        },
    },
};
</script>
