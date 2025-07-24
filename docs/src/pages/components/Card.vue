<script setup>
import DocLayout from '../../components/layout/DocLayout.vue';
import { ref } from 'vue';

// Interactive playground state
const playgroundTitle = ref('Card Title');
const playgroundSubtitle = ref('Card Subtitle');
const playgroundVariant = ref('default');
const playgroundSize = ref('md');
const playgroundElevation = ref('sm');
const playgroundBorderRadius = ref('default');
const playgroundImage = ref('');
const playgroundImagePosition = ref('top');
const playgroundImageAspectRatio = ref('auto');
const playgroundHorizontal = ref(false);
const playgroundHover = ref(false);
const playgroundClickable = ref(false);
const playgroundGradient = ref(false);
const playgroundImageOverlay = ref(false);
const playgroundContent = ref('This is the card content. You can customize it in the playground.');

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
  <DocLayout title="Card Component">
    <div class="card-docs">
      <p class="intro-text">
        The Card component is a versatile and beautiful container component with various styles, layouts, and interactive features.
        Explore the examples below to see how to use it in your application.
      </p>

      <h2>Basic Usage</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CCard title="Card Title" subtitle="Card Subtitle">
            <p>This is a basic card with a title and subtitle. Cards are useful for organizing and displaying content.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard title="Card Title" subtitle="Card Subtitle"&gt;
  &lt;p&gt;This is a basic card with a title and subtitle. Cards are useful for organizing and displaying content.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>With Footer</h2>
      <div class="component-demo">
        <div class="component-demo-preview">
          <CCard title="Card with Footer">
            <p>This card includes a footer with action buttons.</p>
            <template #footer>
              <div class="card-actions">
                <CButton size="sm" variant="primary">Save</CButton>
                <CButton size="sm" variant="outline">Cancel</CButton>
              </div>
            </template>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard title="Card with Footer"&gt;
  &lt;p&gt;This card includes a footer with action buttons.&lt;/p&gt;
  &lt;template #footer&gt;
    &lt;div class="card-actions"&gt;
      &lt;CButton size="sm" variant="primary"&gt;Save&lt;/CButton&gt;
      &lt;CButton size="sm" variant="outline"&gt;Cancel&lt;/CButton&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/CCard&gt;

&lt;style scoped&gt;
.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
&lt;/style&gt;</code></pre>
      </div>

      <h2>Card Variants</h2>
      <p>
        The Card component comes with several variants to match different UI needs.
      </p>

      <h3>Standard Variants</h3>
      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard variant="default" title="Default Card">
            <p>Default variant card.</p>
          </CCard>
          
          <CCard variant="primary" title="Primary Card">
            <p>Primary variant card.</p>
          </CCard>
          
          <CCard variant="secondary" title="Secondary Card">
            <p>Secondary variant card.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard variant="default" title="Default Card"&gt;
  &lt;p&gt;Default variant card.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard variant="primary" title="Primary Card"&gt;
  &lt;p&gt;Primary variant card.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard variant="secondary" title="Secondary Card"&gt;
  &lt;p&gt;Secondary variant card.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h3>Color Variants</h3>
      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard variant="success" title="Success Card">
            <p>Success variant card.</p>
          </CCard>
          
          <CCard variant="warning" title="Warning Card">
            <p>Warning variant card.</p>
          </CCard>
          
          <CCard variant="error" title="Error Card">
            <p>Error variant card.</p>
          </CCard>
          
          <CCard variant="info" title="Info Card">
            <p>Info variant card.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard variant="success" title="Success Card"&gt;
  &lt;p&gt;Success variant card.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard variant="warning" title="Warning Card"&gt;
  &lt;p&gt;Warning variant card.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard variant="error" title="Error Card"&gt;
  &lt;p&gt;Error variant card.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard variant="info" title="Info Card"&gt;
  &lt;p&gt;Info variant card.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h3>Special Variants</h3>
      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard variant="outline" title="Outline Card">
            <p>Outline variant card.</p>
          </CCard>
          
          <CCard variant="flat" title="Flat Card">
            <p>Flat variant card without shadows.</p>
          </CCard>
          
          <CCard variant="glass" title="Glass Card" elevation="lg">
            <p>Glass variant card with backdrop blur effect.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard variant="outline" title="Outline Card"&gt;
  &lt;p&gt;Outline variant card.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard variant="flat" title="Flat Card"&gt;
  &lt;p&gt;Flat variant card without shadows.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard variant="glass" title="Glass Card" elevation="lg"&gt;
  &lt;p&gt;Glass variant card with backdrop blur effect.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>Cards with Images</h2>
      <p>
        The Card component supports images in various positions.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard 
            title="Top Image" 
            image="../../assets/creamUsageImage.png"
            imageAlt="Top image"
          >
            <p>Card with an image at the top.</p>
          </CCard>
          
          <CCard 
            title="Bottom Image" 
            image="../../assets/creamUsageImage.png"
            imageAlt="Bottom image"
            imagePosition="bottom"
          >
            <p>Card with an image at the bottom.</p>
          </CCard>
          
          <CCard 
            title="Image with Overlay" 
            image="../../assets/creamUsageImage.png"
            imageAlt="Overlay image"
            imageOverlay
          >
            <p>Card with an image overlay effect.</p>
          </CCard>
          
          <CCard 
            title="Background Image" 
            image="../../assets/creamUsageImage.png"
            imageAlt="Background image"
            imagePosition="background"
            imageOverlay
          >
            <p>Card with a background image with overlay.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard 
  title="Top Image" 
  image="../../assets/creamUsageImage.png"
  imageAlt="Top image"
