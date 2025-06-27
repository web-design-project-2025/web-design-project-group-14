/*https://chatgpt.com/share/68264832-ae2c-8002-b58c-2155b71af9a4*/

let recipes = [];

fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    window.recipes = data;
    recipes = data;

    const container = document.getElementById("recipe-container");
    container.innerHTML = "";

    data.forEach((recipe) => {
      const recipeHTML = `
        <div class="recipe">
          <h2>${recipe.title.join(" ")}</h2>
          <a href="recipe.html?id=${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title.join(
        " "
      )}" width="300">
          </a>
          <h3>Ingredients:</h3>
          <ul>
            ${recipe.ingredients
              .map((ing) => `<li>${ing.quantity} ${ing.unit} ${ing.name}</li>`)
              .join("")}
          </ul>
        </div>
      `;
      container.innerHTML += recipeHTML;
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
