const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
	library: '@yearn/yearn-web-lib',
	libraryTarget: 'umd',
	globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/, // If you are using TypeScript: /\\.tsx?$/
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', 'js']
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    }
  }
}