/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Create a new Game instance from Game class in Game.js
let newGame;

// Start Game Button Event Listener
// When the button is clicked, reset the game board and initiate the new game functionality
const startButton = document.querySelector("#btn__reset")
startButton.addEventListener("click", () => {
    newGame = new Game()
    // Reset the game board
    // [1] Reset the <ul> element to be empty
    const phraseDiv = document.querySelector("#phrase")
    phraseDiv.innerHTML = `<ul></ul>`
    
    // [2] Reset the class list for each keyboard element to only have the "key" class
    const keyboardButtons = document.querySelectorAll(".key")
    keyboardButtons.forEach(button => {
        button.className = ""
        button.classList.add("key")
    })

    // [3] Reset the hearts so that all 5 icons are live
    const heartIcons = document.querySelectorAll(".tries img")
    heartIcons.forEach(icon => icon.src = "../images/liveHeart.png")

    // Start the new game
    newGame.startGame()
})

// Keyboard Button Event Listener
// When a keyboard button is clicked, fire the handleInteraction method from the Game.js class
const keyboardArea = document.querySelector("#qwerty")
keyboardArea.addEventListener("click", (event) => {
    // Make sure the game is only played when a user clicks the button element
    // (exclude the space around it)
    if (event.target.tagName === "BUTTON") {
        newGame.handleInteraction(event.target)
    }
})