&gt;
  &lt;p&gt;Card with an image at the top.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="Bottom Image" 
  image="../../assets/creamUsageImage.png"
  imageAlt="Bottom image"
  imagePosition="bottom"
&gt;
  &lt;p&gt;Card with an image at the bottom.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="Image with Overlay" 
  image="../../assets/creamUsageImage.png"
  imageAlt="Overlay image"
  imageOverlay
&gt;
  &lt;p&gt;Card with an image overlay effect.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="Background Image" 
  image="../../assets/creamUsageImage.png"
  imageAlt="Background image"
  imagePosition="background"
  imageOverlay
&gt;
  &lt;p&gt;Card with a background image with overlay.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>Image Aspect Ratios</h2>
      <p>
        The Card component supports different image aspect ratios.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard 
            title="1:1 Ratio" 
            image="../../assets/creamUsageImage.png"
            imageAlt="Square image"
            imageAspectRatio="1:1"
          >
            <p>Card with a square image (1:1 ratio).</p>
          </CCard>
          
          <CCard 
            title="4:3 Ratio" 
            image="../../assets/creamUsageImage.png"
            imageAlt="4:3 image"
            imageAspectRatio="4:3"
          >
            <p>Card with a 4:3 aspect ratio image.</p>
          </CCard>
          
          <CCard 
            title="16:9 Ratio" 
            image="../../assets/creamUsageImage.png"
            imageAlt="16:9 image"
            imageAspectRatio="16:9"
          >
            <p>Card with a 16:9 aspect ratio image.</p>
          </CCard>
          
          <CCard 
            title="21:9 Ratio" 
            image="../../assets/creamUsageImage.png"
            imageAlt="21:9 image"
            imageAspectRatio="21:9"
          >
            <p>Card with a 21:9 aspect ratio image.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard 
  title="1:1 Ratio" 
  image="../../assets/creamUsageImage.png"
  imageAlt="Square image"
  imageAspectRatio="1:1"
&gt;
  &lt;p&gt;Card with a square image (1:1 ratio).&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="4:3 Ratio" 
  image="../../assets/creamUsageImage.png"
  imageAlt="4:3 image"
  imageAspectRatio="4:3"
&gt;
  &lt;p&gt;Card with a 4:3 aspect ratio image.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="16:9 Ratio" 
  image="../../assets/creamUsageImage.png"
  imageAlt="16:9 image"
  imageAspectRatio="16:9"
&gt;
  &lt;p&gt;Card with a 16:9 aspect ratio image.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="21:9 Ratio" 
  image="../../assets/creamUsageImage.png"
  imageAlt="21:9 image"
  imageAspectRatio="21:9"
