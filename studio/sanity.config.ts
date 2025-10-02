import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { markdownSchema } from 'sanity-plugin-markdown'  // ← 追加

export default defineConfig({
  name: 'studio',
  title: 'Astro Sanity Starter',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  basePath: '/',
  plugins: [
    deskTool(),
    visionTool(),
    markdownSchema(), // ← 追加（v6 でもOK）
  ],
  schema: { types: schemaTypes },
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': {}, // 念のため
    },
  },
})