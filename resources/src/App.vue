<script lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

 export default{
    name: 'App'
 }
</script>

<template>
    <div>
        <Home/>
    </div>
</template>