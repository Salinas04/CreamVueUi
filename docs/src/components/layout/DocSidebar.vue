<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = computed(() => route.path);
const expandedSections = ref({});
const mobileNavOpen = ref(false);

const navItems = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', path: '/' },
      { title: 'Installation', path: '/installation' },
      { title: 'Usage', path: '/usage' }
    ]
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', path: '/components/button' },
      { title: 'Input', path: '/components/input' },
      { title: 'Card', path: '/components/card' },
      { title: 'Alert', path: '/components/alert' }
    ]
  }
];

// Initialize expanded sections based on active route
navItems.forEach((section, index) => {
  const hasActiveItem = section.items.some(item => item.path === currentPath.value);
  expandedSections.value[index] = hasActiveItem;
});

const toggleSection = (sectionIndex) => {
  expandedSections.value[sectionIndex] = !expandedSections.value[sectionIndex];
};

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value;
};

const isSectionExpanded = (sectionIndex) => {
  return expandedSections.value[sectionIndex] === true;
};

const closeMobileNav = () => {
  mobileNavOpen.value = false;
};
</script>

<template>
  <aside class="docs-sidebar" :class="{ 'mobile-open': mobileNavOpen }">
    <button class="mobile-nav-toggle" @click="toggleMobileNav" aria-label="Toggle navigation">
      <span class="mobile-nav-icon" :class="{ 'open': mobileNavOpen }">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span class="mobile-nav-label">{{ mobileNavOpen ? 'Close' : 'Menu' }}</span>
    </button>
    
    <nav class="docs-nav">
      <div v-for="(section, sectionIndex) in navItems" :key="sectionIndex" class="docs-nav-section">
        <button 
          class="docs-nav-title" 
          @click="toggleSection(sectionIndex)"
          :class="{ 'expanded': isSectionExpanded(sectionIndex) }"
        >
          <span>{{ section.title }}</span>
          <span class="section-toggle-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <transition name="slide-fade">
          <ul v-if="isSectionExpanded(sectionIndex)" class="docs-nav-items">
            <li v-for="(item, itemIndex) in section.items" :key="itemIndex" class="docs-nav-item">
              <router-link 
                :to="item.path" 
                class="docs-nav-link"
                :class="{ 'active': currentPath === item.path }"
                @click="closeMobileNav"
              >
                <span class="nav-link-indicator"></span>
                <span>{{ item.title }}</span>
              </router-link>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.docs-sidebar {
  width: 280px;
  flex-shrink: 0;
  background-color: var(--white);
  border-right: 1px solid var(--gray-200);
  padding: var(--spacing-md);
  overflow-y: auto;
  height: calc(100vh - 60px); /* Subtract header height */
  position: sticky;
  top: 60px; /* Header height */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  z-index: 5;
}

.docs-sidebar:hover {
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
}

.docs-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.docs-nav-section {
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  overflow: hidden;
}

.docs-nav-section:hover {
  background-color: var(--gray-50);
}

.docs-nav-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-600);
  padding: var(--spacing-sm) var(--spacing-sm);
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.docs-nav-title:hover {
  color: var(--primary);
}

.section-toggle-icon {
  transition: transform 0.3s ease;
}

.docs-nav-title.expanded .section-toggle-icon {
  transform: rotate(180deg);
}

.docs-nav-items {
  list-style: none;
  padding: 0 0 0 var(--spacing-sm);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.docs-nav-item {
  margin: 0;
}

.docs-nav-link {
  display: flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--gray-700);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  position: relative;
}

.nav-link-indicator {
  width: 3px;
  height: 0;
  background-color: var(--primary);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: var(--radius-full);
  transition: height 0.3s ease;
}

.docs-nav-link:hover {
  color: var(--primary);
  background-color: var(--gray-50);
  text-decoration: none;
  transform: translateX(3px);
}

.docs-nav-link:hover .nav-link-indicator {
  height: 40%;
}

.docs-nav-link.active {
  color: var(--primary);
  background-color: rgba(66, 184, 131, 0.1);
  font-weight: 500;
}

.docs-nav-link.active .nav-link-indicator {
  height: 70%;
}

/* Slide fade transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  opacity: 1;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

/* Mobile navigation */
.mobile-nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
  align-items: center;
  font-weight: 500;
  color: var(--gray-700);
}

.mobile-nav-label {
  margin-left: var(--spacing-xs);
}

.mobile-nav-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;
  position: relative;
}

.mobile-nav-icon span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--gray-700);
  border-radius: var(--radius-full);
  transition: all 0.3s ease;
}

.mobile-nav-icon.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-nav-icon.open span:nth-child(2) {
  opacity: 0;
}

.mobile-nav-icon.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .docs-sidebar {
    width: 100%;
    height: auto;
    max-height: 60px;
    position: sticky;
    top: 60px;
    border-right: none;
    border-bottom: 1px solid var(--gray-200);
    padding: var(--spacing-sm);
    overflow: hidden;
    transition: max-height 0.3s ease, box-shadow 0.3s ease;
  }
  
  .docs-sidebar.mobile-open {
    max-height: calc(100vh - 60px);
    overflow-y: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .mobile-nav-toggle {
    display: flex;
  }
  
  .docs-nav {
    padding-top: var(--spacing-sm);
  }
}
</style>