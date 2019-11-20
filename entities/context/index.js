const makeIsSafariiOS  = require("./ios/ios-safari")
const makeIsChromeIos  = require("./ios/ios-chrome")
const makeIsChromeAndroid  = require("./android/chrome-android")


// Imagine that can be imported here. 
const context = {isIos : true, isChrome: true}

const isSafariiOS = makeIsSafariiOS(context)
const isChromeIos = makeIsChromeIos(context)
const isChromeAndroid = makeIsChromeAndroid(context)

const contextService = {
    isSafariiOS,
    isChromeIos,
    isChromeAndroid
}

module.exports = contextService