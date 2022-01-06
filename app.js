const { build } = require("esbuild");

// Reduis la taille du fichier donc rapidité de téléchargement du Navigateur.
// build({
//   entryPoints: ["./src/main.js", "./src/style.css"],
//   outdir: "out",
//   bundle: true,
//   minify: true,
//   banner: {
//     js: '//comment',
//     css: '/*comment*/',
//   },
//   sourcemap: true,
// }).catch(() => process.exit(1));
// Sourcemap ?

// Bundle + treeshaking
build({
  entryPoints: ["./src/main.js", "./src/main2.js"],
  outdir: "out",
  bundle: true,
  treeShaking: true, // tree shaking
  splitting: true,
  format: "esm",
}).catch(() => process.exit(1));
