document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form elements
        var form = event.target;
        var titleInput = form.querySelector("#recipe-title");
        var descriptionInput = form.querySelector("#recipe-description");

        // Validate form inputs
        if (!titleInput.value || !descriptionInput.value) {
            alert("Please fill out all fields."); // Basic validation; you can enhance this based on your requirements
            return;
        }

        // Create a new recipe card
        var newRecipeCard = createRecipeCard(titleInput.value, descriptionInput.value);

        // Append the new card to the recipe container
        var recipeContainer = document.querySelector(".recipe-container");
        recipeContainer.appendChild(newRecipeCard);

        // Optional: Clear form inputs after submission
        titleInput.value = "";
        descriptionInput.value = "";
    }

    // Function to create a new recipe card
    function createRecipeCard(title, description) {
        var card = document.createElement("div");
        card.classList.add("recipe-card");

        // Set the background image (you may need to customize this part)
        card.style.backgroundImage = "url('path/to/default/image.jpg')";

        // Set the content of the card
        card.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="#">View Recipe</a>
        `;

        return card;
    }

    // Attach the handleFormSubmission function to the form's submit event
    var addRecipeForm = document.querySelector("#add-recipe-form");
    addRecipeForm.addEventListener("submit", handleFormSubmission);
});
