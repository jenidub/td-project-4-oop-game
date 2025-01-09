/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let phrase1 = new Phrase("wicked")
let phrase2 = new Phrase("shogun")
let phrase3 = new Phrase("snapped")
let phrase4 = new Phrase("madison faye")
let phrase5 = new Phrase("alexa riley")
let newGame = new Game(0, [phrase1, phrase2, phrase3, phrase4, phrase5], null)

const startButton = document.querySelector("#btn__reset")
startButton.addEventListener("click", () => {
    // reset the game board Step 4 of the instructions
    newGame.startGame()
})

const keyboardArea = document.querySelector("#qwerty")
keyboardArea.addEventListener("click", (event) => {
    console.log(event)
    if (event.target.tagName === "BUTTON") {
        newGame.handleInteraction(event.target)
    }
})
