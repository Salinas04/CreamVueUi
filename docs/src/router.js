import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import Home from './pages/Home.vue';
import Installation from './pages/Installation.vue';
import Usage from './pages/Usage.vue';
import ButtonDocs from './pages/components/Button.vue';
import InputDocs from './pages/components/Input.vue';
import CardDocs from './pages/components/Card.vue';
import AlertDocs from './pages/components/Alert.vue';
import BadgeDocs from './pages/components/Badge.vue';
import AvatarDocs from './pages/components/Avatar.vue';
import ToggleDocs from './pages/components/Toggle.vue';
import AccordionDocs from './pages/components/Accordion.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/usage',
    name: 'Usage',
    component: Usage
  },
  {
    path: '/components/button',
    name: 'ButtonDocs',
    component: ButtonDocs
  },
  {
    path: '/components/input',
    name: 'InputDocs',
    component: InputDocs
  },
  {
    path: '/components/card',
    name: 'CardDocs',
    component: CardDocs
  },
  {
    path: '/components/alert',
    name: 'AlertDocs',
    component: AlertDocs
  },
  {
    path: '/components/badge',
    name: 'BadgeDocs',
    component: BadgeDocs
  },
  {
    path: '/components/avatar',
    name: 'AvatarDocs',
    component: AvatarDocs
  },
  {
    path: '/components/toggle',
    name: 'ToggleDocs',
    component: ToggleDocs
  },
  {
    path: '/components/accordion',
    name: 'AccordionDocs',
    component: AccordionDocs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;