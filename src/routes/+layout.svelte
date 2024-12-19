<script>
	import '$lib/style/app.css';
	import Footer from '$lib/ui/Footer.svelte';
	import Navbar from '$lib/ui/Navbar.svelte';

	let { children } = $props();
</script>

<section class="main">
	<Navbar></Navbar>

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
		background: radial-gradient(#0F1B57, #0A0A0A) !important;
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
