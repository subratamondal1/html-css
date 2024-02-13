const path = require("path");

module.exports = {
    // entry point of our app
    entry: "./app/index.js",

    // loaders give webpack the ability to process more than just .js and .json files
    // loaders are transformations to run our code
    rules: [ 
        {
            test: /\.svg$/,
            use: "svg-inline-loader"
        },
        {
            test: /\.css$/,
            use: ["style-loader","css-loader"]
        },
        {
            test: /\.js$/,
            use: "babel-loader"
        },

    ], 

    // Location to put the bundle that Webpack creates
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "index_bundle.js",
    },
    
};

