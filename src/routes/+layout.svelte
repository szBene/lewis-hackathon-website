<script>
	import '$lib/style/app.css';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar></Navbar>

<section class="main">
	{@render children()}
</section>

<Footer></Footer>
