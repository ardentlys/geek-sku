// prism-vue.js
import Prism from "prismjs";

Prism.languages.shell = Prism.languages.extend('clike', {
    function: {
        pattern: /\b(npm|install|yarn|add|npx)\b/,
        alias: 'keyword'
    },
    comment: {
        pattern: /#.*/,
        greedy: true
    },
    operator: {
        pattern: /\b(?!-)\b/,
    }
});



