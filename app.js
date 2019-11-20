// Pick and choose
const { isSafariiOS } = require('./entities/context')
const player = require('./entities/player')

const app = () => {
    player(isSafariiOS())
    console.log("done.")
}

console.log(require('./context-stub'))
app()

