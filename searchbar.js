//finding the thing to show when pressing "see more" on a recipe
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id") || "recipe1";
const recipe = recipes.find((r) => r.id === recipeId);

//loading title
document.querySelector("#showfood h1").innerHTML = recipe.title.join("<br>");
document.querySelector("#showfood img").src = recipe.image;

//ingredients are dynamically shown
const ingredientsContainer = document.querySelector(".circle1 form");
ingredientsContainer.innerHTML = "";
recipe.ingredients.forEach((ingredient, index) => {
  ingredientsContainer.innerHTML += `
    <input type="checkbox" id="ingredient${index}" name="ingredient${index}" value="${ingredient}">
    <label for="ingredient${index}">${ingredient}</label><br>
  `;
});

//the description loaded
document.querySelector("#circle2 h3").innerHTML =
  recipe.descriptiontitle.join("");
document.querySelector("#circle2 p").innerHTML = recipe.description;

//the steps are loaded for the recipe
const stepsElement = document.getElementById("steps");

//loading the steps
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

//letting every loaded recipe have their own saved checklist
const urlParams = new URLSearchParams(window.location.search);
const currentRecipeId = urlParams.get("id");

//saves the checked chekcboxes
function saveCheckboxStates() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const states = {};
  checkboxes.forEach((checkbox) => {
    states[checkbox.id] = checkbox.checked;
  });
  localStorage.setItem(
    `checkboxStates_${currentRecipeId}`,
    JSON.stringify(states)
  );
}
//the checkboxes that got saved are being loaded and applied
function loadCheckboxStates() {
  const states = JSON.parse(
    localStorage.getItem(`checkboxStates_${currentRecipeId}`)
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

//SEARCHBAR

//
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("results");

  // Function to filter and display results
  function searchRecipes(query) {
    const filteredRecipes = recipes.filter((recipe) => {
      // Search in both title and ingredients
      const searchQuery = query.toLowerCase();
      const titles = recipe.title.join(" ").toLowerCase();
      const ingredients = recipe.ingredients.join(" ").toLowerCase();

      return titles.includes(searchQuery) || ingredients.includes(searchQuery);
    });

    // Clear previous results
    resultsContainer.innerHTML = "";

    // If no query or no results, hide results
    if (query === "" || filteredRecipes.length === 0) {
      resultsContainer.classList.remove("visible");
      return;
    }

    // Show results if there are matches
    resultsContainer.classList.add("visible");

    // Display new results
    filteredRecipes.forEach((recipe) => {
      const recipeItem = document.createElement("div");
      recipeItem.classList.add("result-item");

      // Recipe image
      const recipeImage = document.createElement("img");
      recipeImage.src = recipe.image;
      recipeImage.alt = recipe.title.join(" ");

      // Append elements to the result item
      recipeItem.appendChild(recipeImage);

      // Append to results container
      resultsContainer.appendChild(recipeItem);

      //clickable recipes
      const recipeLink = document.createElement("a");
      recipeLink.href = `recipe1.html?id=${recipe.id}`; // Adjust this to your actual recipe page
      recipeLink.appendChild(recipeImage);

      recipeItem.appendChild(recipeLink);
    });
  }

  // Event listener for search input
  searchBar.addEventListener("input", () => {
    const query = searchBar.value;
    searchRecipes(query);
  });
});
