"use strict";

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const ICONS = {
  outlook: (s = 20) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><rect x="1" y="4" width="22" height="16" rx="2" fill="#0f6cbd"/><path d="M3 6.5l9 6 9-6" stroke="#fff" stroke-width="1.6" fill="none"/></svg>`,
  edge: (s = 20) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><defs><linearGradient id="edgeg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#35c1f1"/><stop offset="1" stop-color="#0d5d91"/></linearGradient></defs><circle cx="12" cy="12" r="10" fill="url(#edgeg)"/><path d="M5 14c0-4 3.2-7 7.4-7 2.6 0 4.9 1.2 5.9 3-1.5-1-3.4-1.3-5.2-.7-3 .9-4.6 3.4-3.9 5.6.5 1.7 2.4 2.6 4.4 2.3-2.9 1.9-7 .8-8.2-1.6-.3-.5-.4-1-.4-1.6z" fill="#fff" opacity="0.92"/></svg>`,
  settings: (s = 20) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><circle cx="12" cy="12" r="3.2" stroke="#5a5a5a" stroke-width="1.7" fill="none"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" stroke="#5a5a5a" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  explorer: (s = 20) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M2 6a2 2 0 0 1 2-2h5l2 2.5h9a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="#ffc95c"/><path d="M2 9.5h20V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="#ffd884"/></svg>`,
  recycle: (s = 34) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M6 7l1 13.2a1.8 1.8 0 0 0 1.8 1.6h6.4a1.8 1.8 0 0 0 1.8-1.6L18 7" fill="none" stroke="#dbe7f5" stroke-width="1.6"/><path d="M4.5 7h15" stroke="#dbe7f5" stroke-width="1.6" stroke-linecap="round"/><path d="M9 4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6H9z" fill="none" stroke="#dbe7f5" stroke-width="1.5"/><path d="M10 10.5v7M14 10.5v7" stroke="#dbe7f5" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  folderMail: (s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 6.5l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
  draft: (s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  sent: (s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M21 3L10 14M21 3l-7 18-4-7-7-4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  trash: (s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M4 7h16M9 7V5h6v2M6.5 7l1 13h9l1-13M10 11v6M14 11v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  archive: (s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><rect x="3" y="4" width="18" height="5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M5 9v10h14V9M10 13h4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
  newMail: (s = 22) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="#0f6cbd" stroke-width="1.7"/><path d="M3 6.5l9 6 9-6" fill="none" stroke="#0f6cbd" stroke-width="1.7"/><path d="M18 2v6M15 5h6" stroke="#0f6cbd" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  reply: (s = 22) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M9 5L3 10l6 5M3 10h10a7 7 0 0 1 7 7v1" fill="none" stroke="#0f6cbd" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  sync: (s = 22) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M20 12a8 8 0 0 1-14.5 4.7M4 12a8 8 0 0 1 14.5-4.7" fill="none" stroke="#0f6cbd" stroke-width="1.7" stroke-linecap="round"/><path d="M18.5 3.5v4h-4M5.5 20.5v-4h4" fill="none" stroke="#0f6cbd" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  thisPC: (s = 34) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><rect x="2" y="4" width="20" height="13" rx="1.5" fill="#5f789c"/><rect x="3.5" y="5.5" width="17" height="10" fill="#9cc3e8"/><path d="M8 19.5h8M12 17v2.5" stroke="#5f789c" stroke-width="1.5"/></svg>`,
  drive: (s = 30) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><rect x="3" y="9" width="18" height="7" rx="1.5" fill="#b8c6d9"/><circle cx="18" cy="12.5" r="1" fill="#3d6b3d"/><rect x="5" y="11.7" width="8" height="1.6" fill="#7d8da3"/></svg>`,
  fileDoc: (s = 30) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M6 2h9l5 5v15H6z" fill="#f3f3f3" stroke="#c8c8c8"/><path d="M15 2v5h5" fill="none" stroke="#c8c8c8"/><path d="M9 11h8M9 14h8M9 17h5" stroke="#9a9a9a" stroke-width="1.4"/></svg>`,
};

const GLYPHS = {
  min: `<svg width="10" height="10" viewBox="0 0 10 10"><rect y="4.5" width="10" height="1" fill="currentColor"/></svg>`,
  max: `<svg width="10" height="10" viewBox="0 0 10 10"><rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor"/></svg>`,
  restore: `<svg width="10" height="10" viewBox="0 0 10 10"><rect x="0.5" y="2.5" width="7" height="7" fill="none" stroke="currentColor"/><path d="M3 2.5v-2h6.5v6.5h-2" fill="none" stroke="currentColor"/></svg>`,
  close: `<svg width="10" height="10" viewBox="0 0 10 10"><path d="M0 0l10 10M10 0L0 10" stroke="currentColor" stroke-width="1.1"/></svg>`,
};

const LOGIN_PASSWORD_SHA256 = "ebddfa36f5af47714dd1a1591fa5ead58b613f13ac78e88f90ab00e353856a00";

const state = {
  z: 10,
  windows: new Map(),
  winSeq: 0,
  mails: [],
  profile: {
    name: "Thaddeus Wexler",
    login: "t.wexler@discreetdroneservices.com",
    email: "t.wexler@discreetdroneservices.com",
    device: "DESKTOP-VM447",
  },
  folder: "inbox",
  msg: null,
  outlook: null,
};

const FOLDERS = [
  { id: "inbox", name: "Inbox", icon: "folderMail" },
  { id: "drafts", name: "Drafts", icon: "draft" },
  { id: "sent", name: "Sent Items", icon: "sent" },
  { id: "deleted", name: "Deleted Items", icon: "trash" },
  { id: "archive", name: "Archive", icon: "archive" },
];

function parseDate(s) {
  const d = new Date(s);
  return isNaN(d) ? null : d;
}

const startOfDay = (x) => {
  const d = new Date(x);
  d.setHours(0, 0, 0, 0);
  return d;
};

function relWhen(d) {
  if (!d) return "";
  let days = Math.round((startOfDay(new Date()) - startOfDay(d)) / 86400000);
  if (days < 0) days = 0;
  const t = d
    .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    .replace(/[\s\u202F]+/g, "")
    .toLowerCase();
  const day = days === 0 ? "today" : days === 1 ? "1 day ago" : days + " days ago";
  return t + ", " + day;
}

function nameOnly(str) {
  if (!str) return "";
  const m = String(str).match(/^\s*"?([^"<]+?)"?\s*(<[^>]*>)?\s*$/);
  return m ? m[1].trim() : String(str);
}

const initialsOf = (n) =>
  String(n || "").split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

function preview(body) {
  return String(body || "").replace(/\s+/g, " ").trim().slice(0, 90);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function linkifyHtml(text) {
  return escapeHtml(text).replace(/https?:\/\/[^\s"'<>]+/g, (m0) => {
    const url = m0.replace(/[.,;:!?)]+$/, "");
    return `<a href="#" class="body-link" data-url="${url}">${url}</a>${m0.slice(url.length)}`;
  });
}

function hostOf(u) {
  try {
    return new URL(u).host;
  } catch (e) {
    return u;
  }
}

function toast(text, ms = 2600) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.remove("hidden");
  clearTimeout(toast._h);
  toast._h = setTimeout(() => t.classList.add("hidden"), ms);
}

function focusWindow(win) {
  for (const w of state.windows.values()) {
    w.el.classList.toggle("unfocused", w !== win);
  }
  win.el.style.zIndex = ++state.z;
  document.querySelectorAll(".tb-icon.app-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.app === win.appId && !win.minimized);
  });
}

function setTaskbarOpen(appId, open) {
  const b = document.querySelector(`.tb-icon.app-btn[data-app="${appId}"]`);
  if (b) b.classList.toggle("open", open);
}

function createWindow(opts) {
  const id = opts.id || "win-" + ++state.winSeq;
  const win = {
    id, appId: opts.appId || null,
    minimized: false, maximized: false,
    prevRect: null,
    onClose: opts.onClose || null,
  };
  const e = el("div", "window unfocused");
  win.el = e;
  e.id = id;
  if (opts.width) e.style.width = opts.width + "px";
  if (opts.height) e.style.height = opts.height + "px";
  if (opts.left != null) e.style.left = opts.left + "px";
  if (opts.top != null) e.style.top = opts.top + "px";

  const tb = el("div", "titlebar");
  tb.innerHTML = `<span class="tb-app-icon">${opts.icon || ""}</span><span class="win-title">${opts.title || ""}</span>`;
  const ctr = el("div", "win-controls");
  const bMin = el("button", "", GLYPHS.min); bMin.title = "Minimize"; bMin.setAttribute("aria-label", "Minimize");
  const bMax = el("button", "", GLYPHS.max); bMax.title = "Maximize"; bMax.setAttribute("aria-label", "Maximize");
  const bCls = el("button", "wc-close", GLYPHS.close); bCls.title = "Close"; bCls.setAttribute("aria-label", "Close");
  ctr.append(bMin, bMax, bCls);
  tb.append(ctr);
  e.append(tb);

  const body = el("div", "win-body");
  if (typeof opts.content === "string") body.innerHTML = opts.content;
  else if (opts.content) body.append(opts.content);
  e.append(body);

  if (!opts.noResize) {
    const rh = el("div", "resize-handle");
    e.append(rh);
    rh.addEventListener("pointerdown", (ev) => {
      if (win.maximized) return;
      ev.preventDefault();
      rh.setPointerCapture(ev.pointerId);
      const move = (m) => {
        e.style.width = Math.max(320, m.clientX - e.offsetLeft + 6) + "px";
        e.style.height = Math.max(180, m.clientY - e.offsetTop + 6) + "px";
        if (opts.onResize) opts.onResize();
      };
      const up = () => { rh.removeEventListener("pointermove", move); rh.removeEventListener("pointerup", up); };
      rh.addEventListener("pointermove", move);
      rh.addEventListener("pointerup", up);
    });
  }

  win.minimize = () => {
    win.minimized = true;
    e.style.display = "none";
    document.querySelectorAll(".tb-icon.app-btn").forEach((b) => b.classList.remove("active"));
  };
  win.restore = () => {
    win.minimized = false;
    e.style.display = "";
    focusWindow(win);
  };
  win.toggleMax = () => {
    if (!win.maximized) {
      win.prevRect = {
        left: e.style.left, top: e.style.top,
        width: e.style.width, height: e.style.height,
      };
      win.maximized = true;
      e.classList.add("maximized");
      e.style.left = "0px";
      e.style.top = "0px";
      e.style.width = "100%";
      e.style.height = `calc(100% - var(--taskbar-h))`;
      bMax.innerHTML = GLYPHS.restore;
    } else {
      win.maximized = false;
      e.classList.remove("maximized");
      Object.assign(e.style, win.prevRect);
      bMax.innerHTML = GLYPHS.max;
    }
    if (opts.onResize) opts.onResize();
  };
  win.close = () => {
    state.windows.delete(id);
    e.remove();
    if (win.appId) setTaskbarOpen(win.appId, false);
    if (win.onClose) win.onClose();
    const rest = [...state.windows.values()].filter((w) => !w.minimized);
    if (rest.length) focusWindow(rest[rest.length - 1]);
    else document.querySelectorAll(".tb-icon.app-btn").forEach((b) => b.classList.remove("active"));
  };

  bMin.addEventListener("click", () => win.minimize());
  bMax.addEventListener("click", () => win.toggleMax());
  bCls.addEventListener("click", () => win.close());
  e.addEventListener("pointerdown", () => focusWindow(win));

  tb.addEventListener("pointerdown", (ev) => {
    if (ev.target.closest(".win-controls") || win.maximized) return;
    ev.preventDefault();
    tb.setPointerCapture(ev.pointerId);
    const offX = ev.clientX - e.offsetLeft;
    const offY = ev.clientY - e.offsetTop;
    const move = (m) => {
      const maxL = window.innerWidth - 80;
      e.style.left = Math.min(Math.max(m.clientX - offX, -e.offsetWidth + 120), maxL) + "px";
      e.style.top = Math.max(m.clientY - offY, 0) + "px";
    };
    const up = () => { tb.removeEventListener("pointermove", move); tb.removeEventListener("pointerup", up); };
    tb.addEventListener("pointermove", move);
    tb.addEventListener("pointerup", up);
  });
  tb.addEventListener("dblclick", (ev) => {
    if (!ev.target.closest(".win-controls")) win.toggleMax();
  });

  $("#windows").append(e);
  state.windows.set(id, win);
  focusWindow(win);
  return win;
}

function centerPos(w, h) {
  return {
    left: Math.max(10, (window.innerWidth - w) / 2),
    top: Math.max(10, (window.innerHeight - h - 48) / 2),
  };
}

function dialog(title, message) {
  const c = el("div");
  c.innerHTML = `
    <div class="dialog-body">
      <div class="dialog-msg">${message}</div>
      <div class="dialog-actions"><button class="dialog-ok">OK</button></div>
    </div>`;
  const p = centerPos(400, 190);
  const win = createWindow({
    title, width: 400, content: c,
    left: p.left, top: p.top,
    icon: ICONS.settings(16), noResize: true,
  });
  c.querySelector(".dialog-ok").addEventListener("click", () => win.close());
  return win;
}

function noNetworkDialog(title) {
  dialog(
    title,
    `You're not connected to the internet.<br><br><span style="color:#6b6b6b;font-size:12.5px">There is no network adapter attached to this device.</span>`
  );
}

function snapshotDialog(appName) {
  dialog(
    appName,
    `${appName} is unavailable in this read-only snapshot.`
  );
}

function openExplorer() {
  const existing = [...state.windows.values()].find((w) => w.appId === "explorer");
  if (existing) return existing.restore();

  const items = el("div", "explorer-items");
  const draw = (path, entries) => {
    items.innerHTML = "";
    crumb.textContent = path;
    if (!entries.length) {
      items.append(el("div", "explorer-empty", "This folder is empty."));
      return;
    }
    for (const it of entries) {
      const b = el("button", "explorer-item",
        `${ICONS[it.kind || "folder"]()}<span>${it.name}<span class="ei-sub">${it.sub || ""}</span></span>`);
      b.addEventListener("click", () => {
        if (it.open) it.open();
        else snapshotDialog(it.name);
      });
      items.append(b);
    }
  };
  const crumb = el("div", "explorer-crumb", "This PC");
  const toolbar = el("div", "explorer-toolbar");
  toolbar.append(crumb);
  const body = el("div", "explorer-body");
  body.append(toolbar, items);

  createWindow({
    id: "win-explorer", appId: "explorer",
    title: "This PC", icon: ICONS.explorer(16),
    width: 640, height: 420,
    left: 120, top: 110,
    content: body,
  });
  draw("This PC", [
    { name: "Local Disk (C:)", sub: "118 GB free of 237 GB", kind: "drive", open: () => draw("Local Disk (C:)", [
      { name: "Program Files", kind: "explorer" },
      { name: "Users", kind: "explorer" },
      { name: "Windows", kind: "explorer" },
    ]) },
    { name: "Downloads", kind: "explorer", open: () => draw("C:\\Users\\student\\Downloads", []) },
  ]);
}

function openSettings() {
  const existing = [...state.windows.values()].find((w) => w.appId === "settings");
  if (existing) return existing.restore();

  const p = state.profile;
  const body = el("div", "settings-body");
  body.innerHTML = `
    <h2>Network &amp; internet</h2>
    <div class="sub">${p.device}</div>
    <div class="settings-conn"><span class="dot"></span><div><b>Not connected</b><br>
    <span style="font-size:12px;color:#6b6b6b">No network adapter is attached to this snapshot.</span></div></div>
    <table class="props-table">
      <tr><td>Adapter</td><td>Ethernet 01 (virtual)</td></tr>
      <tr><td>Status</td><td>Media disconnected</td></tr>
      <tr><td>IPv4 address</td><td>169.254.17.203 (APIPA)</td></tr>
      <tr><td>Physical address</td><td>8C-16-45-3A-9E-02</td></tr>
      <tr><td>DNS servers</td><td>&mdash;</td></tr>
    </table>`;
  const c = centerPos(560, 420);
  createWindow({
    id: "win-settings", appId: "settings",
    title: "Settings", icon: ICONS.settings(16),
    width: 560, height: 420,
    left: c.left + 60, top: c.top + 30,
    content: body, noResize: true,
  });
}

function openEdge(url) {
  const existing = [...state.windows.values()].find((w) => w.appId === "edge");
  if (existing) {
    if (url) existing.navigate(url);
    existing.restore();
    return existing;
  }

  const tabs = el("div", "edge-tabs");
  const tab = el("div", "edge-tab active");
  tab.append(el("span", "edge-tab-icon", ICONS.edge(14)), el("span", "edge-tab-label", "New tab"));
  const tabClose = el("button", "edge-tab-close", GLYPHS.close);
  tabClose.title = "Close tab";
  tab.append(tabClose);
  tabs.append(tab);
  const newTabBtn = el("button", "edge-newtab", "+");
  newTabBtn.title = "New tab";
  tabs.append(newTabBtn);

  const toolbar = el("div", "edge-toolbar");
  const bBack = el("button", "edge-nav", `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
  bBack.disabled = true;
  const bFwd = el("button", "edge-nav", `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
  bFwd.disabled = true;
  const bRefresh = el("button", "edge-nav", `<svg viewBox="0 0 24 24" width="15" height="15"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
  bRefresh.title = "Refresh";
  const omni = el("input", "edge-omni");
  omni.spellcheck = false;
  omni.readOnly = true;
  omni.placeholder = "Search or enter web address";
  omni.title = "Address bar - select the text and copy to take this URL out of the VM";
  const bCopy = el("button", "edge-nav", `<svg viewBox="0 0 24 24" width="15" height="15"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>`);
  bCopy.title = "Copy URL to clipboard";
  toolbar.append(bBack, bFwd, bRefresh, omni, bCopy);

  const page = el("div", "edge-page");
  const body = el("div", "edge-body");
  body.append(tabs, toolbar, page);

  const p = centerPos(880, 560);
  const win = createWindow({
    id: "win-edge", appId: "edge",
    title: "New tab - Microsoft Edge",
    icon: ICONS.edge(16),
    width: 880, height: 560,
    left: p.left, top: p.top,
    content: body,
  });

  const showError = (target) => {
    omni.value = target;
    tab.querySelector(".edge-tab-label").textContent = "Can't reach this page";
    win.el.querySelector(".win-title").textContent = "Can't reach this page - Microsoft Edge";
    page.innerHTML = `
      <div class="edge-error">
        <div class="edge-sad">:(</div>
        <h2>Hmmm&hellip; can't reach this page</h2>
        <p><b>${escapeHtml(hostOf(target))}</b> took too long to respond, or this device has no internet connection.</p>
        <p class="edge-code">ERR_INTERNET_DISCONNECTED</p>
        <div class="edge-urlbox"><span class="edge-urllabel">Address</span><span class="edge-url-text"></span></div>
      </div>`;
    page.querySelector(".edge-url-text").textContent = target;
  };

  const showNewtab = () => {
    omni.value = "";
    tab.querySelector(".edge-tab-label").textContent = "New tab";
    win.el.querySelector(".win-title").textContent = "New tab - Microsoft Edge";
    page.innerHTML = `
      <div class="edge-newtab-page">
        <div class="edge-logo">${ICONS.edge(56)}</div>
        <input class="edge-search" type="text" placeholder="Search the web" spellcheck="false">
        <p class="edge-offline">You're offline - this snapshot has no network adapter. Pages won't load, but you can still copy addresses out of the VM.</p>
      </div>`;
    page.querySelector(".edge-search").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.value.trim()) {
        const q = e.target.value.trim();
        const target = /^https?:\/\//i.test(q) ? q : "https://www.bing.com/search?q=" + encodeURIComponent(q);
        showError(target);
      }
    });
  };

  win.navigate = (target) => showError(target);

  tabClose.addEventListener("click", () => win.close());
  newTabBtn.addEventListener("click", showNewtab);
  bRefresh.addEventListener("click", () => {
    if (omni.value) showError(omni.value);
    else toast("You're offline - there's nothing to refresh.");
  });
  bCopy.addEventListener("click", async () => {
    const text = omni.value;
    if (!text) {
      toast("Nothing to copy - no page loaded.");
      return;
    }
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (err) {
      try {
        omni.focus();
        omni.select();
        ok = document.execCommand("copy");
      } catch (err2) {
        ok = false;
      }
    }
    toast(ok ? "Address copied - you can paste it outside the VM." : "Copy blocked by the browser - select the address bar text and copy manually.");
  });
  omni.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && omni.value) showError(omni.value);
  });

  if (url) showError(url);
  else showNewtab();
  return win;
}

function openRecycleBin() {
  const items = el("div", "explorer-items");
  items.append(el("div", "explorer-empty", "Recycle Bin is empty."));
  const tb = el("div", "explorer-toolbar");
  tb.append(el("div", "explorer-crumb", "Recycle Bin"));
  const body = el("div", "explorer-body");
  body.append(tb, items);
  createWindow({
    title: "Recycle Bin", icon: ICONS.recycle(16),
    width: 480, height: 320,
    left: centerPos(480, 320).left, top: centerPos(480, 320).top,
    content: body, noResize: true,
  });
}

const APPS = {
  outlook: { name: "Outlook", icon: ICONS.outlook, open: () => openOutlook() },
  explorer: { name: "File Explorer", icon: ICONS.explorer, open: openExplorer },
  edge: { name: "Microsoft Edge", icon: ICONS.edge, open: openEdge },
  settings: { name: "Settings", icon: ICONS.settings, open: openSettings },
};

const START_PINNED = [
  "edge", "outlook", "settings", "explorer",
  { name: "Word", icon: () => `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="3" fill="#2b579a"/><text x="12" y="16" font-size="11" fill="#fff" text-anchor="middle" font-family="Segoe UI" font-weight="600">W</text></svg>` },
  { name: "Excel", icon: () => `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="3" fill="#217346"/><text x="12" y="16" font-size="11" fill="#fff" text-anchor="middle" font-family="Segoe UI" font-weight="600">X</text></svg>` },
  { name: "Teams", icon: () => `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="3" fill="#5059c9"/><text x="12" y="16" font-size="11" fill="#fff" text-anchor="middle" font-family="Segoe UI" font-weight="600">T</text></svg>` },
  { name: "Microsoft Store", icon: () => `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="7" width="18" height="14" rx="2" fill="none" stroke="#5a5a5a" stroke-width="1.7"/><path d="M8 7V5a4 4 0 0 1 8 0v2" fill="none" stroke="#5a5a5a" stroke-width="1.7"/></svg>` },
  { name: "Photos", icon: () => `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#5a5a5a" stroke-width="1.7"/><circle cx="9" cy="10" r="1.6" fill="#5a5a5a"/><path d="M4 17l5-5 4 4 3-3 4 4" fill="none" stroke="#5a5a5a" stroke-width="1.7"/></svg>` },
];

function initDesktopIcons() {
  const cont = $("#desktop-icons");
  const defs = [
    { name: "Recycle Bin", icon: ICONS.recycle(40), open: openRecycleBin },
    { name: "Microsoft Outlook", icon: ICONS.outlook(38), open: () => openOutlook() },
    { name: "Microsoft Edge", icon: ICONS.edge(38), open: openEdge },
    { name: "This PC", icon: ICONS.thisPC(38), open: openExplorer },
  ];
  for (const d of defs) {
    const b = el("button", "desk-icon", `${d.icon}<span class="di-label">${d.name}</span>`);
    b.addEventListener("click", () => {
      cont.querySelectorAll(".desk-icon").forEach((x) => x.classList.remove("selected"));
      b.classList.add("selected");
    });
    b.addEventListener("dblclick", () => d.open());
    cont.append(b);
  }
  $("#wallpaper").addEventListener("pointerdown", (e) => {
    if (e.target.id === "wallpaper") {
      cont.querySelectorAll(".desk-icon").forEach((x) => x.classList.remove("selected"));
      closeMenus();
    }
  });
}

function initTaskbar() {
  const center = $(".tb-center");
  for (const [id, app] of Object.entries(APPS)) {
    const b = el("button", "tb-icon app-btn", app.icon(22));
    b.dataset.app = id;
    b.title = app.name;
    b.addEventListener("click", () => {
      const existing = [...state.windows.values()].find((w) => w.appId === id);
      if (!existing) { app.open(); return; }
      if (existing.minimized) existing.restore();
      else if (existing.el.classList.contains("unfocused")) existing.restore();
      else existing.minimize();
    });
    center.append(b);
  }

  const tick = () => {
    const n = new Date();
    $("#clock-time").textContent = n.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    $("#clock-date").textContent = n.toLocaleDateString();
  };
  tick();
  setInterval(tick, 15000);

  $("#tb-start").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu("#start-menu");
  });
  $("#tb-search").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu("#start-menu");
    $("#sm-search-input").focus();
  });
  $("#tb-tray-group").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu("#quick-settings");
  });
}

