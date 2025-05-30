// @ts-check

import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { publish } from '@tanstack/config/publish'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

await publish({
  packages: [
    {
      name: '@tanstack/angular-form',
      packageDir: 'packages/angular-form',
    },
    {
      name: '@tanstack/form-core',
      packageDir: 'packages/form-core',
    },
    {
      name: '@tanstack/lit-form',
      packageDir: 'packages/lit-form',
    },
    {
      name: '@tanstack/react-form',
      packageDir: 'packages/react-form',
    },
    {
      name: '@tanstack/solid-form',
      packageDir: 'packages/solid-form',
    },
    {
      name: '@tanstack/svelte-form',
      packageDir: 'packages/svelte-form',
    },
    {
      name: '@tanstack/vue-form',
      packageDir: 'packages/vue-form',
    },
  ],
  branchConfigs: {
    main: {
      prerelease: false,
    },
    alpha: {
      prerelease: true,
    },
    beta: {
      prerelease: true,
    },
  },
  rootDir: resolve(__dirname, '..'),
  branch: process.env.BRANCH,
  tag: process.env.TAG,
  ghToken: process.env.GH_TOKEN,
})

process.exit(0)
