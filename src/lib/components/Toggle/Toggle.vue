<script>
export default {
  name: 'CToggle',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary', 'secondary', 'success', 'warning', 
        'error', 'info', 'neutral'
      ].includes(value)
    },
    label: {
      type: String,
      default: ''
    },
    labelPosition: {
      type: String,
      default: 'right',
      validator: (value) => ['left', 'right'].includes(value)
    },
    onLabel: {
      type: String,
      default: ''
    },
    offLabel: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: () => `c-toggle-${Math.random().toString(36).substring(2, 9)}`
    }
  },
  computed: {
    wrapperClasses() {
      return [
        'c-toggle-wrapper',
        `c-toggle-wrapper--${this.size}`,
        {
          'c-toggle-wrapper--disabled': this.disabled,
          'c-toggle-wrapper--loading': this.loading,
          'c-toggle-wrapper--readonly': this.readonly,
          [`c-toggle-wrapper--label-${this.labelPosition}`]: this.label
        }
      ];
    },
    toggleClasses() {
      return [
        'c-toggle',
        `c-toggle--${this.size}`,
        `c-toggle--${this.variant}`,
        {
          'c-toggle--checked': this.modelValue,
          'c-toggle--disabled': this.disabled,
          'c-toggle--loading': this.loading,
          'c-toggle--readonly': this.readonly,
          'c-toggle--with-icon': this.icon,
          'c-toggle--square': this.square
        }
      ];
    },
    ariaChecked() {
      return this.modelValue ? 'true' : 'false';
    },
    displayOnLabel() {
      return this.onLabel || this.label;
    },
    displayOffLabel() {
      return this.offLabel || this.label;
    }
  },
  methods: {
    toggle() {
      if (this.disabled || this.loading || this.readonly) return;
      
      this.$emit('update:modelValue', !this.modelValue);
      this.$emit('change', !this.modelValue);
    },
    onKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.toggle();
      }
    }
  }
}
</script>

<template>
  <div :class="wrapperClasses">
    <!-- Left positioned label -->
    <label 
      v-if="label && labelPosition === 'left'" 
      :for="id" 
      class="c-toggle__label c-toggle__label--left"
    >
      {{ label }}
    </label>
    
    <!-- Toggle switch -->
    <div 
      :class="toggleClasses"
      :aria-checked="ariaChecked"
      :aria-disabled="disabled"
      :aria-readonly="readonly"
      role="switch"
      :tabindex="disabled ? -1 : 0"
      @click="toggle"
      @keydown="onKeyDown"
      :id="id"
    >
      <!-- Hidden native input for form submission -->
      <input 
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled || readonly"
        :name="name"
        :required="required"
        class="c-toggle__input"
        :id="`${id}-input`"
        @change="toggle"
      />
      
      <!-- Toggle track -->
      <div class="c-toggle__track">
        <!-- On/Off labels inside track -->
        <span v-if="onLabel" class="c-toggle__label-on">{{ onLabel }}</span>
        <span v-if="offLabel" class="c-toggle__label-off">{{ offLabel }}</span>
      </div>
      
      <!-- Toggle thumb/handle -->
      <div class="c-toggle__thumb">
        <!-- Loading indicator -->
        <div v-if="loading" class="c-toggle__loader"></div>
        
        <!-- Icon indicators -->
        <span v-else-if="icon && modelValue" class="c-toggle__icon c-toggle__icon--on">✓</span>
        <span v-else-if="icon && !modelValue" class="c-toggle__icon c-toggle__icon--off">✕</span>
      </div>
    </div>
    
    <!-- Right positioned label -->
    <label 
      v-if="label && labelPosition === 'right'" 
      :for="id" 
      class="c-toggle__label c-toggle__label--right"
    >
      {{ label }}
    </label>
  </div>
</template>

<style>
/* Toggle Wrapper */
.c-toggle-wrapper {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-family: var(--cream-font-family);
}

.c-toggle-wrapper--label-left {
  flex-direction: row;
}

.c-toggle-wrapper--label-right {
  flex-direction: row;
}