function closeMenus() {
  $("#start-menu").classList.add("hidden");
  $("#quick-settings").classList.add("hidden");
}

function toggleMenu(sel) {
  const m = $(sel);
  const wasOpen = !m.classList.contains("hidden");
  closeMenus();
  if (!wasOpen) m.classList.remove("hidden");
}

function initStartMenu() {
  const grid = $("#sm-pinned");
  const render = (filter = "") => {
    grid.innerHTML = "";
    const items = START_PINNED.map((p, i) =>
      typeof p === "string" ? { appId: p, ...APPS[p] } : { ...p, appId: "pin-" + i });
    const shown = items.filter((a) => a.name.toLowerCase().includes(filter.toLowerCase()));
    if (!shown.length) {
      grid.append(el("div", "sm-noresults", "No results found. Searching the web requires an internet connection."));
      return;
    }
    for (const a of shown) {
      const b = el("button", "sm-app", `${a.icon(30)}<span>${a.name}</span>`);
      b.addEventListener("click", () => {
        closeMenus();
        if (a.open) a.open();
        else snapshotDialog(a.name);
      });
      grid.append(b);
    }
  };
  render();
  $("#sm-search-input").addEventListener("input", (e) => render(e.target.value));
  $("#sm-search-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      toast("Search results for apps are shown above. Web search is unavailable offline.");
    }
  });
  $("#sm-power").addEventListener("click", () => {
    closeMenus();
    const c = el("div");
    c.innerHTML = `
      <div class="dialog-body">
        <div class="dialog-msg">Shut down this virtual machine?</div>
        <div class="dialog-actions">
          <button class="dialog-ok">Shut down</button>
        </div>
      </div>`;
    const p = centerPos(360, 170);
    const win = createWindow({
      title: "Power", width: 360, content: c,
      left: p.left, top: p.top, noResize: true,
    });
    c.querySelector(".dialog-ok").addEventListener("click", () => location.reload());
  });
  $("#sm-username").textContent = state.profile.name;
  $("#sm-avatar").textContent = initialsOf(state.profile.name);

  document.addEventListener("pointerdown", (e) => {
    if (e.target.closest("#start-menu") || e.target.closest("#quick-settings") ||
        e.target.closest("#tb-start") || e.target.closest("#tb-search") || e.target.closest("#tb-tray-group")) return;
    closeMenus();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenus();
  });
}

