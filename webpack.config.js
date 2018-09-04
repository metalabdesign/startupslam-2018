import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import {loader} from 'webpack-partial';

const babelConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '.babelrc')),
);

const configure = loader({
  loader: 'babel-loader',
  include: path.join(__dirname, 'src'),
  test: /\.js$/,
  options: {
    ...babelConfig,
    presets: babelConfig.presets.map((entry) => {
      const [name, config] = Array.isArray(entry) ? entry : [entry, {}];
      if (name === '@babel/preset-env') {
        return [
          name,
          {
            ...config,
            modules: false,
            useBuiltIns: 'usage',
            ignoreBrowserslistConfig: false,
            targets: undefined,
            include: [...(config.include || []), 'proposal-object-rest-spread'],
          },
        ];
      }
      return entry;
    }),
    cacheDirectory: true,
  },
});

export default configure({
  entry: './src/client/client.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
});
