// Cream Vue UI - A Vue 3 UI Component Library
// Main entry file

// Import components
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Avatar from './components/Avatar';
import Toggle from './components/Toggle';
import Accordion, { AccordionItem } from './components/Accordion';

// Import styles
import './styles/variables.css';
import './styles/base.css';

// Create component list
const components = {
  Button,
  Input,
  Card,
  Alert,
  Badge,
  Avatar,
  Toggle,
  Accordion,
  AccordionItem
};

// Create plugin
const CreamVueUI = {
  install(app) {
    // Register each component
    for (const [name, component] of Object.entries(components)) {
      app.component(`C${name}`, component);
    }
  }
};

// Export as plugin
export default CreamVueUI;

// Named exports for individual components
export { Button, Input, Card, Alert, Badge, Avatar, Toggle, Accordion, AccordionItem };