const username = "bob";
const password = "secret";
window.addEventListener("DOMContentLoaded", () => {
    const controlDiv = document.getElementById("controls");
    createButton(controlDiv, "Get Data", getData);
    createButton(controlDiv, "Log In", login);
    createButton(controlDiv, "Log Out", logout);
});
function login() {
// do nothing
}
function logout() {
// do nothing
}
async function getData() {
    let response = await fetch("/api/people");
    if (response.ok) {
        let jsonData = await response.json();
        displayData(...jsonData.map(item => `${item.surname}, ${item.firstname}`));
    } else {
        displayData(`Error: ${response.status}: ${response.statusText}`);
    }
}
function displayData(...items) {
    const dataDiv = document.getElementById("data");
    dataDiv.innerHTML = "";
    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerText = item;
        itemDiv.style.wordWrap = "break-word";
        dataDiv.appendChild(itemDiv);
    })
}
function createButton(parent, label, handler) {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "m-2");
    button.innerText = label;
    button.onclick = handler;
    parent.appendChild(button);
}