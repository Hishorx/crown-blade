import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites from https://<user>.github.io/<repo-name>/,
// so production builds need that sub-path as the base.
//
// - In GitHub Actions, BASE_PATH is set automatically from the repository name
//   (see .github/workflows/deploy.yml), so renaming the repo just works.
// - For a local production build, the fallback below is used. Change it if your
//   repository has a different name.
// - Using a custom domain or a <user>.github.io repo? Set BASE_PATH to "/".
const REPO_BASE_FALLBACK = '/crown-and-blade-barbers/'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? process.env.BASE_PATH || REPO_BASE_FALLBACK : '/',
}))
