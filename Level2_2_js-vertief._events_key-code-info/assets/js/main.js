document.getElementById("inputKey").addEventListener("keypress", (event) => {
    let code = event.code;
    let keyCode = event.keyCode;

    document.getElementById("outputKeyCode").innerHTML = keyCode;
    document.getElementById("bigOutput").innerHTML = keyCode;
    document.getElementById("outputCode").innerHTML = code;

})