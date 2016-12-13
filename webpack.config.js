var path=require("path");
var webpack=require("webpack");
var htmlWebpackPlugin=require('html-webpack-plugin')
var openBrowserplugin=require('open-browser-webpack-plugin')
var uglifyPlugin=webpack.optimize.UglifyJsPlugin
var extractTextPlugin=require('extract-text-webpack-plugin')
var config={
  entry:path.resolve(__dirname,'./src/index.js'),
  output:{
  	path:path.resolve(__dirname,'dist'),
  	filename:'bundle.[hash].js'
  },
  devServer:{
  	contentBase:'dist',
  	inline:true,
  	port:8080,
  	stats:{
  		color:true
  	}
  },
  module:{
  	loaders:[
       {
       	test:/\.js$/,
       	loader:'babel',
       	exclude:/node_modules/
       },
       {
        test:/\.css$/,
        loader:extractTextPlugin.extract("style","css"),
        include:path.resolve(__dirname,'src')
       }
  	]
  },
  plugins:[
    new htmlWebpackPlugin({
    	title:'搭建',
    	template:'./src/index.html'
    }),
    new openBrowserplugin({
      url:'http://localhost:8080/'
    }),
    new uglifyPlugin({
      compress:false
    }),
    new webpack.BannerPlugin('作者yp'),
    new extractTextPlugin("styles.css")
  ]


}

module.exports=config;

