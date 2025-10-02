export const logger = {
  log: (...messages: unknown[]) => {
    if (isDev) {
      console.log(...messages);
    }
  },
};
