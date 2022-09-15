import sveltePreprocess from 'svelte-preprocess'
import * as path from 'path'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  	preprocess: sveltePreprocess({
		scss: {
			includePaths: [ 'src/styles' ]
		}
	})
}
