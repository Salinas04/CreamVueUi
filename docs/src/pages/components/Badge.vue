<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Interactive playground state
const playgroundContent = ref('Badge');
const playgroundVariant = ref('primary');
const playgroundSize = ref('md');
const playgroundShape = ref('rounded');
const playgroundPosition = ref('top-right');
const playgroundDot = ref(false);

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
  <DocLayout title="Badge Component">
    <div class="badge-docs">
      <p class="intro-text">
        The Badge component is used to highlight and display counts, labels, or status indicators. 
        It can be used standalone or attached to other elements.
      </p>

      <h2>Basic Usage</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CBadge>Badge</CBadge>
        </div>
        <pre class="component-demo-code"><code>&lt;CBadge&gt;Badge&lt;/CBadge&gt;</code></pre>
      </div>

      <h2>Badge Variants</h2>
      <p>
        The Badge component comes with several color variants to match different UI needs.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview badge-grid">
          <CBadge variant="default">Default</CBadge>
          <CBadge variant="primary">Primary</CBadge>
          <CBadge variant="secondary">Secondary</CBadge>
          <CBadge variant="success">Success</CBadge>
          <CBadge variant="warning">Warning</CBadge>
          <CBadge variant="error">Error</CBadge>
          <CBadge variant="info">Info</CBadge>
        </div>
        <pre class="component-demo-code"><code>&lt;CBadge variant="default"&gt;Default&lt;/CBadge&gt;
&lt;CBadge variant="primary"&gt;Primary&lt;/CBadge&gt;
&lt;CBadge variant="secondary"&gt;Secondary&lt;/CBadge&gt;
&lt;CBadge variant="success"&gt;Success&lt;/CBadge&gt;
&lt;CBadge variant="warning"&gt;Warning&lt;/CBadge&gt;
&lt;CBadge variant="error"&gt;Error&lt;/CBadge&gt;
&lt;CBadge variant="info"&gt;Info&lt;/CBadge&gt;</code></pre>
      </div>

      <h2>Badge Sizes</h2>
      <p>
        The Badge component comes in different sizes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview badge-grid">
          <CBadge size="xs">Extra Small</CBadge>
          <CBadge size="sm">Small</CBadge>
          <CBadge size="md">Medium</CBadge>
          <CBadge size="lg">Large</CBadge>
        </div>
        <pre class="component-demo-code"><code>&lt;CBadge size="xs"&gt;Extra Small&lt;/CBadge&gt;
&lt;CBadge size="sm"&gt;Small&lt;/CBadge&gt;
&lt;CBadge size="md"&gt;Medium&lt;/CBadge&gt;
&lt;CBadge size="lg"&gt;Large&lt;/CBadge&gt;</code></pre>
      </div>

      <h2>Badge Shapes</h2>
      <p>
        The Badge component supports different shapes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview badge-grid">
          <CBadge shape="square">Square</CBadge>
          <CBadge shape="rounded">Rounded</CBadge>
          <CBadge shape="pill">Pill</CBadge>
        </div>
        <pre class="component-demo-code"><code>&lt;CBadge shape="square"&gt;Square&lt;/CBadge&gt;
&lt;CBadge shape="rounded"&gt;Rounded&lt;/CBadge&gt;
&lt;CBadge shape="pill"&gt;Pill&lt;/CBadge&gt;</code></pre>
      </div>

      <h2>Dot Badges</h2>
      <p>
        The Badge component can be displayed as a dot without content.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview badge-grid">
          <CBadge dot variant="primary"></CBadge>
          <CBadge dot variant="success"></CBadge>
          <CBadge dot variant="warning"></CBadge>
          <CBadge dot variant="error"></CBadge>
        </div>
        <pre class="component-demo-code"><code>&lt;CBadge dot variant="primary"&gt;&lt;/CBadge&gt;
