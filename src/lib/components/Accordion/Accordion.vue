<script>
export default {
  name: 'CAccordion',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => [
        'default', 'bordered', 'separated', 'elevated', 'minimal'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    iconPosition: {
      type: String,
      default: 'right',
      validator: (value) => ['left', 'right'].includes(value)
    },
    customIcon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flush: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    expandIcon: {
      type: String,
      default: '+'
    },
    collapseIcon: {
      type: String,
      default: '−'
    },
    modelValue: {
      type: [Array, Number, String],
      default: () => []
    }
  },
  provide() {
    const self = this;
    return {
      accordion: {
        get activeItems() { return self.localActiveItems; },
        multiple: this.multiple,
        variant: this.variant,
        size: this.size,
        iconPosition: this.iconPosition,
        customIcon: this.customIcon,
        disabled: this.disabled,
        expandIcon: this.expandIcon,
        collapseIcon: this.collapseIcon,
        toggleItem: this.toggleItem
      }
    };
  },
  data() {
    return {
      localActiveItems: Array.isArray(this.modelValue) ? [...this.modelValue] : [this.modelValue]
    };
  },
  computed: {
    classes() {
      return [
        'c-accordion',
        `c-accordion--${this.variant}`,
        `c-accordion--${this.size}`,
        {
          'c-accordion--flush': this.flush,
          'c-accordion--rounded': this.rounded && !this.flush,
          'c-accordion--disabled': this.disabled
        }
      ];
    }
  },
  watch: {
    modelValue: {
      handler(newValue) {
        this.localActiveItems = Array.isArray(newValue) ? [...newValue] : [newValue];
      },
      deep: true
    }
  },
  methods: {
    toggleItem(itemKey) {
      if (this.disabled) return;
      
      const index = this.localActiveItems.indexOf(itemKey);
      
      if (index > -1) {
        // Item is active, remove it
        if (this.multiple) {
          const newActiveItems = [...this.localActiveItems];
          newActiveItems.splice(index, 1);
          this.updateActiveItems(newActiveItems);
        } else {
          this.updateActiveItems([]);
        }
      } else {
        // Item is not active, add it
        if (this.multiple) {
          this.updateActiveItems([...this.localActiveItems, itemKey]);
        } else {
          this.updateActiveItems([itemKey]);
        }
      }
    },
    updateActiveItems(items) {
      this.localActiveItems = items;
      this.$emit('update:modelValue', this.multiple ? items : (items.length ? items[0] : null));
      this.$emit('change', this.multiple ? items : (items.length ? items[0] : null));
    }
  }
}
</script>

<template>
  <div :class="classes" role="tablist" aria-multiselectable="true">
    <slot></slot>
  </div>
</template>

<style>
/* Base Accordion Styles */
.c-accordion {
  width: 100%;
  font-family: var(--cream-font-family);
  overflow: hidden;
}

/* Variants */
.c-accordion--default {
  background-color: var(--cream-white);
  border: 1px solid var(--cream-gray-200);
}

.c-accordion--bordered {
  background-color: var(--cream-white);
  border: 1px solid var(--cream-gray-300);
}

.c-accordion--separated > * {
  margin-bottom: 0.5rem;
}

.c-accordion--separated > *:last-child {
  margin-bottom: 0;
}

.c-accordion--elevated {
  background-color: var(--cream-white);
  box-shadow: var(--cream-shadow-md);
  border: none;
}

.c-accordion--minimal {
  background-color: transparent;
  border: none;
}

/* Sizes */
.c-accordion--sm .c-accordion-item__header {
  padding: 0.5rem 0.75rem;
  font-size: var(--cream-font-size-sm);
}

.c-accordion--sm .c-accordion-item__content {
  padding: 0.5rem 0.75rem;
  font-size: var(--cream-font-size-xs);
}

.c-accordion--md .c-accordion-item__header {
  padding: 0.75rem 1rem;
  font-size: var(--cream-font-size-md);
}

.c-accordion--md .c-accordion-item__content {
  padding: 0.75rem 1rem;
  font-size: var(--cream-font-size-sm);
}

.c-accordion--lg .c-accordion-item__header {
  padding: 1rem 1.25rem;
  font-size: var(--cream-font-size-lg);
}

.c-accordion--lg .c-accordion-item__content {
  padding: 1rem 1.25rem;
  font-size: var(--cream-font-size-md);
}

/* Modifiers */
.c-accordion--flush {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
}

.c-accordion--rounded {
  border-radius: var(--cream-radius-lg);
}

.c-accordion--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.c-accordion--disabled .c-accordion-item__header {
  cursor: not-allowed;
}
</style>