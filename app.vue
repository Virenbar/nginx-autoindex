<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <div class="scanlines" />
      <div class="scanline" />
      <div class="container p-3">
        <NuxtPage />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
