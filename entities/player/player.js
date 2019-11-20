module.exports = function makePlayer() {
    return function player(isSafariiOS) {
        if (isSafariiOS) {
            console.log('I can play !!')
        } else {
            console.log('I cannot play :(')
        }
    }
}