function initQuickSettings() {
  $("#qs-wifi").addEventListener("click", () => toast("No Wi-Fi networks found. This snapshot has no network adapter."));
  $("#qs-battery-label").textContent = `Battery \u2014 87% \u00b7 ${Math.floor(Math.random() * 3 + 4)} hr remaining`;
}

function folderCount(fid) {
  if (fid === "inbox") return state.mails.filter((m) => m.folder === "inbox" && !m.read).length;
  return 0;
}

function openOutlook() {
  const existing = [...state.windows.values()].find((w) => w.appId === "outlook");
  if (existing) return existing.restore();

  const root = el("div");
  root.style.cssText = "display:flex;flex-direction:column;flex:1;overflow:hidden;";

  const tabs = el("div", "ol-ribbon-tabs");

  const homeRibbon = el("div", "ol-ribbon");
  homeRibbon.innerHTML = `
    <button class="ol-rb-btn" data-act="newmail">${ICONS.newMail()}<span class="rb-label">New Email</span></button>
    <span class="ol-rb-sep"></span>
    <button class="ol-rb-btn" disabled title="Delete requires an internet connection">${ICONS.trash(22)}<span class="rb-label">Delete</span></button>
    <button class="ol-rb-btn" data-act="reply">${ICONS.reply()}<span class="rb-label">Reply</span></button>
    <button class="ol-rb-btn" disabled title="Reply All is unavailable">${ICONS.reply(22)}<span class="rb-label">Reply All</span></button>
    <button class="ol-rb-btn" disabled title="Forward is unavailable">${ICONS.sent(22)}<span class="rb-label">Forward</span></button>`;
  const srRibbon = el("div", "ol-ribbon hidden");
  srRibbon.innerHTML = `
    <button class="ol-rb-btn" data-act="sendrecv">${ICONS.sync()}<span class="rb-label">Send / Receive All Folders</span></button>
    <button class="ol-rb-btn" disabled title="Requires an internet connection">${ICONS.folderMail(22)}<span class="rb-label">Update Folder</span></button>`;
  const viewRibbon = el("div", "ol-ribbon hidden");
  viewRibbon.innerHTML = `
    <button class="ol-rb-btn" data-act="togglepane">${ICONS.folderMail(22)}<span class="rb-label">Reading Pane</span></button>
    <button class="ol-rb-btn" disabled title="Requires an internet connection">${ICONS.newMail(22)}<span class="rb-label">Conversations</span></button>`;
  const helpRibbon = el("div", "ol-ribbon hidden");
  helpRibbon.innerHTML = `
    <button class="ol-rb-btn" data-act="help">${ICONS.settings(22)}<span class="rb-label">Contact Support</span></button>`;

  const filePage = el("div", "ol-file-page hidden");
  const main = el("div", "ol-main");

  const tabDefs = [
    { name: "File", onShow: () => { main.classList.add("hidden"); filePage.classList.remove("hidden"); }, onHide: () => { filePage.classList.add("hidden"); main.classList.remove("hidden"); } },
    { name: "Home", ribbon: homeRibbon },
    { name: "Send / Receive", ribbon: srRibbon },
    { name: "View", ribbon: viewRibbon },
    { name: "Help", ribbon: helpRibbon },
  ];

  root.append(tabs, homeRibbon, srRibbon, viewRibbon, helpRibbon, filePage, main);
  root.style.flex = "1";
  root.style.display = "flex";
  root.style.flexDirection = "column";
  root.style.overflow = "hidden";

  const fileCard = el("div", "ol-file-card");
  filePage.append(fileCard);

  const folderPane = el("div", "ol-folder-pane");
  const listPane = el("div", "ol-list-pane");
  const reading = el("div", "ol-reading");
  const statusbar = el("div", "ol-statusbar");
  main.append(folderPane, listPane, reading);
  root.append(statusbar);

  const setStatus = (html, isError) => {
    statusbar.innerHTML = isError
      ? `<span class="st-error">${html}</span>`
      : `<span>${html}</span>`;
  };
  setStatus(`Disconnected \u00b7 ${state.profile.email}`);

  const drawFolders = () => {
    folderPane.innerHTML = "";
    for (const f of FOLDERS) {
      const count = folderCount(f.id);
      const b = el("button", "ol-folder" + (state.folder === f.id ? " active" : ""),
        `${ICONS[f.icon]()}<span class="f-name">${f.name}</span>${count ? `<span class="f-count">(${count})</span>` : ""}`);
      b.addEventListener("click", () => {
        state.folder = f.id;
        state.msg = null;
        drawFolders();
        drawList();
        drawReading();
      });
      folderPane.append(b);
    }
  };

  const messagesIn = (fid) =>
    state.mails
      .filter((m) => (m.folder || "inbox") === fid)
      .sort((a, b) => (parseDate(b.date) || 0) - (parseDate(a.date) || 0));

  const drawList = () => {
    listPane.innerHTML = "";
    const msgs = messagesIn(state.folder);
    if (!msgs.length) {
      listPane.append(el("div", "ol-empty", "We didn't find anything to show here."));
      return;
    }
    for (const m of msgs) {
      const isDraft = state.folder === "drafts";
      const who = state.folder === "sent" || isDraft ? "To: " + nameOnly(m.to) : nameOnly(m.from);
      const row = el("button",
        `ol-msg-row${m.read ? "" : " unread"}${isDraft ? " draft" : ""}${state.msg === m ? " selected" : ""}`);
      row.innerHTML = `
        <span class="row1"><span class="m-from">${who}</span><span class="m-date">${relWhen(parseDate(m.date))}</span></span>
        <span class="row2"><span class="m-dot"></span><span class="m-subject">${m.subject || "(no subject)"}</span></span>
        ${state.folder === "inbox" || state.folder === "sent" ? `<span class="row2"><span class="m-dot"></span><span class="m-preview">${preview(m.body)}</span></span>` : ""}`;
      row.addEventListener("click", () => {
        state.msg = m;
        if (!m.read) {
          m.read = true;
          drawFolders();
        }
        drawList();
        drawReading();
      });
      listPane.append(row);
    }
  };

  const drawReading = () => {
    reading.innerHTML = "";
    const m = state.msg;
    if (!m) {
      reading.innerHTML = `<div class="ol-empty" style="padding-top:80px">Select an item to read</div>`;
      return;
    }
    const isDraft = state.folder === "drafts";
    if (isDraft) {
      reading.append(el("div", "ol-draft-note", "This message has not been sent."));
    }
    reading.insertAdjacentHTML("beforeend", `
      <div class="r-subject">${m.subject || "(no subject)"}</div>
      <div class="r-meta">
        <b>From:</b> ${m.from || state.profile.email}<br>
        <b>To:</b> ${m.to || ""}<br>
        <b>Date:</b> ${relWhen(parseDate(m.date))}
      </div>
      <hr>
      <div class="r-body"></div>`);
    const bodyEl = reading.querySelector(".r-body");
    bodyEl.innerHTML = linkifyHtml(m.body || "");
    bodyEl.querySelectorAll(".body-link").forEach((a) =>
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        openEdge(a.dataset.url);
      }));
    const replyBtn = el("button", "ol-reply-btn", "Reply");
    replyBtn.addEventListener("click", () => openCompose({
      to: m.from || "",
      subject: "RE: " + (m.subject || ""),
      body: `\n\n----- Original Message -----\nFrom: ${m.from || ""}\nDate: ${relWhen(parseDate(m.date))}\n\n${(m.body || "").replace(/^/gm, "> ")}`,
    }));
    reading.append(replyBtn);
  };

  const updateTitle = () => {
    const f = FOLDERS.find((x) => x.id === state.folder);
    win.el.querySelector(".win-title").textContent =
      `${f.name} - ${state.profile.email} - Outlook`;
  };

  for (const t of tabDefs) {
    const b = el("button", "ol-tab", t.name);
    b.addEventListener("click", () => {
      tabs.querySelectorAll(".ol-tab").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      [homeRibbon, srRibbon, viewRibbon, helpRibbon].forEach((r) => r.classList.add("hidden"));
      if (t.onShow) t.onShow();
      if (t.onHide) t.onHide();
      if (t.ribbon) t.ribbon.classList.remove("hidden");
    });
    tabs.append(b);
  }
  tabs.children[1].classList.add("active");

  homeRibbon.querySelector('[data-act="newmail"]').addEventListener("click", () => openCompose({}));
  homeRibbon.querySelector('[data-act="reply"]').addEventListener("click", () => {
    if (!state.msg) return toast("Select a message first.");
    reading.querySelector(".ol-reply-btn")?.click();
  });
  srRibbon.querySelector('[data-act="sendrecv"]').addEventListener("click", () => {
    setStatus(`Task '${state.profile.email} - Sending and Receiving' reported error (0x800CCC0E): The server is not available.`, true);
  });
  viewRibbon.querySelector('[data-act="togglepane"]').addEventListener("click", () => {
    reading.classList.toggle("hidden");
    listPane.style.flex = reading.classList.contains("hidden") ? "1" : "0 0 330px";
  });
  helpRibbon.querySelector('[data-act="help"]').addEventListener("click", () => {
    noNetworkDialog("Outlook");
  });

  filePage.addEventListener("click", (e) => {
    if (e.target === filePage) tabs.children[1].click();
  });

  const drawFilePage = () => {
    fileCard.innerHTML = `
      <h3>Account Information</h3>
      <div class="ol-file-row"><span class="k">Account</span><span class="v">${state.profile.email}</span></div>
      <div class="ol-file-row"><span class="k">Status</span><span class="v"><span class="ol-offline-badge">DISCONNECTED</span></span></div>
      <div class="ol-file-row"><span class="k">Server</span><span class="v">outlook.discreetdroneservices.com (unreachable)</span></div>
      <div class="ol-file-row"><span class="k">Mailbox data</span><span class="v">Cached locally \u00b7 ${state.mails.length} items</span></div>
      <div class="ol-file-row"><span class="k">Device</span><span class="v">${state.profile.device}</span></div>`;
  };
  drawFilePage();

  const size = { w: Math.min(1020, window.innerWidth - 80), h: Math.min(640, window.innerHeight - 120) };
  const p = centerPos(size.w, size.h);
  const win = createWindow({
    id: "win-outlook", appId: "outlook",
    title: `Inbox - ${state.profile.email} - Outlook`,
    icon: ICONS.outlook(16),
    width: size.w, height: size.h,
    left: p.left, top: p.top,
    content: root,
  });
  state.outlook = win;

  drawFolders();
  drawList();
  drawReading();
  updateTitle();
  win.redraw = (fid) => {
    if (fid) state.folder = fid;
    state.msg = null;
    drawFolders();
    drawList();
    drawReading();
    updateTitle();
  };
  return win;
}

