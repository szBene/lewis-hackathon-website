// toggles navbar items when hamburger icon is clicked
document.getElementById("hamburger").addEventListener("click", function () {
	var navItems = document.getElementById("nav-items");
	var navbar = document.getElementById("navbar");

	// Toggle the visibility of the menu items
	navItems.classList.toggle("show");

	// Toggle the expansion of the navbar
	navbar.classList.toggle("expand");
});