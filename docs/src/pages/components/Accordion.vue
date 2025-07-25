<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Interactive playground state
const playgroundItems = ref([
  { title: 'Section 1', content: 'Content for section 1', expanded: true },
  { title: 'Section 2', content: 'Content for section 2', expanded: false },
  { title: 'Section 3', content: 'Content for section 3', expanded: false }
]);
const playgroundVariant = ref('default');
const playgroundBordered = ref(true);
const playgroundMultiple = ref(false);

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
</script>

<template>
  <DocLayout title="Accordion Component">
    <div class="accordion-docs">
      <p class="intro-text">
        The Accordion component is a vertically stacked list of items that can be expanded or collapsed to reveal content.
        It's useful for organizing and hiding content to reduce visual clutter.
      </p>

      <h2>Basic Usage</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CAccordion>
            <CAccordionItem title="What is Cream UI?">
              <p>Cream UI is a beautiful and functional UI component library for Vue 3. It provides a set of reusable components to help you build your application faster.</p>
            </CAccordionItem>
            <CAccordionItem title="How to install?">
              <p>You can install Cream UI using npm or yarn:</p>
              <pre><code>npm install cream-vue-ui</code></pre>
              <p>Then import and register the components you need.</p>
            </CAccordionItem>
            <CAccordionItem title="Is it customizable?">
              <p>Yes, Cream UI is highly customizable. You can customize the appearance of components using CSS variables or by extending the components.</p>
            </CAccordionItem>
          </CAccordion>
        </div>
        <pre class="component-demo-code"><code>&lt;CAccordion&gt;
  &lt;CAccordionItem title="What is Cream UI?"&gt;
    &lt;p&gt;Cream UI is a beautiful and functional UI component library for Vue 3. It provides a set of reusable components to help you build your application faster.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="How to install?"&gt;
    &lt;p&gt;You can install Cream UI using npm or yarn:&lt;/p&gt;
    &lt;pre&gt;&lt;code&gt;npm install cream-vue-ui&lt;/code&gt;&lt;/pre&gt;
    &lt;p&gt;Then import and register the components you need.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Is it customizable?"&gt;
    &lt;p&gt;Yes, Cream UI is highly customizable. You can customize the appearance of components using CSS variables or by extending the components.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;</code></pre>
      </div>

      <h2>Accordion Variants</h2>
      <p>
        The Accordion component comes with several style variants.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <h3>Default Variant</h3>
          <CAccordion variant="default" class="mb-lg">
            <CAccordionItem title="Default Accordion Item">
              <p>This is the default accordion style.</p>
            </CAccordionItem>
            <CAccordionItem title="Another Item">
              <p>More content here.</p>
            </CAccordionItem>
          </CAccordion>

          <h3>Bordered Variant</h3>
          <CAccordion variant="bordered" class="mb-lg">
            <CAccordionItem title="Bordered Accordion Item">
              <p>This accordion has borders around each item.</p>
            </CAccordionItem>
            <CAccordionItem title="Another Item">
              <p>More content here.</p>
            </CAccordionItem>
          </CAccordion>

          <h3>Filled Variant</h3>
          <CAccordion variant="filled">
            <CAccordionItem title="Filled Accordion Item">
              <p>This accordion has a filled background.</p>
            </CAccordionItem>
            <CAccordionItem title="Another Item">
              <p>More content here.</p>
            </CAccordionItem>
          </CAccordion>
        </div>
        <pre class="component-demo-code"><code>&lt;!-- Default Variant --&gt;
&lt;CAccordion variant="default"&gt;
  &lt;CAccordionItem title="Default Accordion Item"&gt;
    &lt;p&gt;This is the default accordion style.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Another Item"&gt;
    &lt;p&gt;More content here.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;

&lt;!-- Bordered Variant --&gt;
&lt;CAccordion variant="bordered"&gt;
  &lt;CAccordionItem title="Bordered Accordion Item"&gt;
    &lt;p&gt;This accordion has borders around each item.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Another Item"&gt;
    &lt;p&gt;More content here.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;

