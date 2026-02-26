const correctPin = "0000";

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(() => {
        document.getElementById("bootScreen").style.display = "none";
        document.getElementById("loginScreen").style.display = "flex";
    }, 2000);

    setInterval(updateClock, 1000);
    enableDrag();
});

function checkPin() {
    const input = document.getElementById("pinInput").value;
    if (input === correctPin) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("desktop").style.display = "block";
    }
}

function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    if (clock) clock.textContent = now.toLocaleTimeString();
}

function toggleSettings() {
    document.getElementById("settingsPanel").classList.toggle("hidden");
}

function changeTheme(theme) {
    const desktop = document.getElementById("desktop");

    if (theme === "dark")
        desktop.style.background = "linear-gradient(135deg, #111, #222)";
    if (theme === "orange")
        desktop.style.background = "linear-gradient(135deg, #1a0f00, #ff7a00)";
    if (theme === "purple")
        desktop.style.background = "linear-gradient(135deg, #1a001a, #8000ff)";
}

function changeTransparency(value) {
    document.getElementById("taskbar").style.background =
        `rgba(0, 0, 0, ${value})`;
}

function enableDrag() {
    const widget = document.getElementById("widget");

    widget.addEventListener("dragend", function (e) {
        widget.style.left = e.pageX + "px";
        widget.style.top = e.pageY + "px";
    });
}
