const body = document.getElementById("body");
const output = document.getElementById("demo");
let count = 0;

function changeBackground(color) {
    // Anpassen des Hintergrunds
    body.style.backgroundColor = color;
    // Erhöhen Zähler der Änderungen
    count++;
    // Output Text
    output.innerHTML = `Wir haben die Farbe ${count} mal geändert!`
}

function changeHandle() {
    // Abfrage Werte RGB aus Formular
    const red = Number(document.getElementById("rot").value);
    const green = Number(document.getElementById("grun").value);
    const blue = Number(document.getElementById("blau").value);
    console.log(red);
    console.log(green);
    console.log(blue);

    // umwandeln in Hex
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };
    console.log(rgbToHex(red, green, blue));

    // Anpassen des Hintergrunds
    body.style.backgroundColor = `rgb(${red},${green}, ${blue})`;

    // Erhöhen Zähler der Änderungen
    count++;
    // Output Text
    output.innerHTML = `rgb(${red},${green}, ${blue}) = ${rgbToHex(red, green, blue)}`
}