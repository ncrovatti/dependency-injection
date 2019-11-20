module.exports = function makeIsChromeAndroid(context) {
    return function isChromeAndroid() {
        return context.isChrome && context.isAndroid
    }
}