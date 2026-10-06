// CSSFrame Main Application Script

document.addEventListener('DOMContentLoaded', () => {
  let activeCategory = 'All';
  let searchQuery = '';
  let activeComponentForModal = null;
  let activeModalTab = 'html';

  const gridContainer = document.getElementById('componentsGrid');
  const sidebarNav = document.getElementById('sidebarNav');
  const searchInput = document.getElementById('searchInput');
  const categoryTitle = document.getElementById('categoryTitle');
  const categoryDesc = document.getElementById('categoryDesc');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  // Modal elements
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalPreview = document.getElementById('modalPreview');
  const modalCodeBox = document.getElementById('modalCodeBox');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const tabHtmlBtn = document.getElementById('tabHtmlBtn');
  const tabCssBtn = document.getElementById('tabCssBtn');
  const copyModalCodeBtn = document.getElementById('copyModalCodeBtn');


  const PROMPT_TEMPLATE = `You are a UI Component Generator for CSSFrame CSS Framework.
Output ONLY a single valid JSON object matching the schema below without markdown code blocks.

CSSFRAME UTILITIES & CLASSES AVAILABLE:
- Buttons: .cf-btn, .cf-btn-primary, .cf-btn-success, .cf-btn-danger, .cf-btn-warning, .cf-btn-outline, .cf-btn-soft, .cf-btn-sm, .cf-btn-lg, .cf-btn-pill, .cf-btn-group
- Cards: .cf-card, .cf-card-hover, .cf-card-header, .cf-card-body, .cf-card-footer, .cf-card-img
- Badges: .cf-badge, .cf-badge-primary, .cf-badge-success, .cf-badge-danger, .cf-badge-warning, .cf-badge-info, .cf-dot
- Inputs/Forms: .cf-form-group, .cf-label, .cf-input, .cf-select, .cf-textarea, .cf-switch, .cf-slider
- Alerts: .cf-alert, .cf-alert-info, .cf-alert-success, .cf-alert-warning, .cf-alert-danger
- Avatars: .cf-avatar, .cf-avatar-sm, .cf-avatar-lg, .cf-avatar-group
- Spinners: .cf-spinner
- Nav/Tabs: .cf-tabs, .cf-tab, .cf-navbar, .cf-navbar-brand, .cf-navbar-nav, .cf-nav-link
- Tokens: var(--cf-primary), var(--cf-secondary), var(--cf-success), var(--cf-danger), var(--cf-warning), var(--cf-info), var(--cf-surface), var(--cf-border), var(--cf-text), var(--cf-text-muted)

JSON SCHEMA:
{
  "id": "kebab-case-id",
  "name": "Component Title",
  "category": "Buttons | Cards | Inputs | Badges | Alerts | Avatars | Spinners | Navigation | Tabs | Accordions | Modals",
  "description": "Short explanation of the component behavior and design.",
  "html": "<div class=\\"cf-card\\">...</div>",
  "css": ".cf-custom-class { /* optional extra styles */ }"
}

Component request: [INSERT COMPONENT DESCRIPTION HERE e.g., Pricing Card with badge and action button]`;

  // Initialize App
  function init() {
    renderSidebar();
    renderComponents();
    setupEventListeners();
  }

  // Extract unique categories
  function getCategories() {
    const categories = ['All'];
    COMPONENTS_DATA.forEach(comp => {
      if (!categories.includes(comp.category)) {
        categories.push(comp.category);
      }
    });
    return categories;
  }

  // Render Sidebar Category Menu
  function renderSidebar() {
    const categories = getCategories();
    sidebarNav.innerHTML = '';

    categories.forEach(cat => {
      const count = cat === 'All' 
        ? COMPONENTS_DATA.length 
        : COMPONENTS_DATA.filter(c => c.category === cat).length;

      const navItem = document.createElement('a');
      navItem.className = `nav-item ${cat === activeCategory ? 'active' : ''}`;
      navItem.innerHTML = `
        <span>${cat}</span>
        <span class="nav-count">${count}</span>
      `;

      navItem.addEventListener('click', (e) => {
        e.preventDefault();
        activeCategory = cat;
        renderSidebar();
        renderComponents();
      });

      sidebarNav.appendChild(navItem);
    });
  }

  // Filter components
  function getFilteredComponents() {
    return COMPONENTS_DATA.filter(comp => {
      const matchesCategory = activeCategory === 'All' || comp.category === activeCategory;
      const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            comp.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  // Render Component Cards Grid
  function renderComponents() {
    const filtered = getFilteredComponents();
    
    // Update Header
    categoryTitle.textContent = activeCategory === 'All' ? 'All Components' : `${activeCategory} Components`;
    categoryDesc.textContent = `Browse and copy modern pure HTML/CSS ${activeCategory.toLowerCase()} components ready for your project.`;

    gridContainer.innerHTML = '';

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem;">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <h3>No components found</h3>
          <p>Try searching with another keyword or select a different category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(comp => {
      const card = document.createElement('div');
      card.className = 'component-card';

      card.innerHTML = `
        <div class="preview-container">
          <div class="preview-quick-actions">
            <button class="quick-copy-btn" data-action="copy-combined" data-id="${comp.id}" title="Copy Code (HTML & CSS)">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              Copy Code
            </button>
            <button class="quick-copy-btn quick-copy-btn-ai" data-action="copy-prompt" data-id="${comp.id}" title="Copy AI Prompt for this component">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              AI Prompt
            </button>
          </div>
          ${comp.html}
        </div>
        <div class="component-info">
          <div class="component-title-row">
            <h3 class="component-title">${comp.name}</h3>
            <span class="cf-badge cf-badge-primary">${comp.category}</span>
          </div>
          <p class="component-desc">${comp.description}</p>
          <div class="component-actions">
            <button class="action-btn action-btn-primary" data-action="view" data-id="${comp.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              View Code
            </button>
            <button class="action-btn" data-action="copy-combined" data-id="${comp.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              Copy Code
            </button>
            <button class="action-btn" data-action="copy-prompt" data-id="${comp.id}">
              Prompt
            </button>
          </div>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    // Delegate click buttons (both quick copy floating bar and card action bar)
    gridContainer.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.dataset.action;
        const id = btn.dataset.id;
        const comp = COMPONENTS_DATA.find(c => c.id === id);

        if (!comp) return;

        if (action === 'view') {
          openModal(comp);
        } else if (action === 'copy-combined' || action === 'copy-html' || action === 'copy-css') {
          const combinedCode = getCombinedCode(comp);
          copyToClipboard(combinedCode, `Code for "${comp.name}" copied!`);
        } else if (action === 'copy-prompt') {
          const compPrompt = `You are a UI Component Generator for CSSFrame CSS Framework.
Create or customize a component based on this existing reference:

Component Name: ${comp.name}
Category: ${comp.category}
Description: ${comp.description}

Existing CSSFrame HTML:
${comp.html}

Existing Scoped CSS:
${comp.css}

Please generate an upgraded or modified variant of this component as a valid JSON object matching CSSFrame specifications.`;
          copyToClipboard(compPrompt, `AI Prompt for "${comp.name}" copied!`);
        }
      });
    });

  // Helper to format combined HTML and CSS
  function getCombinedCode(comp) {
    let output = `<!-- CSSFrame Component: ${comp.name} -->\n${comp.html}`;
    if (comp.css && comp.css.trim()) {
      output += `\n\n<style>\n/* Component CSS */\n${comp.css}\n</style>`;
    }
    return output;
  }
  }

  // Open Modal
  function openModal(comp) {
    activeComponentForModal = comp;
    activeModalTab = 'html';

    modalTitle.textContent = comp.name;
    modalPreview.innerHTML = comp.html;

    tabHtmlBtn.classList.add('active');
    tabCssBtn.classList.remove('active');

    updateModalCodeContent();

    modalOverlay.classList.add('active');
  }

  // Update modal code snippet
  function updateModalCodeContent() {
    if (!activeComponentForModal) return;
    modalCodeBox.textContent = activeModalTab === 'html' 
      ? activeComponentForModal.html 
      : activeComponentForModal.css;
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderComponents();
    });

    // Close Modal
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });

    // Tab buttons in modal
    tabHtmlBtn.addEventListener('click', () => {
      activeModalTab = 'html';
      tabHtmlBtn.classList.add('active');
      tabCssBtn.classList.remove('active');
      updateModalCodeContent();
    });

    tabCssBtn.addEventListener('click', () => {
      activeModalTab = 'css';
      tabCssBtn.classList.add('active');
      tabHtmlBtn.classList.remove('active');
      updateModalCodeContent();
    });

    // Copy code button inside modal
    copyModalCodeBtn.addEventListener('click', () => {
      if (!activeComponentForModal) return;
      const textToCopy = activeModalTab === 'html' ? activeComponentForModal.html : activeComponentForModal.css;
      copyToClipboard(textToCopy, `${activeModalTab.toUpperCase()} code copied!`);
    });

    // Copy CDN Link Button Listener
    const copyCdnBtn = document.getElementById('copyCdnBtn');
    if (copyCdnBtn) {
      copyCdnBtn.addEventListener('click', () => {
        const cdnTag = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jaigansa/cssframe@main/css/cssframe.css">`;
        copyToClipboard(cdnTag, 'CSSFrame jsDelivr CDN link copied to clipboard!');
      });
    }

    // Dark/Light Theme Toggle
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      
      const themeBtnText = document.getElementById('themeBtnText');
      const themeIcon = document.getElementById('themeIcon');
      
      if (newTheme === 'dark') {
        themeBtnText.textContent = 'Light';
        themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
      } else {
        themeBtnText.textContent = 'Dark';
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      }
    });
  }

  // Copy to Clipboard Utility
  function copyToClipboard(text, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }

  // Show Toast
  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  init();
});
