import Game from "./class.game"
document.addEventListener('DOMContentLoaded', () => {
    const newGame = new Game(document.querySelector('.hole-game'))
    newGame.createGame()
    newGame.setGoblin()
    setInterval(() => {
        newGame.moveGoblin()
    }, 1000)
})