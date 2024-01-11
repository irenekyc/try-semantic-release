module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Place your rules here
    "scope-enum": [2, "always", ["child-1", "child-2", "all"]], // error if scope is given but not in provided list,
    'scope-empty': [2, 'never']
  },
};
