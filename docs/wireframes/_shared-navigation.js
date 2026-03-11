/* ============================================================
   Dodgeprint — Shared Navigation & Interaction Logic
   Used across all wireframe HTML files
   ============================================================ */

// ===== WORKSPACE SWITCHER =====
var WS_KEY = 'dodgeprint_selected_workspace';
var WORKSPACES = [
  { id: 'ws-main', name: 'DodgePrint HQ', type: 'BUSINESS', members: 5, active: true },
  { id: 'ws-personal', name: 'Personal Experiments', type: 'PERSONAL', members: 1, active: false }
];

function getSelectedWorkspace() {
  return localStorage.getItem(WS_KEY) || 'ws-main';
}

function setSelectedWorkspace(wsId) {
  localStorage.setItem(WS_KEY, wsId);
  updateWorkspaceDisplay();
  var ws = WORKSPACES.find(function(w) { return w.id === wsId; }) || WORKSPACES[0];
  showToast('Switched to ' + ws.name, 'success');
}

function updateWorkspaceDisplay() {
  var wsId = getSelectedWorkspace();
  var ws = WORKSPACES.find(function(w) { return w.id === wsId; }) || WORKSPACES[0];
  var el = document.getElementById('workspaceSwitcherLabel');
  if (el) el.textContent = ws.name;
}

function toggleWorkspaceDropdown() {
  var dropdown = document.getElementById('workspaceDropdown');
  if (!dropdown) return;
  var isHidden = dropdown.classList.contains('hidden');
  if (isHidden) {
    dropdown.classList.remove('hidden');
    renderWorkspaceDropdown();
  } else {
    dropdown.classList.add('hidden');
  }
}

function renderWorkspaceDropdown() {
  var dropdown = document.getElementById('workspaceDropdown');
  if (!dropdown) return;
  var current = getSelectedWorkspace();
  dropdown.innerHTML = WORKSPACES.map(function(ws) {
    var isActive = ws.id === current;
    var typeBg = ws.type === 'BUSINESS' ? 'var(--brand-secondary-bg)' : 'var(--bg-muted)';
    var typeColor = ws.type === 'BUSINESS' ? 'var(--brand-secondary)' : 'var(--text-tertiary)';
    return '<button onclick="setSelectedWorkspace(\'' + ws.id + '\');toggleWorkspaceDropdown()"'
      + ' class="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium rounded-md transition-colors text-left"'
      + ' style="background:' + (isActive ? 'var(--brand-primary-bg)' : 'transparent') + '">'
      + '<div class="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0" style="background:' + (isActive ? 'var(--brand-primary)' : 'var(--bg-muted)') + ';color:' + (isActive ? '#fff' : 'var(--text-secondary)') + '">' + ws.name.substring(0, 2).toUpperCase() + '</div>'
      + '<div class="flex-1 min-w-0"><div class="truncate" style="color:' + (isActive ? 'var(--brand-primary)' : 'var(--text-primary)') + '">' + ws.name + '</div>'
      + '<div class="flex items-center gap-1.5 mt-0.5"><span class="inline-flex px-1.5 py-0 rounded text-[9px] font-bold uppercase" style="background:' + typeBg + ';color:' + typeColor + '">' + ws.type + '</span>'
      + '<span style="color:var(--text-tertiary)">' + ws.members + ' member' + (ws.members !== 1 ? 's' : '') + '</span></div></div>'
      + (isActive ? '<i data-lucide="check" class="w-3.5 h-3.5 flex-shrink-0" style="color:var(--brand-primary)"></i>' : '')
      + '</button>';
  }).join('')
    + '<div style="border-top:1px solid var(--border);margin:4px 0"></div>'
    + '<button onclick="toggleWorkspaceDropdown();showToast(\'Create workspace coming soon\',\'info\')"'
    + ' class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md transition-colors text-left" style="color:var(--brand-primary)">'
    + '<i data-lucide="plus" class="w-3.5 h-3.5"></i> Create New Workspace</button>';
  if (window.lucide) lucide.createIcons();
}

