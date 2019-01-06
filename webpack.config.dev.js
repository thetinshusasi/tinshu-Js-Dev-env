import path from 'path';

export default {
	debug: true,
	devtool: 'inline-source-map', /// enable sourcemaps
	noInfo: false, /// It will cause information not cluter in the terminal
	entry: [
		path.resolve(__dirname, 'src/index') /// Entry points for our application Eg can be configured for hot reloading
		/// 2) this is index.js and not index.html
	],
	target: 'web', /// Which platform to target such as node , web , eletron( for desktop apps )
	output: { /// where should u create the dev bundle. In actuallity it will create the files in memory
		/// it needs some physical location to simulate this
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [], /// Add plugins such hot reloading , linting , minification
	module: { /// file types we need to handle such as Css , Js . Webpack calls it loaders
		loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	}
}
