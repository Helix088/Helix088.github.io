const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", function() {
    let myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.append(listText);
    listText.textContent = myItem;
    listBtn.textContent = "❌";
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener("click", function(e) {
        list.removeChild(listItem);
    });

    input.focus();
});