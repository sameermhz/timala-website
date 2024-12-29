// Enhanced mountains.js

document.addEventListener("DOMContentLoaded", function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryImages = document.querySelectorAll(".gallery img");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Update active button styles
            filterButtons.forEach(btn => btn.classList.remove("btn-primary"));
            button.classList.add("btn-primary");

            // Filter images
            galleryImages.forEach(img => {
                if (category === "all" || img.getAttribute("data-category") === category) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
        });
    });

    // Search functionality
    const searchInput = document.getElementById("search-input");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        galleryImages.forEach(img => {
            const altText = img.getAttribute("alt").toLowerCase();
            if (altText.includes(searchTerm)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});
