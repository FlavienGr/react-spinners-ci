import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";

const dist = "dist";
const bundle = "bundle";
const production = !process.env.ROLLUP_WATCH;
module.exports = {
  input: "src/index.js",
  external: ["react"],
  output: [
    {
      name: "ReactCssSpinners",
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      },
      format: "umd"
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: "esm"
    },
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: "cjs"
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    }),
    production && terser(),
    string({
      // Required to be specified
      include: "**/*.css"
    })
  ]
};
