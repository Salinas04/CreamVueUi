<script setup>
import DocLayout from '../components/layout/DocLayout.vue';
import { ref, onMounted } from 'vue';

const isHeroVisible = ref(false);
const isFeatureVisible = ref(false);

onMounted(() => {
  // Trigger animations after component is mounted
  setTimeout(() => {
    isHeroVisible.value = true;
  }, 100);
  
  setTimeout(() => {
    isFeatureVisible.value = true;
  }, 500);
});
</script>

<template>
  <DocLayout title="Introduction">
    <div class="introduction">
      <div class="hero-section" :class="{ 'visible': isHeroVisible }">
        <div class="hero-content">
          <h1 class="hero-title">Cream Vue UI</h1>
          <p class="hero-subtitle">
            A beautiful and functional UI component library for Vue 3
          </p>
          <div class="hero-actions">
            <router-link to="/installation" class="hero-button primary">
              Get Started
              <span class="arrow-icon">→</span>
            </router-link>
            <a href="https://github.com/cream-vue-ui/cream-vue-ui" target="_blank" class="hero-button secondary">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="hero-decoration">
          <div class="floating-shape shape1"></div>
          <div class="floating-shape shape2"></div>
          <div class="floating-shape shape3"></div>
        </div>
      </div>

      <div class="content-section">
        <h2>What is Cream Vue UI?</h2>
        <p>
          Cream Vue UI is a collection of reusable, well-designed UI components built for Vue 3. 
          It provides a set of accessible, customizable, and composable components that make it easy to build 
          modern web applications with a consistent look and feel.
        </p>
      </div>

      <div class="features-section" :class="{ 'visible': isFeatureVisible }">
        <h2>Features</h2>
        <ul class="features-list">
          <li class="feature-item">
            <div class="feature-icon">🎨</div>
            <div class="feature-content">
              <strong>Beautiful Design</strong>
              <span>Modern and clean design with a focus on aesthetics</span>
            </div>
          </li>
          <li class="feature-item">
            <div class="feature-icon">🧩</div>
            <div class="feature-content">
              <strong>Modular Components</strong>
              <span>Use only what you need</span>
            </div>
          </li>
          <li class="feature-item">
            <div class="feature-icon">🔌</div>
            <div class="feature-content">
              <strong>Easy to Use</strong>
              <span>Simple API with consistent patterns</span>
            </div>
          </li>
          <li class="feature-item">
            <div class="feature-icon">📱</div>
            <div class="feature-content">
              <strong>Responsive</strong>
              <span>Works on all screen sizes</span>
            </div>
          </li>
          <li class="feature-item">
            <div class="feature-icon">🔧</div>
            <div class="feature-content">
              <strong>Customizable</strong>
              <span>Easily adapt to your brand with CSS variables</span>
            </div>
          </li>
          <li class="feature-item">
            <div class="feature-icon">🚀</div>
            <div class="feature-content">
              <strong>Lightweight</strong>
              <span>Minimal footprint for optimal performance</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="components-section">
        <h2>Components</h2>
        <p>
          Cream Vue UI includes the following components:
        </p>

        <div class="component-grid">
          <div class="component-card" @click="$router.push('/components/button')">
            <div class="component-card-inner">
              <div class="component-icon">🔘</div>
              <h3 class="component-title">Button</h3>
              <p class="component-description">A versatile button component with various styles, states, and interactive features.</p>
              <div class="component-footer">
                <span class="view-docs">View Docs</span>
                <span class="arrow-icon">→</span>
              </div>
            </div>
          </div>

          <div class="component-card" @click="$router.push('/components/input')">
            <div class="component-card-inner">
              <div class="component-icon">📝</div>
              <h3 class="component-title">Input</h3>
              <p class="component-description">A flexible input component with various styles, states, and interactive features.</p>
              <div class="component-footer">
                <span class="view-docs">View Docs</span>
                <span class="arrow-icon">→</span>
              </div>
            </div>
          </div>

          <div class="component-card" @click="$router.push('/components/card')">
            <div class="component-card-inner">
              <div class="component-icon">🃏</div>
              <h3 class="component-title">Card</h3>
              <p class="component-description">A versatile card component for displaying content with various styles and layouts.</p>
              <div class="component-footer">
                <span class="view-docs">View Docs</span>
                <span class="arrow-icon">→</span>
              </div>
            </div>
          </div>

          <div class="component-card" @click="$router.push('/components/alert')">
            <div class="component-card-inner">
              <div class="component-icon">🚨</div>
              <h3 class="component-title">Alert</h3>
              <p class="component-description">An alert component for displaying messages with various styles and states.</p>
              <div class="component-footer">
                <span class="view-docs">View Docs</span>
                <span class="arrow-icon">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="getting-started-section">
        <h2>Getting Started</h2>
        <p>
          Ready to build beautiful interfaces with Cream Vue UI? Follow our guides to get started quickly:
        </p>
        
        <div class="getting-started-links">
          <router-link to="/installation" class="getting-started-link">
            <div class="getting-started-icon">📦</div>
            <div class="getting-started-content">
              <h3>Installation</h3>
              <p>Learn how to install and set up Cream Vue UI in your project</p>
            </div>
            <span class="arrow-icon">→</span>
          </router-link>
          
          <router-link to="/usage" class="getting-started-link">
            <div class="getting-started-icon">📚</div>
            <div class="getting-started-content">
              <h3>Usage</h3>
              <p>Discover how to use Cream Vue UI components in your application</p>
            </div>
            <span class="arrow-icon">→</span>
          </router-link>
        </div>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.introduction {
  max-width: 1000px;
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: var(--spacing-xl) 0;
  margin-bottom: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.1) 0%, rgba(53, 73, 94, 0.05) 100%);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: var(--spacing-xl);
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: none;
  padding-bottom: 0;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--gray-700);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.hero-button {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.hero-button.primary {
  background-color: var(--primary);
  color: white;
  box-shadow: 0 4px 6px rgba(66, 184, 131, 0.2);
}

.hero-button.primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(66, 184, 131, 0.3);
  text-decoration: none;
}

