<template>
  <div>
    <Breadcrumbs :uri="path" />
    <DirectoryListing v-if="items" :items="items" />
    <ErrorNotFound v-else />
  </div>
</template>
<script setup lang="ts">
let path = useRoute().path;
if (!path.endsWith("/")) { path += "/"; }
const items = await useDirectory(path);
console.log(items);
</script>
