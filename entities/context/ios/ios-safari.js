module.exports = function makeIsSafariiOS(context) {
    return function isSafariiOS() {
        return context.isIos && context.isSafari
    }
}