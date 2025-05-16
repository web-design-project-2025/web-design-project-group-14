/* Saving recipes inspo- https://chatgpt.com/share/68271e8f-287c-800a-a525-312d7e33ab60 */

document.addEventListener("DOMContentLoaded", () => {
  let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

  const saveButtons = document.querySelectorAll(".button");
  const savedListContainer = document.getElementById("saved-container");
  const savedList = document.getElementById("saved-list");
  const savedCount = document.getElementById("saved-count");

  const lunchToggle = document.getElementById("lunch-toggle");
  const lunchList = document.getElementById("lunch-list");

  function updateSavedList() {
    if (savedList) {
      savedList.innerHTML = "";

      savedRecipes.forEach((recipe) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${recipe.image}" alt="" width="20%">
            <a href="${recipe.link}"> see more</a>
            <button class="remove-btn">Remove</button>
          `;

        li.querySelector(".remove-btn").addEventListener("click", () => {
          removeRecipe(recipe.link);
        });

        savedList.appendChild(li);
      });
    }

    if (savedCount) {
      savedCount.textContent = savedRecipes.length;
    }

    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    renderLunchRecipes();
  }

  function saveRecipe(recipe) {
    if (!savedRecipes.some((r) => r.link === recipe.link)) {
      savedRecipes.push(recipe);
      updateSavedList();
      alert("Recipe saved!");
    } else {
      alert("Recipe already saved!");
    }
  }

  function removeRecipe(link) {
    savedRecipes = savedRecipes.filter((r) => r.link !== link);
    updateSavedList();
  }

  if (saveButtons.length > 0) {
    saveButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const recipe = {
          image: button.getAttribute("data-image"),
          link: button.getAttribute("data-link"),
        };
        saveRecipe(recipe);
      });
    });
  }

  /* Inspiration for categories in saving option - https://chatgpt.com/share/68271f49-3bb0-800a-883c-8b2932bde8e8 */

  function renderLunchRecipes() {
    if (!lunchList) return;
    lunchList.innerHTML = "";

    if (savedRecipes.length === 0) {
      lunchList.innerHTML = "<p>No saved lunch recipes yet!</p>";
      return;
    }

    savedRecipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card";

      card.innerHTML = `
        <img src="${recipe.image}" alt="Recipe Image" />
        <a href="${recipe.link}" target="_blank">See Recipe</a>
        <button class="remove-btn">Remove</button>
      `;

      card.querySelector(".remove-btn").addEventListener("click", () => {
        removeRecipe(recipe.link);
      });

      lunchList.appendChild(card);
    });
  }

  if (lunchToggle) {
    lunchToggle.addEventListener("click", () => {
      lunchList.classList.toggle("hidden");
      lunchToggle.innerText = lunchList.classList.contains("hidden")
        ? "> LUNCH:"
        : "v LUNCH:";
    });
  }
  updateSavedList();
});
