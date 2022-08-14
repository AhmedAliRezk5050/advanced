function addTableRows(colCount, elem) {
    let row = document.createElement("tr")
    
    elem.parentNode.insertBefore(row, elem);
    
    for (let i = 0; i < colCount; i++) {
        let cell = document.createElement("td");
        
        cell.innerText = "New Elements";
        
        row.append(cell);
    }
}