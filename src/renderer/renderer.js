async function showAppInfo() {
    const info = await window.oraculo.getAppInfo();
    const versions = window.oraculo.versions;

    document.querySelector("#app-info").textContent =
        `${info.name} ${info.version} | Electron ${versions.electron} | Chrome ${versions.chrome} | Node ${versions.node}`;
}

showAppInfo();
