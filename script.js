const PIN = "0000";

document.addEventListener("DOMContentLoaded", () => {

    // Boot sequence
    setTimeout(() => {
        document.getElementById("boot").style.display = "none";
        document.getElementById("login").style.display = "flex";
    }, 2000);

    setInterval(updateClock, 1000);
    detectHardware();
    animateBars();
});

function unlock() {
    const input = document.getElementById("pin").value;
    const msg = document.getElementById("loginMsg");

    if (input === PIN) {
        document.getElementById("login").style.display = "none";
        document.getElementById("desktop").style.display = "block";
    } else {
        msg.textContent = "Incorrect PIN";
    }
}

function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    if (clock) clock.textContent = now.toLocaleTimeString();
}

function detectHardware() {
    document.getElementById("cpuCores").textContent =
        navigator.hardwareConcurrency || "Unknown";

    document.getElementById("ram").textContent =
        navigator.deviceMemory || "Unknown";

    let gpuName = "Unknown";
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl");

    if (gl) {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
            gpuName = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }
    }

    document.getElementById("gpu").textContent = gpuName;
}

function animateBars() {
    setInterval(() => {
        document.getElementById("cpuBar").style.width =
            Math.random() * 100 + "%";

        document.getElementById("ramBar").style.width =
            Math.random() * 100 + "%";
    }, 1000);
}

function toggleSettings() {
    document.getElementById("settings").classList.toggle("hidden");
}

function setTheme(theme) {
    const desktop = document.getElementById("desktop");

    if (theme === "dark")
        desktop.style.background = "linear-gradient(#111,#222)";
    if (theme === "orange")
        desktop.style.background = "linear-gradient(#1a0f00,#ff7a00)";
    if (theme === "purple")
        desktop.style.background = "linear-gradient(#1a001a,#8000ff)";
}

function setTransparency(value) {
    document.getElementById("taskbar").style.background =
        `rgba(0,0,0,${value})`;
}
