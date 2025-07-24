<script>
export default {
  name: 'CAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right', 'top'].includes(value)
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    border: {
      type: String,
      default: 'none',
      validator: (value) => ['none', 'left', 'top', 'right', 'bottom', 'all'].includes(value)
    },
    rounded: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    elevation: {
      type: String,
      default: 'none',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'filled', 'soft', 'toast'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: '×'
    },
    actions: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Number,
      default: 0
    },
    position: {
      type: String,
      default: 'static',
      validator: (value) => ['static', 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'].includes(value)
    }
  },
  data() {
    return {
      visible: true,
      autoCloseTimeout: null
    };
  },
  computed: {
    alertClasses() {
      return [
        'c-alert',
        `c-alert--${this.type}`,
        `c-alert--${this.variant}`,
        `c-alert--${this.size}`,
        `c-alert--border-${this.border}`,
        `c-alert--elevation-${this.elevation}`,
        `c-alert--position-${this.position}`,
        `c-alert--icon-${this.iconPosition}`,
        {
          'c-alert--dismissible': this.dismissible || this.closable,
          'c-alert--with-icon': (this.icon || this.typeIcon) && this.showIcon,
          'c-alert--rounded': this.rounded,
          'c-alert--outlined': this.outlined,
          'c-alert--with-actions': this.actions.length > 0,
          'c-alert--toast': this.variant === 'toast',
          'c-alert--auto-close': this.autoClose > 0
        }
      ];
    },
    typeIcon() {
      if (this.icon) return this.icon;
      
      // Default icons based on type
      const icons = {
        info: 'ℹ️',
        success: '✅',
        warning: '⚠️',
        error: '❌'
      };
      
      return icons[this.type];
    },
    shouldShowIcon() {
      return this.showIcon && (this.icon || this.typeIcon);
    },
    progressStyle() {
      if (this.autoClose <= 0) return {};
      return {
        animationDuration: `${this.autoClose}ms`
      };
    }
  },
  mounted() {
    this.setupAutoClose();
  },
  beforeUnmount() {
    this.clearAutoCloseTimeout();
  },
  methods: {
    dismiss() {
      this.visible = false;
      this.$emit('dismiss');
      this.clearAutoCloseTimeout();
    },
    setupAutoClose() {
      if (this.autoClose > 0) {
        this.clearAutoCloseTimeout();
        this.autoCloseTimeout = setTimeout(() => {
          this.dismiss();
        }, this.autoClose);
      }
    },
    clearAutoCloseTimeout() {
      if (this.autoCloseTimeout) {
        clearTimeout(this.autoCloseTimeout);
        this.autoCloseTimeout = null;
      }
    },
    handleAction(action) {
      if (action.onClick) {
        action.onClick();
      }
      if (action.close) {
        this.dismiss();
      }
      this.$emit('action', action);
    }
  }
}
</script>

<template>
  <transition name="c-alert-fade">
    <div v-if="visible" :class="alertClasses" role="alert">
      <!-- Auto-close progress bar -->
      <div v-if="autoClose > 0" class="c-alert__progress" :style="progressStyle"></div>
      
      <!-- Top icon -->
      <div v-if="shouldShowIcon && iconPosition === 'top'" class="c-alert__icon-container c-alert__icon-container--top">
        <span class="c-alert__icon">{{ typeIcon }}</span>
      </div>
      
      <div class="c-alert__content">
        <!-- Left icon -->
        <span 
          v-if="shouldShowIcon && iconPosition === 'left'" 
          class="c-alert__icon c-alert__icon--left"
        >
          {{ typeIcon }}
        </span>
        
        <div class="c-alert__message">
          <div v-if="title" class="c-alert__title">{{ title }}</div>
          <div class="c-alert__body">
            <slot></slot>
          </div>
          
          <!-- Action buttons -->
          <div v-if="actions.length > 0" class="c-alert__actions">
            <button 
              v-for="(action, index) in actions" 
              :key="index"
              type="button"
              class="c-alert__action"
              :class="[
                `c-alert__action--${action.variant || 'default'}`,
                { 'c-alert__action--text': action.text }
              ]"
              @click="handleAction(action)"
            >
              {{ action.label }}
            </button>
          </div>
        </div>
        
        <!-- Right icon -->
        <span 
          v-if="shouldShowIcon && iconPosition === 'right'" 
          class="c-alert__icon c-alert__icon--right"
        >
          {{ typeIcon }}
        </span>
      </div>
      
      <!-- Close button (improved design) -->
      <button 
        v-if="dismissible || closable" 
        type="button" 
        class="c-alert__close" 
        @click="dismiss"
        aria-label="Close alert"
      >
        {{ closeIcon }}
      </button>
    </div>
  </transition>
