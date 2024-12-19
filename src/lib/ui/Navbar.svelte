<script>
	import '$lib/style/app.css';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let { navitems } = $props();

	let isExpanded = $state(false);

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

<!--
do not change navbar structure
the border gradient effect depends on this specific structure
(see in app.css)

you can add elements if you want
-->
<div class="navbar {isExpanded ? 'expand' : ''}" id="navbar">
	<nav bind:this={navbar}>
		<div class="title-group">
			<a class="nav-title" href="/" onclick={() => (isExpanded = false)}>
				<h1 class="title1 rubik fs-40 white-100 text-center font-semibold">HACKATHON</h1>
				<h2 class="title2 rubik fs-30 white-100 text-center font-light">with Lewis</h2>
			</a>
			<button class="hamburger" onclick={toggleNavbar} id="hamburger" aria-label="hamburger">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
		<div class="nav-items {isExpanded ? 'show' : ''}" id="nav-items">
			{#each navitems as navitem}
				<a
					class="scp white-90 fs-20 text-center underline"
					href={navitem.path}
					onclick={toggleNavbar}>{navitem.title}</a
				>
			{/each}
			<!-- <a class="scp white-90 fs-20 text-center underline" href="/learnmore" onclick={toggleNavbar}
			>Learn More</a
			>
			<a class="scp white-90 fs-20 text-center underline" href="/rules" onclick={toggleNavbar}
				>Rules</a
			>
			<a class="scp white-90 fs-20 text-center underline" href="/theme" onclick={toggleNavbar}
				>Theme</a
			> -->
			<!-- <a
				class="scp white-90 fs-20 text-center underline"
				target="_blank"
				href="https://forms.gle/sDpNYnAcsryDDShx8">Sign Up</a
			 onclick={toggleNavbar}>
			<a
				class="scp white-90 fs-20 text-center font-semibold underline"
				target="_blank"
				href="https://forms.gle/9bA1BEmaV7VvrZ2z8">Submit</a
			 onclick={toggleNavbar}> -->
			<!-- <a class="scp white-90 fs-20 text-center underline" href="/results" onclick={toggleNavbar}
				>Results</a
			> -->
		</div>
	</nav>
</div>
