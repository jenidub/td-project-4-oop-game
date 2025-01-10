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
        this.activePhrase.addPhrasetoDisplay()
        this.missed = 0
    }

    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomIndex]
    }

    handleInteraction(guess) {
        if (this.activePhrase.phrase.includes(guess.textContent)) {
            guess.classList.add("chosen")
            this.activePhrase.showMatchedLetter(guess)
            if(this.checkForWin()) {
                this.gameOver()
            }
        } else {
            guess.classList.add("wrong")
            this.removeLife()
        }
    }

    removeLife() {
        const heartList = document.querySelectorAll(".tries img")
        const lostHeart = heartList[this.missed]
        lostHeart.src = "../images/lostHeart.png"
        this.missed += 1  //increment -- number of lives
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    checkForWin() {
        return document.querySelectorAll(".hide").length === 0
    }

    gameOver() {
        const overlayDiv = document.querySelector("#overlay")
        overlayDiv.style.display = "flex"

        const gameTitle = document.querySelector("#game-over-message")

        if (this.missed === 5) {
            overlayDiv.classList.remove("start")
            overlayDiv.setAttribute("class", "lose")
            gameTitle.innerText = "Game Over! Try again - Practice makes perfect!"
        } else {
            overlayDiv.classList.remove("start")
            overlayDiv.setAttribute("class", "win")
            gameTitle.innerText = "Congrats! Play again to prove it's not a fluke"
        }
    }
}
