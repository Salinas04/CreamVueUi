<script>
export default {
  name: 'CBadge',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary', 'secondary', 'success', 'warning', 
        'error', 'info', 'neutral', 'light', 'dark'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value)
    },
    rounded: {
      type: Boolean,
      default: true
    },
    pill: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: '',
      validator: (value) => ['', 'top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
    },
    overlap: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: null
    },
    invisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        'c-badge',
        `c-badge--${this.variant}`,
        `c-badge--${this.size}`,
        {
          'c-badge--rounded': this.rounded,
          'c-badge--pill': this.pill,
          'c-badge--outlined': this.outlined,
          'c-badge--dot': this.dot,
          'c-badge--positioned': this.position,
          [`c-badge--${this.position}`]: this.position,
          'c-badge--overlap': this.overlap,
          'c-badge--invisible': this.invisible
        }
      ];
    },
    displayContent() {
      if (this.dot) return '';
      
      if (this.max !== null && !isNaN(this.$slots.default[0].text)) {
        const value = parseInt(this.$slots.default[0].text, 10);
        if (value > this.max) {
          return `${this.max}+`;
        }
      }
      
      return null;
    }
  }
}
</script>

<template>
  <span :class="classes">
    <slot v-if="displayContent === null"></slot>
    <template v-else>{{ displayContent }}</template>
  </span>
</template>

<style>
/* Base Badge Styles */
.c-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--cream-font-family);
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  font-size: var(--cream-font-size-xs);
  border-radius: var(--cream-radius-md);
  transition: all var(--cream-transition-normal) ease;
  box-sizing: border-box;
}

/* Sizes */
.c-badge--xs {
  padding: 0.125rem 0.375rem;
  font-size: calc(var(--cream-font-size-xs) * 0.85);
  min-width: 1.25rem;
  height: 1.25rem;
}

.c-badge--sm {
  padding: 0.175rem 0.425rem;
  font-size: var(--cream-font-size-xs);
  min-width: 1.5rem;
  height: 1.5rem;
}

.c-badge--md {
  padding: 0.25rem 0.5rem;
  font-size: var(--cream-font-size-sm);
  min-width: 1.75rem;
  height: 1.75rem;
}

.c-badge--lg {
  padding: 0.325rem 0.625rem;
  font-size: var(--cream-font-size-md);
  min-width: 2rem;
  height: 2rem;
}

/* Variants */
.c-badge--primary {
  background-color: var(--cream-primary);
  color: var(--cream-white);
}

.c-badge--secondary {
  background-color: var(--cream-secondary);
  color: var(--cream-white);
}

.c-badge--success {
  background-color: var(--cream-success);
  color: var(--cream-white);
}

.c-badge--warning {
  background-color: var(--cream-warning);
  color: var(--cream-white);
}

.c-badge--error {
  background-color: var(--cream-error);
  color: var(--cream-white);
}

.c-badge--info {
  background-color: var(--cream-info);
  color: var(--cream-white);
}

.c-badge--neutral {
  background-color: var(--cream-gray-500);
  color: var(--cream-white);
}

.c-badge--light {
  background-color: var(--cream-gray-100);
  color: var(--cream-gray-800);
}

.c-badge--dark {
  background-color: var(--cream-gray-800);
  color: var(--cream-white);
}

/* Outlined variants */
.c-badge--outlined {
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
}

.c-badge--outlined.c-badge--primary {
  border-color: var(--cream-primary);
  color: var(--cream-primary);
}

.c-badge--outlined.c-badge--secondary {
  border-color: var(--cream-secondary);
  color: var(--cream-secondary);
}

.c-badge--outlined.c-badge--success {
  border-color: var(--cream-success);
  color: var(--cream-success);
}

.c-badge--outlined.c-badge--warning {
  border-color: var(--cream-warning);
  color: var(--cream-warning);
}

.c-badge--outlined.c-badge--error {
  border-color: var(--cream-error);
  color: var(--cream-error);
}

.c-badge--outlined.c-badge--info {
  border-color: var(--cream-info);
  color: var(--cream-info);
}

.c-badge--outlined.c-badge--neutral {
  border-color: var(--cream-gray-500);
  color: var(--cream-gray-500);
}

.c-badge--outlined.c-badge--light {
  border-color: var(--cream-gray-300);
  color: var(--cream-gray-600);
}

.c-badge--outlined.c-badge--dark {
  border-color: var(--cream-gray-800);
  color: var(--cream-gray-800);
}

/* Shape modifiers */
.c-badge--rounded {
  border-radius: var(--cream-radius-md);
}

.c-badge--pill {
  border-radius: var(--cream-radius-full);
}

/* Dot style */
.c-badge--dot {
  padding: 0;
  min-width: 0.5rem;
  min-height: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--cream-radius-full);
}

.c-badge--dot.c-badge--xs {
  width: 0.375rem;
  height: 0.375rem;
}

.c-badge--dot.c-badge--sm {
  width: 0.5rem;
  height: 0.5rem;
}

.c-badge--dot.c-badge--md {
  width: 0.625rem;
  height: 0.625rem;
}

.c-badge--dot.c-badge--lg {
  width: 0.75rem;
  height: 0.75rem;
}

/* Positioned badges */
.c-badge--positioned {
  position: absolute;
  z-index: 1;
}

.c-badge--top-right {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.c-badge--top-left {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.c-badge--bottom-right {
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
}

.c-badge--bottom-left {
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
}

/* Overlap adjustment */
.c-badge--overlap {
  transform: translate(25%, -25%);
}

.c-badge--overlap.c-badge--top-left {
  transform: translate(-25%, -25%);
}

.c-badge--overlap.c-badge--bottom-right {
  transform: translate(25%, 25%);
}

.c-badge--overlap.c-badge--bottom-left {
  transform: translate(-25%, 25%);
}

/* Visibility */
.c-badge--invisible {
  visibility: hidden;
}
</style>