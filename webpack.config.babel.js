import {join} from 'path'

const include = join(__dirname, 'src')

export default {
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'npmPackageExample',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', include},
            {test: /\.json$/, 'loader': 'json', include},
        ]
    }
}