// Close workspace dropdown on outside click
document.addEventListener('click', function(e) {
  var dd = document.getElementById('workspaceDropdown');
  var btn = document.getElementById('workspaceSwitcherBtn');
  if (dd && btn && !btn.contains(e.target) && !dd.contains(e.target)) {
    dd.classList.add('hidden');
  }
});

// ===== SHOP SWITCHER (persists across pages via localStorage) =====
var SHOP_KEY = 'dodgeprint_selected_shop';
var SHOPS = [
  { id: 'all', name: 'All Shops', icon: 'store', color: '' },
  { id: 'etsy-cozyprints', name: 'Etsy — CozyPrints', icon: 'store', color: '#F1641E' },
  { id: 'etsy-vintagevibes', name: 'Etsy — VintageVibes', icon: 'store', color: '#F1641E' },
  { id: 'shopify-main', name: 'Shopify — Main Store', icon: 'shopping-bag', color: '#96BF48' },
  { id: 'amazon-us', name: 'Amazon — US', icon: 'package', color: '#FF9900' }
];

function getSelectedShop() {
  return localStorage.getItem(SHOP_KEY) || 'all';
}

function setSelectedShop(shopId) {
  localStorage.setItem(SHOP_KEY, shopId);
  updateShopDisplay();
  showToast('Switched to ' + (SHOPS.find(function(s) { return s.id === shopId; }) || SHOPS[0]).name, 'success');
}

function updateShopDisplay() {
  var shopId = getSelectedShop();
  var shop = SHOPS.find(function(s) { return s.id === shopId; }) || SHOPS[0];
  var el = document.getElementById('shopSwitcherLabel');
  if (el) el.textContent = shop.name;
}

function toggleShopDropdown() {
  var dropdown = document.getElementById('shopDropdown');
  if (!dropdown) return;
  var isHidden = dropdown.classList.contains('hidden');
  if (isHidden) {
    dropdown.classList.remove('hidden');
    renderShopDropdown();
  } else {
    dropdown.classList.add('hidden');
  }
}

function renderShopDropdown() {
  var dropdown = document.getElementById('shopDropdown');
  if (!dropdown) return;
  var current = getSelectedShop();
  dropdown.innerHTML = SHOPS.map(function(shop) {
    var isActive = shop.id === current;
    return '<button onclick="setSelectedShop(\'' + shop.id + '\');toggleShopDropdown()"'
      + ' class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md transition-colors text-left"'
      + ' style="background:' + (isActive ? 'var(--brand-primary-bg)' : 'transparent') + ';color:' + (isActive ? 'var(--brand-primary)' : 'var(--text-secondary)') + '">'
      + '<i data-lucide="' + shop.icon + '" class="w-3.5 h-3.5" style="color:' + (shop.color || 'var(--text-secondary)') + '"></i>'
      + shop.name
      + (isActive ? '<i data-lucide="check" class="w-3 h-3 ml-auto" style="color:var(--brand-primary)"></i>' : '')
      + '</button>';
  }).join('');
  if (window.lucide) lucide.createIcons();
}

// Close shop dropdown on outside click
document.addEventListener('click', function(e) {
  var dd = document.getElementById('shopDropdown');
  var btn = document.getElementById('shopSwitcherBtn');
  if (dd && btn && !btn.contains(e.target) && !dd.contains(e.target)) {
    dd.classList.add('hidden');
  }
});