.hero-button.secondary {
  background-color: var(--white);
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.hero-button.secondary:hover {
  background-color: var(--gray-50);
  color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08);
  text-decoration: none;
}

.hero-button svg, .arrow-icon {
  margin-left: var(--spacing-xs);
  transition: transform 0.3s ease;
}

.hero-button:hover svg, .hero-button:hover .arrow-icon {
  transform: translateX(3px);
}

/* Floating shapes */
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}

.shape1 {
  width: 100px;
  height: 100px;
  background-color: rgba(66, 184, 131, 0.2);
  top: 20%;
  left: 10%;
  animation: float 8s ease-in-out infinite;
}

.shape2 {
  width: 150px;
  height: 150px;
  background-color: rgba(53, 73, 94, 0.15);
  top: 60%;
  right: 15%;
  animation: float 10s ease-in-out infinite 1s;
}

.shape3 {
  width: 80px;
  height: 80px;
  background-color: rgba(245, 158, 11, 0.15);
  bottom: 15%;
  left: 30%;
  animation: float 7s ease-in-out infinite 0.5s;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

/* Content section */
.content-section {
  margin-bottom: var(--spacing-xl);
}

/* Features section */
.features-section {
  margin-bottom: var(--spacing-xl);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.features-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.features-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-md);
  background-color: var(--white);
  border-radius: var(--radius-md);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  margin-bottom: 0;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  font-size: 1.5rem;
  margin-right: var(--spacing-md);
  transition: transform 0.3s ease;
}

.feature-item:hover .feature-icon {
  transform: scale(1.2);
}

.feature-content {
  display: flex;
  flex-direction: column;
}

.feature-content strong {
  margin-bottom: var(--spacing-xs);
  color: var(--secondary);
}

/* Components section */
.components-section {
  margin-bottom: var(--spacing-2xl);
}

/* Component grid */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0 var(--spacing-xl) 0;
}

.component-card {
  background-color: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  height: 100%;
}

.component-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.component-card-inner {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  transition: border-color 0.3s ease;
}

.component-card:hover .component-card-inner {
  border-color: var(--primary-light);
}

.component-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  transition: transform 0.3s ease;
}

.component-card:hover .component-icon {
  transform: scale(1.2);
}

.component-title {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--secondary);
  transition: color 0.3s ease;
}

.component-card:hover .component-title {
  color: var(--primary);
}

.component-description {
  color: var(--gray-700);
  margin-bottom: var(--spacing-lg);
  flex-grow: 1;
}

.component-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px dashed var(--gray-200);
}

.view-docs {
  font-weight: 600;
  color: var(--primary);
}

.component-card .arrow-icon {
  transition: transform 0.3s ease;
}

.component-card:hover .arrow-icon {
  transform: translateX(5px);
}

/* Getting Started Section */
.getting-started-section {
  margin-bottom: var(--spacing-2xl);
}

.getting-started-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.getting-started-link {
  display: flex;
  align-items: center;
  padding: var(--spacing-lg);
  background-color: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.getting-started-link:hover {
  transform: translateX(8px);
  border-color: var(--primary-light);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  text-decoration: none;
}

.getting-started-icon {
  font-size: 2rem;
  margin-right: var(--spacing-lg);
  transition: transform 0.3s ease;
}

.getting-started-link:hover .getting-started-icon {
  transform: scale(1.2);
}

.getting-started-content {
  flex: 1;
}

.getting-started-content h3 {
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--secondary);
  transition: color 0.3s ease;
}

.getting-started-link:hover .getting-started-content h3 {
  color: var(--primary);
}

.getting-started-content p {
  margin: 0;
  color: var(--gray-700);
}

.getting-started-link .arrow-icon {
  margin-left: var(--spacing-md);
  color: var(--primary);
  transition: transform 0.3s ease;
}

.getting-started-link:hover .arrow-icon {
  transform: translateX(5px);
}

/* Responsive styles */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-button {
    width: 100%;
    justify-content: center;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
}
</style>