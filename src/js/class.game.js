export default class Game {
    constructor(element) {
        this.element = element
    }

    setGoblin(){
        const allHole = this.element.querySelectorAll('.hole')
        let randomIndex = Math.floor(1 + Math.random() * 16) - 1
        const img = document.createElement('img')
        img.src = require('../images/goblin.png')
        img.alt = 'goblin'
        img.className = 'goblin'
        allHole[randomIndex].append(img)
    }
    moveGoblin(){
        const allHole = this.element.querySelectorAll('.hole')
        let randomIndex = Math.floor(1 + Math.random() * 16) - 1
        const img = this.element.querySelector('.goblin')
        if (allHole[randomIndex].firstChild != null ) {
            randomIndex = Math.floor(1 + Math.random() * 16) - 1
        }
        allHole[randomIndex].append(img)
    }
}
