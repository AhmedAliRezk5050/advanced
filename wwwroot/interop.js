function addTableRows(colCount) {
    let elem = document.querySelector("tbody");
    
    let row = document.createElement("tr");
    
    elem.append(row);
    
    for (let i = 0; i < colCount; i++) {
        let cell = document.createElement("td");
        
        cell.innerText = "New Elements"
        row.append(cell);
    }
}