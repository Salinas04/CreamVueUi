<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Interactive playground state
const playgroundChecked = ref(false);
const playgroundDisabled = ref(false);
const playgroundSize = ref('md');
const playgroundVariant = ref('primary');
const playgroundLabel = ref('Toggle me');
const playgroundLabelPosition = ref('right');

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
  <DocLayout title="Toggle Component">
    <div class="toggle-docs">
      <p class="intro-text">
        The Toggle component is a switch that allows users to turn an option on or off.
        It's an alternative to the checkbox when you want to emphasize the on/off state.
      </p>

      <h2>Basic Usage</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CToggle v-model="playgroundChecked" label="Toggle me" />
          <div class="toggle-state">Current state: {{ playgroundChecked ? 'On' : 'Off' }}</div>
        </div>
        <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;CToggle v-model="isChecked" label="Toggle me" /&gt;
  &lt;div&gt;Current state: {{ isChecked ? 'On' : 'Off' }}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const isChecked = ref(false);
&lt;/script&gt;</code></pre>
      </div>

      <h2>Toggle Variants</h2>
      <p>
        The Toggle component comes with several color variants.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview toggle-grid">
          <CToggle variant="primary" :model-value="true" label="Primary" />
          <CToggle variant="secondary" :model-value="true" label="Secondary" />
          <CToggle variant="success" :model-value="true" label="Success" />
          <CToggle variant="warning" :model-value="true" label="Warning" />
          <CToggle variant="error" :model-value="true" label="Error" />
          <CToggle variant="info" :model-value="true" label="Info" />
        </div>
        <pre class="component-demo-code"><code>&lt;CToggle variant="primary" :model-value="true" label="Primary" /&gt;
&lt;CToggle variant="secondary" :model-value="true" label="Secondary" /&gt;
&lt;CToggle variant="success" :model-value="true" label="Success" /&gt;
&lt;CToggle variant="warning" :model-value="true" label="Warning" /&gt;
&lt;CToggle variant="error" :model-value="true" label="Error" /&gt;
&lt;CToggle variant="info" :model-value="true" label="Info" /&gt;</code></pre>
      </div>

      <h2>Toggle Sizes</h2>
      <p>
        The Toggle component comes in different sizes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview toggle-grid">
          <CToggle size="sm" :model-value="true" label="Small" />
          <CToggle size="md" :model-value="true" label="Medium" />
          <CToggle size="lg" :model-value="true" label="Large" />
        </div>
        <pre class="component-demo-code"><code>&lt;CToggle size="sm" :model-value="true" label="Small" /&gt;
&lt;CToggle size="md" :model-value="true" label="Medium" /&gt;
&lt;CToggle size="lg" :model-value="true" label="Large" /&gt;</code></pre>
      </div>

      <h2>Label Positions</h2>
      <p>
        The Toggle component supports different label positions.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview toggle-grid">
          <CToggle :model-value="true" label="Label on right" labelPosition="right" />
          <CToggle :model-value="true" label="Label on left" labelPosition="left" />
        </div>
        <pre class="component-demo-code"><code>&lt;CToggle :model-value="true" label="Label on right" labelPosition="right" /&gt;
&lt;CToggle :model-value="true" label="Label on left" labelPosition="left" /&gt;</code></pre>
      </div>

      <h2>Disabled State</h2>
      <p>
        The Toggle component can be disabled.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview toggle-grid">
          <CToggle :model-value="false" label="Disabled (off)" disabled />
          <CToggle :model-value="true" label="Disabled (on)" disabled />
        </div>
        <pre class="component-demo-code"><code>&lt;CToggle :model-value="false" label="Disabled (off)" disabled /&gt;
&lt;CToggle :model-value="true" label="Disabled (on)" disabled /&gt;</code></pre>
      </div>

      <h2>Without Label</h2>
      <p>
        The Toggle component can be used without a label.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview toggle-grid">
          <CToggle :model-value="false" />
          <CToggle :model-value="true" />
        </div>
        <pre class="component-demo-code"><code>&lt;CToggle :model-value="false" /&gt;
