<script setup>
import DocLayout from '../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Copy code functionality
const copyCode = (code) => {
  navigator.clipboard.writeText(code);
  showCopySuccess();
};

const copySuccess = ref(false);
const showCopySuccess = () => {
  copySuccess.value = true;
  setTimeout(() => {
    copySuccess.value = false;
  }, 2000);
};

// Active tab for quick start
const activeTab = ref('npm');
const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <DocLayout title="Usage">
    <div class="usage-docs">
      <p>
        This guide will help you understand how to use Cream Vue UI components in your Vue 3 application.
      </p>

      <div class="section-container">
        <h2>Component Naming Convention</h2>
        <p class="section-description">
          All Cream Vue UI components are prefixed with "C" when used in templates. For example, the Button component is used as <code>&lt;CButton&gt;</code>.
        </p>
      </div>

      <div class="section-container">
        <h2>Basic Usage</h2>
        <p class="section-description">
          After <router-link to="/installation">installing</router-link> Cream Vue UI, you can start using the components in your Vue templates:
        </p>

        <div class="component-demo animated-demo">
          <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;CButton&gt;Click Me&lt;/CButton&gt;
    &lt;CInput placeholder="Enter your name" v-model="name" /&gt;
    &lt;CCard title="Card Title"&gt;
      &lt;p&gt;This is a card content.&lt;/p&gt;
    &lt;/CCard&gt;
    &lt;CAlert type="success"&gt;Operation completed successfully!&lt;/CAlert&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const name = ref('');
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="section-container">
        <h2>Using Props</h2>
        <p class="section-description">
          Cream Vue UI components accept various props to customize their appearance and behavior:
        </p>

        <div class="component-demo animated-demo">
          <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;CButton 
      variant="primary" 
      size="lg" 
      rounded 
      icon="🚀"
    &gt;
      Launch
    &lt;/CButton&gt;
    
    &lt;CInput 
      label="Email" 
      type="email" 
      placeholder="Enter your email" 
      v-model="email" 
      icon="📧"
      clearable
    /&gt;
    
    &lt;CCard 
      title="Welcome" 
      subtitle="Getting started with Cream Vue UI" 
      variant="primary"
      hover
      elevation="md"
    &gt;
      &lt;p&gt;This is a card with various props applied.&lt;/p&gt;
    &lt;/CCard&gt;
    
    &lt;CAlert 
      title="Success" 
      type="success" 
      dismissible
      border="left"
    &gt;
      Your changes have been saved!
    &lt;/CAlert&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const email = ref('');
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="section-container">
        <h2>Using Events</h2>
        <p class="section-description">
          Cream Vue UI components emit various events that you can listen to:
        </p>

        <div class="component-demo animated-demo">
          <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;CButton @click="handleClick"&gt;Click Me&lt;/CButton&gt;
    
    &lt;CInput 
      v-model="username" 
      @focus="handleFocus"
      @blur="handleBlur"
      @clear="handleClear"
    /&gt;
    
    &lt;CCard 
      clickable
      @click="handleCardClick"
    &gt;
      Click this card
    &lt;/CCard&gt;
    
    &lt;CAlert 
      dismissible
      @dismiss="handleDismiss"
    &gt;
      This alert can be dismissed
    &lt;/CAlert&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const username = ref('');

const handleClick = () => {
  console.log('Button clicked');
};

const handleFocus = () => {
  console.log('Input focused');
};

const handleBlur = () => {
  console.log('Input blurred');
};

const handleClear = () => {
  console.log('Input cleared');
};

const handleCardClick = () => {
  console.log('Card clicked');
};

const handleDismiss = () => {
  console.log('Alert dismissed');
};
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="section-container">
        <h2>Using Slots</h2>
        <p class="section-description">
          Many Cream Vue UI components provide slots for custom content:
        </p>

        <div class="component-demo animated-demo">
          <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;CCard title="Card with Custom Footer"&gt;
      &lt;p&gt;This is the main content of the card.&lt;/p&gt;
      
      &lt;template #footer&gt;
        &lt;div class="card-actions"&gt;
          &lt;CButton variant="primary"&gt;Save&lt;/CButton&gt;
          &lt;CButton variant="outline"&gt;Cancel&lt;/CButton&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/CCard&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
