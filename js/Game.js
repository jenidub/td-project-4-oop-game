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
            if(this.checkForWin()) {
                this.gameOver()
            }
        } else {
            console.log("no match")
            guess.classList.add("wrong") //mark guess as wrong
            this.removeLife()
        }
    }

    removeLife() {
        const lostHeart = document.querySelectorAll(".tries img")[this.missed]
        console.log(lostHeart)
        lostHeart.src = "../images/lostHeart.png"
        this.missed += 1  //increment -- number of lives
        console.log(this.missed)
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    checkForWin() {
        console.log("did you win?")
        return document.querySelectorAll(".hide").length === 0
    }

    gameOver() {
        console.log("game over! bummer...")
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
