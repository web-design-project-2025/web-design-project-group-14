/*https://chatgpt.com/share/68264832-ae2c-8002-b58c-2155b71af9a4*/

//finding the thing to show when pressing "see more" on a recipe
function waitForRecipes() {
  if (!window.recipes || window.recipes.length === 0) {
    setTimeout(waitForRecipes, 50);
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id") || "recipe1";
  const recipe = window.recipes.find((r) => r.id === recipeId);

  if (!recipe) return;

  document.querySelector("#showfood h1").innerHTML = recipe.title.join("<br>");
  document.querySelector("#showfood img").src = recipe.image;

  document
    .querySelector("[data-link]")
    .setAttribute("data-link", "recipe1.html?id=" + recipeId);
  document
    .querySelector("[data-image]")
    .setAttribute("data-image", recipe.image);

  const ingredientsContainer = document.querySelector(".circle1 form");
  let currentPortion = 2;

  document.getElementById("portion-2").addEventListener("click", () => {
    setPortion(2);
  });

  document.getElementById("portion-4").addEventListener("click", () => {
    setPortion(4);
  });

  setPortion(2);

  function setPortion(portion) {
    currentPortion = portion;
    renderIngredients(recipe.ingredients);
    document
      .querySelectorAll(".portion-option")
      .forEach((el) => el.classList.remove("active"));
    document.getElementById(`portion-${portion}`).classList.add("active");
  }

  function renderIngredients(ingredients) {
    ingredientsContainer.innerHTML = "";
    ingredients.forEach((ingredient, index) => {
      const id = `ingredient${index + 1}`;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.name = id;

      const label = document.createElement("label");
      label.setAttribute("for", id);

      if (typeof ingredient.quantity === "number") {
        label.innerText = `${ingredient.quantity * (currentPortion / 2)} ${
          ingredient.unit
        } ${ingredient.name}`;
      } else {
        label.innerText = `${ingredient.name} (${ingredient.quantity})`;
      }
      ingredientsContainer.appendChild(checkbox);
      ingredientsContainer.appendChild(label);
      ingredientsContainer.appendChild(document.createElement("br"));
    });
    loadCheckboxStates();
  }

  // Load description
  document.querySelector("#circle2 h3").innerHTML =
    recipe.descriptiontitle.join("");
  document.querySelector("#circle2 p").innerHTML = recipe.description;

  // Steps
  const stepsElement = document.getElementById("steps");
  stepsElement.innerHTML = `
    <h1 class="aboreto-regular">${recipe.title
      .join(" ")
      .toUpperCase()} RECIPE</h1>
    <p class="josefin-sans-light">
      ${recipe.steps1.map((step) => `${step}`).join("<br><br>")}
    </p>
    <p class="josefin-sans-light steps5">
      ${recipe.steps2.map((step) => `${step}`).join("<br><br>")}
    </p>
  `;

  function saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const states = {};
    checkboxes.forEach((checkbox) => {
      states[checkbox.id] = checkbox.checked;
    });
    localStorage.setItem(`checkboxStates_${recipeId}`, JSON.stringify(states));
  }

  function loadCheckboxStates() {
    const states = JSON.parse(
      localStorage.getItem(`checkboxStates_${recipeId}`)
    );
    if (states) {
      Object.keys(states).forEach((id) => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.checked = states[id];
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadCheckboxStates();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", saveCheckboxStates);
    });
  });
}

waitForRecipes();
