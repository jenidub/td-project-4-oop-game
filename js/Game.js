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

    handleInteraction(guess) {
        console.log("guess: ", guess)
        console.log("key name: ", guess.textContent)

        if (this.activePhrase.phrase.includes(guess.textContent)) {
            console.log("it's a match")
            guess.classList.add("chosen") //disable the onscreen key
            this.activePhrase.showMatchedLetter(guess)
            let gameStatus = this.checkForWin()
            if (gameStatus) {
                this.gameOver()
            }
            // const phraseStatus = document.querySelectorAll("")
        } else {
            console.log("no match")
            guess.classList.add("wrong") //mark guess as wrong
            this.removeLife()
        }
    }

    removeLife() {
        const lostHeart = document.querySelectorAll(".tries")[0]
        lostHeart.src = "../images/lostHeart.png"
        this.missed += 1  //increment -- number of lives
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    checkForWin() {
        console.log("did you win?")
    }

    gameOver() {
        console.log("game over! bummer...")
    }
}
