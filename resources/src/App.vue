<template>
    <v-layout ref="app">
        <v-app-bar
            app
            color="black"
            flat
            title="Schedule"
            class="justify-center"
        >
            <v-container class="fill-height">
                <v-btn v-for="link in links" :key="link" text>
                    {{ link }}
                </v-btn>

                <v-spacer> </v-spacer>
            </v-container>
        </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row no-gutters>
                    <v-col>
                        <v-sheet min-height="10vh" rounded="lg">
                            <v-select
                                label="Wydział"
                                :items="data"
                                item-title="department"
                                item-value="department"
                            ></v-select>
                        </v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet min-height="10vh" rounded="lg">
                            <!--Change to use index of choosen department-->
                            <v-select
                                label="Kierunek"
                                :items="data[0].cours"
                                item-title="name"
                                item-value="name"
                            ></v-select>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-sheet min-height="70vh" rounded="lg">
                    <Calendar />
                </v-sheet>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script lang="ts">
import * as data from ".//data/scheduleStudentLinks";

export default {
    data: () => ({
        links: ["Student", "Professor"],
        data: data.items(),
    }),
};
</script>
