<script>
	import '$lib/style/app.css'; //navbar css is handled here

	// // toggles navbar items when hamburger icon is clicked
	// document.getElementById('hamburger').addEventListener('click', function (e) {
	// 	var navItems = document.getElementById('nav-items');
	// 	var navbar = document.getElementById('navbar');

	// 	// Toggle the visibility of the menu items
	// 	navItems.classList.toggle('show');

	// 	// Toggle the expansion of the navbar
	// 	navbar.classList.toggle('expand');

	// 	// Stop the event from propagating to the document click listener
	// 	e.stopPropagation();
	// });

	// // Close the navbar if the user clicks outside of it
	// document.addEventListener('click', function (e) {
	// 	var navItems = document.getElementById('nav-items');
	// 	var navbar = document.getElementById('navbar');

	// 	// Check if the navbar is expanded and if the click is outside the navbar
	// 	if (navbar.classList.contains('expand') && !navbar.contains(e.target)) {
	// 		// Close the navbar
	// 		navItems.classList.remove('show');
	// 		navbar.classList.remove('expand');
	// 	}
	// });
</script>

<nav class="navbar" id="navbar">
	<div class="title-group">
		<a class="nav-title" href="/">
			<h1 class="title1 rubik fs-40 text-center font-semibold text-white">HACKATHON</h1>
			<h2 class="title2 rubik fs-30 text-center font-light text-white">with Lewis</h2>
		</a>
		<div class="hamburger" id="hamburger">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
	<div class="nav-items" id="nav-items">
		<a class="scp white-90 fs-20 text-center underline" href="/learnmore">Learn More</a>
		<a class="scp white-90 fs-20 text-center underline" href="/rules">Rules</a>
		<a class="scp white-90 fs-20 text-center underline" href="/theme">Theme</a>
		<a
			class="scp white-90 fs-20 text-center underline"
			target="_blank"
			href="https://forms.gle/sDpNYnAcsryDDShx8">Sign Up</a
		>
		<a
			class="scp white-90 fs-20 text-center font-semibold underline"
			target="_blank"
			href="https://forms.gle/9bA1BEmaV7VvrZ2z8">Submit</a
		>
	</div>
</nav>
