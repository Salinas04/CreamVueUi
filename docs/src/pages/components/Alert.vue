<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
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
</script>

<template>
  <DocLayout title="Alert Component">
    <div class="alert-docs">
      <p class="intro-text">
        The Alert component is a versatile and beautiful notification component with various styles, animations, and interactive features.
        Explore the examples below to see how to use it in your application.
      </p>

      <h2>Basic Usage</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert>This is a default info alert.</CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert&gt;This is a default info alert.&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>With Title</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert title="Alert Title">This is an alert with a title.</CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert title="Alert Title"&gt;This is an alert with a title.&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Alert Types</h2>
      <p>
        The Alert component comes with several types to match different message purposes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert type="info" title="Info">This is an info alert.</CAlert>
          <CAlert type="success" title="Success">This is a success alert.</CAlert>
          <CAlert type="warning" title="Warning">This is a warning alert.</CAlert>
          <CAlert type="error" title="Error">This is an error alert.</CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert type="info" title="Info"&gt;This is an info alert.&lt;/CAlert&gt;
&lt;CAlert type="success" title="Success"&gt;This is a success alert.&lt;/CAlert&gt;
&lt;CAlert type="warning" title="Warning"&gt;This is a warning alert.&lt;/CAlert&gt;
&lt;CAlert type="error" title="Error"&gt;This is an error alert.&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Alert Variants</h2>
      <p>
        The Alert component comes with several variants to match different UI needs.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert title="Default Variant" type="info" variant="default">
            This is the default variant of an alert.
          </CAlert>
          
          <CAlert title="Filled Variant" type="success" variant="filled">
            This is a filled variant with solid background color.
          </CAlert>
          
          <CAlert title="Soft Variant" type="warning" variant="soft">
            This is a soft variant with a subtle background color.
          </CAlert>
          
          <CAlert title="Toast Variant" type="error" variant="toast" elevation="lg">
            This is a toast notification variant with elevation.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert title="Default Variant" type="info" variant="default"&gt;
  This is the default variant of an alert.
&lt;/CAlert&gt;

&lt;CAlert title="Filled Variant" type="success" variant="filled"&gt;
  This is a filled variant with solid background color.
&lt;/CAlert&gt;

&lt;CAlert title="Soft Variant" type="warning" variant="soft"&gt;
  This is a soft variant with a subtle background color.
&lt;/CAlert&gt;

&lt;CAlert title="Toast Variant" type="error" variant="toast" elevation="lg"&gt;
  This is a toast notification variant with elevation.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Border Styles</h2>
      <p>
        The Alert component supports different border styles.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert title="Left Border" type="info" border="left">
            This alert has a left border.
          </CAlert>
          
          <CAlert title="Top Border" type="success" border="top">
            This alert has a top border.
          </CAlert>
          
          <CAlert title="Right Border" type="warning" border="right">
            This alert has a right border.
          </CAlert>
          
          <CAlert title="Bottom Border" type="error" border="bottom">
            This alert has a bottom border.
          </CAlert>
          
          <CAlert title="All Borders" type="info" border="all">
            This alert has borders on all sides.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert title="Left Border" type="info" border="left"&gt;
  This alert has a left border.
&lt;/CAlert&gt;

&lt;CAlert title="Top Border" type="success" border="top"&gt;
  This alert has a top border.
&lt;/CAlert&gt;

&lt;CAlert title="Right Border" type="warning" border="right"&gt;
  This alert has a right border.
&lt;/CAlert&gt;

&lt;CAlert title="Bottom Border" type="error" border="bottom"&gt;
  This alert has a bottom border.
&lt;/CAlert&gt;

&lt;CAlert title="All Borders" type="info" border="all"&gt;
  This alert has borders on all sides.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Icon Positions</h2>
      <p>
        The Alert component supports different icon positions.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert title="Left Icon" type="info" iconPosition="left">
            This alert has an icon on the left (default).
          </CAlert>
          
          <CAlert title="Right Icon" type="success" iconPosition="right">
            This alert has an icon on the right.
          </CAlert>
          
          <CAlert title="Top Icon" type="warning" iconPosition="top">
            This alert has an icon at the top.
          </CAlert>
          
          <CAlert title="Custom Icon" type="error" icon="🔔">
            This alert has a custom icon.
          </CAlert>
          
          <CAlert title="No Icon" type="info" :showIcon="false">
            This alert has no icon.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert title="Left Icon" type="info" iconPosition="left"&gt;
  This alert has an icon on the left (default).
&lt;/CAlert&gt;

&lt;CAlert title="Right Icon" type="success" iconPosition="right"&gt;
  This alert has an icon on the right.
&lt;/CAlert&gt;

&lt;CAlert title="Top Icon" type="warning" iconPosition="top"&gt;
  This alert has an icon at the top.
