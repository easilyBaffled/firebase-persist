module.exports = {
    env:  {
        // mocha: true,
        browser: true,
        es2021:  true
    },
    extends:       'eslint:recommended',
    globals: {
        Cypress:    true,
        JSON:       true,
        before:     true,
        cy:         true,
        describe:   true,
        document:   true,
        expect:     true,
        global:     true,
        globalThis: true,
        it:         true,
        module: 	   true,
        navigator:  true,
        window:     true
    },
    ignorePatterns: [ 'node_modules/', 'pkg/' ],
    parserOptions:  {
        ecmaFeatures: {
            impliedStrict: true
        },
        ecmaVersion:  12,
        sourceType:   'module'
    },
    plugins:        [ 'import', 'sort-keys-fix' ],
    root:    true,
    rules:          {
        'accessor-pairs':               'off',
        'array-bracket-newline':        [ 1, { multiline: true } ],
        'array-bracket-spacing':        [ 2, 'always' ],
        'arrow-spacing':                [
            2,
            {
                after:  true,
                before: true
            }
        ],
        'block-spacing':                [ 2, 'always' ],
        'brace-style':           'off',
        camelcase:                      'off',
        'comma-dangle':                 [ 2, 'never' ],
        'comma-spacing':                [
            2,
            {
                after:  true,
                before: false
            }
        ],
        'comma-style':                    [ 2, 'last' ],
        'computed-property-spacing':      [ 1, 'always' ],
        'constructor-super':              2,
        curly:                            [ 1, 'multi-or-nest' ],
        'dot-location':                   [ 2, 'property' ],
        'eol-last':                       2,
        eqeqeq:                           [ 0, 'allow-null' ],
        'func-call-spacing':              [ 2, 'never' ],
        'function-call-argument-newline': [ 'error', 'consistent' ],
        'generator-star-spacing':         [
            2,
            {
                after:  false,
                before: true
            }
        ],
        'guard-for-in':                   1,
        'handle-callback-err':            [ 2, '^(err|error)$' ],
        'import/order':                 [ 'error' ],
        indent:                           [ 1, 4, { SwitchCase: 1 } ],
        'key-spacing':                    [
            2,
            {
                align: 'value',
                mode:  'minimum'
            }
        ],
        'keyword-spacing':                [
            2,
            {
                after:  true,
                before: true
            }
        ],
        'max-depth':                      [ 'error', 5 ],
        'max-len':                        [
            'error',
            {
                code:                   120,
                ignoreComments:         true,
                ignoreTemplateLiterals: true
            }
        ],
        'max-lines':                      [ 'error', 1500 ],
        'max-params':                     [ 'error', 5 ],
        'max-statements':                 [ 'error', 30 ],
        'multiline-ternary':              0,
        'new-cap':                        [
            0,
            {
                capIsNew: false,
                newIsCap: true
            }
        ],
        'new-parens':                     2,
        'no-alert':                       2,
        'no-array-constructor':           2,
        'no-caller':                      2,
        'no-class-assign':                2,
        'no-cond-assign':                 2,
        'no-const-assign':                2,
        'no-control-regex':               2,
        'no-debugger':                    2,
        'no-delete-var':                  2,
        'no-dupe-args':                   2,
        'no-dupe-class-members':          2,
        'no-dupe-keys':                   2,
        'no-duplicate-case':              2,
        'no-duplicate-imports':           2,
        'no-empty-character-class':       2,
        'no-empty-pattern':               2,
        'no-eval':                        2,
        'no-ex-assign':                   2,
        'no-extend-native':               2,
        'no-extra-bind':                  2,
        'no-extra-boolean-cast':          2,
        'no-extra-parens':                'off',
        'no-fallthrough':                 1,
        'no-floating-decimal':            2,
        'no-func-assign':                 2,
        'no-implied-eval':                2,
        'no-inner-declarations':          [ 2, 'functions' ],
        'no-invalid-regexp':              2,
        'no-irregular-whitespace':        'off',
        'no-iterator':                    2,
        'no-label-var':                   2,
        'no-labels':                      [
            2,
            {
                allowLoop:   false,
                allowSwitch: false
            }
        ],
        'no-lone-blocks':                 2,
        'no-mixed-spaces-and-tabs':       2,
        'no-multi-spaces':                'off',
        'no-multi-str':                   2,
        'no-multiple-empty-lines':        [
            2,
            {
                max: 4
            }
        ],
        'no-native-reassign':             2,
        'no-negated-in-lhs':              2,
        'no-new':                         2,
        'no-new-func':                    1,
        'no-new-object':                  2,
        'no-new-require':                 2,
        'no-new-symbol':                  2,
        'no-new-wrappers':                2,
        'no-obj-calls':                   2,
        'no-octal':                       2,
        'no-octal-escape':                2,
        'no-path-concat':                 2,
        'no-proto':                       2,
        'no-redeclare':                   2,
        'no-regex-spaces':                2,
        'no-restricted-syntax':         [
            'error',
            "MemberExpression[object.name=/describe|it/][property.name='only']"
        ],
        'no-return-assign':               'off',
        'no-self-assign':                 2,
        'no-self-compare':                1,
        'no-sequences':                   'off',
        'no-shadow-restricted-names':     2,
        'no-spaced-func':                 2,
        'no-sparse-arrays':               2,
        'no-this-before-super':           2,
        'no-throw-literal':               2,
        'no-trailing-spaces':           'off',
        'no-undef':                       2,
        'no-undef-init':                  2,
        'no-unexpected-multiline':        2,
        'no-unmodified-loop-condition':   2,
        'no-unneeded-ternary':            [
            2,
            {
                defaultAssignment: false
            }
        ],
        'no-unreachable':               2,
        'no-unsafe-finally':            2,
        'no-unused-vars':               [
            2,
            {
                args: 'after-used',
                vars: 'local'
            }
        ],
        'no-useless-call':               2,
        'no-useless-computed-key':       2,
        'no-useless-constructor':        2,
        'no-useless-escape':             2,
        'no-useless-return':             2,
        'no-whitespace-before-property': 2,
        'no-with':                       2,
        'object-curly-spacing':          [ 2, 'always' ],
        'one-var':                       [
            1,
            {
                var: 'always'
            }
        ],
        'operator-linebreak':   [
            2,
            'after',
            {
                overrides: {
                    ':': 'before',
                    '?': 'before'
                }
            }
        ],
        'padded-blocks':                'off',
        'prefer-promise-reject-errors': 2,
        quotes:                         'off',
        'require-jsdoc':                [
            0,
            {
                require: {
                    ClassDeclaration:    true,
                    FunctionDeclaration: true,
                    MethodDefinition:    true
                }
            }
        ],
        semi:                   [ 2, 'always' ],
        'semi-spacing':         [
            2,
            {
                after:  true,
                before: false
            }
        ],
        "sort-keys-fix/sort-keys-fix": [ "error" ],
        'space-before-blocks':         [ 2, 'always' ],
        'space-before-function-paren': [
            2,
            {
                anonymous:  'never',
                asyncArrow: 'always',
                named:      'never'
            }
        ],
        'space-in-parens':             [
            2,
            'always',
            {
                exceptions: [ '{}', '[]' ]
            }
        ],
        'space-infix-ops':             2,
        'space-unary-ops':             [
            2,
            {
                nonwords: false,
                words:    true
            }
        ],
        'spaced-comment':              [
            2,
            'always',
            {
                exceptions: [ '*' ],
                markers:    [
                    'global',
                    'globals',
                    'eslint',
                    'eslint-disable',
                    '*package',
                    '!',
                    ','
                ]
            }
        ],
        'template-curly-spacing':      [ 2, 'never' ],
        'use-isnan':                   2,
        'valid-typeof':                2,
        'wrap-iife':                   [ 2, 'any' ],
        'yield-star-spacing':          [ 2, 'before' ],
        yoda:                          [ 2, 'never' ]
        // "react/jsx-max-props-per-line": ["error", { maximum: 2, when: "always" }]
    }
};
