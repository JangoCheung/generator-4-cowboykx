const Ex = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const baseConfig = {
  mode: 'production',
  output: {
    path: projectRoot,
  },
  optimization: {
    minimize: false
  },
  cache: true
};

const webConfig = {
  entry: {
    'index': './src/index.tsx'
  },
  output: {
    filename: './dist/[name].js'
  },
  target: 'node',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      },
      {
        test: /\.less|\.css$/,
        loader: Ex.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new Ex('./dist/[name].css'),
  ],
  externals: {
    "antd": "antd",
    "react": "React",
    "react-dom": "ReactDOM",
    "moment": "moment"
  }
};

module.exports = [
  merge(baseConfig, webConfig)
]
