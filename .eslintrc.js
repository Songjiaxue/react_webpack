// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  // extends: [
  //   'eslint:recommended', 
  // ],
  globals: {
    'moment': true,
    '_': true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
  },
  "settings": {
    "import/extensions": [".js", ".jsx"]
  },
  // required to lint *.vue files
  plugins: [
    'react',
    'jsx-a11y',
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'linebreak-style': [0,"error", "windows"],
    'react/prefer-stateless-function': "off",
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off', 
   // 代码风格
   'brace-style': ['error', 'stroustrup'], // 强制在代码块中使用一致的大括号风格
   'comma-dangle': 'off', // 禁止末尾逗号
   'comma-spacing': ['error', {'before': false, 'after': true}], // 强制在逗号后使用一致的空格
   'eol-last': ['error', 'never'], // 禁止文件末尾空行
   'func-call-spacing': ['error', 'never'], // 禁止在函数名和开括号之间有空格
   'implicit-arrow-linebreak': ['error', 'beside'], // 禁止在箭头函数体之前出现换行
   'jsx-quotes': ['error', 'prefer-double'], // 属性用双引号
   'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}], // 对象字面量的键和冒号之间没有空格，冒号与值之间有空格
   'keyword-spacing': 'off', // 关键字周围空格
   'no-trailing-spaces': 'error', // 禁用行尾空格
   'no-whitespace-before-property': 'error', // 禁止在点号周围或对象属性之前的左括号前出现空白
   'semi': ['error', 'always'], // 要求在语句末尾使用分号
   'space-infix-ops': 'error', // 要求中缀操作符周围有空格
   'spaced-comment': ['error', 'always'], // // 或 /* 必须跟随至少一个空白
   'arrow-spacing': 'error', // 箭头前后有空格
   'no-var': 'error', // 阻止 var 的使用，推荐使用 const 或 let
   // 逻辑
   'no-empty': 'error', // 禁止空块语句
   'no-extra-parens': 'error', // 禁止不必要的括号
   'no-extra-semi': 'error', // 禁止不必要的分号
   'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句后出现不可达代码 
   'curly': 'error', // 要求遵循大括号约定 
   'no-empty-function': 'error', // 禁止出现空函数
   
  }
}
