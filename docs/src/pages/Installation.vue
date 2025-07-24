<script setup>
import DocLayout from '../components/layout/DocLayout.vue';
import { ref, onMounted } from 'vue';

// Track active step for the installation process
const currentStep = ref(1);
const totalSteps = 4;

// Function to navigate between steps
const goToStep = (step) => {
  if (step >= 1 && step <= totalSteps) {
    currentStep.value = step;
  }
};

// Copy to clipboard functionality
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      showCopySuccess(text);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
};

// Track which code block was copied
const copiedText = ref('');
const showCopySuccess = (text) => {
  copiedText.value = text;
  setTimeout(() => {
    copiedText.value = '';
  }, 2000);
};

// Animation for sections
const isVisible = ref(false);
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <DocLayout title="Installation">
    <div class="installation-docs" :class="{ 'visible': isVisible }">
      <div class="installation-intro">
        <h1 class="installation-title">Getting Started with Cream Vue UI</h1>
        <p class="installation-description">
          Follow these simple steps to install and set up Cream Vue UI in your Vue 3 project.
        </p>
      </div>

      <!-- Installation Progress Tracker -->
      <div class="installation-progress">
        <div class="progress-steps">
          <div 
            v-for="step in totalSteps" 
            :key="step" 
            class="progress-step" 
            :class="{ 
              'active': currentStep === step,
              'completed': currentStep > step
            }"
            @click="goToStep(step)"
          >
            <div class="step-number">
              <span v-if="currentStep <= step">{{ step }}</span>
              <span v-else class="check-icon">✓</span>
            </div>
            <div class="step-label">
              <span v-if="step === 1">Prerequisites</span>
              <span v-else-if="step === 2">Installation</span>
              <span v-else-if="step === 3">Configuration</span>
              <span v-else-if="step === 4">Next Steps</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Step Content -->
      <div class="installation-steps">
        <!-- Step 1: Prerequisites -->
        <div v-if="currentStep === 1" class="installation-step">
          <div class="step-content">
            <h2>Prerequisites</h2>
            <p>
              Before installing Cream Vue UI, make sure you have the following:
            </p>
            <ul class="prerequisites-list">
              <li>
                <div class="prerequisite-icon">📦</div>
                <div class="prerequisite-content">
                  <strong>Node.js</strong>
                  <span>Version 14 or higher</span>
                </div>
              </li>
              <li>
                <div class="prerequisite-icon">🔧</div>
                <div class="prerequisite-content">
                  <strong>Package Manager</strong>
                  <span>npm, yarn, or pnpm</span>
                </div>
              </li>
              <li>
                <div class="prerequisite-icon">⚡</div>
                <div class="prerequisite-content">
                  <strong>Vue 3 Project</strong>
                  <span>A new or existing Vue 3 project</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="step-actions">
            <button class="step-button next" @click="goToStep(2)">
              Continue to Installation
              <span class="arrow-icon">→</span>
            </button>
          </div>
        </div>

        <!-- Step 2: Installation -->
        <div v-if="currentStep === 2" class="installation-step">
          <div class="step-content">
            <h2>Installation</h2>
            <p>
              Choose your preferred package manager to install Cream Vue UI:
            </p>
            
            <div class="code-tabs">
              <div class="code-tab-buttons">
                <button class="code-tab-button active">npm</button>
                <button class="code-tab-button">yarn</button>
                <button class="code-tab-button">pnpm</button>
              </div>
              
              <div class="code-tab-content">
                <div class="code-block">
                  <pre class="code"><code>npm install cream-vue-ui</code></pre>
                  <button 
                    class="copy-button" 
                    @click="copyToClipboard('npm install cream-vue-ui')"
                    :class="{ 'copied': copiedText === 'npm install cream-vue-ui' }"
                  >
                    <span v-if="copiedText === 'npm install cream-vue-ui'">Copied!</span>
                    <span v-else>Copy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="step-actions">
            <button class="step-button prev" @click="goToStep(1)">
              <span class="arrow-icon back">←</span>
              Back
            </button>
            <button class="step-button next" @click="goToStep(3)">
              Continue to Configuration
              <span class="arrow-icon">→</span>
            </button>
          </div>
        </div>

        <!-- Step 3: Configuration -->
        <div v-if="currentStep === 3" class="installation-step">
          <div class="step-content">
            <h2>Configuration</h2>
            <p>
              After installing the library, you need to import and register it in your Vue application.
              Choose one of the following registration methods:
            </p>
            
            <div class="config-options">
              <div class="config-option">
                <h3>Global Registration</h3>
                <p>Register all components globally throughout your application:</p>
                <div class="code-block">
                  <pre class="code"><code>import { createApp } from 'vue'
import App from './App.vue'

// Import Cream Vue UI
import CreamVueUI from 'cream-vue-ui'
import 'cream-vue-ui/style' // Import the styles

