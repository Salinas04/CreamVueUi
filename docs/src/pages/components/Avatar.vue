<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Interactive playground state
const playgroundSize = ref('md');
const playgroundShape = ref('circle');
const playgroundVariant = ref('default');
const playgroundInitials = ref('JD');
const playgroundSrc = ref('');
const playgroundStatus = ref('');
const playgroundStatusPosition = ref('bottom-right');

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
  <DocLayout title="Avatar Component">
    <div class="avatar-docs">
      <p class="intro-text">
        The Avatar component is used to represent a user or entity with an image, initials, or icon.
        It supports various sizes, shapes, and status indicators.
      </p>

      <h2>Basic Usage</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CAvatar src="https://i.pravatar.cc/300" alt="User avatar" />
        </div>
        <pre class="component-demo-code"><code>&lt;CAvatar src="https://i.pravatar.cc/300" alt="User avatar" /&gt;</code></pre>
      </div>

      <h2>Avatar with Initials</h2>
      <p>
        When no image is available, the Avatar can display initials.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview avatar-grid">
          <CAvatar initials="JD" />
          <CAvatar initials="AB" variant="primary" />
          <CAvatar initials="CD" variant="secondary" />
          <CAvatar initials="EF" variant="success" />
        </div>
        <pre class="component-demo-code"><code>&lt;CAvatar initials="JD" /&gt;
&lt;CAvatar initials="AB" variant="primary" /&gt;
&lt;CAvatar initials="CD" variant="secondary" /&gt;
&lt;CAvatar initials="EF" variant="success" /&gt;</code></pre>
      </div>

      <h2>Avatar Sizes</h2>
      <p>
        The Avatar component comes in different sizes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview avatar-grid">
          <CAvatar size="xs" initials="XS" />
          <CAvatar size="sm" initials="SM" />
          <CAvatar size="md" initials="MD" />
          <CAvatar size="lg" initials="LG" />
          <CAvatar size="xl" initials="XL" />
        </div>
        <pre class="component-demo-code"><code>&lt;CAvatar size="xs" initials="XS" /&gt;
&lt;CAvatar size="sm" initials="SM" /&gt;
&lt;CAvatar size="md" initials="MD" /&gt;
&lt;CAvatar size="lg" initials="LG" /&gt;
&lt;CAvatar size="xl" initials="XL" /&gt;</code></pre>
      </div>

      <h2>Avatar Shapes</h2>
      <p>
        The Avatar component supports different shapes.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview avatar-grid">
          <CAvatar shape="circle" src="https://i.pravatar.cc/300?img=1" alt="Circle avatar" />
          <CAvatar shape="square" src="https://i.pravatar.cc/300?img=2" alt="Square avatar" />
          <CAvatar shape="rounded" src="https://i.pravatar.cc/300?img=3" alt="Rounded avatar" />
        </div>
        <pre class="component-demo-code"><code>&lt;CAvatar shape="circle" src="https://i.pravatar.cc/300?img=1" alt="Circle avatar" /&gt;
&lt;CAvatar shape="square" src="https://i.pravatar.cc/300?img=2" alt="Square avatar" /&gt;
&lt;CAvatar shape="rounded" src="https://i.pravatar.cc/300?img=3" alt="Rounded avatar" /&gt;</code></pre>
      </div>

      <h2>Avatar Variants</h2>
      <p>
        The Avatar component comes with several color variants for initials or fallback display.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview avatar-grid">
          <CAvatar variant="default" initials="DE" />
          <CAvatar variant="primary" initials="PR" />
          <CAvatar variant="secondary" initials="SE" />
          <CAvatar variant="success" initials="SU" />
          <CAvatar variant="warning" initials="WA" />
          <CAvatar variant="error" initials="ER" />
          <CAvatar variant="info" initials="IN" />
        </div>
        <pre class="component-demo-code"><code>&lt;CAvatar variant="default" initials="DE" /&gt;
&lt;CAvatar variant="primary" initials="PR" /&gt;
&lt;CAvatar variant="secondary" initials="SE" /&gt;
&lt;CAvatar variant="success" initials="SU" /&gt;
&lt;CAvatar variant="warning" initials="WA" /&gt;
&lt;CAvatar variant="error" initials="ER" /&gt;
&lt;CAvatar variant="info" initials="IN" /&gt;</code></pre>
      </div>

      <h2>Avatar with Status</h2>
      <p>
        The Avatar component can display a status indicator.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview avatar-grid">
          <CAvatar 
            src="https://i.pravatar.cc/300?img=4" 
            alt="Online user" 
            status="online" 
          />
          <CAvatar 
            src="https://i.pravatar.cc/300?img=5" 
            alt="Busy user" 
            status="busy" 
          />
          <CAvatar 
            src="https://i.pravatar.cc/300?img=6" 
            alt="Away user" 
            status="away" 
          />
          <CAvatar 
            src="https://i.pravatar.cc/300?img=7" 
            alt="Offline user" 
            status="offline" 
          />
        </div>
        <pre class="component-demo-code"><code>&lt;CAvatar 
  src="https://i.pravatar.cc/300?img=4" 
  alt="Online user" 
  status="online" 
