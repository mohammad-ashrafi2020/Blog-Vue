const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
                'balm-ui-css': 'balm-ui/dist/balm-ui.css'
            }
        }
    }
});