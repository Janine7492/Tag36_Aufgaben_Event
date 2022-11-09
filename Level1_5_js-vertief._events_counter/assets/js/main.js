let currentCount = 0

function count() {
    currentCount++;
    document.getElementById("clickMe").innerHTML = `Click me: ${currentCount}`;
}