// ===== NAVIGATION =====
// File map for standalone wireframe pages
var NAV_FILE_MAP = {
  'onboarding': '01-onboarding.html',
  'auth': '02-auth.html',
  'dashboard': '03-dashboard.html',
  'listings': '04-listings.html',
  'orders': '05-orders.html',
  'research': '06-research.html',
  'pod-hub': '07-pod-hub.html',
  'analytics': '08-analytics.html',
  'settings': '09-settings.html',
  'listing-editor': '10-listing-editor.html',
  'bulk-editor': '11-bulk-editor.html',
  'home': '12-homepage.html',
  'shops': '13-shops.html',
  'collections': '14-collections.html',
  'ai-generator': '15-ai-generator.html',
  'suppliers': '16-suppliers.html',
  'deployments': '17-deployments.html',
  'templates': '18-templates.html',
  'tools': '19-tools.html',
  'billing': '20-billing.html',
  'product-tour': '21-product-tour.html'
};

function navigate(screenId) {
  // Progress bar animation
  var bar = document.getElementById('nav-progress-bar');
  if (bar) {
    bar.style.width = '0';
    bar.style.opacity = '1';
    requestAnimationFrame(function() { bar.style.width = '85%'; });
    setTimeout(function() {
      bar.style.width = '100%';
      setTimeout(function() { bar.style.opacity = '0'; bar.style.width = '0'; }, 200);
    }, 300);
  }

  // Check if target screen exists in current page (single-page mode)
  var target = document.getElementById('screen-' + screenId);
  if (target) {
    var authScreens = ['onboarding', 'auth'];
    var isAuth = authScreens.indexOf(screenId) !== -1;

    // Hide all screens
    document.querySelectorAll('.auth-screen').forEach(function(s) { s.classList.remove('active'); });
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });

    if (isAuth) {
      var appShell = document.getElementById('app-shell');
      if (appShell) appShell.style.display = 'none';
      target.classList.add('active');
    } else {
      var appShell2 = document.getElementById('app-shell');
      if (appShell2) appShell2.style.display = 'flex';
      target.classList.add('active');
    }

    // Update sidebar active state
    document.querySelectorAll('.nav-item').forEach(function(n) {
      n.classList.remove('active');
      n.style.color = 'var(--text-secondary)';
    });
    var activeNav = document.querySelector('[data-nav="' + screenId + '"]');
    if (activeNav) { activeNav.classList.add('active'); activeNav.style.color = ''; }

    // Update mobile nav
    document.querySelectorAll('[data-mob]').forEach(function(m) { m.style.color = 'var(--text-secondary)'; });
    var activeMob = document.querySelector('[data-mob="' + screenId + '"]');
    if (activeMob) { activeMob.style.color = 'var(--brand-primary)'; }

    // Re-init Lucide icons
    if (window.lucide) lucide.createIcons();
  } else {
    // Navigate to separate file (multi-page mode)
    var file = NAV_FILE_MAP[screenId];
    if (file) window.location.href = file;
  }
}

// Alias for wireframes that use showScreen
function showScreen(screenId) { navigate(screenId); }

// ===== DARK MODE TOGGLE =====
function toggleTheme() {
  var html = document.documentElement;
  var isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('dodgeprint_theme', html.dataset.theme);

  var icon = document.getElementById('themeIcon');
  if (icon) icon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
  if (window.lucide) lucide.createIcons();
}

function loadTheme() {
  var saved = localStorage.getItem('dodgeprint_theme');
  if (saved) {
    document.documentElement.dataset.theme = saved;
    var icon = document.getElementById('themeIcon');
    if (icon) icon.setAttribute('data-lucide', saved === 'dark' ? 'sun' : 'moon');
  }
}

// ===== SIDEBAR COLLAPSE =====
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var main = document.getElementById('mainArea');
  if (!sidebar) return;
  sidebar.classList.toggle('collapsed');
  var isCollapsed = sidebar.classList.contains('collapsed');
  if (main) {
    main.style.marginLeft = isCollapsed ? '48px' : '220px';
  }
  localStorage.setItem('dodgeprint_sidebar', isCollapsed ? 'collapsed' : 'expanded');
}

