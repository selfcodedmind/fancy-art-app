module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-standard-vue/scss",
    'stylelint-config-recess-order',
  ],
  rules: {
    'scss/at-extend-no-missing-placeholder': null,
    'selector-class-pattern': null,
  },
};
