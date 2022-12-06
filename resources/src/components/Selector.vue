<template>
    <v-container>
        <v-row no-gutters>
            <v-col>
                <v-sheet min-height="10vh" rounded="lg">
                    <v-select
                        label="Wydział"
                        :items="data"
                        v-model="selectedDepartmentId"
                        item-title="department"
                        @update:model-value="selector"
                    ></v-select>
                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet min-height="10vh" rounded="lg">
                    <!--Change to use index of choosen department-->
                    <v-select
                        label="Kierunek"
                        :items="data[index].cours"
                        v-model="link"
                        item-title="name"
                        item-value="name"
                        :disabled="isDepartmentNotSelected"
                        return-object
                        @update:model-value="getLink"
                    ></v-select>
                </v-sheet>
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
            console.log(this.selectedDepartmentId);
            this.isDepartmentNotSelected = false;
            this.index = this.data.findIndex((object) => {
                return object.department == this.selectedDepartmentId;
            });
            console.log(this.index);
            return this.selectedDepartmentId;
        },
        getLink() {
            this.$emit("gotLink", this.link.link);
            return this.link.link;
        },
    },
};
</script>
