<script>
	import '$lib/style/app.css';
</script>

<section class="hero flex max-h-screen w-full flex-col items-center justify-center gap-12 p-4">
	<div class="mt-12 flex flex-col items-center justify-center md:mt-0">
		<h1 class="rubik text-6xl font-bold text-white md:-m-4 md:text-[8rem]">HACKATHON</h1>
		<h3 class="rubik fs-40 text-center font-light text-white">with Lewis</h3>
		<h2 class="rubik white-90 text-center text-3xl font-semibold md:text-6xl">August 9-16, 2024</h2>
	</div>
	<div class="flex flex-col items-center justify-center gap-4">
		<h3 class="scp white-90 text-center text-2xl font-semibold md:text-5xl">
			Functionally Dysfunctional
		</h3>
		<p class="scp white-90 text-center text-lg md:w-3/5 md:text-3xl">
			The Hackathon has been finished it has been a blast! Go check out all the amazing projects
			that were created! We thank everyone who participated and we hope to see you in the next one!
			Happy coding!
		</p>
		<p class="scp white-90 text-center text-lg md:text-3xl">
			Check out the results and learn more about the event!
		</p>
		<div class="buttons align-center">
			<button class="btn-submit">
				<a class="scp white-90 text-lg md:text-3xl" href="/results">Results</a>
			</button>
			<button class="btn-learn-more">
				<a class="scp white-90 text-lg md:text-3xl" href="/learnmore">Learn more</a>
			</button>
		</div>
	</div>
</section>

<style>
	h2 {
		margin-top: 1rem;
	}

	.buttons {
		position: relative;
		max-height: 10dvh;
		margin: 2dvh auto;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		gap: 1.25rem !important;
	}

	.hero {
		vertical-align: middle !important;
		margin: auto 0;
	}
</style>