function loadSidebarState() {
  var saved = localStorage.getItem('dodgeprint_sidebar');
  if (saved === 'collapsed') {
    var sidebar = document.getElementById('sidebar');
    var main = document.getElementById('mainArea');
    if (sidebar) sidebar.classList.add('collapsed');
    if (main) main.style.marginLeft = '48px';
  }
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type) {
  type = type || 'info';
  var container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-4 right-4 z-[600] space-y-2';
    document.body.appendChild(container);
  }
  var colors = {
    success: 'var(--brand-primary)',
    error: 'var(--danger)',
    info: 'var(--info)',
    warning: 'var(--brand-secondary)'
  };
  var icons = {
    success: 'check-circle',
    error: 'x-circle',
    info: 'info',
    warning: 'alert-triangle'
  };
  var toast = document.createElement('div');
  toast.className = 'toast-anim flex items-center gap-3 px-4 py-3 bg-white rounded-lg border';
  toast.style.borderColor = 'var(--border)';
  toast.style.minWidth = '280px';
  toast.style.boxShadow = 'var(--shadow-md)';
  toast.innerHTML = '<i data-lucide="' + icons[type] + '" class="w-5 h-5 flex-shrink-0" style="color:' + colors[type] + '"></i><span class="text-sm font-medium">' + message + '</span>';
  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();
  setTimeout(function() { toast.remove(); }, 4000);
}

// ===== MODAL SYSTEM =====
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  }
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay') && e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close modal on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(function(m) {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

// ===== ONBOARDING STEPS =====
var obStep = 1;
function goToObStep(step) {
  var prev = document.getElementById('obStep' + obStep);
  var next = document.getElementById('obStep' + step);
  if (prev) prev.classList.remove('active');
  if (next) next.classList.add('active');
  obStep = step;
  var indicator = document.getElementById('obStepIndicator');
  if (indicator) indicator.textContent = 'Step ' + step + ' of 4';
  var progressBar = document.getElementById('obProgressBar');
  if (progressBar) progressBar.style.width = (step * 25) + '%';
  if (window.lucide) lucide.createIcons();
}

function selectPlatform(el) {
  // Toggle selection (allow multiple shops from same platform)
  el.classList.toggle('selected');
}

// ===== LISTINGS HELPERS =====
var selectedRows = new Set();

function switchTab(el) {
  document.querySelectorAll('.platform-tab').forEach(function(t) { t.classList.remove('active'); });
  el.classList.add('active');
}

function toggleRow(checkbox, rowId) {
  var row = document.getElementById(rowId);
  if (checkbox.checked) { selectedRows.add(rowId); row.classList.add('row-selected'); }
  else { selectedRows.delete(rowId); row.classList.remove('row-selected'); }
  updateFloatingBar();
}

function toggleSelectAll() {
  var checked = document.getElementById('selectAll').checked;
  document.querySelectorAll('tbody input[type="checkbox"]').forEach(function(cb) {
    cb.checked = checked;
    var row = cb.closest('tr');
    if (row && row.id) {
      if (checked) { selectedRows.add(row.id); row.classList.add('row-selected'); }
      else { selectedRows.delete(row.id); row.classList.remove('row-selected'); }
    }
  });
  updateFloatingBar();
}

function clearSelection() {
  selectedRows.clear();
  document.querySelectorAll('input[type="checkbox"]').forEach(function(cb) { cb.checked = false; });
  document.querySelectorAll('tr').forEach(function(r) { r.classList.remove('row-selected'); });
  updateFloatingBar();
}

function updateFloatingBar() {
  var bar = document.getElementById('floatingBar');
  var count = document.getElementById('selectedCount');
  if (selectedRows.size > 0) {
    if (bar) bar.style.display = 'flex';
    if (count) count.textContent = selectedRows.size;
  } else if (bar) {
    bar.style.display = 'none';
  }
}

