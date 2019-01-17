var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // Improve working with components
    alias: {
      // Greeter: path.resolve(__dirname, 'public/components/Greeter.js')
    },
    // The typw of files we are going to use
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    //LOADERS
    //Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
    rules: [
      {
        // Sets the expected files --> End up with js|jsx
        test: /\.(js|jsx)$/,
        // Exclude those folders
        exclude: /(node_modules|bower_components)/,
        // Use this loader and its options
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }]
      }
    ]
  }
};
