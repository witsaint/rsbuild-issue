import { createRsbuild } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginReact } from '@rsbuild/plugin-react';

const rsbuildConfig ={
    // mode: 'development',
    server: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      port: 3000,
    },
    dev: { progressBar: true, hmr: true },
    output: { sourceMap: { js: false } },
    source: {
      entry: { '/testing': ['./src/index'] },
      transformImport: [      ],
    },
    html: {
      title: '',
      favicon: '',
      tags: [],
      template: './index.html',
      templateParameters: {
        wglobal: JSON.stringify({
          moduleName: '/test',
          virtualPath: '/uep/web',
          hostUrl: 'http:dev.flatjs.com',
          apiBase: 'http:dev.flatjs.com/api',
        }),
        mountId: 'root',
      },
    },
    plugins: [pluginReact(), pluginSass()],
    tools: { rspack: { plugins: [], module: {} } },
  }

  const rsbuildInstance = await createRsbuild({
    rsbuildConfig: rsbuildConfig,
  })

  console.log('------before', process.env.NODE_ENV);
  
  // 创建 Rsbuild DevServer 实例
  const { server } = await rsbuildInstance.startDevServer()

  console.log('------after', process.env.NODE_ENV);

  process.on('exit', () => {
    server.close()

  })