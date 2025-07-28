import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import inline from "lume/plugins/inline.ts";
import nano from "npm:cssnano";

const site = lume({
  src: "./src",
  emptyDest: false,
});

site.remoteFile(
  "assets/js/vendor/chart.js",
  "https://unpkg.com/chart.js@4.5.0/dist/chart.umd.min.js",
);

site.use(esbuild({
  options: {
    bundle: false,
  },
}));
site.use(terser());
site.use(tailwindcss());
site.use(postcss());
site.use(inline({
  copyAttributes: [
    /^data-/,
    /^aria-/,
  ],
}));

site.add("/assets");

site.hooks.addPostcssPlugin(nano);

site.filter(
  "formatNumber",
  (number: number) => new Intl.NumberFormat().format(number),
);

export default site;
