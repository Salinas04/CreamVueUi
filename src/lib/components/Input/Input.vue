<script>
export default {
  name: 'CInput',
  data() {
    return {
      isFocused: false
    };
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => [
        'text', 'password', 'email', 'number', 'tel', 'url', 'search',
        'date', 'time', 'datetime-local', 'month', 'week'
      ].includes(value)
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    success: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
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
    clearable: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'outlined', 'filled', 'underlined'].includes(value)
    },
    floatingLabel: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: null
    },
    showCount: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    elevation: {
      type: String,
      default: 'none',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  computed: {
    inputClasses() {
      return [
        'c-input__field',
        `c-input__field--${this.size}`,
        `c-input__field--${this.variant}`,
        `c-input__field--elevation-${this.elevation}`,
        {
          'c-input__field--error': this.error,
          'c-input__field--success': this.success,
          'c-input__field--with-icon': this.icon,
          'c-input__field--with-icon-left': this.icon && this.iconPosition === 'left',
          'c-input__field--with-icon-right': this.icon && this.iconPosition === 'right',
          'c-input__field--clearable': this.clearable && this.modelValue,
          'c-input__field--rounded': this.rounded,
          'c-input__field--with-prefix': this.prefix,
          'c-input__field--with-suffix': this.suffix,
          'c-input__field--floating': this.floatingLabel && this.label
        }
      ];
    },
    wrapperClasses() {
      return [
        'c-input',
        `c-input--${this.variant}`,
        `c-input--${this.size}`,
        {
          'c-input--disabled': this.disabled,
          'c-input--readonly': this.readonly,
          'c-input--error': this.error,
          'c-input--success': this.success,
          'c-input--floating': this.floatingLabel && this.label,
          'c-input--focused': this.isFocused,
          'c-input--has-value': !!this.modelValue,
          'c-input--with-count': this.showCount && this.maxLength
        }
      ];
    },
    showClearButton() {
      return this.clearable && this.modelValue && !this.disabled && !this.readonly;
    },
    characterCount() {
      if (!this.showCount || this.maxLength === null) return null;
      const valueLength = String(this.modelValue || '').length;
      return `${valueLength}/${this.maxLength}`;
    },
    isOverMaxLength() {
      if (this.maxLength === null) return false;
      return String(this.modelValue || '').length > this.maxLength;
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    clearInput() {
      this.$emit('update:modelValue', '');
      this.$emit('clear');
      // Focus the input after clearing
      this.$refs.input.focus();
    },
    onFocus(event) {
      this.isFocused = true;
      this.$emit('focus', event);
    },
    onBlur(event) {
      this.isFocused = false;
      this.$emit('blur', event);
    }
  }
}
</script>

<template>
  <div :class="wrapperClasses">
    <label v-if="label" class="c-input__label" :for="'input-' + _uid">
      {{ label }}
      <span v-if="required" class="c-input__required">*</span>
    </label>
    
    <div class="c-input__wrapper">
      <!-- Left icon -->
      <span v-if="icon && iconPosition === 'left'" class="c-input__icon c-input__icon--left">
        {{ icon }}
      </span>
      
      <!-- Prefix -->
      <span v-if="prefix" class="c-input__prefix">{{ prefix }}</span>
      
      <!-- Input field -->
      <input
        :id="'input-' + _uid"
        ref="input"
        :type="type"
        :value="modelValue"
        :placeholder="floatingLabel && label ? ' ' : placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :maxlength="maxLength"
        :autofocus="autofocus"
        :class="inputClasses"
        @input="updateValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      
      <!-- Floating label -->
      <span v-if="floatingLabel && label" class="c-input__floating-label">
        {{ label }}
        <span v-if="required" class="c-input__required">*</span>
      </span>
      
      <!-- Suffix -->
      <span v-if="suffix" class="c-input__suffix">{{ suffix }}</span>
      
      <!-- Right icon -->
      <span v-if="icon && iconPosition === 'right'" class="c-input__icon c-input__icon--right">
        {{ icon }}
      </span>
      
      <!-- Clear button -->
      <button
        v-if="showClearButton"
        type="button"
        class="c-input__clear"
        @click="clearInput"
        aria-label="Clear input"
      >
        ×
      </button>
    </div>
    
    <!-- Bottom row for error message and character count -->
    <div class="c-input__bottom-row">
      <div v-if="error" class="c-input__error">{{ error }}</div>
      <div v-if="showCount && maxLength" 
           class="c-input__count" 
           :class="{ 'c-input__count--over': isOverMaxLength }">
        {{ characterCount }}
      </div>
    </div>
  </div>
</template>

<style>
.c-input {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--cream-spacing-md);
  position: relative;
}

