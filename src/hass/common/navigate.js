/*
 * Auto-generated file. Do not edit directly.
 */

// frontend/src/data/main_window.ts
var MAIN_WINDOW_NAME = "ha-main-window";

// frontend/src/common/dom/get_main_window.ts
var mainWindow = (() => {
  try {
    return window.name === MAIN_WINDOW_NAME ? window : parent.name === MAIN_WINDOW_NAME ? parent : top;
  } catch {
    return window;
  }
})();

// frontend/src/dialogs/make-dialog-manager.ts
var LOADED = {};
var OPEN_DIALOG_STACK = [];
var FOCUS_TARGET = Symbol.for("HA focus target");
var closeDialog = async (dialogTag) => {
  if (!(dialogTag in LOADED)) {
    return true;
  }
  const dialogElement = await LOADED[dialogTag].element;
  if (dialogElement.closeDialog) {
    return dialogElement.closeDialog() !== false;
  }
  return true;
};
var closeAllDialogs = async () => {
  for (let i = OPEN_DIALOG_STACK.length - 1;i >= 0; i--) {
    const closed = !OPEN_DIALOG_STACK[i] || await closeDialog(OPEN_DIALOG_STACK[i].dialogTag);
    if (!closed) {
      return false;
    }
  }
  return true;
};

// frontend/src/common/dom/fire_event.ts
var fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

// frontend/src/common/navigate.ts
var DIALOG_WAIT_TIMEOUT = 500;
var navigate = async (path, options, timestamp = Date.now()) => {
  const { history } = mainWindow;
  if (history.state?.dialog && Date.now() - timestamp < DIALOG_WAIT_TIMEOUT) {
    const closed = await closeAllDialogs();
    if (!closed) {
      console.warn("Navigation blocked, because dialog refused to close");
      return false;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        navigate(path, options, timestamp).then(resolve);
      });
    });
  }
  const replace = options?.replace || false;
  if ("") {} else if (replace) {
    history.replaceState(history.state?.root ? { root: true } : options?.data ?? null, "", path);
  } else {
    history.pushState(options?.data ?? null, "", path);
  }
  fireEvent(mainWindow, "location-changed", {
    replace
  });
  return true;
};
var goBack = (fallbackPath) => {
  const { history } = mainWindow;
  if (history.length > 1) {
    history.back();
    return;
  }
  const fallback = fallbackPath || "/";
  navigate(fallback, { replace: true });
};
export {
  navigate,
  goBack
};
