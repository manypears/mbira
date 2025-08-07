const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // or 'development' if you prefer
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.(glb|gltf)$/,
            use:
            [
                {
                    loader: 'file-loader',
                    options:
                    {
                        outputPath: 'assets/model/'
                    }
                }
            ]
        },
        {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
     
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.wav$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
