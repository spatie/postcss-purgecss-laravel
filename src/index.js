const createConfig = require("./src/createConfig");

module.exports = (config) => require("@fullhuman/postcss-purgecss")(createConfig(config));
