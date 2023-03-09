
[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/support-ukraine.svg?t=1" />](https://supportukrainenow.org)

# `postcss-purgecss` wrapper with sensible defaults for Laravel apps

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Latest Version on NPM](https://img.shields.io/npm/v/postcss-purgecss-laravel.svg?style=flat-square)](https://npmjs.com/package/postcss-purgecss-laravel)
[![npm](https://img.shields.io/npm/dt/postcss-purgecss-laravel.svg?style=flat-square)](https://www.npmjs.com/package/postcss-purgecss-laravel)

A simple wrapper around `postcss-purgecss` with sensible defaults for Laravel apps.

```js
// postcss.config.js

module.exports = {
    plugins: [
        require('postcss-purgecss-laravel')({
            safelist: [/hljs/],
            extend: {
                content: [path.join(__dirname, 'vendor/spatie/menu/**/*.php')],
            },
        });
    ],
};
```

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/postcss-purgecss-laravel.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/postcss-purgecss-laravel)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Installation

You can install the package with yarn or npm:

```bash
yarn add postcss-purgecss-laravel --dev
```

```bash
npm install postcss-purgecss-laravel --save-dev
```

## Usage

Register the PostCSS plugin.

```js
// postcss.config.js

module.exports = {
    plugins: [
        require('postcss-purgecss-laravel')(/* ... */),
    ]
}
```

All options passed to the plugin get passed down to PurgeCSS. Refer to the [PurgeCSS docs](https://purgecss.com/configuration.html#configuration-file) for an overview of the available options.

```js
// postcss.config.js

module.exports = {
    plugins: [
        require('postcss-purgecss-laravel')({
            safelist: [/hljs/],
        }),
    ],
};
```

Options will _override_ the default options this package provides. If you'd rather _extend_ the options, place them in the `extend` option.

```js
// postcss.config.js

module.exports = {
    plugins: [
        require('postcss-purgecss-laravel')({
            extend: {
                safelist: [/hljs/],
            },
        }),
    ],
};
```

In the above example, the `/hljs/` pattern will be _added_ to the `safelist`, instead of overriding the default `safelist` option.

These are the defaults this package provides:

```js
const defaultConfig = {
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
    safelist: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
};
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](https://github.com/spatie/.github/blob/main/CONTRIBUTING.md) for details.

### Security

If you've found a bug regarding security please mail [security@spatie.be](mailto:security@spatie.be) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
