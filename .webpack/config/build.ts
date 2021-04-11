import { Configuration } from 'webpack'
import { entry, module, optimization, output, plugins, resolve } from '../common'
import { WebpackConfig } from '../types'

export default (config: WebpackConfig): Configuration => ({
  entry: entry(),
  mode: 'production',
  module: module(),
  optimization: optimization(),
  output: output(),
  plugins: plugins(config),
  resolve: resolve(),
})
