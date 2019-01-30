module.exports = {
  "env": {
    browser: true,
    node: true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "globals": {
    "_": true,
    "moment": true,
    "Get": true,
    "Post": true,
  }, // 全局变量
  "rules": {
    "linebreak-style": [0,"error", "windows"], // Expected linebreaks to be 'LF' but found 'CRLF'.
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }], // JSX not allowed in files with extension '.js'
    'jsx-a11y/click-events-have-key-events': 0, // Visible, non-interactive elements with click handlers must have at least one keyboard listener.
    'jsx-a11y/no-static-element-interactions':0, // Static HTML elements with event handlers require a role.
    'jsx-a11y/anchor-is-valid': 0, // Anchor used as a button. Anchors are primarily expected to navigate.
    'react/prop-types':0, // 'history' is missing in props validation
    'react/jsx-one-expression-per-line':0, // must be placed on a new line
    'no-console': 0, // Unexpected console statement
    'import/prefer-default-export': '0', // Prefer default export
    'arrow-parens': 0, // Expected parentheses around arrow function argument having a body with curly braces.
    'arrow-body-style': 0, // 
    'array-callback-return': 0,
    'no-shadow': 0,
    'consistent-return': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
  },
}