&gt;
  &lt;p&gt;Card with a 21:9 aspect ratio image.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>Horizontal Layout</h2>
      <p>
        The Card component supports horizontal layout with images on either side.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview">
          <CCard 
            title="Left Image" 
            subtitle="Horizontal card with left image"
            image="../../assets/creamUsageImage.png"
            imageAlt="Left image"
            horizontal
            imagePosition="left"
            elevation="md"
            class="mb-md"
          >
            <p>This is a horizontal card with an image on the left side. Horizontal cards are great for displaying content with a visual element.</p>
          </CCard>
          
          <CCard 
            title="Right Image" 
            subtitle="Horizontal card with right image"
            image="../../assets/creamUsageImage.png"
            imageAlt="Right image"
            horizontal
            imagePosition="right"
            elevation="md"
          >
            <p>This is a horizontal card with an image on the right side. You can position the image on either side of the content.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard 
  title="Left Image" 
  subtitle="Horizontal card with left image"
  image="../../assets/creamUsageImage.png"
  imageAlt="Left image"
  horizontal
  imagePosition="left"
  elevation="md"
&gt;
  &lt;p&gt;This is a horizontal card with an image on the left side. Horizontal cards are great for displaying content with a visual element.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="Right Image" 
  subtitle="Horizontal card with right image"
  image="../../assets/creamUsageImage.png"
  imageAlt="Right image"
  horizontal
  imagePosition="right"
  elevation="md"
&gt;
  &lt;p&gt;This is a horizontal card with an image on the right side. You can position the image on either side of the content.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>Elevation Levels</h2>
      <p>
        The Card component supports different elevation levels (shadow depths).
      </p>

      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard title="No Shadow" elevation="none">
            <p>Card with no shadow.</p>
          </CCard>
          
          <CCard title="Small Shadow" elevation="sm">
            <p>Card with small shadow.</p>
          </CCard>
          
          <CCard title="Medium Shadow" elevation="md">
            <p>Card with medium shadow.</p>
          </CCard>
          
          <CCard title="Large Shadow" elevation="lg">
            <p>Card with large shadow.</p>
          </CCard>
          
          <CCard title="Extra Large Shadow" elevation="xl">
            <p>Card with extra large shadow.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard title="No Shadow" elevation="none"&gt;
  &lt;p&gt;Card with no shadow.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Small Shadow" elevation="sm"&gt;
  &lt;p&gt;Card with small shadow.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Medium Shadow" elevation="md"&gt;
  &lt;p&gt;Card with medium shadow.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Large Shadow" elevation="lg"&gt;
  &lt;p&gt;Card with large shadow.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Extra Large Shadow" elevation="xl"&gt;
  &lt;p&gt;Card with extra large shadow.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>Border Radius Options</h2>
      <p>
        The Card component supports different border radius options.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard title="No Radius" borderRadius="none">
            <p>Card with no border radius.</p>
          </CCard>
          
          <CCard title="Small Radius" borderRadius="sm">
            <p>Card with small border radius.</p>
          </CCard>
          
          <CCard title="Default Radius" borderRadius="default">
            <p>Card with default border radius.</p>
          </CCard>
          
          <CCard title="Large Radius" borderRadius="lg">
            <p>Card with large border radius.</p>
          </CCard>
          
          <CCard title="Extra Large Radius" borderRadius="xl">
            <p>Card with extra large border radius.</p>
          </CCard>
          
          <CCard title="Full Radius" borderRadius="full">
            <p>Card with fully rounded corners.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard title="No Radius" borderRadius="none"&gt;
  &lt;p&gt;Card with no border radius.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Small Radius" borderRadius="sm"&gt;
  &lt;p&gt;Card with small border radius.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Default Radius" borderRadius="default"&gt;
  &lt;p&gt;Card with default border radius.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Large Radius" borderRadius="lg"&gt;
  &lt;p&gt;Card with large border radius.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Extra Large Radius" borderRadius="xl"&gt;
  &lt;p&gt;Card with extra large border radius.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Full Radius" borderRadius="full"&gt;
  &lt;p&gt;Card with fully rounded corners.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>Interactive Cards</h2>
      <p>
        The Card component supports interactive features like hover effects and clickable cards.
      </p>

      <div class="component-demo">
        <div class="component-demo-preview card-grid">
          <CCard title="Hover Effect" hover elevation="sm">
            <p>This card has a hover effect. Try hovering over it!</p>
          </CCard>
          
          <CCard title="Clickable Card" clickable elevation="sm">
            <p>This card is clickable. Try clicking it!</p>
          </CCard>
          
          <CCard 
            title="Hover with Image Zoom" 
            image="../../assets/creamUsageImage.png"
            imageAlt="Zoom image"
            hover
            elevation="sm"
          >
            <p>This card has an image that zooms on hover.</p>
          </CCard>
          
          <CCard 
            title="Gradient Card" 
            variant="primary" 
            gradient
          >
            <p>This card has a gradient background effect.</p>
          </CCard>
        </div>
        <pre class="component-demo-code"><code>&lt;CCard title="Hover Effect" hover elevation="sm"&gt;
  &lt;p&gt;This card has a hover effect. Try hovering over it!&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard title="Clickable Card" clickable elevation="sm"&gt;
  &lt;p&gt;This card is clickable. Try clicking it!&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="Hover with Image Zoom" 
  image="../../assets/creamUsageImage.png"
  imageAlt="Zoom image"
  hover
  elevation="sm"
