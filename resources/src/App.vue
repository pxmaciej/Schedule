<template>
    <v-app>
        <v-app-bar app flat title="Schedule" class="justify-center">
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

<style lang="scss">
@import "./assets/style.scss";
</style>
