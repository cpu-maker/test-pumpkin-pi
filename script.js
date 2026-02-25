const correctPin = "0000";

window.onload = function() {
    setTimeout(() => {
        document.getElementById("bootScreen").classList.add("hidden");
        document.getElementById("loginScreen").classList.remove("hidden");
    }, 2000);

    setInterval(updateClock, 1000);
};

function checkPin() {
    const input = document.getElementById("pinInput").value;
    const message = document.getElementById("loginMessage");

    if (input === correctPin) {
        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("desktop").classList.remove("hidden");
    } else {
        message.textContent = "Incorrect PIN";
    }
}

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString();
}
