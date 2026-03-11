/* ============================================================
   Dodgeprint — Shared Navigation & Interaction Logic
   Used across all wireframe HTML files
   ============================================================ */

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
  'settings': '09-settings.html'
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

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Load persisted theme
  loadTheme();

  // Load persisted sidebar state
  loadSidebarState();

  // Init shop switcher display
  updateShopDisplay();

  // Init upload zones
  initUploadZone();

  // Init Lucide icons
  if (window.lucide) lucide.createIcons();
});
