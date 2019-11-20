const { isSafariiOS } = require('./entities/context')
const player = require('./entities/player')

const app = () => {
    player(isSafariiOS())
    console.log("done.")
}

app()