
function addNewItem(listId, inputId) {
    const list = document.getElementById(listId);
    const input = document.getElementById(inputId);
    const newItem = input.value.trim();

    if (newItem !== "") { // Checking for non-empty string
        const listItem = document.createElement("li");
        listItem.textContent = newItem;
        list.appendChild(listItem);
        input.value = ""; // clear input field
    } else {
        alert ("Please enter an item");
    }

}