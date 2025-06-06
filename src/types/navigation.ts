export interface ComponentRoute {
  id: string;
  name: string;
  path: string;
  description: string;
  icon: string;
}

export const componentRoutes: ComponentRoute[] = [
  {
    id: 'typography',
    name: 'Typography',
    path: '/typography',
    description: 'Typography system and text styles',
    icon: '🔤'
  },
  {
    id: 'buttons',
    name: 'Buttons',
    path: '/buttons',
    description: 'Button components in various states',
    icon: '🔘'
  },
  {
    id: 'links',
    name: 'Links',
    path: '/links',
    description: 'Link components with icons',
    icon: '🔗'
  },
  {
    id: 'form-fields',
    name: 'Form Fields',
    path: '/form-fields',
    description: 'Input fields, textareas, and selects',
    icon: '📝'
  },
  {
    id: 'checkboxes',
    name: 'Checkboxes',
    path: '/checkboxes',
    description: 'Checkbox components and cards',
    icon: '☑️'
  },
  {
    id: 'radio-buttons',
    name: 'Radio Buttons',
    path: '/radio-buttons',
    description: 'Radio button groups and cards',
    icon: '🔘'
  },
  {
    id: 'avatars',
    name: 'Avatars',
    path: '/avatars',
    description: 'Avatar components with badges',
    icon: '👤'
  },
  {
    id: 'tags',
    name: 'Tags',
    path: '/tags',
    description: 'Tag and badge components',
    icon: '🏷️'
  },
  {
    id: 'tabs',
    name: 'Tab Groups',
    path: '/tabs',
    description: 'Tab navigation components',
    icon: '📑'
  },
  {
    id: 'filters',
    name: 'Filter Buttons',
    path: '/filters',
    description: 'Filter button variations',
    icon: '🔍'
  },
  {
    id: 'switches',
    name: 'Switches',
    path: '/switches',
    description: 'Switch and toggle components',
    icon: '🔄'
  },
  {
    id: 'pagination',
    name: 'Pagination',
    path: '/pagination',
    description: 'Pagination controls',
    icon: '📄'
  },
  {
    id: 'progress',
    name: 'Progress Bars',
    path: '/progress',
    description: 'Progress indicators',
    icon: '📊'
  },
  {
    id: 'hearts',
    name: 'Heart Icons',
    path: '/hearts',
    description: 'Heart icon components',
    icon: '❤️'
  },
  {
    id: 'bottom-sheet',
    name: 'Bottom Sheet',
    path: '/bottom-sheet',
    description: 'Bottom sheet modal',
    icon: '📋'
  },
  {
    id: 'tables',
    name: 'Tables',
    path: '/tables',
    description: 'Data table with pagination',
    icon: '📊'
  }
];