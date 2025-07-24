<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Input values for examples
const inputValue = ref('');
const emailValue = ref('');

// Interactive playground state
const playgroundValue = ref('');
const playgroundLabel = ref('Input Label');
const playgroundPlaceholder = ref('Enter text here');
const playgroundVariant = ref('default');
const playgroundSize = ref('md');
const playgroundType = ref('text');
const playgroundIcon = ref('');
const playgroundIconPosition = ref('left');
const playgroundDisabled = ref(false);
const playgroundReadonly = ref(false);
const playgroundRequired = ref(false);
const playgroundClearable = ref(false);
const playgroundRounded = ref(false);
const playgroundFloatingLabel = ref(false);
const playgroundShowCount = ref(false);
const playgroundMaxLength = ref(50);
const playgroundElevation = ref('none');

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
  <DocLayout title="Input Component">
    <div class="input-docs">
      <p class="intro-text">
        The Input component is a flexible and beautiful form control with various styles, states, and interactive features.
        Explore the examples below to see how to use it in your application.
      </p>

      <div class="interactive-playground">
        <h2>Interactive Playground</h2>
        <p>Customize your input and see the code in real-time.</p>
        
        <div class="playground-container">
          <div class="playground-preview">
            <CInput 
              v-model="playgroundValue"
              :label="playgroundLabel"
              :placeholder="playgroundPlaceholder"
              :variant="playgroundVariant"
              :size="playgroundSize"
              :type="playgroundType"
              :icon="playgroundIcon"
              :iconPosition="playgroundIconPosition"
              :disabled="playgroundDisabled"
              :readonly="playgroundReadonly"
              :required="playgroundRequired"
              :clearable="playgroundClearable"
              :rounded="playgroundRounded"
              :floatingLabel="playgroundFloatingLabel"
              :showCount="playgroundShowCount"
              :maxLength="playgroundShowCount ? playgroundMaxLength : undefined"
              :elevation="playgroundElevation"
            />
          </div>
          
          <div class="playground-controls">
            <div class="control-group">
              <label>Label:</label>
              <input v-model="playgroundLabel" type="text" class="control-input" />
            </div>
            
            <div class="control-group">
              <label>Placeholder:</label>
              <input v-model="playgroundPlaceholder" type="text" class="control-input" />
            </div>
            
            <div class="control-group">
              <label>Variant:</label>
              <select v-model="playgroundVariant" class="control-select">
                <option value="default">Default</option>
                <option value="outlined">Outlined</option>
                <option value="filled">Filled</option>
                <option value="underlined">Underlined</option>
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
              <label>Type:</label>
              <select v-model="playgroundType" class="control-select">
                <option value="text">Text</option>
                <option value="password">Password</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="tel">Telephone</option>
                <option value="url">URL</option>
              </select>
            </div>
            
            <div class="control-group">
              <label>Icon (emoji):</label>
              <input v-model="playgroundIcon" type="text" class="control-input" placeholder="e.g. 🔍" />
            </div>
            
            <div class="control-group">
              <label>Icon Position:</label>
              <select v-model="playgroundIconPosition" class="control-select">
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
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
            
            <div class="control-group control-checkbox">
              <input id="disabled" v-model="playgroundDisabled" type="checkbox" />
              <label for="disabled">Disabled</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="readonly" v-model="playgroundReadonly" type="checkbox" />
              <label for="readonly">Readonly</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="required" v-model="playgroundRequired" type="checkbox" />
              <label for="required">Required</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="clearable" v-model="playgroundClearable" type="checkbox" />
              <label for="clearable">Clearable</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="rounded" v-model="playgroundRounded" type="checkbox" />
              <label for="rounded">Rounded</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="floatingLabel" v-model="playgroundFloatingLabel" type="checkbox" />
              <label for="floatingLabel">Floating Label</label>
            </div>
            
            <div class="control-group control-checkbox">
              <input id="showCount" v-model="playgroundShowCount" type="checkbox" />
              <label for="showCount">Show Character Count</label>
            </div>
            
            <div class="control-group" v-if="playgroundShowCount">
              <label>Max Length:</label>
              <input v-model.number="playgroundMaxLength" type="number" class="control-input" min="1" max="100" />
            </div>
          </div>
          
          <div class="playground-code">
            <div class="code-header">
              <span>Generated Code</span>
              <button @click="copyCode(`<CInput
  ${playgroundLabel ? `label='${playgroundLabel}' ` : ''}${playgroundPlaceholder ? `placeholder='${playgroundPlaceholder}' ` : ''}${playgroundVariant !== 'default' ? `variant='${playgroundVariant}' ` : ''}${playgroundSize !== 'md' ? `size='${playgroundSize}' ` : ''}${playgroundType !== 'text' ? `type='${playgroundType}' ` : ''}${playgroundIcon ? `icon='${playgroundIcon}' ` : ''}${playgroundIcon && playgroundIconPosition !== 'left' ? `iconPosition='${playgroundIconPosition}' ` : ''}${playgroundDisabled ? 'disabled ' : ''}${playgroundReadonly ? 'readonly ' : ''}${playgroundRequired ? 'required ' : ''}${playgroundClearable ? 'clearable ' : ''}${playgroundRounded ? 'rounded ' : ''}${playgroundFloatingLabel ? 'floatingLabel ' : ''}${playgroundShowCount ? 'showCount ' : ''}${playgroundShowCount ? `maxLength='${playgroundMaxLength}' ` : ''}${playgroundElevation !== 'none' ? `elevation='${playgroundElevation}' ` : ''}v-model='inputValue'
