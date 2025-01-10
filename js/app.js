/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let phrase1 = new Phrase("wicked")
let phrase2 = new Phrase("shogun")
let phrase3 = new Phrase("house of dragons")
let phrase4 = new Phrase("abbott elementary")
let phrase5 = new Phrase("lion king")

let newGame = new Game(0, [phrase1, phrase2, phrase3, phrase4, phrase5], null)

const startButton = document.querySelector("#btn__reset")
startButton.addEventListener("click", () => {
    // reset the game board Step 4 of the instructions
    const phraseDiv = document.querySelector("#phrase")
    phraseDiv.innerHTML = `<ul></ul>`
    
    const keyboardButtons = document.querySelectorAll(".key")
    keyboardButtons.forEach(button => {
        let button = keyboardButtons[i]
        button.className = ""
        button.classList.add("key")
    })

    const heartIcons = document.querySelectorAll(".tries img")
    heartIcons.forEach(icon => {
        icon.src = "../images/liveHeart.png"
    })

    newGame.startGame()
})

const keyboardArea = document.querySelector("#qwerty")
keyboardArea.addEventListener("click", (event) => {
    console.log(event)
    if (event.target.tagName === "BUTTON") {
        newGame.handleInteraction(event.target)
    }
})