&lt;/CAlert&gt;

&lt;CAlert title="Custom Icon" type="error" icon="🔔"&gt;
  This alert has a custom icon.
&lt;/CAlert&gt;

&lt;CAlert title="No Icon" type="info" :showIcon="false"&gt;
  This alert has no icon.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Dismissible Alerts</h2>
      <p>
        The Alert component can be dismissible with a close button.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert 
            title="Dismissible Alert" 
            type="info" 
            dismissible
          >
            This is a dismissible alert. Click the X to dismiss it.
          </CAlert>
          
          <CAlert 
            title="Custom Close Icon" 
            type="warning" 
            closable
            closeIcon="✖"
          >
            This alert has a custom close icon.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert 
  title="Dismissible Alert" 
  type="info" 
  dismissible
&gt;
  This is a dismissible alert. Click the X to dismiss it.
&lt;/CAlert&gt;

&lt;CAlert 
  title="Custom Close Icon" 
  type="warning" 
  closable
  closeIcon="✖"
&gt;
  This alert has a custom close icon.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Auto-Close Alerts</h2>
      <p>
        The Alert component can automatically close after a specified time.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert 
            title="Auto-Close (5s)" 
            type="info" 
            :autoClose="5000"
          >
            This alert will automatically close after 5 seconds.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert 
  title="Auto-Close (5s)" 
  type="info" 
  :autoClose="5000"
&gt;
  This alert will automatically close after 5 seconds.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Alerts with Actions</h2>
      <p>
        The Alert component can include action buttons.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert 
            title="With Actions" 
            type="info"
            :actions="[
              { label: 'Confirm', variant: 'primary' },
              { label: 'Cancel', text: true }
            ]"
          >
            This alert has action buttons.
          </CAlert>
          
          <CAlert 
            title="Dismissible with Actions" 
            type="warning"
            dismissible
            :actions="[
              { label: 'Learn More', variant: 'primary' },
              { label: 'Dismiss', text: true, close: true }
            ]"
          >
            This alert has action buttons, including one that dismisses the alert.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert 
  title="With Actions" 
  type="info"
  :actions="[
    { label: 'Confirm', variant: 'primary' },
    { label: 'Cancel', text: true }
  ]"
&gt;
  This alert has action buttons.
&lt;/CAlert&gt;

&lt;CAlert 
  title="Dismissible with Actions" 
  type="warning"
  dismissible
  :actions="[
    { label: 'Learn More', variant: 'primary' },
    { label: 'Dismiss', text: true, close: true }
  ]"
&gt;
  This alert has action buttons, including one that dismisses the alert.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Elevation Levels</h2>
      <p>
        The Alert component supports different elevation levels (shadow depths).
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert title="No Shadow" type="info" elevation="none">
            This alert has no shadow.
          </CAlert>
          
          <CAlert title="Small Shadow" type="success" elevation="sm">
            This alert has a small shadow.
          </CAlert>
          
          <CAlert title="Medium Shadow" type="warning" elevation="md">
            This alert has a medium shadow.
          </CAlert>
          
          <CAlert title="Large Shadow" type="error" elevation="lg">
            This alert has a large shadow.
          </CAlert>
          
          <CAlert title="Extra Large Shadow" type="info" elevation="xl">
            This alert has an extra large shadow.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert title="No Shadow" type="info" elevation="none"&gt;
  This alert has no shadow.
&lt;/CAlert&gt;

&lt;CAlert title="Small Shadow" type="success" elevation="sm"&gt;
  This alert has a small shadow.
&lt;/CAlert&gt;

&lt;CAlert title="Medium Shadow" type="warning" elevation="md"&gt;
  This alert has a medium shadow.
&lt;/CAlert&gt;

&lt;CAlert title="Large Shadow" type="error" elevation="lg"&gt;
  This alert has a large shadow.
&lt;/CAlert&gt;

&lt;CAlert title="Extra Large Shadow" type="info" elevation="xl"&gt;
  This alert has an extra large shadow.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Sizes</h2>
      <p>
        The Alert component comes in different sizes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert title="Small Alert" type="info" size="sm">
            This is a small alert.
          </CAlert>
          
          <CAlert title="Medium Alert" type="success" size="md">
            This is a medium alert (default).
          </CAlert>
          
          <CAlert title="Large Alert" type="warning" size="lg">
            This is a large alert.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert title="Small Alert" type="info" size="sm"&gt;
  This is a small alert.
&lt;/CAlert&gt;

&lt;CAlert title="Medium Alert" type="success" size="md"&gt;
  This is a medium alert (default).
&lt;/CAlert&gt;

