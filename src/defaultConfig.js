module.exports = {
    content: [
        "app/**/*.php",
        "resources/**/*.html",
        "resources/**/*.js",
        "resources/**/*.jsx",
        "resources/**/*.ts",
        "resources/**/*.tsx",
        "resources/**/*.php",
        "resources/**/*.vue",
        "resources/**/*.twig",
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
    safelist: {
        greedy: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
    },
};
