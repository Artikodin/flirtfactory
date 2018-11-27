//   Differents Configs used:
//   airbnb: https://www.npmjs.com/package/eslint-config-airbnb

//   Differents Plugins used:
//   import: https://www.npmjs.com/package/eslint-plugin-import
//   react: https://www.npmjs.com/package/eslint-plugin-react
//   jsx-a11y: https://www.npmjs.com/package/eslint-plugin-jsx-a11y

module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended"
  ],
  env: {
    es6: true,
    browser: true
  },
  plugins: ["import", "react", "jsx-a11y", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": "error",
    "import/no-cycle": 0,
    "import/no-unresolved": 2,
    "import/order": 0,
    "import/prefer-default-export": 0,
  }
};
