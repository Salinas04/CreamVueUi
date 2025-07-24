<script setup>
import DocHeader from './DocHeader.vue';
import DocSidebar from './DocSidebar.vue';

defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="docs-container">
    <DocHeader />
    
    <div class="docs-layout">
      <DocSidebar />

      <main class="docs-content">
        <h1>{{ title }}</h1>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
.docs-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.docs-layout {
  display: flex;
  flex: 1;
}

.docs-content {
  flex: 1;
  padding: var(--spacing-lg);
  max-width: 100%;
  overflow-x: auto;
}

@media (max-width: 768px) {
  .docs-layout {
    flex-direction: column;
  }
  
  .docs-content {
    padding: var(--spacing-md);
  }
}
</style>