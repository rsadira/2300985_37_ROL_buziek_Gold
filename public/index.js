// script.js

// Sample studio data (replace with your actual data)
const studios = [
  {
    name: "Studio 1",
    location: "Location A",
    price: 50,
    rating: 4,
    facilities: ["Lighting", "Backdrops"],
  },
  {
    name: "Studio 2",
    location: "Location B",
    price: 60,
    rating: 4.5,
    facilities: ["Lighting", "Soundproofing"],
  },
  // Add more studio data as needed
];

// Function to update studio listings based on user selections
function updateStudioListings() {
  const sortOption = document.getElementById("sort").value;
  const filterOption = document.getElementById("filter").value;

  // Implement sorting and filtering logic based on user selections
  // Update the studio listings with the sorted and filtered results
  // You can use JavaScript to generate HTML for studio cards and append them to the #studio-listings section
}

// Attach event listeners to the dropdowns for sorting and filtering
document
  .getElementById("sort")
  .addEventListener("change", updateStudioListings);
document
  .getElementById("filter")
  .addEventListener("change", updateStudioListings);

// Initial call to populate the studio listings
updateStudioListings();

// Update your JavaScript (script.js) code with the search functionality

// ...

// Function to filter studios based on search keywords
function filterStudiosBySearch() {
  const searchQuery = document
    .getElementById("search-input")
    .value.toLowerCase()
    .trim();

  // Filter studios based on the search query
  const filteredStudios = studios.filter((studio) => {
    // You can customize this logic based on your data structure
    return (
      studio.name.toLowerCase().includes(searchQuery) ||
      studio.location.toLowerCase().includes(searchQuery) ||
      studio.facilities.some((facility) =>
        facility.toLowerCase().includes(searchQuery)
      )
    );
  });

  // Update the studio listings with the filtered results
  updateStudioListings(filteredStudios);
}

// Attach event listener to the search button
document
  .getElementById("search-button")
  .addEventListener("click", filterStudiosBySearch);

// Enable search on pressing Enter key in the search input field
document
  .getElementById("search-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      filterStudiosBySearch();
    }
  });

// ...
