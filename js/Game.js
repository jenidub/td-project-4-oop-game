/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// import Phrase from "./Phrase.js";

class Game {
    constructor(missed = 0, phrases = [], activePhrase = "") {
        this.missed = missed
        this.phrases = phrases
        this.activePhrase = activePhrase
    }

    startGame() {
        const overlayDiv = document.querySelector("#overlay")
        overlayDiv.style.display = "none"
        this.activePhrase = this.getRandomPhrase()
        console.log(this.activePhrase.phrase)
        this.activePhrase.addPhrasetoDisplay()
    }

    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomIndex]
    }

    // handleInteraction() {}

    // removeLife() {}

    // checkForWin() {}

    // gameOver() {}
}

let phrase1 = new Phrase("wicked")
let phrase2 = new Phrase("shogun")
let phrase3 = new Phrase("snapped")
let phrase4 = new Phrase("madison faye")
let phrase5 = new Phrase("alexa riley")

let newGame = new Game(0, [phrase1, phrase2, phrase3, phrase4, phrase5], null)
newGame.startGame()
