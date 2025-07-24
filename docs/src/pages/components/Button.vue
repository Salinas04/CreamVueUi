<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Interactive playground state
const playgroundVariant = ref('primary');
const playgroundSize = ref('md');
const playgroundRounded = ref(false);
const playgroundIcon = ref('');
const playgroundIconPosition = ref('left');
const playgroundDisabled = ref(false);
const playgroundLoading = ref(false);
const playgroundElevation = ref('md');
const playgroundText = ref('Button Text');

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
  <DocLayout title="Button Component">
    <div class="button-docs">
      <p class="intro-text">
        The Button component is a versatile and beautiful button component with various styles, states, and interactive features.
        Explore the examples below to see how to use it in your application.
      </p>

      <div class="interactive-playground">
        <h2>Interactive Playground</h2>
        <p>Customize your button and see the code in real-time.</p>
        
        <div class="playground-container">
          <div class="playground-preview">
            <CButton 
              :variant="playgroundVariant" 
              :size="playgroundSize" 
              :rounded="playgroundRounded" 
              :icon="playgroundIcon" 
              :iconPosition="playgroundIconPosition"
              :disabled="playgroundDisabled"
              :loading="playgroundLoading"
              :elevation="playgroundElevation"
            >{{ playgroundText }}</CButton>
          </div>
          
          <div class="playground-controls">
            <div class="control-group">
              <label>Text:</label>
              <input v-model="playgroundText" type="text" class="control-input" />
            </div>
            
            <div class="control-group">
              <label>Variant:</label>
              <select v-model="playgroundVariant" class="control-select">
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="info">Info</option>
                <option value="outline">Outline</option>
                <option value="text">Text</option>
                <option value="glass">Glass</option>
                <option value="soft">Soft</option>
              </select>
            </div>
            
            <div class="control-group">
              <label>Size:</label>
              <select v-model="playgroundSize" class="control-select">
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
            
            <div class="control-group">
              <label>Icon (emoji):</label>
              <input v-model="playgroundIcon" type="text" class="control-input" placeholder="e.g. 🚀" />
            </div>
            
            <div class="control-group">
              <label>Icon Position:</label>
              <select v-model="playgroundIconPosition" class="control-select">
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="rounded" v-model="playgroundRounded" type="checkbox" />
              <label for="rounded">Rounded</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="disabled" v-model="playgroundDisabled" type="checkbox" />
              <label for="disabled">Disabled</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="loading" v-model="playgroundLoading" type="checkbox" />
              <label for="loading">Loading</label>
            </div>
            
            <div class="control-group">
              <label>Elevation:</label>
              <select v-model="playgroundElevation" class="control-select">
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
          </div>
          
          <div class="playground-code">
            <div class="code-header">
              <span>Generated Code</span>
              <button @click="copyCode(`<CButton variant='${playgroundVariant}' size='${playgroundSize}' ${playgroundRounded ? 'rounded ' : ''}${playgroundIcon ? `icon='${playgroundIcon}' ` : ''}${playgroundIcon && playgroundIconPosition === 'right' ? `iconPosition='right' ` : ''}${playgroundDisabled ? 'disabled ' : ''}${playgroundLoading ? 'loading ' : ''}${playgroundElevation !== 'md' ? `elevation='${playgroundElevation}' ` : ''}>${playgroundText}</CButton>`)" class="copy-button">
                {{ copySuccess ? '✓ Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="component-demo-code"><code>&lt;CButton 
  variant="{{ playgroundVariant }}" 
  size="{{ playgroundSize }}"
  {{ playgroundRounded ? 'rounded ' : '' }}{{ playgroundIcon ? `icon="${playgroundIcon}" ` : '' }}{{ playgroundIcon && playgroundIconPosition === 'right' ? `iconPosition="right" ` : '' }}{{ playgroundDisabled ? 'disabled ' : '' }}{{ playgroundLoading ? 'loading ' : '' }}{{ playgroundElevation !== 'md' ? `elevation="${playgroundElevation}" ` : '' }}
&gt;{{ playgroundText }}&lt;/CButton&gt;</code></pre>
          </div>
        </div>
      </div>

      <h2>Basic Usage</h2>
      <div class="component-demo animated-demo">
        <div class="component-demo-preview">
          <CButton>Default Button</CButton>
        </div>
        <div class="component-demo-code-container">
          <pre class="component-demo-code"><code>&lt;CButton&gt;Default Button&lt;/CButton&gt;</code></pre>
          <button @click="copyCode('<CButton>Default Button</CButton>')" class="copy-button code-copy-button">
            {{ copySuccess ? '✓' : 'Copy' }}
          </button>
        </div>
      </div>

      <h2>Button Variants</h2>
      <p>
        The Button component comes with several variants to match different UI needs.
      </p>

      <h3>Standard Variants</h3>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton variant="primary">Primary</CButton>
          <CButton variant="secondary">Secondary</CButton>
          <CButton variant="success">Success</CButton>
          <CButton variant="warning">Warning</CButton>
          <CButton variant="error">Error</CButton>
          <CButton variant="info">Info</CButton>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton variant="primary"&gt;Primary&lt;/CButton&gt;
&lt;CButton variant="secondary"&gt;Secondary&lt;/CButton&gt;
&lt;CButton variant="success"&gt;Success&lt;/CButton&gt;
&lt;CButton variant="warning"&gt;Warning&lt;/CButton&gt;
&lt;CButton variant="error"&gt;Error&lt;/CButton&gt;
&lt;CButton variant="info"&gt;Info&lt;/CButton&gt;</code></pre>
      </div>

      <h3>Special Variants</h3>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton variant="outline">Outline</CButton>
          <CButton variant="text">Text</CButton>
          <CButton variant="glass">Glass</CButton>
          <CButton variant="soft">Soft</CButton>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton variant="outline"&gt;Outline&lt;/CButton&gt;
&lt;CButton variant="text"&gt;Text&lt;/CButton&gt;
&lt;CButton variant="glass"&gt;Glass&lt;/CButton&gt;
&lt;CButton variant="soft"&gt;Soft&lt;/CButton&gt;</code></pre>
      </div>

      <h2>Button Sizes</h2>
      <p>
        The Button component comes in different sizes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton size="xs">Extra Small</CButton>
          <CButton size="sm">Small</CButton>
          <CButton size="md">Medium</CButton>
          <CButton size="lg">Large</CButton>
          <CButton size="xl">Extra Large</CButton>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton size="xs"&gt;Extra Small&lt;/CButton&gt;
&lt;CButton size="sm"&gt;Small&lt;/CButton&gt;
&lt;CButton size="md"&gt;Medium&lt;/CButton&gt; &lt;!-- Default --&gt;
&lt;CButton size="lg"&gt;Large&lt;/CButton&gt;
&lt;CButton size="xl"&gt;Extra Large&lt;/CButton&gt;</code></pre>
      </div>

<!--      <h2>Button States</h2>-->
<!--      <p>-->
<!--        The Button component supports different states.-->
<!--      </p>-->

<!--      <div class="component-demo">-->
<!--        <div class="component-demo-preview">-->
<!--          <CButton disabled>Disabled</CButton>-->
<!--          <CButton loading>Loading</CButton>-->
<!--          <CButton loading loadingType="dots">Loading Dots</CButton>-->
<!--          <CButton loading loadingType="pulse">Loading Pulse</CButton>-->
<!--        </div>-->
<!--        <pre class="component-demo-code"><code>&lt;CButton disabled&gt;Disabled&lt;/CButton&gt;-->
<!--&lt;CButton loading&gt;Loading&lt;/CButton&gt;-->
<!--&lt;CButton loading loadingType="dots"&gt;Loading Dots&lt;/CButton&gt;-->
<!--&lt;CButton loading loadingType="pulse"&gt;Loading Pulse&lt;/CButton&gt;</code></pre>-->
<!--      </div>-->

      <h2>Icons and Positioning</h2>
      <p>
        The Button component supports icons and different icon positions.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton icon="🚀">Left Icon</CButton>
          <CButton icon="🔍" iconPosition="right">Right Icon</CButton>
          <CButton icon="❤️" iconOnly tooltip="Favorite"></CButton>
          <CButton icon="🔔" iconOnly rounded tooltip="Notifications"></CButton>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton icon="🚀"&gt;Left Icon&lt;/CButton&gt;
&lt;CButton icon="🔍" iconPosition="right"&gt;Right Icon&lt;/CButton&gt;
&lt;CButton icon="❤️" iconOnly tooltip="Favorite"&gt;&lt;/CButton&gt;
&lt;CButton icon="🔔" iconOnly rounded tooltip="Notifications"&gt;&lt;/CButton&gt;</code></pre>
      </div>

      <h2>Tooltips</h2>
      <p>
        The Button component supports tooltips.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton tooltip="This is a tooltip">Hover Me</CButton>
          <CButton variant="primary" tooltip="Primary action">Primary with Tooltip</CButton>
          <CButton variant="error" tooltip="Delete item">Delete</CButton>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton tooltip="This is a tooltip"&gt;Hover Me&lt;/CButton&gt;
&lt;CButton variant="primary" tooltip="Primary action"&gt;Primary with Tooltip&lt;/CButton&gt;
&lt;CButton variant="error" tooltip="Delete item"&gt;Delete&lt;/CButton&gt;</code></pre>
      </div>

      <h2>Elevation Levels</h2>
      <p>
        The Button component supports different elevation levels (shadow depths).
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton elevation="none">No Shadow</CButton>
          <CButton elevation="sm">Small Shadow</CButton>
          <CButton elevation="md">Medium Shadow</CButton>
          <CButton elevation="lg">Large Shadow</CButton>
          <CButton elevation="xl">Extra Large Shadow</CButton>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton elevation="none"&gt;No Shadow&lt;/CButton&gt;
&lt;CButton elevation="sm"&gt;Small Shadow&lt;/CButton&gt;
&lt;CButton elevation="md"&gt;Medium Shadow&lt;/CButton&gt; &lt;!-- Default --&gt;
&lt;CButton elevation="lg"&gt;Large Shadow&lt;/CButton&gt;
&lt;CButton elevation="xl"&gt;Extra Large Shadow&lt;/CButton&gt;</code></pre>
      </div>

      <h2>Special Features</h2>
      <p>
        The Button component supports special features like full width and rounded buttons.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton block>Block Button</CButton>
          <div style="margin-top: 10px;">
            <CButton rounded>Rounded Button</CButton>
          </div>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton block&gt;Block Button&lt;/CButton&gt;
&lt;CButton rounded&gt;Rounded Button&lt;/CButton&gt;</code></pre>
      </div>

      <h2>Combining Features</h2>
      <p>
        You can combine multiple features to create custom buttons.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CButton variant="primary" rounded icon="🚀">Rounded with Icon</CButton>
          <CButton variant="glass" elevation="lg" icon="✨" iconPosition="right">Glass with Shadow</CButton>
          <CButton variant="soft" rounded tooltip="Soft rounded button">Soft Rounded</CButton>
        </div>
        <pre class="component-demo-code"><code>&lt;CButton variant="primary" rounded icon="🚀"&gt;Rounded with Icon&lt;/CButton&gt;
&lt;CButton variant="glass" elevation="lg" icon="✨" iconPosition="right"&gt;Glass with Shadow&lt;/CButton&gt;
&lt;CButton variant="soft" rounded tooltip="Soft rounded button"&gt;Soft Rounded&lt;/CButton&gt;</code></pre>
      </div>

      <h2>Events</h2>
      <p>
        The Button component emits the following events:
      </p>

      <div class="component-demo">
        <pre class="component-demo-code"><code>&lt;CButton @click="handleClick"&gt;Click Me&lt;/CButton&gt;

&lt;script setup&gt;
const handleClick = (event) => {
  console.log('Button clicked', event);
};
&lt;/script&gt;</code></pre>
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
              <td>Button style variant (<code>primary</code>, <code>secondary</code>, <code>success</code>, <code>warning</code>, <code>error</code>, <code>info</code>, <code>outline</code>, <code>text</code>, <code>glass</code>, <code>soft</code>)</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Button size (<code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Disables the button</td>
            </tr>
            <tr>
              <td><code>loading</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Shows a loading indicator</td>
            </tr>
            <tr>
              <td><code>loadingType</code></td>
              <td>String</td>
              <td><code>'spinner'</code></td>
              <td>Type of loading animation (<code>spinner</code>, <code>dots</code>, <code>pulse</code>)</td>
            </tr>
            <tr>
              <td><code>block</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the button full width</td>
            </tr>
            <tr>
              <td><code>rounded</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the button fully rounded</td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Icon to display (emoji or icon font)</td>
            </tr>
            <tr>
              <td><code>iconPosition</code></td>
              <td>String</td>
              <td><code>'left'</code></td>
              <td>Position of the icon (<code>left</code>, <code>right</code>)</td>
            </tr>
            <tr>
              <td><code>iconOnly</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Creates an icon-only button</td>
            </tr>
            <tr>
              <td><code>tooltip</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Tooltip text to display on hover</td>
            </tr>
            <tr>
              <td><code>elevation</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Shadow elevation level (<code>none</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>String</td>
              <td><code>'button'</code></td>
              <td>HTML button type (<code>button</code>, <code>submit</code>, <code>reset</code>)</td>
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
              <td><code>click</code></td>
              <td>Emitted when the button is clicked</td>
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
              <td>The content of the button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.button-docs {
  max-width: 800px;
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

/* Interactive Playground */
.interactive-playground {
  background-color: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  animation: slideIn 0.5s ease-out;
}

.playground-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

@media (min-width: 768px) {
  .playground-container {
    grid-template-columns: 1fr 1fr;
  }
  
  .playground-code {
    grid-column: 1 / -1;
  }
}

.playground-preview {
  background-color: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-md);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  border: 1px solid var(--gray-200);
  transition: all 0.3s ease;
}

.playground-preview:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.playground-controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  background-color: var(--white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--gray-200);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.control-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-700);
}

.control-input,
.control-select {
  padding: var(--spacing-sm);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.control-input:focus,
.control-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.control-checkbox {
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-sm);
}

.playground-code {
  position: relative;
  background-color: var(--gray-100);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--gray-200);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-700);
}

/* Component Demo Enhancements */
.component-demo {
  margin-bottom: var(--spacing-xl);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}

.animated-demo {
  animation: fadeIn 0.6s ease-out;
}

.component-demo:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

.component-demo-preview {
  background-color: var(--white);
  padding: var(--spacing-lg);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: center;
}

.variants-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: var(--spacing-lg);
}

.variant-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  transition: transform 0.2s ease;
}

.variant-item:hover {
  transform: translateY(-4px);
}

.variant-label {
  font-size: 0.8rem;
  color: var(--gray-600);
  margin-top: var(--spacing-xs);
}

.component-demo-code-container {
  position: relative;
}

.component-demo-code {
  background-color: var(--gray-100);
  padding: var(--spacing-md);
  border-radius: 0;
  overflow-x: auto;
  margin: 0;
  transition: all 0.2s ease;
}

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

.code-copy-button {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.component-demo-code-container:hover .code-copy-button {
  opacity: 1;
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