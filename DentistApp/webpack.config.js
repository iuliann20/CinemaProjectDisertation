var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: __dirname + '/react/',
    entry: './index.js',
    output: {
        path: __dirname + '/wwwroot/dist',
        filename: 'bundle.js'
    },
    mode: 'production',
    performance: { hints: false },
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin(
            {
                filename: '[file].map[query]',
                exclude: ['vendor.js']
            }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: 'bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    __dirname + '/node_modules',
                    __dirname + '/wwwroot/lib'
                ],
                use: ['babel-loader', 'source-map-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]',
                            camelCase: true,
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            actions: __dirname + '/react/actions',
            components: __dirname + '/react/components',
            middlewares: __dirname + '/react/middlewares',
            modals: __dirname + '/react/modals',
            reducers: __dirname + '/react/reducers',
            utils: __dirname + '/react/utils'
        },
        extensions: ['*', '.js', '.jsx', '.scss']
    }
};