&lt;/style&gt;</code></pre>
        </div>
      </div>

      <div class="section-container">
        <h2>Using v-model</h2>
        <p class="section-description">
          Form components like Input support v-model for two-way data binding:
        </p>

        <div class="component-demo animated-demo">
          <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;CInput 
      label="Username" 
      v-model="username" 
    /&gt;
    
    &lt;p&gt;Current username: {{ username }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const username = ref('');
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="section-container">
        <h2>Styling and Customization</h2>
        <p class="section-description">
          Cream Vue UI components use CSS variables for styling, which you can override to match your brand:
        </p>

        <div class="component-demo animated-demo">
          <pre class="component-demo-code"><code>/* In your CSS file */
:root {
  --cream-primary: #4f46e5; /* Change primary color to indigo */
  --cream-primary-dark: #4338ca;
  --cream-primary-light: #6366f1;
  
  --cream-radius-md: 0.5rem; /* Change border radius */
  
  /* Override other variables as needed */
}</code></pre>
        </div>
      </div>

      <div class="section-container">
        <h2>Component Documentation</h2>
        <p class="section-description">
          For detailed information about each component, including all available props, events, and slots, check out the component documentation:
        </p>

        <ul class="component-links">
          <li><router-link to="/components/button">Button</router-link></li>
          <li><router-link to="/components/input">Input</router-link></li>
          <li><router-link to="/components/card">Card</router-link></li>
          <li><router-link to="/components/alert">Alert</router-link></li>
        </ul>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.usage-docs {
  max-width: 800px;
  animation: fadeIn 0.8s ease-out;
}

/* Introduction styling */
.usage-docs > p:first-of-type {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--gray-700);
  border-left: 4px solid var(--primary);
  padding-left: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  animation: slideIn 0.5s ease-out;
}

/* Section headers with animation */
h2 {
  position: relative;
  margin-top: var(--spacing-2xl);
  padding-bottom: var(--spacing-xs);
  animation: fadeIn 0.8s ease-out;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--primary);
  animation: growWidth 1s ease-out;
}

@keyframes growWidth {
  from { width: 0; }
  to { width: 50px; }
}

/* Component demo styling */
.component-demo {
  margin-bottom: var(--spacing-xl);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  animation: fadeIn 0.8s ease-out;
}

.component-demo:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

.component-demo-code {
  background-color: var(--gray-100);
  padding: var(--spacing-md);
  border-radius: 0;
  overflow-x: auto;
  margin: 0;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

/* List styling */
ul {
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

li {
  margin-bottom: var(--spacing-sm);
  position: relative;
  transition: transform 0.2s ease;
}

li:hover {
  transform: translateX(5px);
}

li a {
  display: inline-block;
  padding: var(--spacing-xs) 0;
  transition: all 0.2s ease;
}

li a:hover {
  color: var(--primary-dark);
}

/* Component links styling */
.component-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--gray-50);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-md);
  animation: fadeIn 0.8s ease-out;
}

.component-links li {
  background-color: var(--white);
  border-radius: var(--radius-md);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 0;
  transition: all 0.3s ease;
}

.component-links li:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.component-links li a {
  display: block;
  padding: var(--spacing-md);
  text-align: center;
  font-weight: 500;
}

/* Section container styling */
.section-container {
  margin-bottom: var(--spacing-2xl);
  animation: fadeIn 0.8s ease-out;
}

.section-description {
  color: var(--gray-700);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

/* Code block styling */
code {
  background-color: var(--gray-100);
  padding: 0.2em 0.4em;
  border-radius: var(--radius-sm);
  font-size: 0.9em;
  transition: background-color 0.2s ease;
}

code:hover {
  background-color: var(--gray-200);
}

/* Router link styling */
a {
  position: relative;
  transition: all 0.2s ease;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>