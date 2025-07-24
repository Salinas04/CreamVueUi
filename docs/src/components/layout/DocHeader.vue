<script setup>
// DocHeader component
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="docs-header">
    <div class="container">
      <a href="/" class="docs-logo">
        <span class="docs-logo-icon">🍦</span>
        <span class="docs-logo-text">Cream Vue UI</span>
      </a>
      
      <div class="docs-header-links desktop-links">
        <a href="https://github.com/cream-vue-ui/cream-vue-ui" target="_blank" class="docs-header-link">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </span>
          <span>GitHub</span>
        </a>
        <a href="https://www.npmjs.com/package/cream-vue-ui" target="_blank" class="docs-header-link">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2.5 18.5l10.5-10.5 4.5 4.5-10.5 10.5-4.5-4.5z"></path>
              <path d="M5.5 13.5l5 5"></path>
              <path d="M17.5 8.5l-5-5"></path>
              <path d="M19.5 6.5l-1.5-1.5"></path>
              <path d="M18.5 2.5l3 3"></path>
              <path d="M2.5 18.5l3 3"></path>
            </svg>
          </span>
          <span>npm</span>
        </a>
      </div>
      
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="menu-icon" :class="{ 'open': mobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <a href="https://github.com/cream-vue-ui/cream-vue-ui" target="_blank" class="mobile-menu-link">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </span>
          <span>GitHub</span>
        </a>
        <a href="https://www.npmjs.com/package/cream-vue-ui" target="_blank" class="mobile-menu-link">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2.5 18.5l10.5-10.5 4.5 4.5-10.5 10.5-4.5-4.5z"></path>
              <path d="M5.5 13.5l5 5"></path>
              <path d="M17.5 8.5l-5-5"></path>
              <path d="M19.5 6.5l-1.5-1.5"></path>
              <path d="M18.5 2.5l3 3"></path>
              <path d="M2.5 18.5l3 3"></path>
            </svg>
          </span>
          <span>npm</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.docs-header {
  height: 60px;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.docs-header:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.docs-logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primary);
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
}

.docs-logo:hover {
  text-decoration: none;
  transform: scale(1.05);
  color: var(--primary-dark);
}

.docs-logo-icon {
  font-size: 1.5rem;
  margin-right: var(--spacing-xs);
  transition: transform 0.3s ease;
}

.docs-logo:hover .docs-logo-icon {
  transform: rotate(10deg);
}

.docs-header-links {
  display: flex;
  gap: var(--spacing-md);
}

.docs-header-link {
  display: flex;
  align-items: center;
  color: var(--gray-700);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
}

.docs-header-link:hover {
  color: var(--primary);
  background-color: var(--gray-50);
  transform: translateY(-2px);
}

.link-icon {
  display: flex;
  align-items: center;
  margin-right: var(--spacing-xs);
  transition: transform 0.3s ease;
}

.docs-header-link:hover .link-icon {
  transform: scale(1.1);
}

/* Mobile menu styles */
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  z-index: 20;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  position: relative;
}

.menu-icon span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--gray-700);
  border-radius: var(--radius-full);
  transition: all 0.3s ease;
}

.menu-icon.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 60px;
  right: -100%;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: var(--white);
  padding: var(--spacing-lg);
  transition: right 0.3s ease;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9;
  flex-direction: column;
  gap: var(--spacing-md);
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu-link {
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
  color: var(--gray-700);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.mobile-menu-link:hover {
  color: var(--primary);
  background-color: var(--gray-50);
}

@media (max-width: 768px) {
  .desktop-links {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .mobile-menu {
    display: flex;
  }
}
</style>