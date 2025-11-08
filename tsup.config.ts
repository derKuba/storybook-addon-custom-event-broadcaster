import { defineConfig, type Options } from 'tsup';

const NODE_TARGET = 'node20.19'; // Minimum Node version supported by Storybook 10

export default defineConfig(() => {
  const commonConfig: Options = {
    clean: true,
    format: ['esm'],
    treeshake: true,
    splitting: true,
    // Externalize Storybook packages - they're provided by the host app
    external: [
      'react',
      'react-dom',
      'storybook',
      '@storybook/icons',
      '@storybook/components',
      '@storybook/manager-api',
      '@storybook/theming',
    ],
  };

  const configs: Options[] = [];

  // Manager entries - loaded into Storybook's manager UI
  configs.push({
    ...commonConfig,
    entry: ['src/manager.tsx'],
    platform: 'browser',
    target: 'esnext',
    dts: false, // No types needed for manager entries
  });

  // Preview entries - loaded into the preview iframe
  configs.push({
    ...commonConfig,
    entry: ['src/preview.ts', 'src/index.ts'],
    platform: 'browser',
    target: 'esnext',
    dts: true, // Generate types for preview entries
  });

  return configs;
});
