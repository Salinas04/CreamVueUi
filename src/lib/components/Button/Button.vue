<script>
export default {
  name: 'CButton',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value)
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary', 'secondary', 'success', 'warning', 
        'error', 'info', 'outline', 'text', 'glass', 'soft'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingType: {
      type: String,
      default: 'spinner',
      validator: (value) => ['spinner', 'dots', 'pulse'].includes(value)
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value)
    },
    iconOnly: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String,
      default: ''
    },
    elevation: {
      type: String,
      default: 'md',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  computed: {
    classes() {
      return [
        'c-button',
        `c-button--${this.variant}`,
        `c-button--${this.size}`,
        `c-button--elevation-${this.elevation}`,
        {
          'c-button--block': this.block,
          'c-button--rounded': this.rounded,
          'c-button--loading': this.loading,
          'c-button--with-icon': this.icon,
          'c-button--icon-left': this.icon && this.iconPosition === 'left' && !this.iconOnly,
          'c-button--icon-right': this.icon && this.iconPosition === 'right' && !this.iconOnly,
          'c-button--icon-only': this.iconOnly && this.icon,
          'c-button--with-tooltip': this.tooltip
        }
      ];
    },
    loadingClasses() {
      return [
        'c-button__loader',
        `c-button__loader--${this.loadingType}`
      ];
    }
  },
  methods: {
    onClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        return;
      }
      this.$emit('click', event);
    }
  }
}
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled || loading"
    @click="onClick"
    :title="tooltip"
    :aria-label="tooltip || undefined"
  >
    <!-- Loading indicators -->
    <span v-if="loading" :class="loadingClasses">
      <span v-if="loadingType === 'dots'" class="c-button__loader-dot"></span>
      <span v-if="loadingType === 'dots'" class="c-button__loader-dot"></span>
      <span v-if="loadingType === 'dots'" class="c-button__loader-dot"></span>
    </span>
    
    <!-- Icon (left position or icon-only) -->
    <span 
      v-if="icon && (iconPosition === 'left' || iconOnly)" 
      class="c-button__icon"
    >
      {{ icon }}
    </span>
    
    <!-- Button content (text) -->
    <span v-if="!iconOnly" class="c-button__content">
      <slot></slot>
    </span>
    
    <!-- Icon (right position) -->
    <span 
      v-if="icon && iconPosition === 'right' && !iconOnly" 
      class="c-button__icon c-button__icon--right"
    >
      {{ icon }}
    </span>
    
    <!-- Tooltip (if enabled) -->
    <span v-if="tooltip" class="c-button__tooltip">{{ tooltip }}</span>
  </button>
</template>

<style>
/* Base Button Styles */
.c-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--cream-font-family);
  font-weight: 600; /* Increased from 500 for better visibility */
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.625rem 1.25rem; /* Slightly increased padding */
  font-size: var(--cream-font-size-md);
  line-height: 1.5;
  border-radius: var(--cream-radius-lg); /* Increased from md to lg */
  transition: all var(--cream-transition-normal) cubic-bezier(0.4, 0, 0.2, 1); /* Improved easing */
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--cream-shadow-sm); /* Default subtle shadow */
  letter-spacing: 0.01em; /* Slightly improved letter spacing */
  text-transform: capitalize; /* Capitalize first letter */
  transform: translateY(0); /* For hover transition */
}

/* Focus state with improved accessibility */
.c-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.3), var(--cream-shadow-md);
}

/* Disabled state with improved visual feedback */
.c-button:disabled,
.c-button--loading {
  opacity: 0.7; /* Increased from 0.65 */
  cursor: not-allowed;
  box-shadow: none; /* Remove shadow when disabled */
}

/* Active/pressed state */
.c-button:active:not(:disabled):not(.c-button--loading) {
  transform: translateY(1px); /* Subtle press effect */
  box-shadow: var(--cream-shadow-sm); /* Reduced shadow when pressed */
}

/* Ripple effect container */
.c-button::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.5s, opacity 0.8s;
}

/* Ripple effect animation */
.c-button:active::after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}

/* Sizes with improved proportions */
.c-button--xs {
  padding: 0.25rem 0.5rem;
  font-size: var(--cream-font-size-xs);
  border-radius: var(--cream-radius-sm);
}

.c-button--sm {
  padding: 0.375rem 0.75rem;
  font-size: var(--cream-font-size-sm);
  border-radius: var(--cream-radius-md);
}

.c-button--md {
  padding: 0.625rem 1.25rem;
  font-size: var(--cream-font-size-md);
  border-radius: var(--cream-radius-lg);
}

.c-button--lg {
  padding: 0.875rem 1.75rem;
  font-size: var(--cream-font-size-lg);
  border-radius: var(--cream-radius-xl);
}

