export const logger = {
  log: (...messages: unknown[]) => {
    if (isDev) {
      console.log(...messages);
    }
  },
  error: (...messages: unknown[]) => {
    if (isDev) {
      console.error(...messages);
    }
  },
};
