<script lang="ts">
  import Signup from './lib/forms/Signup/Signup.svelte'
</script>

<main>
	<div>
		<Signup></Signup>

	</div>
</main>

<style lang="scss">
	@use 'utils' as util;

	:global(body) {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
		font-size: 1rem;
	}

	div {
		max-width: util.remConverter(800px);
		padding: 3rem;

		@include util.breakpoint("tablet-portrait-up") {
			padding: 0;
		}
	}

</style>