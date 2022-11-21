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
            <v-container> <Selector /> </v-container>>
        </v-main>
    </v-layout>
</template>

<script lang="ts">
export default {
    data: () => ({
        links: ["Student", "Professor"],
    }),
};
</script>
