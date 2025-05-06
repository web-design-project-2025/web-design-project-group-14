//SEARCHBAR

//
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("results");
  const overlay = document.getElementById("search-overlay");

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
      overlay.classList.remove("active");
      return;
    }

    // Show results if there are matches
    resultsContainer.classList.add("visible");
    overlay.classList.add("active");

    // Display new results
    filteredRecipes.forEach((recipe) => {
      const recipeItem = document.createElement("div");
      recipeItem.classList.add("result-item");

      // Recipe image
      const recipeImage = document.createElement("img");
      recipeImage.src = recipe.image;
      recipeImage.alt = recipe.title.join(" ");

      // Recipe title
      const recipeTitle = document.createElement("h3");
      recipeTitle.textContent = recipe.title.join(" ");

      // Append elements to the result item
      recipeItem.appendChild(recipeImage);
      recipeItem.appendChild(recipeTitle);

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
