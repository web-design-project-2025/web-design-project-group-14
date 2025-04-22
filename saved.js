document.addEventListener("DOMContentLoaded", () => {
  let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

  const saveButtons = document.querySelectorAll(".button");
  const savedListContainer = document.getElementById("saved-container");
  const savedList = document.getElementById("saved-list");
  const savedCount = document.getElementById("saved-count");

  function updateSavedList() {
    if (savedList) {
      savedList.innerHTML = "";

      savedRecipes.forEach((recipe) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${recipe.image}" alt="" width="20%">
            <a href="${recipe.link}">${recipe.link}</a>
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

  updateSavedList();
});
