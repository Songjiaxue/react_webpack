// const flexbugs = require("postcss-flexbugs-fixes");

module.exports = {
  "plugins": {
    // flexbugs,
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      "browsers": [
        "ie >= 9",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 7",
        "opera >= 23",
        "android >= 4.0", 
        "ios >= 5.0"
      ]
    }
  }
}