function makeEditable(cell, type) {
  if (cell.classList.contains('editing')) return;
  var originalValue = cell.textContent.trim();
  cell.classList.add('editing');
  var input = document.createElement('input');
  input.value = originalValue;
  input.className = 'font-mono text-sm';
  if (type === 'price') input.style.textAlign = 'right';
  cell.textContent = '';
  cell.appendChild(input);
  input.focus();
  input.select();
  var save = function() { cell.classList.remove('editing'); cell.textContent = input.value || originalValue; };
  input.addEventListener('blur', save);
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') save();
    if (e.key === 'Escape') { input.value = originalValue; save(); }
  });
}

// ===== SETTINGS =====
function switchSettingsTab(el, tabId) {
  document.querySelectorAll('.settings-tab').forEach(function(t) {
    t.classList.remove('active');
    t.style.color = 'var(--text-secondary)';
  });
  el.classList.add('active');
  el.style.color = '';
  document.querySelectorAll('.settings-panel').forEach(function(c) { c.style.display = 'none'; });
  var target = document.getElementById('stab-' + tabId);
  if (target) target.style.display = 'block';
}

// ===== TOGGLE SWITCH =====
function toggleSwitch(el) {
  el.classList.toggle('on');
}

// ===== DRAG & DROP (Upload Zone) =====
function initUploadZone() {
  var zone = document.getElementById('uploadZone');
  if (!zone) return;
  zone.addEventListener('dragover', function(e) { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', function() { zone.classList.remove('drag-over'); });
  zone.addEventListener('drop', function(e) {
    e.preventDefault();
    zone.classList.remove('drag-over');
    showToast('Design uploaded!', 'success');
  });
}

// ===== AUTH HELPERS =====
function switchAuthView(viewId) {
  document.querySelectorAll('.auth-view').forEach(function(v) {
    v.classList.remove('active');
    v.style.display = 'none';
  });
  var target = document.getElementById('auth-' + viewId);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
    target.style.animation = 'fadeIn 0.25s ease-out';
  }
}

function togglePasswordVisibility(inputId, iconEl) {
  var input = document.getElementById(inputId);
  if (!input) return;
  var isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  iconEl.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
  if (window.lucide) lucide.createIcons();
}

function updatePasswordStrength(value) {
  var fill = document.getElementById('passwordStrengthFill');
  var label = document.getElementById('passwordStrengthLabel');
  if (!fill || !label) return;

  var strength = 0;
  if (value.length >= 6) strength++;
  if (value.length >= 10) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  var levels = [
    { width: '0%', color: 'var(--bg-muted)', text: '' },
    { width: '20%', color: 'var(--danger)', text: 'Very weak' },
    { width: '40%', color: 'var(--brand-secondary)', text: 'Weak' },
    { width: '60%', color: 'var(--brand-secondary)', text: 'Fair' },
    { width: '80%', color: 'var(--brand-primary-light)', text: 'Strong' },
    { width: '100%', color: 'var(--brand-primary)', text: 'Very strong' }
  ];

  var level = levels[strength] || levels[0];
  fill.style.width = level.width;
  fill.style.background = level.color;
  label.textContent = level.text;
  label.style.color = level.color;
}

// ===== BREADCRUMB =====
function updateBreadcrumb(items) {
  var el = document.getElementById('breadcrumb');
  if (!el) return;
  el.innerHTML = items.map(function(item, i) {
    var isLast = i === items.length - 1;
    if (isLast) return '<span class="breadcrumb-current">' + item.label + '</span>';
    var sep = '<i data-lucide="chevron-right" class="w-3.5 h-3.5 breadcrumb-separator"></i>';
    return '<a href="' + (item.href || '#') + '">' + item.label + '</a>' + sep;
  }).join('');
  if (window.lucide) lucide.createIcons();
}

// ===== COMMAND PALETTE =====
var COMMAND_ITEMS = [
  { label: 'Dashboard', icon: 'layout-dashboard', action: "navigate('dashboard')" },
  { label: 'Listings', icon: 'list', action: "navigate('listings')" },
  { label: 'Orders', icon: 'shopping-cart', action: "navigate('orders')" },
  { label: 'Research', icon: 'search', action: "navigate('research')" },
  { label: 'POD Hub', icon: 'printer', action: "navigate('pod-hub')" },
  { label: 'Analytics', icon: 'bar-chart-3', action: "navigate('analytics')" },
  { label: 'Settings', icon: 'settings', action: "navigate('settings')" },
  { label: 'New Listing', icon: 'plus', action: "navigate('listing-editor')", shortcut: 'N' },
  { label: 'Bulk Edit', icon: 'edit-3', action: "navigate('bulk-editor')" },
  { label: 'Shops', icon: 'store', action: "navigate('shops')" },
  { label: 'Collections', icon: 'folder', action: "navigate('collections')" },
  { label: 'AI Generator', icon: 'sparkles', action: "navigate('ai-generator')" },
  { label: 'Suppliers', icon: 'truck', action: "navigate('suppliers')" },
  { label: 'Deployments', icon: 'rocket', action: "navigate('deployments')" },
  { label: 'Templates', icon: 'file-text', action: "navigate('templates')" },
  { label: 'Tools', icon: 'wrench', action: "navigate('tools')" },
  { label: 'Billing', icon: 'credit-card', action: "navigate('billing')" },
  { label: 'Product Tour', icon: 'map', action: "navigate('product-tour')", keywords: 'tour guide onboarding walkthrough help' }
];

function initCommandPalette() {
  if (document.getElementById('commandPalette')) return;
  var html = '<div class="command-palette-overlay" id="commandPalette">'
    + '<div class="command-palette">'
    + '<div style="position:relative">'
    + '<i data-lucide="search" class="w-4.5 h-4.5" style="position:absolute;left:14px;top:14px;color:var(--text-tertiary)"></i>'
    + '<input class="command-palette-input" placeholder="Type a command or search..." id="commandInput">'
    + '</div>'
    + '<div class="command-palette-results" id="commandResults"></div>'
    + '</div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
  document.getElementById('commandInput').addEventListener('input', filterCommands);
}

function toggleCommandPalette() {
  var el = document.getElementById('commandPalette');
  if (!el) { initCommandPalette(); el = document.getElementById('commandPalette'); }
  el.classList.toggle('active');
  if (el.classList.contains('active')) {
    var input = document.getElementById('commandInput');
    input.value = '';
    filterCommands();
    setTimeout(function() { input.focus(); }, 50);
  }
}

function filterCommands() {
  var query = (document.getElementById('commandInput').value || '').toLowerCase();
  var results = COMMAND_ITEMS.filter(function(c) {
    return c.label.toLowerCase().indexOf(query) !== -1;
  });
  var container = document.getElementById('commandResults');
  container.innerHTML = results.map(function(c) {
    return '<div class="command-result" onclick="' + c.action + ';toggleCommandPalette()">'
      + '<i data-lucide="' + c.icon + '" class="w-4 h-4 command-result-icon"></i>'
      + '<span>' + c.label + '</span>'
      + (c.shortcut ? '<span class="command-result-shortcut">' + c.shortcut + '</span>' : '')
      + '</div>';
  }).join('');
  if (window.lucide) lucide.createIcons();
}

// Cmd+K / Ctrl+K listener for command palette
document.addEventListener('keydown', function(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    toggleCommandPalette();
  }
  if (e.key === 'Escape') {
    var el = document.getElementById('commandPalette');
    if (el && el.classList.contains('active')) {
      el.classList.remove('active');
    }
  }
});

