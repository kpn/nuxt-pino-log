module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  env: {
    jest: true
  },
  plugins: [
    'ejs'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
