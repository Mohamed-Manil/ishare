const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("shareScreenAPI", {
  startSharing: (updateUi) => {
    ipcRenderer.send("start-share", {});
    updateUi();
  },
  stopSharing: (updateUi) => {
    ipcRenderer.send("stop-share", {});
    updateUi();
  },
});