// ===== RECOVERY TOAST WITH UNDO =====
function showUndoToast(message, undoCallback) {
  var container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-4 right-4 z-[600] space-y-2';
    document.body.appendChild(container);
  }
  var toast = document.createElement('div');
  toast.className = 'toast-undo toast-enter';
  toast.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5 flex-shrink-0" style="color:var(--success)"></i>'
    + '<div style="flex:1"><div class="text-sm font-medium">' + message + '</div>'
    + '<div class="toast-undo-progress"><div class="toast-undo-progress-fill"></div></div></div>'
    + '<button class="btn-ghost text-xs px-3 py-1" style="border-radius:8px;font-weight:600;color:var(--brand-primary)" '
    + 'onclick="this.closest(\'.toast-undo\').remove()">Undo</button>';
  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();
  setTimeout(function() { if (toast.parentNode) toast.remove(); }, 10000);
}

// ===== HELP TOOLTIPS =====
function toggleHelp(btn) {
  var tooltip = btn.querySelector('.help-tooltip');
  if (!tooltip) return;
  tooltip.classList.toggle('active');
}

// ===== DYNAMIC SIDEBAR NAV INJECTION =====
// Ensures consistent navigation across ALL wireframe pages
var SIDEBAR_NAV_SECTIONS = [
  {
    label: 'Core',
    items: [
      { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard' },
      { id: 'listings', icon: 'list', label: 'Listings' },
      { id: 'orders', icon: 'shopping-cart', label: 'Orders' },
      { id: 'shops', icon: 'store', label: 'Shops', badge: '2', badgeType: 'danger' }
    ]
  },
  {
    label: 'Create',
    items: [
      { id: 'ai-generator', icon: 'sparkles', label: 'AI Generator' },
      { id: 'collections', icon: 'folder', label: 'Collections' },
      { id: 'templates', icon: 'file-text', label: 'Templates' }
    ]
  },
  {
    label: 'Fulfill',
    items: [
      { id: 'pod-hub', icon: 'printer', label: 'POD Hub' },
      { id: 'suppliers', icon: 'truck', label: 'Suppliers' },
      { id: 'deployments', icon: 'rocket', label: 'Deployments' }
    ]
  },
  {
    label: 'Insights',
    items: [
      { id: 'research', icon: 'search', label: 'Research' },
      { id: 'analytics', icon: 'bar-chart-3', label: 'Analytics' },
      { id: 'tools', icon: 'wrench', label: 'Tools' }
    ]
  }
];

function initSidebar() {
  var nav = document.querySelector('#sidebar > nav');
  if (!nav) return;

  var currentPage = document.body.getAttribute('data-page') || '';

  // Build nav HTML from SIDEBAR_NAV_SECTIONS
  var html = '';
  SIDEBAR_NAV_SECTIONS.forEach(function(section) {
    html += '<div>'
      + '<div class="sidebar-section-label text-[10px] font-semibold uppercase tracking-wider px-2 pb-1" style="color:var(--text-tertiary)">'
      + section.label + '</div><div class="space-y-0.5">';
    section.items.forEach(function(item) {
      var isActive = item.id === currentPage;
      html += '<a data-nav="' + item.id + '" data-tooltip="' + item.label + '" onclick="navigate(\'' + item.id + '\')"'
        + ' class="nav-item flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-medium cursor-pointer'
        + (isActive ? ' active' : '') + '"'
        + (isActive ? '' : ' style="color:var(--text-secondary)"') + '>'
        + '<i data-lucide="' + item.icon + '" class="w-[18px] h-[18px] flex-shrink-0"></i>'
        + '<span class="nav-text">' + item.label + '</span>'
        + (item.badge ? '<span class="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full" style="background:var(--' + (item.badgeType || 'danger') + ');color:#fff">' + item.badge + '</span>' : '')
        + '</a>';
    });
    html += '</div></div>';
  });

  nav.innerHTML = html;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Inject consistent sidebar nav across all pages
  initSidebar();

  // Load persisted theme
  loadTheme();

  // Load persisted sidebar state
  loadSidebarState();

  // Init shop switcher display
  updateShopDisplay();

  // Init workspace switcher display
  updateWorkspaceDisplay();

  // Init upload zones
  initUploadZone();

  // Init command palette
  initCommandPalette();

  // Init Lucide icons
  if (window.lucide) lucide.createIcons();
});
