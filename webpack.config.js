const path=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:"app.bundle.js",
    },
    mode:"development",
    performance:{
        hints:false
      },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    plugins:[
        new HtmlWebpackPlugin({template: 'src/index.html',filename: './index.html'})
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
        ]
      },
    devServer : {
        static: {
            directory: path.join(__dirname, 'dist/'),
        },
        compress: true,
        port: 3000, 
        open: true,
    },
}

