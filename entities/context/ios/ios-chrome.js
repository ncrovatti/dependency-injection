module.exports = function makeIsChromeIos(context) {
    return function isChromeIos() {
        return context.isChrome && context.isIos
    }
}