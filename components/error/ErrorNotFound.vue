<template>
  <div class="text-center">
    <div class="glitch-wrapper">
      <h1 class="glitch" data="404">
        404
      </h1>
    </div>
    <p><strong>{{ props.title ?? 'Directory not found :(' }} :(</strong></p>
    <p>{{ props.body ?? "The requested directory could not be found." }}.</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<Props>();

interface Props {
  title?: string,
  body?: string
}
</script>