</template>

<style>
/* Base Alert Styles */
.c-alert {
  position: relative;
  padding: var(--cream-spacing-md);
  margin-bottom: var(--cream-spacing-md);
  border: 1px solid transparent;
  width: 100%;
  font-family: var(--cream-font-family);
  transition: all var(--cream-transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Rounded corners */
.c-alert--rounded {
  border-radius: var(--cream-radius-lg);
}

/* Content layout */
.c-alert__content {
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}

/* Icon styles */
.c-alert__icon {
  font-size: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-alert__icon--left {
  margin-right: var(--cream-spacing-sm);
}

.c-alert__icon--right {
  margin-left: var(--cream-spacing-sm);
}

.c-alert__icon-container--top {
  display: flex;
  justify-content: center;
  margin-bottom: var(--cream-spacing-sm);
}

/* Message container */
.c-alert__message {
  flex: 1;
}

/* Title */
.c-alert__title {
  font-weight: 600;
  margin-bottom: var(--cream-spacing-xs);
  font-size: var(--cream-font-size-md);
  line-height: 1.4;
}

/* Close button */
.c-alert__close {
  position: absolute;
  top: var(--cream-spacing-sm);
  right: var(--cream-spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  color: inherit;
  opacity: 0.7;
  cursor: pointer;
  transition: all var(--cream-transition-fast) ease;
  z-index: 2;
}

.c-alert__close:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

.c-alert__close:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

.c-alert--dismissible {
  padding-right: 3rem;
}

/* Action buttons */
.c-alert__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cream-spacing-xs);
  margin-top: var(--cream-spacing-sm);
}

.c-alert__action {
  padding: 0.375rem 0.75rem;
  border-radius: var(--cream-radius-md);
  font-size: var(--cream-font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--cream-transition-fast) ease;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.25);
}

.c-alert__action:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.c-alert__action--text {
  background-color: transparent;
  border-color: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.c-alert__action--text:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Auto-close progress bar */
.c-alert__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  transform-origin: left;
  animation: alert-progress linear forwards;
}

@keyframes alert-progress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

/* Sizes */
.c-alert--sm {
  padding: var(--cream-spacing-sm);
  font-size: var(--cream-font-size-sm);
}

.c-alert--sm .c-alert__title {
  font-size: var(--cream-font-size-sm);
}

.c-alert--sm .c-alert__icon {
  font-size: 1.1em;
}

.c-alert--md {
  padding: var(--cream-spacing-md);
  font-size: var(--cream-font-size-md);
}

.c-alert--lg {
  padding: var(--cream-spacing-lg);
  font-size: var(--cream-font-size-lg);
}

.c-alert--lg .c-alert__title {
  font-size: var(--cream-font-size-lg);
}

.c-alert--lg .c-alert__icon {
  font-size: 1.4em;
}

/* Variants */
/* Default variant */
.c-alert--default {
  background-color: var(--cream-white);
  box-shadow: var(--cream-shadow-sm);
}

/* Filled variant */
.c-alert--filled {
  color: var(--cream-white);
}

.c-alert--filled.c-alert--info {
  background-color: var(--cream-info);
  border-color: var(--cream-info);
}

.c-alert--filled.c-alert--success {
  background-color: var(--cream-success);
  border-color: var(--cream-success);
}

.c-alert--filled.c-alert--warning {
  background-color: var(--cream-warning);
  border-color: var(--cream-warning);
}

.c-alert--filled.c-alert--error {
  background-color: var(--cream-error);
  border-color: var(--cream-error);
}

/* Soft variant */
.c-alert--soft.c-alert--info {
  background-color: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
  color: var(--cream-info);
}

.c-alert--soft.c-alert--success {
  background-color: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.3);
  color: var(--cream-success);
}

