const path = require("node:path");
const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 640,
        webPreferences: {
            preload: path.join(__dirname, "../preload/preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
        },
    });

    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
}

app.whenReady().then(() => {
    ipcMain.handle("app:getInfo", () => ({
        name: app.getName(),
        version: app.getVersion(),
    }));

    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
