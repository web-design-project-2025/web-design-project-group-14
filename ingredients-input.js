document.addEventListener("DOMContentLoaded", () => {
  const ingredientList = document.getElementById("ingredients-list");
  const addButton = document.querySelector(".add-ingredient");

  addButton.addEventListener("click", () => {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "ingredients[]";
    newInput.className = "ingredient-input";
    newInput.placeholder = "ex. 20g butter";
    ingredientList.appendChild(newInput);
  });
});
