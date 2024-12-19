<script>
	import '$lib/style/app.css';

	let { children } = $props();
</script>

<section class="main">
	{@render children()}
</section>
