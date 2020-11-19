# Setting Up VScode, ESlint and Prettier

---

Just setting up a better environment for code.

## 1. Basic Setting

---

* Just search for ESLint in VScode extensions and install it,

* You still need to install the ESLInt library using the package manager, use `npm install eslint -g`  to install globally, then run `eslint --init` in the terminal, then follow the instructions.

* use this [instructions], can also install it locally

* For the style guide I selected the google one, here is one generally accepted style sample I found online, is it the one generally used??

my .eslintrc.json settings,

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "google"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
      "linebreak-style": 0,
      "require-jsdoc": 0,
      "no-throw-literal": 0
    }
}
```

The rules are optional.., I used it to,  reset the line ending styles (`lf and crlf`), to disable the JSDoc prompt, to enable strings as thrown errors.., one can add many more rules according to the need just google it and add..

and my general VSCode settings (settings.json) for JS.

```json
"[javascript]": {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.detectIndentation": false,
      "editor.tabSize": 2,
      "editor.rulers": [
        {
            "column": 79,
            "color": "#50595f5b"
        },
       ],
    },
```

That sets eslint auto correct on save, indentation to 2 and a visible line at 79 character limit.

## Enhancing further

---

* Install additional packages,

  ```bash
  npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier
  ```

* If you need Airbnb style guide use, the npx from [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb),
`npx install-peerdeps --dev eslint-config-airbnb`

* But for basic Its only needed the basic style "airbnb-base", that can be installed with `eslint --init` and choosing the airbnb style with browser.

* In the `.prettierrc`, add the prettier rules like,
  `"singleQuote": true`

* The ESlint config file is created when you installed it globally
* Customise the VSCode settings, add dependencies and the `.eslintrc` wrt to the styles given in the `.jsonc` files,
* The prettier now installed as a eslint plugin, so the prettier installed in VScode not gets used.
