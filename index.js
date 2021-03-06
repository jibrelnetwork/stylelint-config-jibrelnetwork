module.exports = {
  "extends": [
    "stylelint-rscss/config",
    "stylelint-config-standard"
  ],
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "rscss/class-format": [
      true, {
        "component": "^[a-z][a-z-]+[a-z]$",
        "maxDepth": false
      }
    ],
    "at-rule-no-unknown": [
      true, {
        "ignoreAtRules": [
          "if",
          "for",
          "else",
          "warn",
          "each",
          "error",
          "while",
          "debug",
          "mixin",
          "return",
          "extend",
          "at-root",
          "include",
          "content",
          "function"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true, {
        "ignorePseudoClasses": [
          "global"
        ]
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true, {
        "ignorePseudoElements": [
          "global"
        ]
      }
    ],
    "selector-max-universal": 0,
    "selector-nested-pattern": "^(&:|>|&.-|&,)"
  }
}