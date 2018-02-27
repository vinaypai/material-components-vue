const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const root = path.join(__dirname)
const components = path.join(root + '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    button: path.resolve(components + '/button/index.js'),
    card: path.resolve(components + '/card/index.js'),
    checkbox: path.resolve(components + '/checkbox/index.js'),
    chips: path.resolve(components + '/chips/index.js'),
    dialog: path.resolve(components + '/dialog/index.js'),
    drawer: path.resolve(components + '/drawer/index.js'),
    elevation: path.resolve(components + '/elevation/index.js'),
    fab: path.resolve(components + '/fab/index.js'),
    'form-field': path.resolve(components + '/form-field/index.js'),
    'grid-list': path.resolve(components + '/grid-list/index.js'),
    icon: path.resolve(components + '/icon/index.js'),
    'icon-toggle': path.resolve(components + '/icon-toggle/index.js'),
    'layout-grid': path.resolve(components + '/layout-grid/index.js'),
    'linear-progress': path.resolve(components + '/linear-progress/index.js'),
    'line-ripple': path.resolve(components + '/line-ripple/index.js'),
    list: path.resolve(components + '/list/index.js'),
    menu: path.resolve(components + '/menu/index.js'),
    radio: path.resolve(components + '/radio/index.js'),
    ripple: path.resolve(components + '/ripple/index.js'),
    select: path.resolve(components + '/select/index.js'),
    slider: path.resolve(components + '/slider/index.js'),
    snackbar: path.resolve(components + '/snackbar/index.js'),
    switch: path.resolve(components + '/switch/index.js'),
    tabs: path.resolve(components + '/tabs/index.js'),
    textfield: path.resolve(components + '/textfield/index.js'),
    theme: path.resolve(components + '/theme/index.js'),
    toolbar: path.resolve(components + '/toolbar/index.js'),
    typography: path.resolve(components + '/typography/index.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                includePaths: [components, nodeModules]
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [components, path.join(nodeModules, '@material')],
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.vue']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]/mcv-[name].min.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        context: 'components/',
        from: '**/*',
        to: './',
        ignore: [ '*.js', '*.vue' ]
      }
    ])
  ],
  stats: {
    all: false,
    assets: true,
    chunkModules: true,
    chunkOrigins: true,
    errors: true,
    errorDetails: true,
    colors: true
  }
}
