const selectElement = document.querySelector("#my-select");

selectElement.addEventListener("change", (event) => {
    const result = document.querySelector("#option-selected");
    result.textContent = `Sie haben ausgewählt: ${event.target.value}`;
})