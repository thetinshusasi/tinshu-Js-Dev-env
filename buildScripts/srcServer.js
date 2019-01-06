import express from 'express';
import path from 'path';
import open from 'open';
import webpack from "webpack";
import config from '../webpack.config.dev';
const  compiler = webpack(config);

const port = 3000;
const app = express();
app.use(require('webpack-dev-middleware')(compiler,{
		 noInfo: false,
		publicPath: config.output.publicPath
}));
app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
