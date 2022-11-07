<script lang="ts" setup></script>

<template>
    <v-footer>
        <div>
            <strong>Today is:</strong>
            <br />
            {{ new Date().toUTCString() }}
        </div>
    </v-footer>
</template>
