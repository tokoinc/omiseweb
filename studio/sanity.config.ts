// apps/studio/sanity.config.ts
import 'dotenv/config';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { markdownSchema } from 'sanity-plugin-markdown';
import { schemaTypes } from './schemaTypes';

// 環境変数は「STUDIO系」を優先し、なければ従来名も見る
const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  '';

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.SANITY_DATASET ||
  'production';

// 値が無いと Hosted Studio の deploy が失敗しやすいので明示エラー
if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID (or SANITY_PROJECT_ID). Check apps/studio/.env'
  );
}

export default defineConfig({
  name: 'studio',
  title: 'Astro Sanity Starter',
  projectId,
  dataset,
  basePath: '/', // HostedでもローカルでもOK

  plugins: [deskTool(), visionTool(), markdownSchema()],

  schema: { types: schemaTypes },
});
