module.exports = function makeFullscreenBehavior() {
    return function fullscreenBehavior(isSafariiOS) {
        if (isSafariiOS) {
            console.log('Fullscreen specific to iOS')
        } else {
            console.log('Default fullscreen method')
        }
    }
}