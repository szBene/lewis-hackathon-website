// toggles navbar items when hamburger icon is clicked
document.getElementById("hamburger").addEventListener("click", function (e) {
	var navItems = document.getElementById("nav-items");
	var navbar = document.getElementById("navbar");

	// Toggle the visibility of the menu items
	navItems.classList.toggle("show");

	// Toggle the expansion of the navbar
	navbar.classList.toggle("expand");

	// Stop the event from propagating to the document click listener
	e.stopPropagation();
});

// Close the navbar if the user clicks outside of it
document.addEventListener("click", function (e) {
	var navItems = document.getElementById("nav-items");
	var navbar = document.getElementById("navbar");

	// Check if the navbar is expanded and if the click is outside the navbar
	if (navbar.classList.contains("expand") && !navbar.contains(e.target)) {
		// Close the navbar
		navItems.classList.remove("show");
		navbar.classList.remove("expand");
	}
});