&gt;
  &lt;p&gt;This card has an image that zooms on hover.&lt;/p&gt;
&lt;/CCard&gt;

&lt;CCard 
  title="Gradient Card" 
  variant="primary" 
  gradient
&gt;
  &lt;p&gt;This card has a gradient background effect.&lt;/p&gt;
&lt;/CCard&gt;</code></pre>
      </div>

      <h2>Events</h2>
      <p>
        The Card component emits events when it's clicked (if clickable).
      </p>

      <div class="component-demo">
        <pre class="component-demo-code"><code>&lt;template&gt;
  &lt;CCard 
    title="Clickable Card" 
    clickable
    @click="handleCardClick"
  &gt;
    &lt;p&gt;Click this card to trigger an action.&lt;/p&gt;
  &lt;/CCard&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleCardClick = (event) => {
  console.log('Card clicked', event);
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
              <td><code>title</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Card title</td>
            </tr>
            <tr>
              <td><code>subtitle</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Card subtitle</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>String</td>
              <td><code>'default'</code></td>
              <td>Card style variant (default, primary, secondary, success, warning, error, info, outline, flat, glass)</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>String</td>
              <td><code>'md'</code></td>
              <td>Card size (sm, md, lg, xl)</td>
            </tr>
            <tr>
              <td><code>image</code></td>
              <td>String</td>
              <td><code>''</code></td>
              <td>URL of the image to display</td>
            </tr>
            <tr>
              <td><code>imageAlt</code></td>
              <td>String</td>
              <td><code>'Card image'</code></td>
              <td>Alt text for the image</td>
            </tr>
            <tr>
              <td><code>imagePosition</code></td>
              <td>String</td>
              <td><code>'top'</code></td>
              <td>Position of the image (top, bottom, left, right, background)</td>
            </tr>
            <tr>
              <td><code>imageOverlay</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Adds an overlay gradient effect to the image</td>
            </tr>
            <tr>
              <td><code>imageAspectRatio</code></td>
              <td>String</td>
              <td><code>'auto'</code></td>
              <td>Aspect ratio of the image (auto, 1:1, 4:3, 16:9, 21:9)</td>
            </tr>
            <tr>
              <td><code>horizontal</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the card layout horizontal</td>
            </tr>
            <tr>
              <td><code>hover</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Adds hover effect to the card</td>
            </tr>
            <tr>
              <td><code>clickable</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Makes the card clickable</td>
            </tr>
            <tr>
              <td><code>elevation</code></td>
              <td>String</td>
              <td><code>'sm'</code></td>
              <td>Shadow elevation level (none, sm, md, lg, xl)</td>
            </tr>
            <tr>
              <td><code>borderRadius</code></td>
              <td>String</td>
              <td><code>'default'</code></td>
              <td>Border radius size (none, sm, default, lg, xl, full)</td>
            </tr>
            <tr>
              <td><code>gradient</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Adds a gradient background effect</td>
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
              <td>Emitted when the card is clicked (if clickable)</td>
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
              <td>The main content of the card</td>
            </tr>
            <tr>
              <td>header</td>
              <td>Custom header content (replaces the title and subtitle)</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>Footer content for the card</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocLayout>
</template>

<style scoped>
.card-docs {
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-md);
  animation: fadeIn 0.8s ease-out;
}

.card-grid > * {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-grid > *:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.component-demo-code {
  background-color: var(--gray-100);
  padding: var(--spacing-md);
  border-radius: 0;
  overflow-x: auto;
  margin: 0;
  transition: all 0.2s ease;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.mb-md {
  margin-bottom: var(--spacing-md);
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