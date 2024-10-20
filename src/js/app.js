import Game from "./class.game"
document.addEventListener('DOMContentLoaded', () => {
    const newGame = new Game(document.querySelector('.hole-game'))
    newGame.setGoblin()
    const newInterval = setInterval(() => {
        newGame.moveGoblin()
    }, 1000)
})