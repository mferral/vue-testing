<template>
    <span :id="id_slot">
        {{ message }}
    </span>
</template>

<script lang="ts" setup>
defineProps({
    id_slot: String,
    message: {
        type: String,
        default: 'Error message'
    },
})
</script>