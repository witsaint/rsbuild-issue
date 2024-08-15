import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  output: {
    injectStyles: true,
    sourceMap: {
      js: false
    }
  },
  mode: 'development',
  plugins: [pluginReact(), pluginSass()],
  tools: {
    cssLoader(config) {
      config.modules = {
        mode: 'icss',
        namedExport: false,
      }
    },
  },
});
