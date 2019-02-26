/**
 * 代理配置；
 * 这是一个示例，复制一份命名为 proxy.local.js
 * 写你自己的配置
 */
module.exports = {
    '/api': {
        target: 'http://192.168.50.210:1380',
        changeOrigin: true,
        logLevel: 'debug'
    }
}