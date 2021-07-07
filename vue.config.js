module.exports = {
    lintOnSave: false, //禁用eslint
    configureWebpack: {
        resolve: {
            //别名
            alias: {
                'assets': '@/assets',
                'components': '@/components'
            }
        }
    }
}