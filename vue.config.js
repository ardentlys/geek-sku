module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/main.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '多规格带图sku解决方案 | Geek-SKU'; // 在这里设置页面的标题
            return args;
        });
    }
};