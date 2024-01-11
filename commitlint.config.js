module.exports = {
  extends: ["@commitlint/config-conventional"],

  scope: {
    required: true, // 'scope-empty': [2, 'never']
    allowed: ["a", "b"], // 'scope-enum': [2, 'always', ['a', 'b']]; specify [0] for allowed: ["*"]
    validate: false, // 'scope-enum': [0], 'scope-empty': [0]
    multiple: false,
  },
};
