const makeIsSafariiOS  = require("./ios/ios-safari")
const makeIsChromeIos  = require("./ios/ios-chrome")
const makeIsChromeAndroid  = require("./android/chrome-android")

const context = require('../../context-stub')

const isSafariiOS = makeIsSafariiOS(context)
const isChromeIos = makeIsChromeIos(context)
const isChromeAndroid = makeIsChromeAndroid(context)

const contextService = {
    isSafariiOS,
    isChromeIos,
    isChromeAndroid
}

module.exports = contextService