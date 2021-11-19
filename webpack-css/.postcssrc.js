module.exports = {
  plugins: {
    "postcss-import": {},
    // https://github.com/csstools/postcss-preset-env/blob/main/src/lib/plugins-by-id.js#L36
    // https://postcss.docschina.org/doc/plugins.html
    "postcss-preset-env": {
      stage: 0,
      features: {
        // 'all-property': true, // postcssInitial,
        // 'any-link-pseudo-class': true, // postcssPseudoClassAnyLink,
        // 'blank-pseudo-class': true, // postcssBlankPseudo,
        // 'break-properties': true, // postcssPageBreak,
        // 'case-insensitive-attributes': true, // postcssAttributeCaseInsensitive,
        // 'color-functional-notation': true, // postcssColorFunctionalNotation,
        // 'custom-media-queries': true, // postcssCustomMedia,
        // 'custom-properties': true, // postcssCustomProperties,
        // 'custom-selectors': true, // postcssCustomSelectors,
        // 'dir-pseudo-class': true, // postcssDirPseudoClass,
        // 'double-position-gradients': true, // postcssDoublePositionGradients,
        // 'environment-variables': true, // postcssEnvFunction,
        // 'focus-visible-pseudo-class': true, // postcssFocusVisible,
        // 'focus-within-pseudo-class': true, // postcssFocusWithin,
        // 'font-variant-property': true, // postcssFontVariant,
        // 'gap-properties': true, // postcssGapProperties,
        // 'has-pseudo-class': true, // postcssHasPseudo,
        // 'hexadecimal-alpha-notation': true, // postcssColorHexAlpha,
        // 'image-set-function': true, // postcssImageSetPolyfill,
        // 'lab-function': true, // postcssLabFunction,
        // 'logical-properties-and-values': true, // postcssLogical,
        // 'media-query-ranges': true, // postcssMediaMinmax,
        // 'nesting-rules': true, // postcssNesting,
        // 'not-pseudo-class': true, // postcssSelectorNot,
        // 'overflow-property': true, // postcssOverflowShorthand,
        // 'overflow-wrap-property': true, // postcssReplaceOverflowWrap,
        // 'place-properties': true, // postcssPlace,
        // 'prefers-color-scheme-query': true, // postcssPrefersColorScheme,
        // 'rebeccapurple-color': true, // postcssColorRebeccapurple,
        // 'system-ui-font-family': true, // postcssFontFamilySystemUi
      }
    },
  },
};
