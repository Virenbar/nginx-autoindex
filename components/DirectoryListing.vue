<template>
  <div>
    <span>Directory Listing</span>
    <span class="float-end mx-1">{{ fileStats }}</span>
    <span class="float-end mx-1">{{ dirStats }}</span>
  </div>
  <div class="table-responsive">
    <table class="table table-sm table-borderless table-hover">
      <colgroup>
        <col class="col">
        <col class="col-3">
        <col class="col-2">
      </colgroup>
      <tbody>
        <tr v-for="item in props.items" :key="item.name">
          <td>
            <a v-if="item.size" class="link-icon" target="_blank" :href="encodeURI(item.name)">{{ item.name }}</a>
            <NuxtLink v-else class="link-icon" :to="item.name + '/'">
              {{ item.name }}/
            </NuxtLink>
          </td>
          <td>{{ item.mtime.toLocaleString() }}</td>
          <td>{{ item.size ? $fileSize(item.size) : "-" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<Props>()
interface Props { items: Item[] }

const dirCount = props.items.filter(I => I.type == "directory").length
const fileCount = props.items.filter(I => I.type == "file").length
const dirStats = `${dirCount} ${dirCount == 1 ? "directory" : "directories"}`;
const fileStats = `${fileCount} ${fileCount == 1 ? "file" : "files"}`;
</script>