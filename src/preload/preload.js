const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("oraculo", {
    getAppInfo: () => ipcRenderer.invoke("app:getInfo"),
    versions: {
        chrome: process.versions.chrome,
        electron: process.versions.electron,
        node: process.versions.node,
    },
});
