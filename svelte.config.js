import adapter from '@catdadcode/svelte-adapter-bun'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),
  kit: {
    adapter: adapter()
  },
  vitePlugin: {
    inspector: false
  },
  onwarn: (warning, handler) => {
    if (warning.filename.includes('svelte-json-tree')) {
      return
    }
    handler(warning)
  }
}

export default config