/>`)" class="copy-button">
                {{ copySuccess ? '✓ Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="component-demo-code"><code>&lt;CInput
  {{ playgroundLabel ? `label="${playgroundLabel}" ` : '' }}{{ playgroundPlaceholder ? `placeholder="${playgroundPlaceholder}" ` : '' }}{{ playgroundVariant !== 'default' ? `variant="${playgroundVariant}" ` : '' }}{{ playgroundSize !== 'md' ? `size="${playgroundSize}" ` : '' }}{{ playgroundType !== 'text' ? `type="${playgroundType}" ` : '' }}{{ playgroundIcon ? `icon="${playgroundIcon}" ` : '' }}{{ playgroundIcon && playgroundIconPosition !== 'left' ? `iconPosition="${playgroundIconPosition}" ` : '' }}{{ playgroundDisabled ? 'disabled ' : '' }}{{ playgroundReadonly ? 'readonly ' : '' }}{{ playgroundRequired ? 'required ' : '' }}{{ playgroundClearable ? 'clearable ' : '' }}{{ playgroundRounded ? 'rounded ' : '' }}{{ playgroundFloatingLabel ? 'floatingLabel ' : '' }}{{ playgroundShowCount ? 'showCount ' : '' }}{{ playgroundShowCount ? `maxLength="${playgroundMaxLength}" ` : '' }}{{ playgroundElevation !== 'none' ? `elevation="${playgroundElevation}" ` : '' }}v-model="inputValue"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <h2>Basic Usage</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput v-model="inputValue" placeholder="Enter text" />
        </div>
        <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;CInput v-model="inputValue" placeholder="Enter text" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const inputValue = ref('');
&lt;/script&gt;</code></pre>
      </div>

      <h2>With Label</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="Username" placeholder="Enter your username" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="Username" placeholder="Enter your username" /&gt;</code></pre>
      </div>

      <h2>Input Variants</h2>
      <p>
        The Input component comes with several variants to match different UI needs.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="Default" placeholder="Default variant" variant="default" />
          <CInput label="Outlined" placeholder="Outlined variant" variant="outlined" />
          <CInput label="Filled" placeholder="Filled variant" variant="filled" />
          <CInput label="Underlined" placeholder="Underlined variant" variant="underlined" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="Default" placeholder="Default variant" variant="default" /&gt;
&lt;CInput label="Outlined" placeholder="Outlined variant" variant="outlined" /&gt;
&lt;CInput label="Filled" placeholder="Filled variant" variant="filled" /&gt;
&lt;CInput label="Underlined" placeholder="Underlined variant" variant="underlined" /&gt;</code></pre>
      </div>

      <h2>Floating Labels</h2>
      <p>
        The Input component supports floating labels that animate when the input is focused or has a value.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="Floating Label" placeholder="Type something" floatingLabel />
          <CInput label="Floating Outlined" placeholder="Type something" floatingLabel variant="outlined" />
          <CInput label="Floating Filled" placeholder="Type something" floatingLabel variant="filled" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="Floating Label" placeholder="Type something" floatingLabel /&gt;
&lt;CInput label="Floating Outlined" placeholder="Type something" floatingLabel variant="outlined" /&gt;
&lt;CInput label="Floating Filled" placeholder="Type something" floatingLabel variant="filled" /&gt;</code></pre>
      </div>

      <h2>Input Types</h2>
      <p>
        The Input component supports various HTML input types.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput type="text" label="Text" placeholder="Enter text" />
          <CInput type="password" label="Password" placeholder="Enter password" />
          <CInput type="email" label="Email" placeholder="Enter email" />
          <CInput type="number" label="Number" placeholder="Enter number" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput type="text" label="Text" placeholder="Enter text" /&gt;
&lt;CInput type="password" label="Password" placeholder="Enter password" /&gt;
&lt;CInput type="email" label="Email" placeholder="Enter email" /&gt;
&lt;CInput type="number" label="Number" placeholder="Enter number" /&gt;</code></pre>
      </div>

      <h2>Icons and Addons</h2>
      <p>
        The Input component supports icons and addons like prefix and suffix.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="Left Icon" placeholder="Search..." icon="🔍" />
          <CInput label="Right Icon" placeholder="Enter email" icon="📧" iconPosition="right" />
          <CInput label="With Prefix" placeholder="Enter amount" prefix="$" />
          <CInput label="With Suffix" placeholder="Enter weight" suffix="kg" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="Left Icon" placeholder="Search..." icon="🔍" /&gt;
&lt;CInput label="Right Icon" placeholder="Enter email" icon="📧" iconPosition="right" /&gt;
&lt;CInput label="With Prefix" placeholder="Enter amount" prefix="$" /&gt;
&lt;CInput label="With Suffix" placeholder="Enter weight" suffix="kg" /&gt;</code></pre>
      </div>

      <h2>Character Count</h2>
      <p>
        The Input component can display a character count when a maximum length is set.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput 
            label="With Character Count" 
            placeholder="Limited to 20 characters"
            maxLength="20"
            showCount
          />
          <CInput 
            label="With Character Count" 
            placeholder="Limited to 50 characters"
            maxLength="50"
            showCount
            variant="filled"
          />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput 
  label="With Character Count" 
  placeholder="Limited to 20 characters"
  maxLength="20"
  showCount
/&gt;
&lt;CInput 
  label="With Character Count" 
  placeholder="Limited to 50 characters"
  maxLength="50"
  showCount
  variant="filled"
/&gt;</code></pre>
      </div>

      <h2>Sizes</h2>
      <p>
        The Input component comes in different sizes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="Extra Small" placeholder="XS size" size="xs" />
          <CInput label="Small" placeholder="Small size" size="sm" />
          <CInput label="Medium" placeholder="Medium size" size="md" />
          <CInput label="Large" placeholder="Large size" size="lg" />
          <CInput label="Extra Large" placeholder="XL size" size="xl" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="Extra Small" placeholder="XS size" size="xs" /&gt;
&lt;CInput label="Small" placeholder="Small size" size="sm" /&gt;
&lt;CInput label="Medium" placeholder="Medium size" size="md" /&gt; &lt;!-- Default --&gt;
&lt;CInput label="Large" placeholder="Large size" size="lg" /&gt;
&lt;CInput label="Extra Large" placeholder="XL size" size="xl" /&gt;</code></pre>
      </div>

      <h2>Elevation Levels</h2>
      <p>
        The Input component supports different elevation levels (shadow depths).
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="No Shadow" placeholder="No elevation" elevation="none" />
          <CInput label="Small Shadow" placeholder="Small elevation" elevation="sm" />
          <CInput label="Medium Shadow" placeholder="Medium elevation" elevation="md" />
          <CInput label="Large Shadow" placeholder="Large elevation" elevation="lg" />
          <CInput label="Extra Large Shadow" placeholder="XL elevation" elevation="xl" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="No Shadow" placeholder="No elevation" elevation="none" /&gt;
&lt;CInput label="Small Shadow" placeholder="Small elevation" elevation="sm" /&gt;
&lt;CInput label="Medium Shadow" placeholder="Medium elevation" elevation="md" /&gt;
&lt;CInput label="Large Shadow" placeholder="Large elevation" elevation="lg" /&gt;
&lt;CInput label="Extra Large Shadow" placeholder="XL elevation" elevation="xl" /&gt;</code></pre>
      </div>

      <h2>Special Features</h2>
      <p>
        The Input component supports special features like rounded corners, clearable inputs, and autofocus.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="Rounded Input" placeholder="With rounded corners" rounded />
          <CInput label="Clearable Input" placeholder="Type to see clear button" clearable v-model="emailValue" />
          <CInput label="Autofocus Input" placeholder="Automatically focused" autofocus />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="Rounded Input" placeholder="With rounded corners" rounded /&gt;
&lt;CInput label="Clearable Input" placeholder="Type to see clear button" clearable v-model="emailValue" /&gt;
&lt;CInput label="Autofocus Input" placeholder="Automatically focused" autofocus /&gt;</code></pre>
      </div>

      <h2>States</h2>
      <p>
        The Input component supports different states like disabled, readonly, error, and success.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CInput label="Disabled Input" disabled placeholder="This input is disabled" />
          <CInput label="Readonly Input" readonly value="This input is readonly" />
          <CInput label="With Error" error="This field is required" placeholder="Enter value" />
          <CInput label="Success Input" success value="Correct value" />
        </div>
        <pre class="component-demo-code"><code>&lt;CInput label="Disabled Input" disabled placeholder="This input is disabled" /&gt;
&lt;CInput label="Readonly Input" readonly value="This input is readonly" /&gt;
&lt;CInput label="With Error" error="This field is required" placeholder="Enter value" /&gt;
&lt;CInput label="Success Input" success value="Correct value" /&gt;</code></pre>
      </div>

      <h2>Events</h2>
      <p>
        The Input component emits various events that you can listen to.
      </p>

      <div class="component-demo">
        <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;CInput 
    v-model="username" 
    @focus="handleFocus"
    @blur="handleBlur"
    @clear="handleClear"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const username = ref('');

const handleFocus = (event) => {
  console.log('Input focused', event);
};

const handleBlur = (event) => {
  console.log('Input blurred', event);
};

const handleClear = () => {
  console.log('Input cleared');
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
              <td><code>modelValue</code></td>
              <td>String, Number</td>
              <td><code>''</code></td>
              <td>The input value (use with v-model)</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>String</td>
              <td><code>'text'</code></td>
              <td>Input type (text, password, email, number, etc.)</td>
            </tr>
            <tr>
              <td><code>label</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Label text for the input</td>
            </tr>
            <tr>
              <td><code>placeholder</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Placeholder text</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>String</td>
              <td><code>'default'</code></td>
              <td>Input style variant (default, outlined, filled, underlined)</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Input size (xs, sm, md, lg, xl)</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Disables the input</td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the input readonly</td>
            </tr>
            <tr>
              <td><code>required</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Marks the input as required</td>
            </tr>
            <tr>
              <td><code>error</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Error message to display</td>
            </tr>
            <tr>
              <td><code>success</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Indicates success state</td>
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
              <td>Position of the icon (left, right)</td>
            </tr>
            <tr>
              <td><code>clearable</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Adds a clear button when input has value</td>
            </tr>
            <tr>
              <td><code>floatingLabel</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Enables floating label animation</td>
            </tr>
            <tr>
              <td><code>rounded</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the input fully rounded</td>
            </tr>
            <tr>
              <td><code>prefix</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Text to display before the input value</td>
            </tr>
            <tr>
              <td><code>suffix</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Text to display after the input value</td>
            </tr>
            <tr>
              <td><code>maxLength</code></td>
              <td>Number</td>
              <td><code>null</code></td>
              <td>Maximum number of characters allowed</td>
            </tr>
            <tr>
              <td><code>showCount</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Shows character count when maxLength is set</td>
            </tr>
            <tr>
              <td><code>autofocus</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Automatically focuses the input on mount</td>
            </tr>
            <tr>
              <td><code>elevation</code></td>
              <td>String</td>
              <td><code>'none'</code></td>
              <td>Shadow elevation level (none, sm, md, lg, xl)</td>
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
              <td>Emitted when the input value changes (used by v-model)</td>
            </tr>
            <tr>
              <td><code>focus</code></td>
              <td>Emitted when the input is focused</td>
            </tr>
            <tr>
              <td><code>blur</code></td>
              <td>Emitted when the input loses focus</td>
            </tr>
            <tr>
              <td><code>clear</code></td>
              <td>Emitted when the clear button is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.input-docs {
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
  animation: fadeIn 0.6s ease-out;
}

.component-demo:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

.component-demo-preview {
  background-color: var(--white);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
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

.component-demo-code-container {
  position: relative;
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