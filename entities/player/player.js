module.exports = function makePlayer(fullscreenBehavior) {
    return function player(isSafariiOS) {
        if (isSafariiOS) {
            console.log('I can play !!')
        } else {
            console.log('I cannot play :(')
        }
        console.log("Here is my full screen behavior for this context: ")
        fullscreenBehavior(isSafariiOS)
    }
}