const makeIsSafariiOS  = require("./ios-safari")

// Imagine that can be imported here. 
const context = {isSafari : true, isIos : true}

module.exports = makeIsSafariiOS(context)