const COMPONENTS_DATA = [
  {
    id: "color-swatches",
    name: "Core Color Palette Swatches",
    category: "Colors",
    filePath: "categories/colors/color-swatches.html",
    description: "CSSFrame framework theme color swatches with hex codes and CSS variables.",
    html: `<div class="cf-color-grid">
  <div class="cf-color-swatch" style="background-color: var(--cf-primary);">
    <span class="swatch-label">Primary</span>
    <span class="swatch-code">#4f46e5</span>
  </div>
  <div class="cf-color-swatch" style="background-color: var(--cf-secondary);">
    <span class="swatch-label">Secondary</span>
    <span class="swatch-code">#64748b</span>
  </div>
  <div class="cf-color-swatch" style="background-color: var(--cf-success);">
    <span class="swatch-label">Success</span>
    <span class="swatch-code">#10b981</span>
  </div>
  <div class="cf-color-swatch" style="background-color: var(--cf-danger);">
    <span class="swatch-label">Danger</span>
    <span class="swatch-code">#ef4444</span>
  </div>
  <div class="cf-color-swatch" style="background-color: var(--cf-warning);">
    <span class="swatch-label">Warning</span>
    <span class="swatch-code">#f59e0b</span>
  </div>
  <div class="cf-color-swatch" style="background-color: var(--cf-info);">
    <span class="swatch-label">Info</span>
    <span class="swatch-code">#06b6d4</span>
  </div>
</div>`,
    css: `.cf-color-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.75rem; width: 100%; }
.cf-color-swatch { height: 90px; border-radius: var(--cf-radius); padding: 0.625rem; display: flex; flex-direction: column; justify-content: flex-end; color: #ffffff; font-size: 0.75rem; box-shadow: var(--cf-shadow-sm); }
.swatch-label { font-weight: 700; }
.swatch-code { opacity: 0.85; font-family: monospace; font-size: 0.7rem; }`
  },
  {
    id: "color-shades-soft",
    name: "Soft Shades & Design Tokens",
    category: "Colors",
    filePath: "categories/colors/color-shades-soft.html",
    description: "Light background color tokens for subtle alerts, soft buttons, and badges.",
    html: `<div class="cf-shades-list">
  <div class="cf-shade-item" style="background-color: var(--cf-primary-light); color: var(--cf-primary);">
    <span>Primary Light</span>
    <code>var(--cf-primary-light)</code>
  </div>
  <div class="cf-shade-item" style="background-color: var(--cf-success-light); color: var(--cf-success);">
    <span>Success Light</span>
    <code>var(--cf-success-light)</code>
  </div>
  <div class="cf-shade-item" style="background-color: var(--cf-danger-light); color: var(--cf-danger);">
    <span>Danger Light</span>
    <code>var(--cf-danger-light)</code>
  </div>
  <div class="cf-shade-item" style="background-color: var(--cf-warning-light); color: var(--cf-warning);">
    <span>Warning Light</span>
    <code>var(--cf-warning-light)</code>
  </div>
  <div class="cf-shade-item" style="background-color: var(--cf-info-light); color: var(--cf-info);">
    <span>Info Light</span>
    <code>var(--cf-info-light)</code>
  </div>
</div>`,
    css: `.cf-shades-list { display: flex; flex-direction: column; gap: 0.5rem; width: 100%; }
.cf-shade-item { display: flex; align-items: center; justify-content: space-between; padding: 0.625rem 1rem; border-radius: var(--cf-radius); font-size: 0.8125rem; font-weight: 600; }
.cf-shade-item code { font-family: monospace; font-size: 0.75rem; opacity: 0.85; }`
  },
  {
    id: "btn-primary",
    name: "Primary Button",
    category: "Buttons",
    filePath: "categories/buttons/btn-primary.html",
    description: "Main call-to-action button with primary theme color and subtle hover state.",
    html: `<button class="cf-btn cf-btn-primary">Primary Action</button>`,
    css: `.cf-btn-primary {\n  background-color: var(--cf-primary);\n  color: #ffffff;\n  padding: 0.625rem 1.25rem;\n  border-radius: var(--cf-radius);\n  font-weight: 500;\n}`
  },
  {
    id: "btn-variants",
    name: "Button Color Variants",
    category: "Buttons",
    filePath: "categories/buttons/btn-variants.html",
    description: "Buttons set for common actions: Success, Danger, Warning, and Outline.",
    html: `<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n  <button class="cf-btn cf-btn-success">Save Changes</button>\n  <button class="cf-btn cf-btn-danger">Delete Item</button>\n  <button class="cf-btn cf-btn-warning">Caution</button>\n  <button class="cf-btn cf-btn-outline">Cancel</button>\n</div>`,
    css: `.cf-btn-success { background-color: #10b981; color: white; }\n.cf-btn-danger { background-color: #ef4444; color: white; }\n.cf-btn-warning { background-color: #f59e0b; color: white; }\n.cf-btn-outline { background-color: transparent; border: 1px solid var(--cf-border); }`
  },
  {
    id: "btn-soft-pill",
    name: "Soft & Pill Buttons",
    category: "Buttons",
    filePath: "categories/buttons/btn-soft-pill.html",
    description: "Subtle background soft buttons and pill-shaped rounded buttons.",
    html: `<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n  <button class="cf-btn cf-btn-soft">Soft Primary</button>\n  <button class="cf-btn cf-btn-primary cf-btn-pill">Pill Primary</button>\n  <button class="cf-btn cf-btn-outline cf-btn-pill">Pill Outline</button>\n</div>`,
    css: `.cf-btn-soft { background-color: var(--cf-primary-light); color: var(--cf-primary); }\n.cf-btn-pill { border-radius: 9999px; }`
  },
  {
    id: "card-simple",
    name: "Simple Content Card",
    category: "Cards",
    filePath: "categories/cards/card-simple.html",
    description: "Standard card wrapper with header, body content, and action footer.",
    html: `<div class="cf-card" style="max-width: 320px;">\n  <div class="cf-card-header">Card Title</div>\n  <div class="cf-card-body">\n    <p style="color: var(--cf-text-muted); font-size: 0.875rem;">Build modern UI elements quickly with cssframe lightweight styling utilities.</p>\n  </div>\n  <div class="cf-card-footer">\n    <span class="cf-badge cf-badge-primary">Featured</span>\n    <button class="cf-btn cf-btn-sm cf-btn-primary">Explore</button>\n  </div>\n</div>`,
    css: `.cf-card {\n  background: var(--cf-surface);\n  border: 1px solid var(--cf-border);\n  border-radius: var(--cf-radius-lg);\n  box-shadow: var(--cf-shadow-sm);\n}`
  },
  {
    id: "card-profile",
    name: "User Profile Card",
    category: "Cards",
    filePath: "categories/cards/card-profile.html",
    description: "Profile preview card featuring avatar, badge, and interaction buttons.",
    html: `<div class="cf-card cf-card-hover" style="max-width: 300px; text-align: center;">\n  <div class="cf-card-body">\n    <div class="cf-avatar cf-avatar-lg" style="margin: 0 auto 1rem auto; width: 64px; height: 64px;">\n      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Avatar">\n    </div>\n    <h3 style="font-size: 1.125rem; font-weight: 600;">Alex Morgan</h3>\n    <p style="font-size: 0.875rem; color: var(--cf-text-muted); margin-bottom: 0.75rem;">Senior UI Designer</p>\n    <span class="cf-badge cf-badge-success"><span class="cf-dot"></span> Available</span>\n    <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem; justify-content: center;">\n      <button class="cf-btn cf-btn-sm cf-btn-primary">Follow</button>\n      <button class="cf-btn cf-btn-sm cf-btn-outline">Message</button>\n    </div>\n  </div>\n</div>`,
    css: `.cf-card-hover:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--cf-shadow-lg);\n}`
  },
  {
    id: "input-standard",
    name: "Standard Form Input",
    category: "Inputs",
    filePath: "categories/inputs/input-standard.html",
    description: "Clean input field with label and placeholder.",
    html: `<div class="cf-form-group" style="width: 100%; max-width: 320px;">\n  <label class="cf-label" for="email">Email Address</label>\n  <input type="email" id="email" class="cf-input" placeholder="name@example.com">\n</div>`,
    css: `.cf-input {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--cf-border);\n  border-radius: var(--cf-radius);\n}`
  },
  {
    id: "input-switch",
    name: "Toggle Switch",
    category: "Inputs",
    filePath: "categories/inputs/input-switch.html",
    description: "Pure CSS customizable toggle switch input.",
    html: `<div style="display: flex; align-items: center; gap: 0.75rem;">\n  <label class="cf-switch">\n    <input type="checkbox" checked>\n    <span class="cf-slider"></span>\n  </label>\n  <span style="font-size: 0.875rem; font-weight: 500;">Enable Notifications</span>\n</div>`,
    css: `.cf-switch { position: relative; width: 44px; height: 24px; }\n.cf-slider { position: absolute; cursor: pointer; inset: 0; background: var(--cf-border); border-radius: 24px; transition: .3s; }\n.cf-slider:before { content: ""; position: absolute; height: 18px; width: 18px; left: 3px; bottom: 3px; background: white; transition: .3s; border-radius: 50%; }\ninput:checked + .cf-slider { background-color: var(--cf-primary); }\ninput:checked + .cf-slider:before { transform: translateX(20px); }`
  },
  {
    id: "badge-status",
    name: "Status Badges & Tags",
    category: "Badges",
    filePath: "categories/badges/badge-status.html",
    description: "Color-coded tags with optional status indicators.",
    html: `<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">\n  <span class="cf-badge cf-badge-primary">Active</span>\n  <span class="cf-badge cf-badge-success"><span class="cf-dot"></span> Live</span>\n  <span class="cf-badge cf-badge-warning">Pending</span>\n  <span class="cf-badge cf-badge-danger">Error</span>\n  <span class="cf-badge cf-badge-info">Info</span>\n</div>`,
    css: `.cf-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 9999px;\n}`
  },
  {
    id: "alert-variants",
    name: "Notification Alerts",
    category: "Alerts",
    filePath: "categories/alerts/alert-variants.html",
    description: "Feedback and status messages with semantic background colors.",
    html: `<div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">\n  <div class="cf-alert cf-alert-info">\n    <strong>Info:</strong> Your account settings were updated successfully.\n  </div>\n  <div class="cf-alert cf-alert-success">\n    <strong>Success:</strong> Payment processed cleanly.\n  </div>\n  <div class="cf-alert cf-alert-danger">\n    <strong>Error:</strong> Failed to connect to server. Please retry.\n  </div>\n</div>`,
    css: `.cf-alert {\n  padding: 1rem 1.25rem;\n  border-radius: var(--cf-radius);\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n}`
  },
  {
    id: "avatar-stack",
    name: "Avatar & User Group",
    category: "Avatars",
    filePath: "categories/avatars/avatar-stack.html",
    description: "Individual user avatars and stacked avatar list with status indicator.",
    html: `<div style="display: flex; flex-direction: column; gap: 1rem;">\n  <div style="display: flex; gap: 0.5rem; align-items: center;">\n    <div class="cf-avatar cf-avatar-sm">JD</div>\n    <div class="cf-avatar">MK</div>\n    <div class="cf-avatar cf-avatar-lg">\n      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="User">\n    </div>\n  </div>\n  <div class="cf-avatar-group">\n    <div class="cf-avatar">AB</div>\n    <div class="cf-avatar">CD</div>\n    <div class="cf-avatar">EF</div>\n    <div class="cf-avatar" style="background: var(--cf-secondary); color: white;">+5</div>\n  </div>\n</div>`,
    css: `.cf-avatar { width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; }\n.cf-avatar-group { display: flex; }\n.cf-avatar-group .cf-avatar { margin-left: -0.75rem; border: 2px solid white; }`
  },
  {
    id: "spinner-loading",
    name: "Loading Spinner",
    category: "Spinners",
    filePath: "categories/spinners/spinner-loading.html",
    description: "Animated pure CSS spinner for async operations and button loading states.",
    html: `<div style="display: flex; align-items: center; gap: 1.5rem;">\n  <div class="cf-spinner"></div>\n  <button class="cf-btn cf-btn-primary" disabled>\n    <div class="cf-spinner" style="width: 1rem; height: 1rem; border-width: 2px; border-top-color: white;"></div>\n    Loading...\n  </button>\n</div>`,
    css: `.cf-spinner {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 3px solid rgba(79, 70, 229, 0.2);\n  border-radius: 50%;\n  border-top-color: var(--cf-primary);\n  animation: cf-spin 0.8s linear infinite;\n}\n@keyframes cf-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: "navbar-header",
    name: "Navigation Header",
    category: "Navigation",
    filePath: "categories/navigation/navbar-header.html",
    description: "Clean navbar layout with logo brand mark, navigation links, and action button.",
    html: `<nav class="cf-navbar" style="width: 100%;">\n  <a href="#" class="cf-navbar-brand">\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>\n    <span>CSSFrame</span>\n  </a>\n  <ul class="cf-navbar-nav">\n    <li><a href="#" class="cf-nav-link active">Home</a></li>\n    <li><a href="#" class="cf-nav-link">Components</a></li>\n    <li><a href="#" class="cf-nav-link">Docs</a></li>\n  </ul>\n  <button class="cf-btn cf-btn-sm cf-btn-primary">Get Started</button>\n</nav>`,
    css: `.cf-navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1.25rem;\n  background-color: var(--cf-surface);\n  border: 1px solid var(--cf-border);\n  border-radius: var(--cf-radius);\n}`
  },
  {
    id: "tabs-navigation",
    name: "Interactive Navigation Tabs",
    category: "Tabs",
    filePath: "categories/tabs/tabs-navigation.html",
    description: "Underlined horizontal tabs interface for switching content panels.",
    html: `<div class="cf-tabs" style="width: 100%;">\n  <a class="cf-tab active">Overview</a>\n  <a class="cf-tab">Analytics</a>\n  <a class="cf-tab">Settings</a>\n  <a class="cf-tab">Billing</a>\n</div>`,
    css: `.cf-tabs { display: flex; border-bottom: 1px solid var(--cf-border); gap: 1.5rem; }\n.cf-tab { padding: 0.75rem 0.25rem; font-size: 0.875rem; color: var(--cf-text-muted); cursor: pointer; }\n.cf-tab.active { color: var(--cf-primary); border-bottom: 2px solid var(--cf-primary); }`
  }
];