/* Label styles */
.c-input__label {
  display: block;
  margin-bottom: var(--cream-spacing-xs);
  font-size: var(--cream-font-size-sm);
  font-weight: 500;
  color: var(--cream-gray-700);
  transition: all var(--cream-transition-normal) ease;
}

.c-input__required {
  color: var(--cream-error);
  margin-left: 2px;
}

.c-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

/* Base input field */
.c-input__field {
  display: block;
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: var(--cream-font-size-md);
  line-height: 1.5;
  color: var(--cream-gray-900);
  background-color: var(--cream-white);
  background-clip: padding-box;
  border: 1px solid var(--cream-gray-300);
  border-radius: var(--cream-radius-md);
  transition: all var(--cream-transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

/* Hover state */
.c-input__field:hover:not(:disabled):not(:read-only) {
  border-color: var(--cream-gray-400);
}

/* Focus state */
.c-input__field:focus {
  outline: none;
  border-color: var(--cream-primary);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.25);
}

.c-input__field::placeholder {
  color: var(--cream-gray-400);
  opacity: 1;
  transition: opacity var(--cream-transition-normal) ease;
}

.c-input__field:disabled,
.c-input__field:read-only {
  background-color: var(--cream-gray-100);
  opacity: 1;
}

.c-input__field:disabled {
  cursor: not-allowed;
  color: var(--cream-gray-500);
}

/* Sizes */
.c-input__field--xs {
  padding: 0.25rem 0.5rem;
  font-size: var(--cream-font-size-xs);
  border-radius: var(--cream-radius-sm);
}

.c-input__field--sm {
  padding: 0.375rem 0.625rem;
  font-size: var(--cream-font-size-sm);
  border-radius: var(--cream-radius-sm);
}

.c-input__field--md {
  padding: 0.625rem 0.75rem;
  font-size: var(--cream-font-size-md);
  border-radius: var(--cream-radius-md);
}

.c-input__field--lg {
  padding: 0.75rem 1rem;
  font-size: var(--cream-font-size-lg);
  border-radius: var(--cream-radius-lg);
}

.c-input__field--xl {
  padding: 0.875rem 1.25rem;
  font-size: var(--cream-font-size-xl);
  border-radius: var(--cream-radius-lg);
}

/* Variants */
/* Default variant */
.c-input__field--default {
  background-color: var(--cream-white);
  border: 1px solid var(--cream-gray-300);
}

/* Outlined variant */
.c-input__field--outlined {
  background-color: transparent;
  border: 2px solid var(--cream-gray-300);
}

.c-input__field--outlined:focus {
  border-color: var(--cream-primary);
  background-color: rgba(66, 184, 131, 0.02);
}

/* Filled variant */
.c-input__field--filled {
  background-color: var(--cream-gray-100);
  border: 1px solid transparent;
  border-bottom: 2px solid var(--cream-gray-300);
  border-radius: var(--cream-radius-md) var(--cream-radius-md) 0 0;
}

.c-input__field--filled:focus {
  background-color: var(--cream-gray-50);
  border-bottom-color: var(--cream-primary);
  box-shadow: none;
}

/* Underlined variant */
.c-input__field--underlined {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--cream-gray-300);
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
}

.c-input__field--underlined:focus {
  border-bottom-color: var(--cream-primary);
  box-shadow: none;
}

