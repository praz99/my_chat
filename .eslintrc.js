module.exports = {
  extends: ["eslint-config-airbnb-base", "plugin:prettier/recommended"],

  env: {
    browser: true
  },

  parser: "babel-eslint",

  setting: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: ["frontend", "node_modules"]
          }
        }
      }
    }
  }
};
