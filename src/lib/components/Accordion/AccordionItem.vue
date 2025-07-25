<script>
export default {
  name: 'CAccordionItem',
  inject: ['accordion'],
  props: {
    title: {
      type: String,
      default: ''
    },
    itemKey: {
      type: [String, Number],
      default: () => `item-${Math.random().toString(36).substring(2, 9)}`
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      if (Array.isArray(this.accordion.activeItems)) {
        return this.accordion.activeItems.includes(this.itemKey);
      }
      return this.accordion.activeItems === this.itemKey;
    },
    isDisabled() {
      return this.disabled || this.accordion.disabled;
    },
    headerClasses() {
      return [
        'c-accordion-item__header',
        {
          'c-accordion-item__header--active': this.isActive,
          'c-accordion-item__header--disabled': this.isDisabled,
          [`c-accordion-item__header--icon-${this.accordion.iconPosition}`]: true
        }
      ];
    },
    contentClasses() {
      return [
        'c-accordion-item__content',
        {
          'c-accordion-item__content--active': this.isActive
        }
      ];
    },
    itemClasses() {
      return [
        'c-accordion-item',
        {
          'c-accordion-item--active': this.isActive,
          'c-accordion-item--disabled': this.isDisabled
        }
      ];
    },
    displayIcon() {
      if (this.icon) return this.icon;
      if (this.accordion.customIcon) return this.accordion.customIcon;
      
      return this.isActive ? this.accordion.collapseIcon : this.accordion.expandIcon;
    }
  },
  methods: {
    toggle() {
      if (!this.isDisabled) {
        this.accordion.toggleItem(this.itemKey);
      }
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
  <div :class="itemClasses">
    <div 
      :class="headerClasses"
      @click="toggle"
      @keydown="onKeyDown"
      role="tab"
      :aria-expanded="isActive ? 'true' : 'false'"
      :aria-disabled="isDisabled ? 'true' : 'false'"
      :tabindex="isDisabled ? -1 : 0"
    >
      <!-- Icon (left position) -->
      <span 
        v-if="accordion.iconPosition === 'left'" 
        class="c-accordion-item__icon c-accordion-item__icon--left"
      >
        {{ displayIcon }}
      </span>
      
      <!-- Title -->
      <div class="c-accordion-item__title">
        <slot name="title">{{ title }}</slot>
      </div>
      
      <!-- Icon (right position) -->
      <span 
        v-if="accordion.iconPosition === 'right'" 
        class="c-accordion-item__icon c-accordion-item__icon--right"
      >
        {{ displayIcon }}
      </span>
    </div>
    
    <!-- Content -->
    <transition 
      name="accordion-slide" 
      @enter="el => el.style.height = el.scrollHeight + 'px'"
      @after-enter="el => el.style.height = 'auto'"
      @before-leave="el => el.style.height = el.scrollHeight + 'px'"
      @leave="el => el.style.height = '0'"
    >
      <div 
        v-show="isActive"
        :class="contentClasses"
        role="tabpanel"
      >
        <div class="c-accordion-item__body">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
/* Accordion Item */
.c-accordion-item {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid var(--cream-gray-200);
}

.c-accordion-item:last-child {
  border-bottom: none;
}

/* Accordion Header */
.c-accordion-item__header {
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  color: var(--cream-gray-800);
  transition: all var(--cream-transition-normal) ease;
  position: relative;
  background-color: var(--cream-white);
}

.c-accordion-item__header:hover {
  background-color: var(--cream-gray-50);
}

.c-accordion-item__header:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px rgba(66, 184, 131, 0.3);
}

.c-accordion-item__header--active {
  color: var(--cream-primary);
  background-color: var(--cream-gray-50);
  font-weight: 600;
}

.c-accordion-item__header--disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background-color: var(--cream-gray-100);
}

/* Icon positioning */
.c-accordion-item__header--icon-left {
  flex-direction: row;
}

.c-accordion-item__header--icon-right {
  flex-direction: row;
  justify-content: space-between;
}

.c-accordion-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--cream-transition-normal) ease;
  font-size: 1.2em;
  line-height: 1;
}

.c-accordion-item__icon--left {
  margin-right: 0.75rem;
}

.c-accordion-item__icon--right {
  margin-left: 0.75rem;
}

.c-accordion-item__header--active .c-accordion-item__icon {
  transform: rotate(0deg);
  color: var(--cream-primary);
}

/* Title */
.c-accordion-item__title {
  flex: 1;
}

/* Content */
.c-accordion-item__content {
  overflow: hidden;
  height: 0;
  transition: height var(--cream-transition-normal) ease;
}

.c-accordion-item__body {
  color: var(--cream-gray-700);
}

/* Separated variant */
.c-accordion--separated .c-accordion-item {
  border: 1px solid var(--cream-gray-200);
  border-radius: var(--cream-radius-md);
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.c-accordion--separated .c-accordion-item:last-child {
  margin-bottom: 0;
}

.c-accordion--separated .c-accordion-item__header {
  border-bottom: none;
}

.c-accordion--separated .c-accordion-item__header--active {
  border-bottom: 1px solid var(--cream-gray-200);
}

/* Bordered variant */
.c-accordion--bordered .c-accordion-item {
  border-bottom: 1px solid var(--cream-gray-300);
}

.c-accordion--bordered .c-accordion-item__header {
  border-bottom: none;
}

.c-accordion--bordered .c-accordion-item__header--active {
  border-bottom: 1px solid var(--cream-gray-300);
}

/* Elevated variant */
.c-accordion--elevated .c-accordion-item__header--active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Minimal variant */
.c-accordion--minimal .c-accordion-item {
  border-bottom: 1px solid var(--cream-gray-200);
}

.c-accordion--minimal .c-accordion-item__header {
  background-color: transparent;
}

.c-accordion--minimal .c-accordion-item__header:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.c-accordion--minimal .c-accordion-item__header--active {
  background-color: transparent;
  border-bottom: none;
}

/* Animation */
.accordion-slide-enter-active,
.accordion-slide-leave-active {
  transition: height var(--cream-transition-normal) ease;
  overflow: hidden;
}

.accordion-slide-enter-from,
.accordion-slide-leave-to {
  height: 0 !important;
  overflow: hidden;
}
</style>