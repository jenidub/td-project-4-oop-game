/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const WIN_MESSAGE = "Congrats! Play again to prove it's not a fluke"
const LOSE_MESSAGE = "Game Over! Try again - Practice makes perfect!"

class Game {
    constructor(missed = 0, phrases = [], activePhrase = "") {
        this.missed = missed
        this.phrases = phrases
        this.activePhrase = activePhrase
    }

    // startGame() method
    // Remove the overlay <div>, select a random phrase from the library, reset the lives to 5
    startGame() {
        const overlayDiv = document.querySelector("#overlay")
        overlayDiv.style.display = "none"
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhrasetoDisplay()
        this.missed = 0
    }

    // getRandomPhrase() method
    // Select a phrase at random from the library for the game board
    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomIndex]
    }

    // handleInteraction() method
    // Given the user's guess from the on-screen keyboard, do one of the following:
    // * If the guess is in the phrase, reveal the letter(s) that match
    // and check to see if all the letters have been revealed => if yes, run gameOver()
    // * If the guess is not in the phrase, mark the key with class "wrong"
    // and run removeLife() method to take away a heart
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

    // removeLife() method
    // When the user guesses incorrectly, change the icon to lostHeart.png, 
    // update this.missed -1 and check if there are any more lives
    removeLife() {
        const heartList = document.querySelectorAll(".tries img")
        const lostHeart = heartList[this.missed]
        lostHeart.src = "../images/lostHeart.png"
        this.missed += 1

        // If there are 5 incorrect guesses, run gameOver()
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    // checkForWin() method [Helper]
    // Helper method for handleInteraction()
    // Returns true/false if all of the letters are revealed
    checkForWin() {
        return document.querySelectorAll(".hide").length === 0
    }

    // gameOver() method
    // When the game is over (either as a win or loss), show the overlay with either the
    // win or loss message with the associated styling
    gameOver() {
        // Show the overlay <div>
        const overlayDiv = document.querySelector("#overlay")
        overlayDiv.style.display = "flex"

        // Select the #game-over-message <div> to show the win/loss message
        const gameTitle = document.querySelector("#game-over-message")

        // If the user lost, update the class to "lose" and show the lost message
        if (this.missed === 5) {
            overlayDiv.classList.remove("start")
            overlayDiv.setAttribute("class", "lose")
            gameTitle.innerText = LOSE_MESSAGE
        } 
        // If the user won, update the class to "win" and show the win message
        else {
            overlayDiv.classList.remove("start")
            overlayDiv.setAttribute("class", "win")
            gameTitle.innerText = WIN_MESSAGE
        }
    }
}
