import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

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
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  ]
};