&lt;CAlert title="Large Alert" type="warning" size="lg"&gt;
  This is a large alert.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Special Styles</h2>
      <p>
        The Alert component supports special styles like outlined and non-rounded alerts.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert title="Outlined Alert" type="info" outlined>
            This is an outlined alert.
          </CAlert>
          
          <CAlert title="Non-Rounded Alert" type="success" :rounded="false">
            This alert has no rounded corners.
          </CAlert>
          
          <CAlert 
            title="Combined Features" 
            type="warning" 
            variant="filled" 
            elevation="md" 
            border="left"
            iconPosition="right"
          >
            This alert combines multiple features.
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert title="Outlined Alert" type="info" outlined&gt;
  This is an outlined alert.
&lt;/CAlert&gt;

&lt;CAlert title="Non-Rounded Alert" type="success" :rounded="false"&gt;
  This alert has no rounded corners.
&lt;/CAlert&gt;

&lt;CAlert 
  title="Combined Features" 
  type="warning" 
  variant="filled" 
  elevation="md" 
  border="left"
  iconPosition="right"
&gt;
  This alert combines multiple features.
&lt;/CAlert&gt;</code></pre>
      </div>

      <h2>Toast Positioning</h2>
      <p>
        The Alert component can be positioned as a toast notification.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CAlert 
            title="Static Position" 
            type="info" 
            variant="toast" 
            position="static"
          >
            This is a toast notification with static position (default).
          </CAlert>
        </div>
        <pre class="component-demo-code"><code>&lt;CAlert 
  title="Static Position" 
  type="info" 
  variant="toast" 
  position="static"
&gt;
  This is a toast notification with static position (default).
&lt;/CAlert&gt;

&lt;!-- Other position options: --&gt;
&lt;!-- position="top-right" --&gt;
&lt;!-- position="top-left" --&gt;
&lt;!-- position="bottom-right" --&gt;
&lt;!-- position="bottom-left" --&gt;
&lt;!-- position="top-center" --&gt;
&lt;!-- position="bottom-center" --&gt;</code></pre>
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
              <td><code>title</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Alert title</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>String</td>
              <td><code>'info'</code></td>
              <td>Alert type (info, success, warning, error)</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>String</td>
              <td><code>'default'</code></td>
              <td>Alert style variant (default, filled, soft, toast)</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Alert size (sm, md, lg)</td>
            </tr>
            <tr>
              <td><code>dismissible</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the alert dismissible with a close button</td>
            </tr>
            <tr>
              <td><code>closable</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Alternative prop for dismissible (for consistency)</td>
            </tr>
            <tr>
              <td><code>closeIcon</code></td>
              <td>String</td>
              <td><code>'×'</code></td>
              <td>Custom close button icon</td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Custom icon to display</td>
            </tr>
            <tr>
              <td><code>showIcon</code></td>
              <td>Boolean</td>
              <td><code>true</code></td>
              <td>Controls whether to show the icon</td>
            </tr>
            <tr>
              <td><code>iconPosition</code></td>
              <td>String</td>
              <td><code>'left'</code></td>
              <td>Position of the icon (left, right, top)</td>
            </tr>
            <tr>
              <td><code>border</code></td>
              <td>String</td>
              <td><code>'none'</code></td>
              <td>Border style (none, left, top, right, bottom, all)</td>
            </tr>
            <tr>
              <td><code>rounded</code></td>
              <td>Boolean</td>
              <td><code>true</code></td>
              <td>Controls whether the alert has rounded corners</td>
            </tr>
            <tr>
              <td><code>outlined</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the alert outlined instead of filled</td>
            </tr>
            <tr>
              <td><code>elevation</code></td>
              <td>String</td>
              <td><code>'none'</code></td>
              <td>Shadow elevation level (none, sm, md, lg, xl)</td>
            </tr>
            <tr>
              <td><code>autoClose</code></td>
              <td>Number</td>
              <td><code>0</code></td>
              <td>Auto-close timeout in milliseconds (0 = disabled)</td>
            </tr>
            <tr>
              <td><code>actions</code></td>
              <td>Array</td>
              <td><code>[]</code></td>
              <td>Array of action button objects</td>
            </tr>
            <tr>
              <td><code>position</code></td>
              <td>String</td>
              <td><code>'static'</code></td>
              <td>Position for toast notifications (static, top-right, top-left, bottom-right, bottom-left, top-center, bottom-center)</td>
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
              <td><code>dismiss</code></td>
              <td>Emitted when the alert is dismissed</td>
            </tr>
            <tr>
              <td><code>action</code></td>
              <td>Emitted when an action button is clicked, with the action object as payload</td>
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
              <td>The content of the alert</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.alert-docs {
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
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
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
  margin-top: var(--spacing-xl);
  color: var(--secondary);
  animation: fadeIn 0.8s ease-out;
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

/* Copy button styles */
.copy-button {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background-color: var(--primary-dark);
}

/* Alert animations */
.component-demo-preview > * {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.component-demo-preview > *:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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