/* Rounded variant */
.c-input__field--rounded {
  border-radius: var(--cream-radius-full);
}

/* Elevation levels */
.c-input__field--elevation-sm {
  box-shadow: var(--cream-shadow-sm);
}

.c-input__field--elevation-md {
  box-shadow: var(--cream-shadow-md);
}

.c-input__field--elevation-lg {
  box-shadow: var(--cream-shadow-lg);
}

.c-input__field--elevation-xl {
  box-shadow: var(--cream-shadow-xl);
}

/* States */
.c-input--error .c-input__label {
  color: var(--cream-error);
}

.c-input__field--error {
  border-color: var(--cream-error);
}

.c-input__field--error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
}

.c-input__error {
  font-size: var(--cream-font-size-sm);
  color: var(--cream-error);
  margin-top: var(--cream-spacing-xs);
}

.c-input--success .c-input__label {
  color: var(--cream-success);
}

.c-input__field--success {
  border-color: var(--cream-success);
}

.c-input__field--success:focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
}

/* Bottom row for error and character count */
.c-input__bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--cream-spacing-xs);
  min-height: 1.5rem;
}

/* Character count */
.c-input__count {
  font-size: var(--cream-font-size-xs);
  color: var(--cream-gray-500);
  margin-left: auto;
}

.c-input__count--over {
  color: var(--cream-error);
  font-weight: 600;
}

/* Icons */
.c-input__icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cream-gray-500);
  pointer-events: none;
  z-index: 2;
}

.c-input__icon--left {
  left: 0.75rem;
}

.c-input__icon--right {
  right: 0.75rem;
}

.c-input__field--with-icon-left {
  padding-left: 2.5rem;
}

.c-input__field--with-icon-right {
  padding-right: 2.5rem;
}

/* Prefix and Suffix */
.c-input__prefix,
.c-input__suffix {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cream-gray-600);
  font-size: 0.9em;
  z-index: 2;
  pointer-events: none;
}

.c-input__prefix {
  left: 0.75rem;
}

.c-input__suffix {
  right: 0.75rem;
}

.c-input__field--with-prefix {
  padding-left: 2.5rem;
}

.c-input__field--with-suffix {
  padding-right: 2.5rem;
}

/* Clear button */
.c-input__clear {
  position: absolute;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1;
  color: var(--cream-gray-500);
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all var(--cream-transition-fast) ease;
  z-index: 2;
}

.c-input__clear:hover {
  color: var(--cream-gray-700);
  background-color: var(--cream-gray-200);
}

.c-input__clear:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--cream-primary);
}

.c-input__field--clearable {
  padding-right: 2.5rem;
}

/* Floating label */
.c-input--floating {
  margin-top: 0.5rem;
}

.c-input--floating .c-input__label {
  display: none;
}

.c-input__floating-label {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--cream-font-size-md);
  color: var(--cream-gray-500);
  pointer-events: none;
  transition: all var(--cream-transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  background-color: transparent;
  padding: 0 0.25rem;
}

.c-input--focused .c-input__floating-label,
.c-input--has-value .c-input__floating-label {
  top: 0;
  font-size: var(--cream-font-size-xs);
  color: var(--cream-primary);
  background-color: var(--cream-white);
}

.c-input--filled.c-input--focused .c-input__floating-label,
.c-input--filled.c-input--has-value .c-input__floating-label {
  background-color: var(--cream-gray-100);
}

.c-input--outlined .c-input__floating-label {
  background-color: var(--cream-white);
}

.c-input--underlined .c-input__floating-label {
  left: 0;
}

/* Adjust padding for different sizes with floating label */
.c-input--xs .c-input__floating-label {
  font-size: var(--cream-font-size-xs);
}

.c-input--sm .c-input__floating-label {
  font-size: var(--cream-font-size-sm);
}

.c-input--lg .c-input__floating-label {
  font-size: var(--cream-font-size-lg);
}

.c-input--xl .c-input__floating-label {
  font-size: var(--cream-font-size-xl);
}
</style>