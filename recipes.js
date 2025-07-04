/*https://chatgpt.com/share/68264832-ae2c-8002-b58c-2155b71af9a4*/

let recipes = [];

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all */
Promise.all([
  fetch("recipesA.json").then((res) => res.json()),
  fetch("recipesB.json").then((res) => res.json()),
])

  /* https://chatgpt.com/share/685eee19-d3c4-800a-926b-82714b5317f3 */
  .then(([dataA, dataB]) => {
    // Combine both datasets
    recipes = [...dataA, ...dataB];
    window.recipes = recipes;

    const container = document.getElementById("recipe-container");
    container.innerHTML = "";

    recipes.forEach((recipe) => {
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
  .catch((error) => console.error("Error loading JSON files:", error));