&lt;CBadge dot variant="success"&gt;&lt;/CBadge&gt;
&lt;CBadge dot variant="warning"&gt;&lt;/CBadge&gt;
&lt;CBadge dot variant="error"&gt;&lt;/CBadge&gt;</code></pre>
      </div>

      <h2>Badge with Icons</h2>
      <p>
        The Badge component can contain icons.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview badge-grid">
          <CBadge variant="success">
            <span style="display: flex; align-items: center; gap: 4px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Verified
            </span>
          </CBadge>
          
          <CBadge variant="warning">
            <span style="display: flex; align-items: center; gap: 4px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Warning
            </span>
          </CBadge>
        </div>
        <pre class="component-demo-code"><code>&lt;CBadge variant="success"&gt;
  &lt;span style="display: flex; align-items: center; gap: 4px;"&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"&gt;
      &lt;polyline points="20 6 9 17 4 12"&gt;&lt;/polyline&gt;
    &lt;/svg&gt;
    Verified
  &lt;/span&gt;
&lt;/CBadge&gt;

&lt;CBadge variant="warning"&gt;
  &lt;span style="display: flex; align-items: center; gap: 4px;"&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"&gt;
      &lt;path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"&gt;&lt;/path&gt;
      &lt;line x1="12" y1="9" x2="12" y2="13"&gt;&lt;/line&gt;
      &lt;line x1="12" y1="17" x2="12.01" y2="17"&gt;&lt;/line&gt;
    &lt;/svg&gt;
    Warning
  &lt;/span&gt;
&lt;/CBadge&gt;</code></pre>
      </div>

      <h2>Badge Positioning</h2>
      <p>
        The Badge component can be positioned relative to other elements.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview badge-grid">
          <div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <span>Item</span>
            <CBadge position="top-right" variant="error">8</CBadge>
          </div>
          
          <div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <span>Item</span>
            <CBadge position="top-left" variant="primary">New</CBadge>
          </div>
          
          <div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <span>Item</span>
            <CBadge position="bottom-right" dot variant="success"></CBadge>
          </div>
          
          <div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <span>Item</span>
            <CBadge position="bottom-left" variant="warning">!</CBadge>
          </div>
        </div>
        <pre class="component-demo-code"><code>&lt;div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;"&gt;
  &lt;span&gt;Item&lt;/span&gt;
  &lt;CBadge position="top-right" variant="error"&gt;8&lt;/CBadge&gt;
&lt;/div&gt;

&lt;div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;"&gt;
  &lt;span&gt;Item&lt;/span&gt;
  &lt;CBadge position="top-left" variant="primary"&gt;New&lt;/CBadge&gt;
&lt;/div&gt;

&lt;div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;"&gt;
  &lt;span&gt;Item&lt;/span&gt;
  &lt;CBadge position="bottom-right" dot variant="success"&gt;&lt;/CBadge&gt;
&lt;/div&gt;

&lt;div style="position: relative; width: 60px; height: 60px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;"&gt;
  &lt;span&gt;Item&lt;/span&gt;
  &lt;CBadge position="bottom-left" variant="warning"&gt;!&lt;/CBadge&gt;
&lt;/div&gt;</code></pre>
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
              <td><code>variant</code></td>
              <td>String</td>
              <td><code>'primary'</code></td>
              <td>Badge style variant (default, primary, secondary, success, warning, error, info)</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Badge size (xs, sm, md, lg)</td>
            </tr>
            <tr>
              <td><code>shape</code></td>
              <td>String</td>
              <td><code>'rounded'</code></td>
              <td>Badge shape (square, rounded, pill)</td>
            </tr>
            <tr>
              <td><code>dot</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Display badge as a dot without content</td>
            </tr>
            <tr>
              <td><code>position</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Position of the badge when used with a parent element (top-right, top-left, bottom-right, bottom-left)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Slots</h2>
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
              <td>The content of the badge</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.badge-docs {
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

.badge-grid {
  display: flex;
  flex-wrap: wrap;
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