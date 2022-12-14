<template>
  <div>
    <Breadcrumbs :uri="path" />
    <DirectoryListing :items="items" />
  </div>
</template>
<script setup lang="ts">
const endpoint = useRuntimeConfig().endpoint;
const path = useRoute().path;
const url = `${endpoint}${path}`
console.log(url)
const { data, error } = await useFetch<ItemJSON[]>(url)

if (!data.value || error.value) {
  throw createError({ statusCode: 404, message: "not found" })
}
const items: Item[] = data.value.map(I => ({
  name: I.name,
  type: I.type,
  mtime: new Date(I.mtime),
  size: I.size
}))
</script>

