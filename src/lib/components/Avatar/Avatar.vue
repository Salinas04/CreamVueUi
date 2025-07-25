<script>
export default {
  name: 'CAvatar',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'Avatar'
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', 'custom'].includes(value)
    },
    customSize: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: 'circle',
      validator: (value) => ['circle', 'square', 'rounded'].includes(value)
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => [
        'default', 'primary', 'secondary', 'success', 
        'warning', 'error', 'info', 'light', 'dark'
      ].includes(value)
    },
    bordered: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: '',
      validator: (value) => ['', 'online', 'offline', 'away', 'busy', 'custom'].includes(value)
    },
    statusColor: {
      type: String,
      default: ''
    },
    statusPosition: {
      type: String,
      default: 'bottom-right',
      validator: (value) => ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
    },
    clickable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    fallbackStrategy: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'icon', 'color'].includes(value)
    }
  },
  data() {
    return {
      imageError: false
    };
  },
  computed: {
    classes() {
      return [
        'c-avatar',
        `c-avatar--${this.size}`,
        `c-avatar--${this.shape}`,
        `c-avatar--${this.variant}`,
        {
          'c-avatar--bordered': this.bordered,
          'c-avatar--clickable': this.clickable,
          'c-avatar--loading': this.loading,
          'c-avatar--with-status': this.status,
          [`c-avatar--status-${this.status}`]: this.status,
          [`c-avatar--status-${this.statusPosition}`]: this.status
        }
      ];
    },
    styles() {
      const styles = {};
      
      if (this.size === 'custom' && this.customSize) {
        styles.width = this.customSize;
        styles.height = this.customSize;
        styles.fontSize = `calc(${this.customSize} * 0.4)`;
      }
      
      if (this.color) {
        styles.color = this.color;
      }
      
      if (this.bgColor) {
        styles.backgroundColor = this.bgColor;
      }
      
      if (this.bordered && this.borderColor) {
        styles.borderColor = this.borderColor;
      }
      
      return styles;
    },
    statusStyles() {
      return this.statusColor ? { backgroundColor: this.statusColor } : {};
    },
    showImage() {
      return this.src && !this.imageError;
    },
    showText() {
      return (!this.showImage && (this.text || this.generateInitials())) && 
             (this.fallbackStrategy === 'text' || !this.icon);
    },
    showIcon() {
      return !this.showImage && this.icon && 
             (this.fallbackStrategy === 'icon' || (!this.text && !this.generateInitials()));
    },
    displayText() {
      return this.text || this.generateInitials();
    }
  },
  methods: {
    generateInitials() {
      if (!this.alt || this.alt === 'Avatar') return '';
      
      return this.alt
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, 2);
    },
    handleImageError() {
      this.imageError = true;
      this.$emit('error');
    },
    handleClick(event) {
      if (this.clickable) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<template>
  <div 
    :class="classes" 
    :style="styles"
    @click="handleClick"
    role="img"
    :aria-label="alt"
  >
    <!-- Loading state -->
    <div v-if="loading" class="c-avatar__loader"></div>
    
    <!-- Image avatar -->
    <img 
      v-else-if="showImage" 
      :src="src" 
      :alt="alt" 
      class="c-avatar__image"
      @error="handleImageError"
    />
    
    <!-- Text avatar (initials or text) -->
    <span v-else-if="showText" class="c-avatar__text">
      {{ displayText }}
    </span>
    
    <!-- Icon avatar -->
    <span v-else-if="showIcon" class="c-avatar__icon">
      {{ icon }}
    </span>
    
    <!-- Fallback color avatar (empty) -->
    <span v-else class="c-avatar__fallback"></span>
    
    <!-- Status indicator -->
    <span 
      v-if="status" 
      class="c-avatar__status" 
      :class="`c-avatar__status--${status}`"
      :style="statusStyles"
    ></span>
  </div>
</template>

<style>
/* Base Avatar Styles */
.c-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--cream-gray-200);
  color: var(--cream-gray-700);
  font-family: var(--cream-font-family);
  font-weight: 600;
  overflow: hidden;
  user-select: none;
  transition: all var(--cream-transition-normal) ease;
}

/* Sizes */
.c-avatar--xs {
  width: 24px;
  height: 24px;
  font-size: 10px;
}

.c-avatar--sm {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

.c-avatar--md {
  width: 40px;
  height: 40px;
  font-size: 16px;
}

.c-avatar--lg {
  width: 48px;
  height: 48px;
  font-size: 20px;
}

.c-avatar--xl {
  width: 64px;
  height: 64px;
  font-size: 24px;
}

/* Shapes */
.c-avatar--circle {
  border-radius: 50%;
}

.c-avatar--square {
  border-radius: 0;
}

.c-avatar--rounded {
  border-radius: var(--cream-radius-md);
}

/* Variants */
.c-avatar--primary {
  background-color: var(--cream-primary);
  color: var(--cream-white);
}

.c-avatar--secondary {
  background-color: var(--cream-secondary);
  color: var(--cream-white);
}

.c-avatar--success {
  background-color: var(--cream-success);
  color: var(--cream-white);
}

.c-avatar--warning {
  background-color: var(--cream-warning);
  color: var(--cream-white);
}

.c-avatar--error {
  background-color: var(--cream-error);
  color: var(--cream-white);
}

.c-avatar--info {
  background-color: var(--cream-info);
  color: var(--cream-white);
}

.c-avatar--light {
  background-color: var(--cream-gray-100);
  color: var(--cream-gray-800);
}

.c-avatar--dark {
  background-color: var(--cream-gray-800);
  color: var(--cream-white);
}

/* Border */
.c-avatar--bordered {
  border: 2px solid var(--cream-white);
  box-shadow: 0 0 0 1px var(--cream-gray-200);
}

.c-avatar--xs.c-avatar--bordered {
  border-width: 1px;
}

.c-avatar--xl.c-avatar--bordered {
  border-width: 3px;
}

/* Clickable state */
.c-avatar--clickable {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.c-avatar--clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.c-avatar--clickable:active {
  transform: translateY(0);
}

/* Loading state */
.c-avatar--loading {
  background-color: var(--cream-gray-200);
}

.c-avatar__loader {
  width: 70%;
  height: 70%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--cream-white);
  animation: avatar-spin 1s linear infinite;
}

@keyframes avatar-spin {
  to { transform: rotate(360deg); }
}

/* Avatar content */
.c-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.c-avatar__text {
  line-height: 1;
  text-transform: uppercase;
}

.c-avatar__icon {
  font-size: 1.2em;
  line-height: 1;
}

/* Status indicator */
.c-avatar__status {
  position: absolute;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  border: 1px solid var(--cream-white);
  background-color: var(--cream-gray-500);
  box-shadow: 0 0 0 1px var(--cream-gray-200);
}

.c-avatar__status--online {
  background-color: var(--cream-success);
}

.c-avatar__status--offline {
  background-color: var(--cream-gray-400);
}

.c-avatar__status--away {
  background-color: var(--cream-warning);
}

.c-avatar__status--busy {
  background-color: var(--cream-error);
}

/* Status positions */
.c-avatar__status--top-right {
  top: 0;
  right: 0;
  transform: translate(25%, -25%);
}

.c-avatar__status--top-left {
  top: 0;
  left: 0;
  transform: translate(-25%, -25%);
}

.c-avatar__status--bottom-right {
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
}

.c-avatar__status--bottom-left {
  bottom: 0;
  left: 0;
  transform: translate(-25%, 25%);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .c-avatar--lg {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  
  .c-avatar--xl {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
}
</style>