function openCompose({ to = "", subject = "", body = "" }) {
  const root = el("div", "ol-compose-body");
  root.innerHTML = `
    <div class="ol-compose-toolbar">
      <button class="ol-send-btn">Send</button>
      <button class="ol-discard-btn">Discard</button>
      <span style="font-size:11px;color:#6b6b6b">Working offline \u2014 messages will be saved to Drafts</span>
    </div>
    <input class="c-to" type="text" placeholder="To" spellcheck="false">
    <input class="c-subject" type="text" placeholder="Subject" spellcheck="false">
    <textarea class="c-body" placeholder="Write your message here..." spellcheck="false"></textarea>`;
  root.querySelector(".c-to").value = to;
  root.querySelector(".c-subject").value = subject;
  root.querySelector(".c-body").value = body;

  const p = centerPos(560, 420);
  const win = createWindow({
    title: subject ? subject : "Untitled - Message (HTML)",
    icon: ICONS.outlook(16),
    width: 560, height: 420,
    left: p.left + 30, top: p.top + 40,
    content: root,
  });

  const subjInput = root.querySelector(".c-subject");
  subjInput.addEventListener("input", () => {
    win.el.querySelector(".win-title").textContent = subjInput.value || "Untitled - Message (HTML)";
  });

  root.querySelector(".ol-discard-btn").addEventListener("click", () => win.close());
  root.querySelector(".ol-send-btn").addEventListener("click", () => {
    const msg = {
      id: "draft-" + ++state.winSeq,
      folder: "drafts",
      from: state.profile.email,
      to: root.querySelector(".c-to").value.trim(),
      subject: subjInput.value.trim(),
      date: new Date().toISOString(),
      read: true,
      body: root.querySelector(".c-body").value,
    };
    state.mails.unshift(msg);
    win.close();
    dialog(
      "Outlook",
      `We couldn't reach the mail server.<br><br><span style="color:#6b6b6b;font-size:12.5px">Error (0x800CCC0E). Your message has been saved to the <b>Drafts</b> folder and will be sent when a connection is available.</span>`
    );
    const olWin = [...state.windows.values()].find((w) => w.appId === "outlook");
    if (olWin) {
      olWin.restore();
      if (olWin.redraw) olWin.redraw("drafts");
    }
  });
  return win;
}

