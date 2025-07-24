<script setup>
// Import components from our library
import Button from './lib/components/Button/Button.vue';
import Input from './lib/components/Input/Input.vue';
import Card from './lib/components/Card/Card.vue';
import Alert from './lib/components/Alert/Alert.vue';

// Import styles
import './lib/styles/variables.css';
import './lib/styles/base.css';

// Component state
import { ref } from 'vue';
const name = ref('');
const showSuccessAlert = ref(true);
const showErrorAlert = ref(true);
</script>

<template>
  <div class="container">
    <header class="header">
      <h1>Cream Vue UI</h1>
      <p class="subtitle">A beautiful and functional UI component library for Vue 3</p>
    </header>

    <section class="section">
      <h2>Buttons</h2>
      <div class="component-demo">
        <h3 class="demo-title">Standard Variants</h3>
        <div class="demo-row">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
          <Button variant="info">Info</Button>
        </div>

        <h3 class="demo-title">New Variants</h3>
        <div class="demo-row">
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
          <Button variant="glass">Glass</Button>
          <Button variant="soft">Soft</Button>
        </div>

        <h3 class="demo-title">States</h3>
        <div class="demo-row">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button loading loadingType="dots">Loading Dots</Button>
          <Button loading loadingType="pulse">Loading Pulse</Button>
        </div>

        <h3 class="demo-title">Sizes</h3>
        <div class="demo-row">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>

        <h3 class="demo-title">Icon Positions</h3>
        <div class="demo-row">
          <Button icon="🚀">Left Icon</Button>
          <Button icon="🔍" iconPosition="right">Right Icon</Button>
          <Button icon="❤️" iconOnly tooltip="Favorite"></Button>
          <Button icon="🔔" iconOnly rounded tooltip="Notifications"></Button>
        </div>

        <h3 class="demo-title">Tooltips</h3>
        <div class="demo-row">
          <Button tooltip="This is a tooltip">Hover Me</Button>
          <Button variant="primary" tooltip="Primary action">Primary with Tooltip</Button>
          <Button variant="error" tooltip="Delete item">Delete</Button>
        </div>

        <h3 class="demo-title">Elevation Levels</h3>
        <div class="demo-row">
          <Button elevation="none">No Shadow</Button>
          <Button elevation="sm">Small Shadow</Button>
          <Button elevation="md">Medium Shadow</Button>
          <Button elevation="lg">Large Shadow</Button>
          <Button elevation="xl">Extra Large Shadow</Button>
        </div>

        <h3 class="demo-title">Special Combinations</h3>
        <div class="demo-row">
          <Button variant="primary" rounded icon="🚀">Rounded with Icon</Button>
          <Button variant="glass" elevation="lg" icon="✨" iconPosition="right">Glass with Shadow</Button>
          <Button variant="soft" rounded tooltip="Soft rounded button">Soft Rounded</Button>
        </div>

        <h3 class="demo-title">Full Width</h3>
        <div class="demo-row">
          <Button block>Block Button</Button>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Inputs</h2>
      <div class="component-demo">
        <h3 class="demo-title">Basic Inputs</h3>
        <div class="demo-row">
          <Input 
            v-model="name" 
            label="Name" 
            placeholder="Enter your name"
          />
          <Input 
            type="password" 
            label="Password" 
            placeholder="Enter your password"
          />
        </div>

        <h3 class="demo-title">Input Variants</h3>
        <div class="demo-row">
          <Input 
            label="Default" 
            placeholder="Default variant"
            variant="default"
          />
          <Input 
            label="Outlined" 
            placeholder="Outlined variant"
            variant="outlined"
          />
          <Input 
            label="Filled" 
            placeholder="Filled variant"
            variant="filled"
          />
          <Input 
            label="Underlined" 
            placeholder="Underlined variant"
            variant="underlined"
          />
        </div>

        <h3 class="demo-title">Floating Labels</h3>
        <div class="demo-row">
          <Input 
            label="Floating Label" 
            placeholder="Type something"
            floatingLabel
          />
          <Input 
            label="Floating Outlined" 
            placeholder="Type something"
            floatingLabel
            variant="outlined"
          />
          <Input 
            label="Floating Filled" 
            placeholder="Type something"
            floatingLabel
            variant="filled"
          />
        </div>

        <h3 class="demo-title">Icons and Addons</h3>
        <div class="demo-row">
          <Input 
            label="Left Icon" 
            placeholder="Search..."
            icon="🔍"
          />
          <Input 
            label="Right Icon" 
            placeholder="Enter email"
            icon="📧"
            iconPosition="right"
          />
          <Input 
            label="With Prefix" 
            placeholder="Enter amount"
            prefix="$"
          />
          <Input 
            label="With Suffix" 
            placeholder="Enter weight"
            suffix="kg"
          />
        </div>

        <h3 class="demo-title">Character Count</h3>
        <div class="demo-row">
          <Input 
            label="With Character Count" 
            placeholder="Limited to 20 characters"
            maxLength="20"
            showCount
          />
          <Input 
            label="With Character Count" 
            placeholder="Limited to 50 characters"
            maxLength="50"
            showCount
            variant="filled"
          />
        </div>

        <h3 class="demo-title">Sizes</h3>
        <div class="demo-row">
          <Input 
            label="Extra Small" 
            placeholder="XS size"
            size="xs"
          />
          <Input 
            label="Small" 
            placeholder="Small size"
            size="sm"
          />
          <Input 
            label="Medium" 
            placeholder="Medium size"
            size="md"
          />
          <Input 
            label="Large" 
            placeholder="Large size"
            size="lg"
          />
          <Input 
            label="Extra Large" 
            placeholder="XL size"
            size="xl"
          />
        </div>

        <h3 class="demo-title">Elevation Levels</h3>
        <div class="demo-row">
          <Input 
            label="No Shadow" 
            placeholder="No elevation"
            elevation="none"
          />
          <Input 
            label="Small Shadow" 
            placeholder="Small elevation"
            elevation="sm"
          />
          <Input 
            label="Medium Shadow" 
            placeholder="Medium elevation"
            elevation="md"
          />
          <Input 
            label="Large Shadow" 
            placeholder="Large elevation"
            elevation="lg"
          />
          <Input 
            label="Extra Large Shadow" 
            placeholder="XL elevation"
            elevation="xl"
          />
        </div>

        <h3 class="demo-title">Special Features</h3>
        <div class="demo-row">
          <Input 
            label="Rounded Input" 
            placeholder="With rounded corners"
            rounded
          />
          <Input 
            label="Clearable Input" 
            placeholder="Type to see clear button"
            clearable
          />
          <Input 
            label="Autofocus Input" 
            placeholder="Automatically focused"
            autofocus
          />
        </div>

        <h3 class="demo-title">States</h3>
        <div class="demo-row">
          <Input 
            label="Disabled Input" 
            disabled 
            placeholder="This input is disabled"
          />
          <Input 
            label="Readonly Input" 
            readonly 
            value="This input is readonly"
          />
          <Input 
            label="With Error" 
            error="This field is required" 
            placeholder="Enter value"
          />
          <Input 
            label="Success Input" 
            success 
            value="Correct value"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Cards</h2>
      
      <h3 class="demo-title">Basic Cards</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="Default Card" 
          subtitle="A simple card component"
          elevation="md"
        >
          <p>This is a basic card with a title and subtitle. Cards are useful for organizing and displaying content.</p>
          <template #footer>
            <div class="card-actions">
              <Button size="sm">Action</Button>
              <Button size="sm" variant="text">Cancel</Button>
            </div>
          </template>
        </Card>

        <Card 
          title="Primary Card" 
          variant="primary"
          elevation="md"
        >
          <p>This is a primary variant card with a colored header.</p>
          <template #footer>
            <div class="card-actions">
              <Button size="sm" variant="outline">Learn More</Button>
            </div>
          </template>
        </Card>

        <Card 
          title="Secondary Card" 
          variant="secondary"
          elevation="md"
        >
          <p>This is a secondary variant card with a colored header.</p>
        </Card>

        <Card 
          variant="outline" 
          title="Outline Card"
          clickable
        >
          <p>This is an outline variant card that is clickable.</p>
        </Card>
      </div>
      
      <h3 class="demo-title">Color Variants</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="Success Card" 
          variant="success"
        >
          <p>This is a success variant card.</p>
        </Card>

        <Card 
          title="Warning Card" 
          variant="warning"
        >
          <p>This is a warning variant card.</p>
        </Card>

        <Card 
          title="Error Card" 
          variant="error"
        >
          <p>This is an error variant card.</p>
        </Card>

        <Card 
          title="Info Card" 
          variant="info"
        >
          <p>This is an info variant card.</p>
        </Card>
      </div>
      
      <h3 class="demo-title">Special Variants</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="Glass Card" 
          variant="glass"
          elevation="lg"
        >
          <p>This card has a modern glass effect with backdrop blur.</p>
        </Card>

        <Card 
          title="Flat Card" 
          variant="flat"
        >
          <p>This is a flat card without shadows.</p>
        </Card>

        <Card 
          title="Gradient Card" 
          variant="primary"
          gradient
        >
          <p>This card has a gradient background effect.</p>
        </Card>
      </div>
      
      <h3 class="demo-title">Cards with Images</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="Top Image" 
          image="https://via.placeholder.com/300x150/42b883/FFFFFF?text=Cream+Vue+UI"
          imageAlt="Cream Vue UI Demo"
          hover
        >
          <p>This card includes an image at the top and has a hover effect.</p>
        </Card>

        <Card 
          title="Bottom Image" 
          image="https://via.placeholder.com/300x150/35495e/FFFFFF?text=Cream+Vue+UI"
          imageAlt="Cream Vue UI Demo"
          imagePosition="bottom"
        >
          <p>This card includes an image at the bottom.</p>
        </Card>

        <Card 
          title="Image with Overlay" 
          image="https://via.placeholder.com/300x150/3b82f6/FFFFFF?text=Cream+Vue+UI"
          imageAlt="Cream Vue UI Demo"
          imageOverlay
        >
          <p>This card has an image with an overlay gradient effect.</p>
        </Card>

        <Card 
          title="Background Image" 
          image="https://via.placeholder.com/300x150/f59e0b/FFFFFF?text=Cream+Vue+UI"
          imageAlt="Cream Vue UI Demo"
          imagePosition="background"
          imageOverlay
        >
          <p>This card has a background image with overlay.</p>
        </Card>
      </div>
      
      <h3 class="demo-title">Image Aspect Ratios</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="1:1 Ratio" 
          image="https://via.placeholder.com/300x300/42b883/FFFFFF?text=1:1"
          imageAlt="Square Image"
          imageAspectRatio="1:1"
        >
          <p>This card has a square image (1:1 ratio).</p>
        </Card>

        <Card 
          title="4:3 Ratio" 
          image="https://via.placeholder.com/400x300/35495e/FFFFFF?text=4:3"
          imageAlt="4:3 Image"
          imageAspectRatio="4:3"
        >
          <p>This card has a 4:3 aspect ratio image.</p>
        </Card>

        <Card 
          title="16:9 Ratio" 
          image="https://via.placeholder.com/400x225/3b82f6/FFFFFF?text=16:9"
          imageAlt="16:9 Image"
          imageAspectRatio="16:9"
        >
          <p>This card has a 16:9 aspect ratio image.</p>
        </Card>

        <Card 
          title="21:9 Ratio" 
          image="https://via.placeholder.com/420x180/f59e0b/FFFFFF?text=21:9"
          imageAlt="21:9 Image"
          imageAspectRatio="21:9"
        >
          <p>This card has a 21:9 aspect ratio image.</p>
        </Card>
      </div>
      
      <h3 class="demo-title">Horizontal Cards</h3>
      <div class="component-demo">
        <Card 
          title="Left Image" 
          subtitle="Horizontal card with left image"
          image="https://via.placeholder.com/300x200/42b883/FFFFFF?text=Left"
          imageAlt="Left Image"
          horizontal
          imagePosition="left"
          elevation="md"
          class="mb-md"
        >
          <p>This is a horizontal card with an image on the left side. Horizontal cards are great for displaying content with a visual element.</p>
          <template #footer>
            <div class="card-actions">
              <Button size="sm" variant="primary">Action</Button>
            </div>
          </template>
        </Card>
        
        <Card 
          title="Right Image" 
          subtitle="Horizontal card with right image"
          image="https://via.placeholder.com/300x200/35495e/FFFFFF?text=Right"
          imageAlt="Right Image"
          horizontal
          imagePosition="right"
          elevation="md"
        >
          <p>This is a horizontal card with an image on the right side. You can position the image on either side of the content.</p>
          <template #footer>
            <div class="card-actions">
              <Button size="sm" variant="primary">Action</Button>
            </div>
          </template>
        </Card>
      </div>
      
      <h3 class="demo-title">Elevation Levels</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="No Shadow" 
          elevation="none"
        >
          <p>This card has no shadow.</p>
        </Card>

        <Card 
          title="Small Shadow" 
          elevation="sm"
        >
          <p>This card has a small shadow.</p>
        </Card>

        <Card 
          title="Medium Shadow" 
          elevation="md"
        >
          <p>This card has a medium shadow.</p>
        </Card>

        <Card 
          title="Large Shadow" 
          elevation="lg"
        >
          <p>This card has a large shadow.</p>
        </Card>

        <Card 
          title="Extra Large Shadow" 
          elevation="xl"
        >
          <p>This card has an extra large shadow.</p>
        </Card>
      </div>
      
      <h3 class="demo-title">Border Radius Options</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="No Radius" 
          borderRadius="none"
        >
          <p>This card has no border radius.</p>
        </Card>

        <Card 
          title="Small Radius" 
          borderRadius="sm"
        >
          <p>This card has a small border radius.</p>
        </Card>

        <Card 
          title="Default Radius" 
          borderRadius="default"
        >
          <p>This card has the default border radius.</p>
        </Card>

        <Card 
          title="Large Radius" 
          borderRadius="lg"
        >
          <p>This card has a large border radius.</p>
        </Card>

        <Card 
          title="Extra Large Radius" 
          borderRadius="xl"
        >
          <p>This card has an extra large border radius.</p>
        </Card>

        <Card 
          title="Full Radius" 
          borderRadius="full"
        >
          <p>This card has fully rounded corners.</p>
        </Card>
      </div>
      
      <h3 class="demo-title">Interactive Cards</h3>
      <div class="component-demo cards-demo">
        <Card 
          title="Hover Effect" 
          hover
          elevation="sm"
        >
          <p>This card has a hover effect. Try hovering over it!</p>
        </Card>

        <Card 
          title="Clickable Card" 
          clickable
          elevation="sm"
        >
          <p>This card is clickable. Try clicking it!</p>
        </Card>

        <Card 
          title="Hover with Image Zoom" 
          image="https://via.placeholder.com/300x150/42b883/FFFFFF?text=Zoom"
          imageAlt="Zoom Image"
          hover
          elevation="sm"
        >
          <p>This card has an image that zooms on hover.</p>
        </Card>
      </div>
    </section>

    <section class="section">
      <h2>Alerts</h2>
      
      <h3 class="demo-title">Basic Alerts</h3>
      <div class="component-demo">
        <Alert title="Info Alert" type="info">
          This is an informational alert with a title.
        </Alert>

        <Alert title="Success Alert" type="success">
          This is a success alert with a title.
        </Alert>

        <Alert title="Warning Alert" type="warning">
          This is a warning alert with a title.
        </Alert>

        <Alert title="Error Alert" type="error">
          This is an error alert with a title.
        </Alert>
      </div>
      
      <h3 class="demo-title">Alert Variants</h3>
      <div class="component-demo">
        <Alert title="Default Variant" type="info" variant="default">
          This is the default variant of an alert.
        </Alert>

        <Alert title="Filled Variant" type="success" variant="filled">
          This is a filled variant with solid background color.
        </Alert>

        <Alert title="Soft Variant" type="warning" variant="soft">
          This is a soft variant with a subtle background color.
        </Alert>

        <Alert title="Toast Variant" type="error" variant="toast" elevation="lg">
          This is a toast notification variant with elevation.
        </Alert>
      </div>
      
      <h3 class="demo-title">Border Styles</h3>
      <div class="component-demo">
        <Alert title="Left Border" type="info" border="left">
          This alert has a left border.
        </Alert>

        <Alert title="Top Border" type="success" border="top">
          This alert has a top border.
        </Alert>

        <Alert title="Right Border" type="warning" border="right">
          This alert has a right border.
        </Alert>

        <Alert title="Bottom Border" type="error" border="bottom">
          This alert has a bottom border.
        </Alert>

        <Alert title="All Borders" type="info" border="all">
          This alert has borders on all sides.
        </Alert>
      </div>
      
      <h3 class="demo-title">Icon Positions</h3>
      <div class="component-demo">
        <Alert title="Left Icon" type="info" iconPosition="left">
          This alert has an icon on the left (default).
        </Alert>

        <Alert title="Right Icon" type="success" iconPosition="right">
          This alert has an icon on the right.
        </Alert>

        <Alert title="Top Icon" type="warning" iconPosition="top">
          This alert has an icon at the top.
        </Alert>

        <Alert title="Custom Icon" type="error" icon="🔔">
          This alert has a custom icon.
        </Alert>

        <Alert title="No Icon" type="info" :showIcon="false">
          This alert has no icon.
        </Alert>
      </div>
      
      <h3 class="demo-title">Dismissible Alerts</h3>
      <div class="component-demo">
        <Alert 
          v-if="showSuccessAlert"
          title="Dismissible Alert" 
          type="success" 
          dismissible
          @dismiss="showSuccessAlert = false"
        >
          This is a dismissible alert. Click the X to dismiss it.
        </Alert>

        <Alert 
          v-if="showErrorAlert"
          title="Custom Close Icon" 
          type="error" 
          closable
          closeIcon="✖"
          @dismiss="showErrorAlert = false"
        >
          This alert has a custom close icon.
        </Alert>

        <Button v-if="!showSuccessAlert || !showErrorAlert" @click="showSuccessAlert = true; showErrorAlert = true">
          Reset Alerts
        </Button>
      </div>
      
      <h3 class="demo-title">Auto-Close Alerts</h3>
      <div class="component-demo">
        <Alert 
          title="Auto-Close (5s)" 
          type="info" 
          :autoClose="5000"
        >
          This alert will automatically close after 5 seconds.
        </Alert>
      </div>
      
      <h3 class="demo-title">Alerts with Actions</h3>
      <div class="component-demo">
        <Alert 
          title="With Actions" 
          type="info"
          :actions="[
            { label: 'Confirm', variant: 'primary' },
            { label: 'Cancel', text: true }
          ]"
        >
          This alert has action buttons.
        </Alert>

        <Alert 
          title="Dismissible with Actions" 
          type="warning"
          dismissible
          :actions="[
            { label: 'Learn More', variant: 'primary' },
            { label: 'Dismiss', text: true, close: true }
          ]"
        >
          This alert has action buttons, including one that dismisses the alert.
        </Alert>
      </div>
      
      <h3 class="demo-title">Elevation Levels</h3>
      <div class="component-demo">
        <Alert title="No Shadow" type="info" elevation="none">
          This alert has no shadow.
        </Alert>

        <Alert title="Small Shadow" type="success" elevation="sm">
          This alert has a small shadow.
        </Alert>

        <Alert title="Medium Shadow" type="warning" elevation="md">
          This alert has a medium shadow.
        </Alert>

        <Alert title="Large Shadow" type="error" elevation="lg">
          This alert has a large shadow.
        </Alert>

        <Alert title="Extra Large Shadow" type="info" elevation="xl">
          This alert has an extra large shadow.
        </Alert>
      </div>
      
      <h3 class="demo-title">Sizes</h3>
      <div class="component-demo">
        <Alert title="Small Alert" type="info" size="sm">
          This is a small alert.
        </Alert>

        <Alert title="Medium Alert" type="success" size="md">
          This is a medium alert (default).
        </Alert>

        <Alert title="Large Alert" type="warning" size="lg">
          This is a large alert.
        </Alert>
      </div>
      
      <h3 class="demo-title">Special Styles</h3>
      <div class="component-demo">
        <Alert title="Outlined Alert" type="info" outlined>
          This is an outlined alert.
        </Alert>

        <Alert title="Non-Rounded Alert" type="success" :rounded="false">
          This alert has no rounded corners.
        </Alert>

        <Alert 
          title="Combined Features" 
          type="warning" 
          variant="filled" 
          elevation="md" 
          border="left"
          iconPosition="right"
        >
          This alert combines multiple features.
        </Alert>
      </div>
    </section>

    <footer class="footer">
      <p>Cream Vue UI - A beautiful and functional UI component library for Vue 3</p>
      <p>Created with ❤️ by the Cream Vue UI Team</p>
    </footer>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  color: var(--cream-primary);
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--cream-gray-600);
  font-size: 1.25rem;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  color: var(--cream-secondary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--cream-gray-200);
}

.component-demo {
  background-color: var(--cream-gray-100);
  border-radius: var(--cream-radius-lg);
  padding: 2rem;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.demo-row:last-child {
  margin-bottom: 0;
}

.demo-title {
  font-size: 1rem;
  color: var(--cream-secondary);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--cream-gray-300);
}

.demo-title:first-child {
  margin-top: 0;
}

.cards-demo {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.footer {
  margin-top: 4rem;
  text-align: center;
  padding: 2rem 0;
  border-top: 1px solid var(--cream-gray-200);
  color: var(--cream-gray-600);
}
</style>
