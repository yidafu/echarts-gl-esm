import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

export default {
  input: './src/export/all.js',
  output: [
    {
      file: 'esm/echarts.js',
      format: 'es'
    }
  ],
  plugins: [
    nodeResolve({
      browser: true,
    })
  ]
};