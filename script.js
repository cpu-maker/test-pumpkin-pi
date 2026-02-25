const correctPin = "0000";

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(() => {
        document.getElementById("bootScreen").style.display = "none";
        document.getElementById("loginScreen").style.display = "flex";
    }, 2000);

    setInterval(updateClock, 1000);
});

function checkPin() {
    const input = document.getElementById("pinInput").value;
    const message = document.getElementById("loginMessage");

    if (input === correctPin) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("desktop").style.display = "block";
    } else {
        message.textContent = "Incorrect PIN";
    }
}

function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    if (clock) {
        clock.textContent = now.toLocaleTimeString();
    }
}
