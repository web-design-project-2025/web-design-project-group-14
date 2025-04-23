document.addEventListener("DOMContentLoaded", () => {
  let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

  const saveButtons = document.querySelectorAll(".button");
  const savedListContainer = document.getElementById("saved-container");
  const savedList = document.getElementById("saved-list");
  const savedCount = document.getElementById("saved-count");

  const brekfastrToggle = document.getElementById("brekfast-toggle");
  const brekfastList = document.getElementById("brekfast-list");

  const lunchToggle = document.getElementById("lunch-toggle");
  const lunchList = document.getElementById("lunch-list");

  const dinnerToggle = document.getElementById("dinner-toggle");
  const dinnerList = document.getElementById("dinner-list");

  const snacksToggle = document.getElementById("snacks-toggle");
  const snacksList = document.getElementById("snacks-list");

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
        <a href="${recipe.link}" target="_blank">See More</a>
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
