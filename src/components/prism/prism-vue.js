// prism-vue.js
import Prism from "prismjs";

Prism.languages.vue = Prism.languages.extend('markup', {});

Prism.languages.insertBefore('vue', 'tag', {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript,
        alias: 'language-javascript',
    },
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: true,
        inside: Prism.languages.css,
        alias: 'language-css',
    },
});