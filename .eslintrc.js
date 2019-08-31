module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    align: false,
    "array-type": false,
    "arrow-parens": [true, "ban-single-arg-parens"],
    "import-name": false,
    "interface-name": false,
    "max-classes-per-file": false,
    "max-line-length": [
      true,
      {
        limit: 120,
        ignorePattern: "^import "
      }
    ],
    "no-console": false,
    "no-namespace": false,
    "no-unused-variable": true,
    "no-var-requires": false,
    "object-shorthand-properties-first": false,
    semicolon: false,
    "space-before-function-paren": false,
    "strict-boolean-expressions": false,
    "ter-arrow-parens": false,
    "ter-indent": false,
    "trailing-comma": [true, { multiline: { typeLiterals: "ignore" } }],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case"
    ]
  }
};
