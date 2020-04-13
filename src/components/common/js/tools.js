var tools = {
    /**
     * [根据url key 获取 value]
     * @param {String} name key
     */
    getUrlKey: function(name) {
        // eslint-disable-next-line no-return-assign
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    },
    /**
     * [ 微信nickName截取 ]
     * @param {String} code 微信名
     */
    transSpliceCode: function(code) {
        // eslint-disable-next-line no-return-assign
        return (code = code
            ? code.replace(
                /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,
                ''
            )
            : '')
    },
    /**
     * @param {Number} number 据顶部距离
     * @param {Number} time 滚动的时间ms
     */
    ScrollTop: function(number = 0, time) {
        if (!time) {
            document.body.scrollTop = document.documentElement.scrollTop = number
            return number
        }
        const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
        let spacingInex = time / spacingTime // 计算循环的次数
        let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
        let everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
        let scrollTimer = setInterval(() => {
            if (spacingInex > 0) {
                spacingInex--
                this.ScrollTop((nowTop += everTop))
            } else {
                clearInterval(scrollTimer) // 清除计时器
            }
        }, spacingTime)
    },
    /**
     * [ 判断用户是用微信登录还是浏览器登录 ]
     * @return {Boolean} true微信
     */
    weixinaccess: function() {
        var ua = navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true
        } else {
            return false
        }
    },
}
export default tools
