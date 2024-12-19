<script>
	import '$lib/style/app.css';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Reactive variables to manage state
	let isExpanded = false;

	// Handle click outside to close the navbar
	let navbar;
	const handleClickOutside = (event) => {
		if (isExpanded && navbar && !navbar.contains(event.target)) {
			isExpanded = false;
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	function toggleNavbar(e) {
		isExpanded = !isExpanded;
		e.stopPropagation();
	}
</script>

<nav bind:this={navbar} class="navbar {isExpanded ? 'expand' : ''}" id="navbar">
	<div class="title-group">
		<a class="nav-title" href="/">
			<h1 class="title1 rubik fs-40 text-center font-semibold text-white">HACKATHON</h1>
			<h2 class="title2 rubik fs-30 text-center font-light text-white">with Lewis</h2>
		</a>
		<button class="hamburger" on:click={toggleNavbar} id="hamburger" aria-label="hamburger">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
	<div class="nav-items {isExpanded ? 'show' : ''}" id="nav-items">
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