&lt;!-- Filled Variant --&gt;
&lt;CAccordion variant="filled"&gt;
  &lt;CAccordionItem title="Filled Accordion Item"&gt;
    &lt;p&gt;This accordion has a filled background.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Another Item"&gt;
    &lt;p&gt;More content here.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;</code></pre>
      </div>

      <h2>Multiple Expansion</h2>
      <p>
        By default, only one accordion item can be expanded at a time. You can allow multiple items to be expanded simultaneously using the <code>multiple</code> prop.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAccordion multiple>
            <CAccordionItem title="First Item">
              <p>This item can be expanded at the same time as others.</p>
            </CAccordionItem>
            <CAccordionItem title="Second Item">
              <p>You can expand multiple items simultaneously.</p>
            </CAccordionItem>
            <CAccordionItem title="Third Item">
              <p>Try expanding all three items at once!</p>
            </CAccordionItem>
          </CAccordion>
        </div>
        <pre class="component-demo-code"><code>&lt;CAccordion multiple&gt;
  &lt;CAccordionItem title="First Item"&gt;
    &lt;p&gt;This item can be expanded at the same time as others.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Second Item"&gt;
    &lt;p&gt;You can expand multiple items simultaneously.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Third Item"&gt;
    &lt;p&gt;Try expanding all three items at once!&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;</code></pre>
      </div>

      <h2>Default Expanded Items</h2>
      <p>
        You can set specific accordion items to be expanded by default using the <code>expanded</code> prop on the <code>CAccordionItem</code> component.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAccordion>
            <CAccordionItem title="Expanded by default" expanded>
              <p>This item is expanded when the accordion is first rendered.</p>
            </CAccordionItem>
            <CAccordionItem title="Collapsed by default">
              <p>This item is collapsed when the accordion is first rendered.</p>
            </CAccordionItem>
          </CAccordion>
        </div>
        <pre class="component-demo-code"><code>&lt;CAccordion&gt;
  &lt;CAccordionItem title="Expanded by default" expanded&gt;
    &lt;p&gt;This item is expanded when the accordion is first rendered.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Collapsed by default"&gt;
    &lt;p&gt;This item is collapsed when the accordion is first rendered.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;</code></pre>
      </div>

      <h2>Disabled Items</h2>
      <p>
        You can disable specific accordion items to prevent them from being expanded or collapsed.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAccordion>
            <CAccordionItem title="Regular Item">
              <p>This is a regular accordion item that can be expanded and collapsed.</p>
            </CAccordionItem>
            <CAccordionItem title="Disabled Item" disabled>
              <p>This item is disabled and cannot be expanded or collapsed.</p>
            </CAccordionItem>
            <CAccordionItem title="Another Regular Item">
              <p>This is another regular accordion item.</p>
            </CAccordionItem>
          </CAccordion>
        </div>
        <pre class="component-demo-code"><code>&lt;CAccordion&gt;
  &lt;CAccordionItem title="Regular Item"&gt;
    &lt;p&gt;This is a regular accordion item that can be expanded and collapsed.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Disabled Item" disabled&gt;
    &lt;p&gt;This item is disabled and cannot be expanded or collapsed.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Another Regular Item"&gt;
    &lt;p&gt;This is another regular accordion item.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;</code></pre>
      </div>

      <h2>Custom Icons</h2>
      <p>
        You can customize the expand/collapse icon using the <code>icon</code> slot in the <code>CAccordionItem</code> component.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAccordion>
            <CAccordionItem title="Custom Icon">
              <template #icon="{ expanded }">
                <span style="font-size: 1.2rem; transition: transform 0.3s ease;" :style="{ transform: expanded ? 'rotate(90deg)' : 'rotate(0)' }">
                  →
                </span>
              </template>
              <p>This accordion item has a custom icon.</p>
            </CAccordionItem>
            <CAccordionItem title="Another Custom Icon">
              <template #icon="{ expanded }">
                <span style="font-size: 1.2rem;">
                  {{ expanded ? '−' : '+' }}
                </span>
              </template>
              <p>This accordion item has a different custom icon.</p>
            </CAccordionItem>
          </CAccordion>
        </div>
        <pre class="component-demo-code"><code>&lt;CAccordion&gt;
  &lt;CAccordionItem title="Custom Icon"&gt;
    &lt;template #icon="{ expanded }"&gt;
      &lt;span style="font-size: 1.2rem; transition: transform 0.3s ease;" :style="{ transform: expanded ? 'rotate(90deg)' : 'rotate(0)' }"&gt;
        →
      &lt;/span&gt;
    &lt;/template&gt;
    &lt;p&gt;This accordion item has a custom icon.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem title="Another Custom Icon"&gt;
    &lt;template #icon="{ expanded }"&gt;
      &lt;span style="font-size: 1.2rem;"&gt;
        {{ expanded ? '−' : '+' }}
      &lt;/span&gt;
    &lt;/template&gt;
    &lt;p&gt;This accordion item has a different custom icon.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;</code></pre>
      </div>

      <h2>Custom Title</h2>
      <p>
        You can customize the title of an accordion item using the <code>title</code> slot.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAccordion>
            <CAccordionItem>
              <template #title>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="width: 16px; height: 16px; background-color: var(--primary); border-radius: 50%;"></span>
                  <span>Custom Title with Icon</span>
                </div>
              </template>
              <p>This accordion item has a custom title with an icon.</p>
            </CAccordionItem>
            <CAccordionItem>
              <template #title>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-weight: bold;">Main Title</span>
                  <span style="font-size: 0.8rem; color: var(--gray-600);">Subtitle with additional information</span>
                </div>
              </template>
              <p>This accordion item has a custom title with a subtitle.</p>
            </CAccordionItem>
          </CAccordion>
        </div>
        <pre class="component-demo-code"><code>&lt;CAccordion&gt;
  &lt;CAccordionItem&gt;
    &lt;template #title&gt;
      &lt;div style="display: flex; align-items: center; gap: 8px;"&gt;
        &lt;span style="width: 16px; height: 16px; background-color: var(--primary); border-radius: 50%;"&gt;&lt;/span&gt;
        &lt;span&gt;Custom Title with Icon&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;p&gt;This accordion item has a custom title with an icon.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
  &lt;CAccordionItem&gt;
    &lt;template #title&gt;
      &lt;div style="display: flex; flex-direction: column;"&gt;
        &lt;span style="font-weight: bold;"&gt;Main Title&lt;/span&gt;
        &lt;span style="font-size: 0.8rem; color: var(--gray-600);"&gt;Subtitle with additional information&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;p&gt;This accordion item has a custom title with a subtitle.&lt;/p&gt;
  &lt;/CAccordionItem&gt;