&lt;CToggle :model-value="true" /&gt;</code></pre>
      </div>

      <h2>Custom Colors</h2>
      <p>
        The Toggle component can be customized with CSS variables.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CToggle 
            :model-value="true" 
            label="Custom colors" 
            style="--toggle-active-color: #8e44ad; --toggle-thumb-color: white;"
          />
        </div>
        <pre class="component-demo-code"><code>&lt;CToggle 
  :model-value="true" 
  label="Custom colors" 
  style="--toggle-active-color: #8e44ad; --toggle-thumb-color: white;"
/&gt;</code></pre>
      </div>

      <h2>With Helper Text</h2>
      <p>
        The Toggle component can include helper text.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <div class="toggle-with-helper">
            <CToggle :model-value="true" label="Enable notifications" />
            <div class="helper-text">You'll receive email notifications when important events occur.</div>
          </div>
        </div>
        <pre class="component-demo-code"><code>&lt;div class="toggle-with-helper"&gt;
  &lt;CToggle :model-value="true" label="Enable notifications" /&gt;
  &lt;div class="helper-text"&gt;You'll receive email notifications when important events occur.&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.toggle-with-helper {
  display: flex;
  flex-direction: column;
}

.helper-text {
  margin-top: 4px;
  font-size: 0.875rem;
  color: #666;
  margin-left: 44px; /* Align with the label */
}
&lt;/style&gt;</code></pre>
      </div>

      <h2>Props Reference</h2>
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
              <td><code>modelValue</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>The current state of the toggle (v-model)</td>
            </tr>
            <tr>
              <td><code>label</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Label text for the toggle</td>
            </tr>
            <tr>
              <td><code>labelPosition</code></td>
              <td>String</td>
              <td><code>'right'</code></td>
              <td>Position of the label (right, left)</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Size of the toggle (sm, md, lg)</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>String</td>
              <td><code>'primary'</code></td>
              <td>Color variant (primary, secondary, success, warning, error, info)</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Whether the toggle is disabled</td>
            </tr>
            <tr>
              <td><code>name</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Name attribute for the hidden input element</td>
            </tr>
            <tr>
              <td><code>id</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>ID attribute for the toggle</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Events</h2>
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
              <td><code>update:modelValue</code></td>
              <td>Emitted when the toggle state changes</td>
            </tr>
            <tr>
              <td><code>change</code></td>
              <td>Emitted when the toggle state changes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>CSS Variables</h2>
      <div class="props-table-wrapper">
        <table class="props-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--toggle-width</code></td>
              <td>Width of the toggle</td>
            </tr>
            <tr>
              <td><code>--toggle-height</code></td>
              <td>Height of the toggle</td>
            </tr>
            <tr>
              <td><code>--toggle-bg-color</code></td>
              <td>Background color when toggle is off</td>
            </tr>
            <tr>
              <td><code>--toggle-active-color</code></td>
              <td>Background color when toggle is on</td>
            </tr>
            <tr>
              <td><code>--toggle-thumb-color</code></td>
              <td>Color of the toggle thumb/knob</td>
            </tr>
            <tr>
              <td><code>--toggle-thumb-size</code></td>
              <td>Size of the toggle thumb/knob</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.toggle-docs {
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

.toggle-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  animation: fadeIn 0.8s ease-out;
}

.component-demo-code {
  background-color: var(--gray-100);
  padding: var(--spacing-md);
  border-radius: 0;
  overflow-x: auto;
  margin: 0;
  transition: all 0.2s ease;
}

.toggle-state {
  margin-top: var(--spacing-md);
  font-size: 0.9rem;
  color: var(--gray-600);
}

.toggle-with-helper {
  display: flex;
  flex-direction: column;
}

.helper-text {
  margin-top: 4px;
  font-size: 0.875rem;
  color: #666;
  margin-left: 44px; /* Align with the label */
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