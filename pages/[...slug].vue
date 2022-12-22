<template>
  <div>
    <Breadcrumbs :uri="path" />
    <DirectoryListing v-if="items" :items="items" />
    <ErrorNotFound v-else />
  </div>
</template>
<script setup lang="ts">
const path = useRoute().path;
const items = await useDirectory(path);
console.log(items);
</script>