async function loadData() {
  try {
    const res = await fetch("data/emails.json", { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    state.profile = data.profile || state.profile;
    state.mails = (data.messages || []).map((m, i) => ({
      id: m.id || "m" + i,
      folder: m.folder || "inbox",
      from: m.from || "",
      to: m.to || "",
      subject: m.subject || "",
      date: m.date || "",
      read: !!m.read,
      body: m.body || "",
    }));
    return true;
  } catch (err) {
    return false;
  }
}

async function init() {
  const ok = await loadData();
  const btn = $("#start-vm-btn");
  const status = $("#start-status");
  if (ok) {
    status.textContent = `Mailbox loaded: ${state.mails.length} items \u00b7 profile: ${state.profile.name}`;
    btn.disabled = false;
  } else {
    status.textContent = "Could not load data/emails.json. Serve this folder over HTTP (e.g. python3 -m http.server) and refresh.";
    status.classList.add("error");
    return;
  }

  initDesktopIcons();
  initTaskbar();
  initStartMenu();
  initQuickSettings();
  initLogin();

  btn.addEventListener("click", async () => {
    $("#start-screen").classList.add("hidden");
    $("#boot-screen").classList.remove("hidden");
    await wait(2400);
    $("#boot-screen").classList.add("hidden");
    showLogin();
  });
}

function initLogin() {
  const art = $("#drone-art");
  if (art) {
    const clone = art.cloneNode(true);
    clone.removeAttribute("id");
    $("#welcome-screen .login-bg").insertAdjacentElement("afterend", clone);
  }
  const attempt = async () => {
    const pw = $("#login-password");
    const digest = await sha256Hex(pw.value);
    if (digest === LOGIN_PASSWORD_SHA256) {
      $("#login-error").classList.add("hidden");
      $("#login-screen").classList.add("hidden");
      $("#welcome-screen").classList.remove("hidden");
      setTimeout(async () => {
        $("#welcome-screen").classList.add("hidden");
        $("#desktop").classList.remove("hidden");
        await wait(500);
        openOutlook();
      }, 1700);
    } else {
      $("#login-error").classList.remove("hidden");
      const card = $("#login-card");
      card.classList.remove("shake");
      void card.offsetWidth;
      card.classList.add("shake");
      pw.value = "";
      pw.focus();
    }
  };
  $("#login-submit").addEventListener("click", attempt);
  $("#login-password").addEventListener("keydown", (e) => {
    if (e.key === "Enter") attempt();
  });
  $("#login-power").addEventListener("click", () => location.reload());
  $("#login-options").addEventListener("click", () => {
    $("#login-note").classList.toggle("hidden");
  });
}

function showLogin() {
  const p = state.profile;
  $("#login-name").textContent = p.name;
  $("#login-email").textContent = p.email;
  $("#login-avatar").textContent = initialsOf(p.name);
  $("#login-user").value = p.login || p.email;
  $("#login-error").classList.add("hidden");
  $("#login-note").classList.add("hidden");
  $("#login-password").value = "";
  $("#login-screen").classList.remove("hidden");
  $("#login-password").focus();
}

init();
