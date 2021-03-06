var path = require('path')
var config = require('./config')
var utils = require('./utils')
// var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')

var projectRoot = [
  path.resolve(__dirname, '../'),
  path.resolve(__dirname, '../../common'),
]

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: config.dev.assetsRoot,
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'common': path.resolve(__dirname, '../../common')
    }
  },
  devtool: 'source-map',
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('[name].[hash:7].[ext]')
        }
      }
    ]
  },

  tslint: {
    configuration: {
        rules: {
          "member-ordering": [true, { "order": [
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "constructor",
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "public-instance-method",
            "protected-instance-method",
            "private-instance-method"
          ]}],
          "switch-default": true,
        // "variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore"],
          "quotemark": [true, "single", "avoid-escape"],
          "one-variable-per-declaration": [true, "ignore-for-loop"],
          "no-consecutive-blank-lines": true,
          "new-parens": true,
          "comment-format": [true, "check-space"],
          "class-name": true,
          "curly": true,
          "eofline": true,
          "forin": true,
          "indent": [true, "spaces", 4],
          "label-position": true,
          "label-undefined": true,
          "max-line-length": [false, 140],
          "no-arg": true,
          // "no-bitwise": true,
          "no-console": [true,
            "debug",
            "info",
            "time",
            "timeEnd",
            "trace"
          ],
          "no-construct": true,
          "no-debugger": true,
          "no-duplicate-key": true,
          "no-duplicate-variable": true,
          "no-eval": true,
          "no-require-imports": true,
          "no-string-literal": false,
          "trailing-comma": true,
          "no-trailing-whitespace": true,
          "no-unused-variable": true,
          "no-unreachable": true,
          "no-use-before-declare": true,
          "one-line": [true,
            "check-open-brace",
            "check-catch",
            "check-else",
            "check-whitespace"
          ],
          "quotemark": [true, "single"],
          "radix": true,
          "semicolon": [true, "always", "ignore-interfaces"],
          "align": [true, "statements"],
          "triple-equals": [true, "allow-null-check"],
          "whitespace": [true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-branch",
            "check-module",
            "check-type"
          ]
        }
    },

    // tslint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: true,

    // tslint does not interrupt the compilation by default
    // if you want any file with tslint errors to fail
    // set failOnHint to true
    failOnHint: true
},
vue: {
    loaders: utils.cssLoaders()
  }
}