&lt;/CAccordion&gt;</code></pre>
      </div>

      <h2>Controlled Accordion</h2>
      <p>
        You can control the expanded state of accordion items programmatically using v-model.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <div class="controlled-accordion-demo">
            <div class="control-buttons">
              <button @click="playgroundItems[0].expanded = !playgroundItems[0].expanded" class="control-button">
                Toggle Section 1
              </button>
              <button @click="playgroundItems[1].expanded = !playgroundItems[1].expanded" class="control-button">
                Toggle Section 2
              </button>
              <button @click="playgroundItems[2].expanded = !playgroundItems[2].expanded" class="control-button">
                Toggle Section 3
              </button>
            </div>
            
            <CAccordion :multiple="playgroundMultiple">
              <CAccordionItem 
                v-for="(item, index) in playgroundItems" 
                :key="index"
                :title="item.title"
                v-model:expanded="item.expanded"
              >
                <p>{{ item.content }}</p>
              </CAccordionItem>
            </CAccordion>
            
            <div class="control-options">
              <label>
                <input type="checkbox" v-model="playgroundMultiple">
                Allow multiple sections to be expanded
              </label>
            </div>
          </div>
        </div>
        <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;div class="controlled-accordion-demo"&gt;
    &lt;div class="control-buttons"&gt;
      &lt;button @click="playgroundItems[0].expanded = !playgroundItems[0].expanded"&gt;
        Toggle Section 1
      &lt;/button&gt;
      &lt;button @click="playgroundItems[1].expanded = !playgroundItems[1].expanded"&gt;
        Toggle Section 2
      &lt;/button&gt;
      &lt;button @click="playgroundItems[2].expanded = !playgroundItems[2].expanded"&gt;
        Toggle Section 3
      &lt;/button&gt;
    &lt;/div&gt;
    
    &lt;CAccordion :multiple="playgroundMultiple"&gt;
      &lt;CAccordionItem 
        v-for="(item, index) in playgroundItems" 
        :key="index"
        :title="item.title"
        v-model:expanded="item.expanded"
      &gt;
        &lt;p&gt;item.content&lt;/p&gt;
      &lt;/CAccordionItem&gt;
    &lt;/CAccordion&gt;
    
    &lt;div class="control-options"&gt;
      &lt;label&gt;
        &lt;input type="checkbox" v-model="playgroundMultiple"&gt;
        Allow multiple sections to be expanded
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const playgroundItems = ref([
  { title: 'Section 1', content: 'Content for section 1', expanded: true },
  { title: 'Section 2', content: 'Content for section 2', expanded: false },
  { title: 'Section 3', content: 'Content for section 3', expanded: false }
]);
const playgroundMultiple = ref(false);
&lt;/script&gt;</code></pre>
      </div>

      <h2>Accordion Props</h2>
      <div class="props-table-wrapper">
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>variant</code></td>
              <td>String</td>
              <td><code>'default'</code></td>
              <td>Accordion style variant (default, bordered, filled)</td>
            </tr>
            <tr>
              <td><code>multiple</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Whether multiple items can be expanded simultaneously</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>AccordionItem Props</h2>
      <div class="props-table-wrapper">
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>title</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Title of the accordion item</td>
            </tr>
            <tr>
              <td><code>expanded</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Whether the accordion item is expanded</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Whether the accordion item is disabled</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>AccordionItem Events</h2>
      <div class="props-table-wrapper">
        <table class="props-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>update:expanded</code></td>
              <td>Emitted when the expanded state changes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>AccordionItem Slots</h2>
      <div class="props-table-wrapper">
        <table class="props-table">
          <thead>
            <tr>
              <th>Slot</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>default</td>
              <td>Content of the accordion item</td>
            </tr>
            <tr>
              <td>title</td>
              <td>Custom title content</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>Custom expand/collapse icon (receives <code>{ expanded }</code> prop)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.accordion-docs {
  max-width: 800px;
  animation: fadeIn 0.8s ease-out;
}

