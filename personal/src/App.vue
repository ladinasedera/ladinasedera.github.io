<script setup>
import LadinaSedera from "@/components/LadinaSedera.vue";

defineProps({
  lang: { type: String, default: 'en' },
});
</script>

<template>
  <LadinaSedera :lang="lang"/>
</template>
