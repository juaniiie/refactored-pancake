module.exports = {
    /*
     * Webpack manages the tree of dependencies
     * It will also combine all the dependencies into one file that we can send over the wire
     * The `output` object defines where this file should live
    */
    output: {
    filename: 'bundle.js',
    },

   /*
   * Sourcemap will be used for debugging
   * It maps the bundle to the source file, so it will enable error tracing 
   */
    devtool: 'sourcemap',

    /*
     * 'babel' loader will Transpile our .js from ES6 to ES5
     * 'raw' loader will import the html as a string
     * 'css' loader will parse the stylesheets
     * 'style' loader will inject stylesheets into the <head> of the index.html
    */
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};