/&gt;
&lt;CAvatar 
  src="https://i.pravatar.cc/300?img=5" 
  alt="Busy user" 
  status="busy" 
/&gt;
&lt;CAvatar 
  src="https://i.pravatar.cc/300?img=6" 
  alt="Away user" 
  status="away" 
/&gt;
&lt;CAvatar 
  src="https://i.pravatar.cc/300?img=7" 
  alt="Offline user" 
  status="offline" 
/&gt;</code></pre>
      </div>

      <h2>Status Position</h2>
      <p>
        The status indicator can be positioned in different corners of the Avatar.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview avatar-grid">
          <CAvatar 
            initials="TR" 
            status="online" 
            statusPosition="top-right" 
          />
          <CAvatar 
            initials="TL" 
            status="online" 
            statusPosition="top-left" 
          />
          <CAvatar 
            initials="BR" 
            status="online" 
            statusPosition="bottom-right" 
          />
          <CAvatar 
            initials="BL" 
            status="online" 
            statusPosition="bottom-left" 
          />
        </div>
        <pre class="component-demo-code"><code>&lt;CAvatar 
  initials="TR" 
  status="online" 
  statusPosition="top-right" 
/&gt;
&lt;CAvatar 
  initials="TL" 
  status="online" 
  statusPosition="top-left" 
/&gt;
&lt;CAvatar 
  initials="BR" 
  status="online" 
  statusPosition="bottom-right" 
/&gt;
&lt;CAvatar 
  initials="BL" 
  status="online" 
  statusPosition="bottom-left" 
/&gt;</code></pre>
      </div>

      <h2>Avatar Group</h2>
      <p>
        Multiple Avatars can be grouped together with an overlap effect.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <div style="display: flex;">
            <CAvatar 
              src="https://i.pravatar.cc/300?img=8" 
              alt="User 1" 
              style="margin-right: -8px; border: 2px solid white;" 
            />
            <CAvatar 
              src="https://i.pravatar.cc/300?img=9" 
              alt="User 2" 
              style="margin-right: -8px; border: 2px solid white;" 
            />
            <CAvatar 
              src="https://i.pravatar.cc/300?img=10" 
              alt="User 3" 
              style="margin-right: -8px; border: 2px solid white;" 
            />
            <CAvatar 
              initials="+5" 
              variant="primary" 
              style="border: 2px solid white;" 
            />
          </div>
        </div>
        <pre class="component-demo-code"><code>&lt;div style="display: flex;"&gt;
  &lt;CAvatar 
    src="https://i.pravatar.cc/300?img=8" 
    alt="User 1" 
    style="margin-right: -8px; border: 2px solid white;" 
  /&gt;
  &lt;CAvatar 
    src="https://i.pravatar.cc/300?img=9" 
    alt="User 2" 
    style="margin-right: -8px; border: 2px solid white;" 
  /&gt;
  &lt;CAvatar 
    src="https://i.pravatar.cc/300?img=10" 
    alt="User 3" 
    style="margin-right: -8px; border: 2px solid white;" 
  /&gt;
  &lt;CAvatar 
    initials="+5" 
    variant="primary" 
    style="border: 2px solid white;" 
  /&gt;
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
              <td><code>src</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>URL of the avatar image</td>
            </tr>
            <tr>
              <td><code>alt</code></td>
              <td>String</td>
              <td><code>'Avatar'</code></td>
              <td>Alt text for the avatar image</td>
            </tr>
            <tr>
              <td><code>initials</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Initials to display when no image is available</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Avatar size (xs, sm, md, lg, xl)</td>
            </tr>
            <tr>
              <td><code>shape</code></td>
              <td>String</td>
              <td><code>'circle'</code></td>
              <td>Avatar shape (circle, square, rounded)</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>String</td>
              <td><code>'default'</code></td>
              <td>Color variant for initials or fallback (default, primary, secondary, success, warning, error, info)</td>
            </tr>
            <tr>
              <td><code>status</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Status indicator (online, busy, away, offline)</td>
            </tr>
            <tr>
              <td><code>statusPosition</code></td>
              <td>String</td>
              <td><code>'bottom-right'</code></td>
              <td>Position of the status indicator (top-right, top-left, bottom-right, bottom-left)</td>
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
              <td>Emitted when the avatar is clicked</td>
            </tr>
            <tr>
              <td><code>error</code></td>
              <td>Emitted when the image fails to load</td>
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
              <td>Custom content to display instead of image or initials</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.avatar-docs {
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

.avatar-grid {
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