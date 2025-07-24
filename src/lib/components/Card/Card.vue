<script>
export default {
  name: 'CCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: 'Card image'
    },
    imagePosition: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'bottom', 'left', 'right', 'background'].includes(value)
    },
    imageOverlay: {
      type: Boolean,
      default: false
    },
    imageAspectRatio: {
      type: String,
      default: 'auto',
      validator: (value) => ['auto', '1:1', '4:3', '16:9', '21:9'].includes(value)
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => [
        'default', 'primary', 'secondary', 'success', 'warning', 
        'error', 'info', 'outline', 'flat', 'glass'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    hover: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    },
    elevation: {
      type: String,
      default: 'sm',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    borderRadius: {
      type: String,
      default: 'default',
      validator: (value) => ['none', 'sm', 'default', 'lg', 'xl', 'full'].includes(value)
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardClasses() {
      return [
        'c-card',
        `c-card--${this.variant}`,
        `c-card--${this.size}`,
        `c-card--elevation-${this.elevation}`,
        `c-card--radius-${this.borderRadius}`,
        `c-card--image-${this.imagePosition}`,
        {
          'c-card--hover': this.hover,
          'c-card--clickable': this.clickable,
          'c-card--horizontal': this.horizontal,
          'c-card--gradient': this.gradient,
          'c-card--image-overlay': this.imageOverlay,
          [`c-card--image-ratio-${this.imageAspectRatio.replace(':', '-')}`]: this.imageAspectRatio !== 'auto'
        }
      ];
    },
    hasHeader() {
      return this.title || this.subtitle || this.$slots.header;
    },
    hasFooter() {
      return this.$slots.footer;
    }
  },
  methods: {
    onClick(event) {
      if (this.clickable) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<template>
  <div :class="cardClasses" @click="onClick">
    <!-- Background image (if specified) -->
    <div v-if="image && imagePosition === 'background'" class="c-card__background">
      <img :src="image" :alt="imageAlt" />
      <div v-if="imageOverlay" class="c-card__overlay"></div>
    </div>
    
    <!-- Horizontal layout with left image -->
    <div v-if="image && imagePosition === 'left' && horizontal" class="c-card__image c-card__image--left">
      <img :src="image" :alt="imageAlt" />
      <div v-if="imageOverlay" class="c-card__overlay"></div>
    </div>
    
    <!-- Top image (default) -->
    <div v-if="image && imagePosition === 'top' && !horizontal" class="c-card__image">
      <img :src="image" :alt="imageAlt" />
      <div v-if="imageOverlay" class="c-card__overlay"></div>
    </div>
    
    <!-- Content wrapper for horizontal layout -->
    <div class="c-card__content">
      <!-- Header section -->
      <div v-if="hasHeader" class="c-card__header">
        <slot name="header">
          <h3 v-if="title" class="c-card__title">{{ title }}</h3>
          <p v-if="subtitle" class="c-card__subtitle">{{ subtitle }}</p>
        </slot>
      </div>
      
      <!-- Body section -->
      <div class="c-card__body">
        <slot></slot>
      </div>
      
      <!-- Footer section -->
      <div v-if="hasFooter" class="c-card__footer">
        <slot name="footer"></slot>
      </div>
    </div>
    
    <!-- Horizontal layout with right image -->
    <div v-if="image && imagePosition === 'right' && horizontal" class="c-card__image c-card__image--right">
      <img :src="image" :alt="imageAlt" />
      <div v-if="imageOverlay" class="c-card__overlay"></div>
    </div>
    
    <!-- Bottom image -->
    <div v-if="image && imagePosition === 'bottom' && !horizontal" class="c-card__image">
      <img :src="image" :alt="imageAlt" />
      <div v-if="imageOverlay" class="c-card__overlay"></div>
    </div>
  </div>
</template>

<style>
/* Base Card Styles */
.c-card {
  display: flex;
  flex-direction: column;
  background-color: var(--cream-white);
  border-radius: var(--cream-radius-lg);
  overflow: hidden;
  transition: all var(--cream-transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 100%;
}

/* Horizontal Layout */
.c-card--horizontal {
  flex-direction: row;
  align-items: stretch;
}

/* Content wrapper for better layout control */
.c-card__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1; /* Ensure content is above background image */
}

/* Variants */
/* Default variant */
.c-card--default {
  border: 1px solid var(--cream-gray-200);
}

/* Primary variant */
.c-card--primary {
  border: 1px solid var(--cream-primary-light);
}

.c-card--primary .c-card__header {
  background-color: var(--cream-primary);
  color: var(--cream-white);
}

/* Secondary variant */
.c-card--secondary {
  border: 1px solid var(--cream-secondary-light);
}

.c-card--secondary .c-card__header {
  background-color: var(--cream-secondary);
  color: var(--cream-white);
}

/* Success variant */
.c-card--success {
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.c-card--success .c-card__header {
  background-color: var(--cream-success);
  color: var(--cream-white);
}

/* Warning variant */
.c-card--warning {
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.c-card--warning .c-card__header {
  background-color: var(--cream-warning);
  color: var(--cream-white);
}

/* Error variant */
.c-card--error {
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.c-card--error .c-card__header {
  background-color: var(--cream-error);
  color: var(--cream-white);
}

/* Info variant */
.c-card--info {
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.c-card--info .c-card__header {
  background-color: var(--cream-info);
  color: var(--cream-white);
}

/* Outline variant */
.c-card--outline {
  border: 1px solid var(--cream-gray-300);
  box-shadow: none;
}

/* Flat variant */
.c-card--flat {
  border: none;
  box-shadow: none !important;
  background-color: var(--cream-gray-100);
}

/* Glass variant */
.c-card--glass {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.c-card--glass .c-card__header {
  border-bottom-color: rgba(255, 255, 255, 0.2);
}

.c-card--glass .c-card__footer {
  border-top-color: rgba(255, 255, 255, 0.2);
}

/* Gradient background */
.c-card--gradient.c-card--primary {
  background: linear-gradient(145deg, var(--cream-primary), var(--cream-primary-dark));
  color: var(--cream-white);
  border: none;
}

.c-card--gradient.c-card--secondary {
  background: linear-gradient(145deg, var(--cream-secondary), var(--cream-secondary-dark));
  color: var(--cream-white);
  border: none;
}

.c-card--gradient.c-card--success {
  background: linear-gradient(145deg, var(--cream-success), #0da56f);
  color: var(--cream-white);
  border: none;
}

.c-card--gradient.c-card--warning {
  background: linear-gradient(145deg, var(--cream-warning), #e89209);
  color: var(--cream-white);
  border: none;
}

.c-card--gradient.c-card--error {
  background: linear-gradient(145deg, var(--cream-error), #e02424);
  color: var(--cream-white);
  border: none;
}

.c-card--gradient.c-card--info {
  background: linear-gradient(145deg, var(--cream-info), #2563eb);
  color: var(--cream-white);
  border: none;
}

.c-card--gradient .c-card__title,
.c-card--gradient .c-card__subtitle,
.c-card--gradient .c-card__body {
  color: var(--cream-white);
}

.c-card--gradient .c-card__header,
.c-card--gradient .c-card__footer {
  border-color: rgba(255, 255, 255, 0.2);
}

/* Elevation levels */
.c-card--elevation-none {
  box-shadow: none;
}

.c-card--elevation-sm {
  box-shadow: var(--cream-shadow-sm);
}

.c-card--elevation-md {
  box-shadow: var(--cream-shadow-md);
}

.c-card--elevation-lg {
  box-shadow: var(--cream-shadow-lg);
}

.c-card--elevation-xl {
  box-shadow: var(--cream-shadow-xl);
}

/* Border radius options */
.c-card--radius-none {
  border-radius: 0;
}

.c-card--radius-sm {
  border-radius: var(--cream-radius-sm);
}

.c-card--radius-default {
  border-radius: var(--cream-radius-lg);
}

.c-card--radius-lg {
  border-radius: var(--cream-radius-xl);
}

.c-card--radius-xl {
  border-radius: calc(var(--cream-radius-xl) * 1.5);
}

.c-card--radius-full {
  border-radius: var(--cream-radius-full);
}

/* Sizes */
.c-card--sm .c-card__header,
.c-card--sm .c-card__body,
.c-card--sm .c-card__footer {
  padding: var(--cream-spacing-sm);
}

.c-card--md .c-card__header,
.c-card--md .c-card__body,
.c-card--md .c-card__footer {
  padding: var(--cream-spacing-md);
}

.c-card--lg .c-card__header,
.c-card--lg .c-card__body,
.c-card--lg .c-card__footer {
  padding: var(--cream-spacing-lg);
}

.c-card--xl .c-card__header,
.c-card--xl .c-card__body,
.c-card--xl .c-card__footer {
  padding: var(--cream-spacing-xl);
}

/* Hover and clickable states */
.c-card--hover {
  transition: all var(--cream-transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
}

.c-card--hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--cream-shadow-lg);
}

.c-card--clickable {
  cursor: pointer;
}

.c-card--clickable:active {
  transform: translateY(1px);
  transition: transform 0.1s;
}

/* Card sections */
.c-card__header {
  border-bottom: 1px solid var(--cream-gray-200);
}

.c-card__footer {
  border-top: 1px solid var(--cream-gray-200);
  margin-top: auto;
}

.c-card__title {
  margin: 0;
  font-size: var(--cream-font-size-lg);
  font-weight: 600;
  color: var(--cream-gray-900);
}

.c-card__subtitle {
  margin: var(--cream-spacing-xs) 0 0;
  font-size: var(--cream-font-size-sm);
  color: var(--cream-gray-600);
}

/* Image handling */
.c-card__image,
.c-card__background {
  position: relative;
  overflow: hidden;
}

.c-card__image img,
.c-card__background img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform var(--cream-transition-normal) ease;
}

/* Hover effect on images */
.c-card--hover:hover .c-card__image img,
.c-card--hover:hover .c-card__background img {
  transform: scale(1.05);
}

/* Background image */
.c-card__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.c-card__background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-card--image-background .c-card__content {
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--cream-white);
}

.c-card--image-background .c-card__title,
.c-card--image-background .c-card__subtitle,
.c-card--image-background .c-card__body {
  color: var(--cream-white);
}

/* Image overlay */
.c-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
  z-index: 1;
}

/* Horizontal layout image positioning */
.c-card--horizontal .c-card__image {
  flex: 0 0 40%;
  max-width: 40%;
}

.c-card--horizontal .c-card__image img {
  height: 100%;
  object-fit: cover;
}

/* Left and right image positioning */
.c-card--horizontal .c-card__image--left {
  order: 0;
}

.c-card--horizontal .c-card__content {
  order: 1;
}

.c-card--horizontal .c-card__image--right {
  order: 2;
}

/* Image aspect ratios */
.c-card--image-ratio-1-1 .c-card__image {
  aspect-ratio: 1 / 1;
}

.c-card--image-ratio-4-3 .c-card__image {
  aspect-ratio: 4 / 3;
}

.c-card--image-ratio-16-9 .c-card__image {
  aspect-ratio: 16 / 9;
}

.c-card--image-ratio-21-9 .c-card__image {
  aspect-ratio: 21 / 9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .c-card--horizontal {
    flex-direction: column;
  }
  
  .c-card--horizontal .c-card__image {
    flex: 0 0 100%;
    max-width: 100%;
    order: 0;
  }
  
  .c-card--horizontal .c-card__content {
    order: 1;
  }
  
  .c-card--lg .c-card__header,
  .c-card--lg .c-card__body,
  .c-card--lg .c-card__footer,
  .c-card--xl .c-card__header,
  .c-card--xl .c-card__body,
  .c-card--xl .c-card__footer {
    padding: var(--cream-spacing-md);
  }
}
</style>