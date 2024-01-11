module.exports = { extends: ['@commitlint/config-conventional'] ,
'scope-enum': [2, 'always', ['frontend', 'backend']], // error if scope is given but not in provided listm
"scope": {
    "required": true,               // 'scope-empty': [2, 'never']
    "allowed": ["a", "b"],          // 'scope-enum': [2, 'always', ['a', 'b']]; specify [0] for allowed: ["*"]
    "validate": false,              // 'scope-enum': [0], 'scope-empty': [0]
    "multiple": false        
}
};
