<script lang="ts">
//   import background from './assets/background.webp'
  import Counter from './lib/Counter.svelte'
  import Signup from './lib/forms/signup.svelte'
</script>

<main>
	<div class="content">
		<Signup></Signup>
	</div>

  	<!-- <a href="javascript:void(0);">Customer Support</a> -->
</main>

<style>
	:root {
		--primary-color: #2A4EA9;
		--primary-color-light: #5376cc;
	}

	:global(a) {
		color: var(--primary-color);
		font-weight: bolder;
	}


	main {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.content {
		max-width: 24rem;
	}

	/* a {
		position: absolute;
		bottom: 0;
		margin: 0 auto;
		height: 100vh;
	} */
</style>