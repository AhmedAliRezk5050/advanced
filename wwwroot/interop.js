function addTableRows(colCount, elem) {
    let row = document.createElement("tr")

    elem.parentNode.insertBefore(row, elem);

    for (let i = 0; i < colCount; i++) {
        let cell = document.createElement("td");

        cell.innerText = "New Elements";

        row.append(cell);
    }
}

function createToggleButton() {
    let sibling = document.querySelector("button:last-of-type");

    let button = document.createElement("button");

    button.classList.add("btn", "btn-secondary", "btn-block");

    button.innerText = "JS Toggle";

    sibling.parentNode.insertBefore(button, sibling.nextSibling);

    button.onclick = () => DotNet.invokeMethodAsync("Advanced", "ToggleEnabled");
    
}


