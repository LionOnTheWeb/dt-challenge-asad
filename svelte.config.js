import sveltePreprocess from 'svelte-preprocess'
import nested from 'postcss-nested'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  	preprocess: sveltePreprocess({
		postcss: {
			plugins: [nested()]
		}
	})
}