.c-button--xl {
  padding: 1rem 2rem;
  font-size: var(--cream-font-size-xl);
  border-radius: var(--cream-radius-xl);
}

/* Variants with improved aesthetics */
/* Primary Button - with subtle gradient */
.c-button--primary {
  background: linear-gradient(145deg, var(--cream-primary), var(--cream-primary-dark));
  color: var(--cream-white);
  border-color: var(--cream-primary);
  box-shadow: 0 2px 5px rgba(66, 184, 131, 0.3), var(--cream-shadow-sm);
}

.c-button--primary:hover:not(:disabled):not(.c-button--loading) {
  background: linear-gradient(145deg, var(--cream-primary-light), var(--cream-primary));
  border-color: var(--cream-primary-light);
  box-shadow: 0 4px 8px rgba(66, 184, 131, 0.4), var(--cream-shadow-md);
  transform: translateY(-1px);
}

/* Secondary Button - with subtle gradient */
.c-button--secondary {
  background: linear-gradient(145deg, var(--cream-secondary), var(--cream-secondary-dark));
  color: var(--cream-white);
  border-color: var(--cream-secondary);
  box-shadow: 0 2px 5px rgba(53, 73, 94, 0.3), var(--cream-shadow-sm);
}

.c-button--secondary:hover:not(:disabled):not(.c-button--loading) {
  background: linear-gradient(145deg, var(--cream-secondary-light), var(--cream-secondary));
  border-color: var(--cream-secondary-light);
  box-shadow: 0 4px 8px rgba(53, 73, 94, 0.4), var(--cream-shadow-md);
  transform: translateY(-1px);
}

