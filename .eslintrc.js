module.exports = {
    extends: ['airbnb', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8, // optional, recommended 6+
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            impliedStrict: true,
            classes: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    globals: {
        __PATH_PREFIX__: true,
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'arrow-body-style': [2, 'as-needed'],
        'no-console': 0,
        'import/prefer-default-export': 0,
        import: 0,
        'space-before-function-parent': 0,
        'react/forbid-prop-types': 0,
        'react/prop-types': [2, { ignore: ['children'] }],
    },
}
