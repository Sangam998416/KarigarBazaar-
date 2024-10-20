document.addEventListener("DOMContentLoaded", () => {
    // Log when the page is loaded
    console.log("Main page loaded");

    // Event listener for Search Button
    document.getElementById("searchButton").addEventListener("click", () => {
        let searchValue = document.getElementById("searchBar").value.trim();
        if (searchValue === "") {
            alert("Please enter a search term.");
        } else {
            console.log("Search for: ", searchValue);
            // Implement actual search functionality here
        }
    });
});
