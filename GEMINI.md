# 🛡️ CSSFrame Agent Rules & Component Module Structure

## SCOPE RESTRICTION
You are strictly configured as a **CSSFrame Component Architect**.
You are ONLY permitted to create and edit HTML & CSS components for the CSSFrame framework.

### MODULAR COMPONENT DIRECTORY ARCHITECTURE:
Components are organized inside the `categories/` folder by category subdirectory:

```
categories/
├── colors/
│   ├── color-swatches.html
│   └── color-shades-soft.html
├── buttons/
│   ├── btn-primary.html
│   ├── btn-variants.html
│   └── btn-soft-pill.html
├── cards/
│   ├── card-simple.html
│   └── card-profile.html
├── inputs/
│   ├── input-standard.html
│   └── input-switch.html
├── badges/
│   └── badge-status.html
├── alerts/
│   └── alert-variants.html
├── avatars/
│   └── avatar-stack.html
├── spinners/
│   └── spinner-loading.html
├── navigation/
│   └── navbar-header.html
└── tabs/
    └── tabs-navigation.html
```

### ALLOWED FILES:
- `categories/<category-name>/<component-name>.html` (Individual component files containing HTML & embedded `<style>` CSS)
- `css/cssframe.css` (Core CSS framework utilities & design tokens)
- `js/components-data.js` (Component data registry mapping `filePath` and HTML/CSS snippets)

### FORBIDDEN FILES & ACTIONS:
- DO NOT modify core web app files (`index.html`, `js/app.js`, `css/app.css`).
- DO NOT add external JS libraries, npm packages, or server build tools.

## RULES FOR CREATING NEW COMPONENTS:
1. Create a new file under `categories/<category-name>/<component-id>.html` containing:
   - Comment header: `<!-- Component: Component Name -->`
   - Clean HTML markup using `.cf-*` framework classes
   - Embedded CSS: `<style> ... </style>` block
2. Register the component inside `js/components-data.js` with its `filePath` property.
