module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0,
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'index'
      ]
    }]
  }
}