/* Success Button - with subtle gradient */
.c-button--success {
  background: linear-gradient(145deg, var(--cream-success), #0da56f);
  color: var(--cream-white);
  border-color: var(--cream-success);
  box-shadow: 0 2px 5px rgba(16, 185, 129, 0.3), var(--cream-shadow-sm);
}

.c-button--success:hover:not(:disabled):not(.c-button--loading) {
  background: linear-gradient(145deg, #20c997, var(--cream-success));
  border-color: #20c997;
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.4), var(--cream-shadow-md);
  transform: translateY(-1px);
}

/* Warning Button - with subtle gradient */
.c-button--warning {
  background: linear-gradient(145deg, var(--cream-warning), #e89209);
  color: var(--cream-white);
  border-color: var(--cream-warning);
  box-shadow: 0 2px 5px rgba(245, 158, 11, 0.3), var(--cream-shadow-sm);
}

.c-button--warning:hover:not(:disabled):not(.c-button--loading) {
  background: linear-gradient(145deg, #fbb33c, var(--cream-warning));
  border-color: #fbb33c;
  box-shadow: 0 4px 8px rgba(245, 158, 11, 0.4), var(--cream-shadow-md);
  transform: translateY(-1px);
}

/* Error Button - with subtle gradient */
.c-button--error {
  background: linear-gradient(145deg, var(--cream-error), #e02424);
  color: var(--cream-white);
  border-color: var(--cream-error);
  box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3), var(--cream-shadow-sm);
}

.c-button--error:hover:not(:disabled):not(.c-button--loading) {
  background: linear-gradient(145deg, #f56565, var(--cream-error));
  border-color: #f56565;
  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.4), var(--cream-shadow-md);
  transform: translateY(-1px);
}

/* Info Button - with subtle gradient */
.c-button--info {
  background: linear-gradient(145deg, var(--cream-info), #2563eb);
  color: var(--cream-white);
  border-color: var(--cream-info);
  box-shadow: 0 2px 5px rgba(59, 130, 246, 0.3), var(--cream-shadow-sm);
}

.c-button--info:hover:not(:disabled):not(.c-button--loading) {
  background: linear-gradient(145deg, #60a5fa, var(--cream-info));
  border-color: #60a5fa;
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4), var(--cream-shadow-md);
  transform: translateY(-1px);
}

/* Outline Button - with improved hover effect */
.c-button--outline {
  background-color: transparent;
  color: var(--cream-primary);
  border-color: var(--cream-primary);
  box-shadow: none;
}

.c-button--outline:hover:not(:disabled):not(.c-button--loading) {
  background: linear-gradient(145deg, var(--cream-primary-light), var(--cream-primary));
  color: var(--cream-white);
  border-color: var(--cream-primary);
  box-shadow: 0 4px 8px rgba(66, 184, 131, 0.3), var(--cream-shadow-sm);
  transform: translateY(-1px);
}

/* Text Button - with improved hover effect */
.c-button--text {
  background-color: transparent;
  color: var(--cream-primary);
  border-color: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  box-shadow: none;
}

.c-button--text:hover:not(:disabled):not(.c-button--loading) {
  color: var(--cream-primary-dark);
  background-color: rgba(66, 184, 131, 0.1);
  transform: translateY(0); /* No vertical movement for text buttons */
  box-shadow: none;
}

/* Glass Button - modern frosted glass effect */
.c-button--glass {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--cream-gray-800);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.c-button--glass:hover:not(:disabled):not(.c-button--loading) {
  background-color: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

/* Soft Button - subtle pastel effect */
.c-button--soft {
  background-color: rgba(66, 184, 131, 0.15);
  color: var(--cream-primary-dark);
  border-color: rgba(66, 184, 131, 0.05);
  box-shadow: none;
}

.c-button--soft:hover:not(:disabled):not(.c-button--loading) {
  background-color: rgba(66, 184, 131, 0.25);
  color: var(--cream-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 3px 5px rgba(66, 184, 131, 0.2);
}

/* Modifiers */
.c-button--block {
  display: flex;
  width: 100%;
}

.c-button--rounded {
  border-radius: var(--cream-radius-full);
}

/* Loading animations */
/* Common loader styles */
.c-button__loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Spinner (default) */
.c-button__loader--spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: var(--cream-white);
  animation: button-spinner 0.8s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@keyframes button-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Dots animation */
.c-button__loader--dots {
  width: 2.5rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.c-button__loader-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--cream-white);
  border-radius: 50%;
  display: inline-block;
  animation: button-dots 1.4s infinite ease-in-out both;
}

.c-button__loader-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.c-button__loader-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes button-dots {
  0%, 80%, 100% { 
    transform: scale(0);
    opacity: 0.5;
  }
  40% { 
    transform: scale(1);
    opacity: 1;
  }
}

/* Pulse animation */
.c-button__loader--pulse {
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--cream-white);
  border-radius: 50%;
  animation: button-pulse 1.2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

@keyframes button-pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}

.c-button--loading .c-button__content {
  opacity: 0;
}

/* Icon positioning */
.c-button__icon {
  font-size: 1.1em; /* Slightly larger than text */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

/* Left icon (default) */
.c-button--icon-left .c-button__icon {
  margin-right: 0.625rem;
}

.c-button--icon-left.c-button--xs .c-button__icon {
  margin-right: 0.25rem;
}

.c-button--icon-left.c-button--sm .c-button__icon {
  margin-right: 0.375rem;
}

.c-button--icon-left.c-button--lg .c-button__icon {
  margin-right: 0.75rem;
}

.c-button--icon-left.c-button--xl .c-button__icon {
  margin-right: 0.875rem;
}

/* Right icon */
.c-button__icon--right {
  margin-right: 0;
  margin-left: 0.625rem;
}

.c-button--icon-right.c-button--xs .c-button__icon {
  margin-left: 0.25rem;
}

.c-button--icon-right.c-button--sm .c-button__icon {
  margin-left: 0.375rem;
}

.c-button--icon-right.c-button--lg .c-button__icon {
  margin-left: 0.75rem;
}

.c-button--icon-right.c-button--xl .c-button__icon {
  margin-left: 0.875rem;
}

/* Icon-only button */
.c-button--icon-only {
  padding: 0.625rem;
  aspect-ratio: 1/1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.c-button--icon-only.c-button--xs {
  padding: 0.25rem;
  font-size: 0.875rem;
}

.c-button--icon-only.c-button--sm {
  padding: 0.375rem;
  font-size: 1rem;
}

.c-button--icon-only.c-button--lg {
  padding: 0.75rem;
  font-size: 1.25rem;
}

.c-button--icon-only.c-button--xl {
  padding: 0.875rem;
  font-size: 1.5rem;
}

/* Tooltip */
.c-button__tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-0.5rem);
  background-color: var(--cream-gray-800);
  color: var(--cream-white);
  padding: 0.375rem 0.75rem;
  border-radius: var(--cream-radius-md);
  font-size: var(--cream-font-size-xs);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
  pointer-events: none;
  z-index: 10;
  box-shadow: var(--cream-shadow-md);
}

.c-button__tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0.25rem;
  border-style: solid;
  border-color: var(--cream-gray-800) transparent transparent transparent;
}

.c-button--with-tooltip:hover .c-button__tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-0.25rem);
}

/* Elevation levels */
.c-button--elevation-none {
  box-shadow: none;
}

.c-button--elevation-sm {
  box-shadow: var(--cream-shadow-sm);
}

.c-button--elevation-md {
  box-shadow: var(--cream-shadow-md);
}

.c-button--elevation-lg {
  box-shadow: var(--cream-shadow-lg);
}

.c-button--elevation-xl {
  box-shadow: var(--cream-shadow-xl);
}
</style>