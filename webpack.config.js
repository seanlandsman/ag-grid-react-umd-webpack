module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'ag-grid-react': 'AgGridReact',
        'ag-grid-community': 'agGrid',
        "prop-types":"PropTypes"
    }
}