// Create app and use Cream Vue UI
const app = createApp(App)
app.use(CreamVueUI)
app.mount('#app')</code></pre>
                  <button 
                    class="copy-button" 
                    @click="copyToClipboard(`import { createApp } from 'vue'
import App from './App.vue'

// Import Cream Vue UI
import CreamVueUI from 'cream-vue-ui'
import 'cream-vue-ui/style' // Import the styles

// Create app and use Cream Vue UI
const app = createApp(App)
app.use(CreamVueUI)
app.mount('#app')`)"
                    :class="{ 'copied': copiedText.includes('import CreamVueUI from') }"
                  >
                    <span v-if="copiedText.includes('import CreamVueUI from')">Copied!</span>
                    <span v-else>Copy</span>
                  </button>
                </div>
                <p class="config-note">
                  This will register all Cream Vue UI components globally with the 'C' prefix (e.g., CButton, CInput, etc.).
                </p>
              </div>
              
              <div class="config-option">
                <h3>Individual Component Registration</h3>
                <p>Import and register specific components to reduce bundle size:</p>
                <div class="code-block">
                  <pre class="code"><code>import { createApp } from 'vue'
import App from './App.vue'

// Import individual components
import { Button, Input } from 'cream-vue-ui'
import 'cream-vue-ui/style' // Import the styles

// Create app and register components
const app = createApp(App)
app.component('CButton', Button)
app.component('CInput', Input)
app.mount('#app')</code></pre>
                  <button 
                    class="copy-button" 
                    @click="copyToClipboard(`import { createApp } from 'vue'
import App from './App.vue'

// Import individual components
import { Button, Input } from 'cream-vue-ui'
import 'cream-vue-ui/style' // Import the styles

