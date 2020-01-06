import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: './src/lib/index.js',
    output: {
        file: 'dist/FlowCharts.js',
        name: 'FlowCharts',
        format: 'umd'
    },
    plugins: [
        babel({
            //exclude: 'node_modules/**'
        }),
        resolve(),
        uglify()
    ]
};