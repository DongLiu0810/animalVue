/**
 * 代理配置；
 * 这是一个示例，复制一份命名为 proxy.local.js
 * 写你自己的配置
 */
module.exports = {
    '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
            '^/api': ''
        }
        //转发的配置
    }
}