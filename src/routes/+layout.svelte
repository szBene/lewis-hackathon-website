<script>
	import { page } from '$app/state';

	import '$lib/style/app.css';
	import Footer from '$lib/ui/Footer.svelte';
	import Navbar from '$lib/ui/Navbar.svelte';

	let { children } = $props();

	const navItems = [
		{ title: 'Learn More', path: '/learnmore', description: 'Learn more about our Hackathon' },
		{ title: 'Rules', path: '/rules', description: 'Read the rules of the Hackathon' },
		{ title: 'Theme', path: '/theme', description: 'See the theme of the Hackathon' },
		// {
		// 	title: 'Sign Up',
		// 	path: 'https://forms.gle/sDpNYnAcsryDDShx8',
		// 	description: 'Sign Up for the Hackathon'
		// },
		// {
		// 	title: 'Submit',
		// 	path: 'https://forms.gle/9bA1BEmaV7VvrZ2z8',
		// 	description: 'Submit your Hackathon projects'
		// },
		{ title: 'Results', path: '/results', description: 'See the results of our Hackathon' }
	];

	function getCurrentTitle() {
		let title = 'Hackathon with Lewis';
		navItems.forEach((navItem) => {
			if (navItem.path === page.url.pathname) {
				title = navItem.title;
			}
		});
		return title;
	}

	function getCurrentDescription() {
		let description = 'Hackathon with Lewis';
		navItems.forEach((navItem) => {
			if (navItem.path === page.url.pathname) {
				description = navItem.description;
			}
		});
		return description;
	}
</script>

<svelte:head>
	<title>{getCurrentTitle()}</title>
	<meta property="og:title" content={getCurrentTitle()} />
	<meta property="og:description" content={getCurrentDescription()} />
	<meta property="og:url" content={page.url.pathname} />
</svelte:head>

<section class="main">
	<Navbar navitems={navItems}></Navbar>

	<div class="slot-container">
		{@render children()}
	</div>

	<Footer></Footer>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		flex-direction: column;
		min-height: 100vh;
		padding-top: 5rem;
		background: radial-gradient(in lch, var(--blue-10), var(--dark-grey)) !important;
	}
	.slot-container {
		flex: 1;
		padding: auto 0;
		min-height: 100%;
	}
	@media (max-width: 60rem) {
		section {
			padding-top: 6rem;
		}
		.slot-container {
			padding: auto 0;
		}
	}
</style>