// Create app and register components
const app = createApp(App)
app.component('CButton', Button)
app.component('CInput', Input)
app.mount('#app')`)"
                    :class="{ 'copied': copiedText.includes('import { Button, Input }') }"
                  >
                    <span v-if="copiedText.includes('import { Button, Input }')">Copied!</span>
                    <span v-else>Copy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="step-actions">
            <button class="step-button prev" @click="goToStep(2)">
              <span class="arrow-icon back">←</span>
              Back
            </button>
            <button class="step-button next" @click="goToStep(4)">
              Continue to Next Steps
              <span class="arrow-icon">→</span>
            </button>
          </div>
        </div>

        <!-- Step 4: Next Steps -->
        <div v-if="currentStep === 4" class="installation-step">
          <div class="step-content">
            <h2>Next Steps</h2>
            <p>
              Congratulations! You've successfully installed and configured Cream Vue UI.
              Here's what you can do next:
            </p>
            
            <div class="next-steps-grid">
              <div class="next-step-card">
                <div class="next-step-icon">📚</div>
                <h3>Read the Usage Guide</h3>
                <p>Learn how to use Cream Vue UI components in your application</p>
                <router-link to="/usage" class="next-step-link">
                  Usage Guide
                  <span class="arrow-icon">→</span>
                </router-link>
              </div>
              
              <div class="next-step-card">
                <div class="next-step-icon">🧩</div>
                <h3>Explore Components</h3>
                <p>Discover all available components and their features</p>
                <router-link to="/components/button" class="next-step-link">
                  Component Library
                  <span class="arrow-icon">→</span>
                </router-link>
              </div>
              
              <div class="next-step-card">
                <div class="next-step-icon">🎨</div>
                <h3>Customize Themes</h3>
                <p>Learn how to customize the look and feel of components</p>
                <router-link to="/usage" class="next-step-link">
                  Theming Guide
                  <span class="arrow-icon">→</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="step-actions">
            <button class="step-button prev" @click="goToStep(3)">
              <span class="arrow-icon back">←</span>
              Back
            </button>
            <router-link to="/usage" class="step-button next">
              Go to Usage Guide
              <span class="arrow-icon">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
/* Main container */
.installation-docs {
  max-width: 900px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.installation-docs.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Introduction */
.installation-intro {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.installation-title {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: var(--spacing-md);
  border-bottom: none;
  padding-bottom: 0;
}

.installation-description {
  font-size: 1.2rem;
  color: var(--gray-700);
  max-width: 600px;
  margin: 0 auto;
}

/* Progress Tracker */
.installation-progress {
  margin-bottom: var(--spacing-xl);
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  max-width: 800px;
}

.progress-steps::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--gray-200);
  z-index: 1;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--white);
  border: 2px solid var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  transition: all 0.3s ease;
}

.step-label {
  font-size: 0.875rem;
  color: var(--gray-600);
  transition: all 0.3s ease;
}

.progress-step:hover .step-number {
  transform: scale(1.1);
  border-color: var(--primary-light);
}

.progress-step:hover .step-label {
  color: var(--primary);
}

.progress-step.active .step-number {
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--white);
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.2);
}

.progress-step.active .step-label {
  color: var(--primary);
  font-weight: 600;
}

.progress-step.completed .step-number {
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

.check-icon {
  font-size: 0.875rem;
}

/* Step Content */
.installation-steps {
  margin-top: var(--spacing-xl);
}

.installation-step {
  background-color: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step-content {
  margin-bottom: var(--spacing-xl);
}

.step-content h2 {
  color: var(--primary);
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  font-size: 1.75rem;
}

/* Prerequisites List */
.prerequisites-list {
  list-style: none;
  padding: 0;
  margin: var(--spacing-lg) 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.prerequisites-list li {
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-md);
  background-color: var(--gray-50);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  margin-bottom: 0;
}

.prerequisites-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  background-color: var(--white);
}

.prerequisite-icon {
  font-size: 1.5rem;
  margin-right: var(--spacing-md);
  transition: transform 0.3s ease;
}

.prerequisites-list li:hover .prerequisite-icon {
  transform: scale(1.2);
}

.prerequisite-content {
  display: flex;
  flex-direction: column;
}

.prerequisite-content strong {
  margin-bottom: var(--spacing-xs);
  color: var(--secondary);
}

/* Code Tabs */
.code-tabs {
  margin: var(--spacing-lg) 0;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.code-tab-buttons {
  display: flex;
  background-color: var(--gray-50);
  border-bottom: 1px solid var(--gray-200);
}

.code-tab-button {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: var(--gray-600);
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.code-tab-button:hover {
  color: var(--primary);
}

.code-tab-button.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  background-color: rgba(66, 184, 131, 0.05);
}

.code-tab-content {
  padding: var(--spacing-md);
}

/* Code Block */
.code-block {
  position: relative;
  margin: var(--spacing-md) 0;
}

.code {
  background-color: var(--gray-100);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: 0;
  font-family: 'Fira Code', 'Roboto Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.copy-button {
  position: absolute;
  top: var(--spacing-xs);
  right: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.code-block:hover .copy-button {
  opacity: 1;
}

.copy-button:hover {
  background-color: var(--gray-50);
  border-color: var(--gray-300);
}

.copy-button.copied {
  background-color: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

/* Config Options */
.config-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.config-option {
  background-color: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
}

.config-option:hover {
  background-color: var(--white);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.config-option h3 {
  color: var(--secondary);
  margin-top: 0;
  margin-bottom: var(--spacing-sm);
}

.config-note {
  font-size: 0.9rem;
  color: var(--gray-600);
  margin-top: var(--spacing-md);
  padding-left: var(--spacing-md);
  border-left: 3px solid var(--primary-light);
}

/* Next Steps Grid */
.next-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.next-step-card {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.next-step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  border-color: var(--primary-light);
}

.next-step-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  transition: transform 0.3s ease;
}

.next-step-card:hover .next-step-icon {
  transform: scale(1.2);
}

.next-step-card h3 {
  margin-top: 0;
  margin-bottom: var(--spacing-sm);
  color: var(--secondary);
  transition: color 0.3s ease;
}

.next-step-card:hover h3 {
  color: var(--primary);
}

.next-step-card p {
  color: var(--gray-700);
  margin-bottom: var(--spacing-lg);
  flex-grow: 1;
}

.next-step-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--gray-50);
  border-radius: var(--radius-md);
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: auto;
}

.next-step-link:hover {
  background-color: rgba(66, 184, 131, 0.1);
  text-decoration: none;
}

.next-step-link .arrow-icon {
  transition: transform 0.3s ease;
}

.next-step-link:hover .arrow-icon {
  transform: translateX(5px);
}

/* Step Actions */
.step-actions {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-xl);
}

.step-button {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.step-button.prev {
  background-color: var(--white);
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
}

.step-button.prev:hover {
  background-color: var(--gray-50);
  transform: translateX(-5px);
}

.step-button.next {
  background-color: var(--primary);
  color: var(--white);
  border: none;
}

.step-button.next:hover {
  background-color: var(--primary-dark);
  transform: translateX(5px);
}

.arrow-icon {
  margin-left: var(--spacing-xs);
  transition: transform 0.3s ease;
}

.arrow-icon.back {
  margin-left: 0;
  margin-right: var(--spacing-xs);
}

.step-button:hover .arrow-icon:not(.back) {
  transform: translateX(3px);
}

.step-button:hover .arrow-icon.back {
  transform: translateX(-3px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .installation-title {
    font-size: 2rem;
  }
  
  .step-label {
    font-size: 0.75rem;
  }
  
  .installation-step {
    padding: var(--spacing-md);
  }
  
  .prerequisites-list,
  .next-steps-grid {
    grid-template-columns: 1fr;
  }
  
  .config-options {
    gap: var(--spacing-md);
  }
  
  .step-actions {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .step-button {
    width: 100%;
    justify-content: center;
  }
}
</style>