.c-toggle-wrapper--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Toggle Base */
.c-toggle {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  transition: all var(--cream-transition-normal) ease;
}

/* Sizes */
.c-toggle--sm {
  width: 36px;
  height: 20px;
}

.c-toggle--md {
  width: 44px;
  height: 24px;
}

.c-toggle--lg {
  width: 52px;
  height: 28px;
}

.c-toggle-wrapper--sm {
  font-size: var(--cream-font-size-xs);
}

.c-toggle-wrapper--md {
  font-size: var(--cream-font-size-sm);
}

.c-toggle-wrapper--lg {
  font-size: var(--cream-font-size-md);
}

/* Hidden native input */
.c-toggle__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
}

/* Toggle Track */
.c-toggle__track {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--cream-gray-300);
  border-radius: 34px;
  transition: all var(--cream-transition-normal) ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}

.c-toggle--square .c-toggle__track {
  border-radius: 4px;
}

/* Toggle Thumb */
.c-toggle__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(50% - 4px);
  height: calc(100% - 4px);
  background-color: var(--cream-white);
  border-radius: 50%;
  transition: all var(--cream-transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.c-toggle--square .c-toggle__thumb {
  border-radius: 2px;
}

/* Checked state */
.c-toggle--checked .c-toggle__thumb {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

/* Variants - Track colors when checked */
.c-toggle--primary.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-primary);
}

.c-toggle--secondary.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-secondary);
}

.c-toggle--success.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-success);
}

.c-toggle--warning.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-warning);
}

.c-toggle--error.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-error);
}

.c-toggle--info.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-info);
}

.c-toggle--neutral.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-gray-600);
}

/* Focus state */
.c-toggle:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.3);
}

/* Disabled state */
.c-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.c-toggle--disabled .c-toggle__track {
  background-color: var(--cream-gray-200);
}

.c-toggle--disabled.c-toggle--checked .c-toggle__track {
  background-color: var(--cream-gray-400);
}

.c-toggle--disabled .c-toggle__thumb {
  background-color: var(--cream-gray-100);
}

/* Loading state */
.c-toggle--loading {
  cursor: wait;
}

.c-toggle__loader {
  width: 70%;
  height: 70%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--cream-gray-600);
  animation: toggle-spin 0.8s linear infinite;
}

.c-toggle--checked .c-toggle__loader {
  border-top-color: var(--cream-primary);
}

@keyframes toggle-spin {
  to { transform: rotate(360deg); }
}

/* Labels */
.c-toggle__label {
  cursor: pointer;
  color: var(--cream-gray-700);
  font-weight: 500;
}

.c-toggle-wrapper--disabled .c-toggle__label {
  cursor: not-allowed;
  color: var(--cream-gray-500);
}

.c-toggle__label--left {
  margin-right: 8px;
}

.c-toggle__label--right {
  margin-left: 8px;
}

/* On/Off labels inside track */
.c-toggle__label-on,
.c-toggle__label-off {
  font-size: 0.65em;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
  color: var(--cream-white);
  opacity: 0.8;
}

.c-toggle__label-on {
  padding-right: 4px;
  opacity: 0;
  transition: opacity var(--cream-transition-normal) ease;
}

.c-toggle__label-off {
  padding-left: 4px;
  opacity: 0.8;
  transition: opacity var(--cream-transition-normal) ease;
}

.c-toggle--checked .c-toggle__label-on {
  opacity: 0.8;
}

.c-toggle--checked .c-toggle__label-off {
  opacity: 0;
}

/* Icons */
.c-toggle__icon {
  font-size: 0.7em;
  line-height: 1;
}

.c-toggle__icon--on {
  color: var(--cream-success);
}

.c-toggle__icon--off {
  color: var(--cream-error);
}

/* Hover effects */
.c-toggle:not(.c-toggle--disabled):not(.c-toggle--loading):hover .c-toggle__thumb {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.c-toggle:not(.c-toggle--disabled):not(.c-toggle--loading):active .c-toggle__thumb {
  width: calc(50% - 2px);
}
</style>