/* Introduction text with animation */
.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--gray-700);
  border-left: 4px solid var(--primary);
  padding-left: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  animation: fadeIn 0.8s ease-out;
}

/* Component Demo Enhancements */
.component-demo {
  margin-bottom: var(--spacing-xl);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
}

.component-demo:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

.component-demo-preview {
  background-color: var(--white);
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--gray-200);
  transition: all 0.3s ease;
}

.component-demo-code {
  background-color: var(--gray-100);
  padding: var(--spacing-md);
  border-radius: 0;
  overflow-x: auto;
  margin: 0;
  transition: all 0.2s ease;
}

.mb-lg {
  margin-bottom: var(--spacing-lg);
}

.controlled-accordion-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.control-buttons {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.control-button {
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.control-button:hover {
  background-color: var(--primary-dark);
}

.control-options {
  margin-top: var(--spacing-md);
  font-size: 0.9rem;
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

h3 {
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
  color: var(--gray-800);
}

@keyframes growWidth {
  from { width: 0; }
  to { width: 50px; }
}

/* Table Styles */
.props-table-wrapper {
  overflow-x: auto;
  margin-bottom: var(--spacing-xl);
  animation: fadeIn 0.8s ease-out;
}

.props-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.props-table th,
.props-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--gray-200);
}

.props-table th {
  font-weight: 600;
  color: var(--gray-700);
  background-color: var(--gray-50);
}

.props-table tr:last-child td {
  border-bottom: none;
}

.props-table tr:hover td {
  background-color: rgba(66, 184, 131, 0.05);
}

.props-table td code {
  white-space: nowrap;
  background-color: var(--gray-100);
  padding: 0.2em 0.4em;
  border-radius: var(--radius-sm);
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