.c-alert--soft.c-alert--warning {
  background-color: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.3);
  color: var(--cream-warning);
}

.c-alert--soft.c-alert--error {
  background-color: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.3);
  color: var(--cream-error);
}

/* Toast variant */
.c-alert--toast {
  box-shadow: var(--cream-shadow-lg);
  border-radius: var(--cream-radius-lg);
  max-width: 400px;
  margin-bottom: var(--cream-spacing-sm);
}

/* Alert types */
.c-alert--info {
  color: var(--cream-gray-800);
  background-color: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
}

.c-alert--success {
  color: var(--cream-gray-800);
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
}

.c-alert--warning {
  color: var(--cream-gray-800);
  background-color: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.2);
}

.c-alert--error {
  color: var(--cream-gray-800);
  background-color: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
}

/* Outlined style */
.c-alert--outlined {
  background-color: transparent;
}

.c-alert--outlined.c-alert--info {
  border-color: var(--cream-info);
  color: var(--cream-info);
}

.c-alert--outlined.c-alert--success {
  border-color: var(--cream-success);
  color: var(--cream-success);
}

.c-alert--outlined.c-alert--warning {
  border-color: var(--cream-warning);
  color: var(--cream-warning);
}

.c-alert--outlined.c-alert--error {
  border-color: var(--cream-error);
  color: var(--cream-error);
}

/* Border variations */
.c-alert--border-left {
  border-left-width: 4px;
}

.c-alert--border-top {
  border-top-width: 4px;
}

.c-alert--border-right {
  border-right-width: 4px;
}

.c-alert--border-bottom {
  border-bottom-width: 4px;
}

.c-alert--border-all {
  border-width: 1px;
}

/* Elevation levels */
.c-alert--elevation-none {
  box-shadow: none;
}

.c-alert--elevation-sm {
  box-shadow: var(--cream-shadow-sm);
}

.c-alert--elevation-md {
  box-shadow: var(--cream-shadow-md);
}

.c-alert--elevation-lg {
  box-shadow: var(--cream-shadow-lg);
}

.c-alert--elevation-xl {
  box-shadow: var(--cream-shadow-xl);
}

/* Toast positioning */
.c-alert--position-static {
  position: relative;
}

.c-alert--position-top-right,
.c-alert--position-top-left,
.c-alert--position-bottom-right,
.c-alert--position-bottom-left,
.c-alert--position-top-center,
.c-alert--position-bottom-center {
  position: fixed;
  z-index: 9999;
  margin: var(--cream-spacing-md);
}

.c-alert--position-top-right {
  top: 0;
  right: 0;
}

.c-alert--position-top-left {
  top: 0;
  left: 0;
}

.c-alert--position-bottom-right {
  bottom: 0;
  right: 0;
}

.c-alert--position-bottom-left {
  bottom: 0;
  left: 0;
}

.c-alert--position-top-center {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.c-alert--position-bottom-center {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* Enhanced animations */
.c-alert-fade-enter-active,
.c-alert-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.c-alert-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.c-alert-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* Position-specific animations */
.c-alert--position-top-right.c-alert-fade-enter-from,
.c-alert--position-top-right.c-alert-fade-leave-to {
  transform: translateX(20px);
}

.c-alert--position-top-left.c-alert-fade-enter-from,
.c-alert--position-top-left.c-alert-fade-leave-to {
  transform: translateX(-20px);
}

.c-alert--position-bottom-right.c-alert-fade-enter-from,
.c-alert--position-bottom-right.c-alert-fade-leave-to {
  transform: translateY(20px);
}

.c-alert--position-bottom-left.c-alert-fade-enter-from,
.c-alert--position-bottom-left.c-alert-fade-leave-to {
  transform: translateY(20px);
}
</style>