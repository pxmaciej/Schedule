<template>
    <v-app ref="app" theme="dark">
        <v-app-bar
            app
            color="black"
            flat
            title="Schedule"
            class="justify-center"
        >
            <v-container>
                <v-btn v-for="link in links" :key="link" text>
                    {{ link }}
                </v-btn>
            </v-container>
        </v-app-bar>

        <v-main>
            <Calendar />
        </v-main>
        <v-footer>
            <Footer />
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">
const links = ["Student"];
</script>
