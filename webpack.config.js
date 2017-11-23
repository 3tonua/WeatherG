module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-1'],
                plugins: ['transform-decorators-legacy', 'transform-object-rest-spread']
            }
        }]
    }
};