document.addEventListener("DOMContentLoaded", function () {
    function handleSearch() {
        var searchInput = document.querySelector("#search input");
        var searchText = searchInput.value.toLowerCase();

        var recipeCards = document.querySelectorAll(".recipe-card");

        recipeCards.forEach(function (card) {

            var recipeTitle = card.querySelector("h3").innerText.toLowerCase();

            if (recipeTitle.includes(searchText)) {

                card.style.display = "block";
            } else {
                
                card.style.display = "none";
            }
        });
    }

    
    var searchForm = document.querySelector("#search form");
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        handleSearch(); 
    });

    var searchInput = document.querySelector("#search input");
    searchInput.addEventListener("input", function () {
        handleSearch(); 
    });
});
