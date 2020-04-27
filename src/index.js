const createConfig = require("./createConfig");

module.exports = (config) =>
    require("@fullhuman/postcss-purgecss")(createConfig(config));
