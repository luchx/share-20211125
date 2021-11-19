module.exports = {
  plugins: {
    "postcss-import": {},
    // https://github.com/csstools/postcss-preset-env/blob/main/src/lib/plugins-by-id.js#L36
    // https://postcss.docschina.org/doc/plugins.html
    "postcss-preset-env": {
      stage: 0,
      features: {}
    },
  },
};
