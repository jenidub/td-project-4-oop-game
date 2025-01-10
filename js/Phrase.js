/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // addPhrasetoDisplay() method
    // * Build the <ul> element based on the randomly selected phrase
    // * Check if the user's first guess is in the phrase
    addPhrasetoDisplay() {
        // Select the phrase <div> and <ul> elements to build the list
        const phraseUl = document.querySelector("#phrase ul")
        
        // Iterate through the phrase letters to create the <ul> for display
        let phraseLength = this.phrase.length
        let newLetterElement;
        
        for (let i = 0; i < phraseLength; i++) {
            let char = this.phrase[i]
            newLetterElement = document.createElement("li")

            // Conditional statement to check if the phrase character is a space or a letter
            if (char !== " ") {
                newLetterElement.setAttribute("class", `hide letter ${char}`)
                newLetterElement.innerText = `${char}`
            } else {
                newLetterElement.setAttribute("class", "space")
                newLetterElement.innerText = " "
            }

            //Add the <li> to the <ul>
            phraseUl.appendChild(newLetterElement)
        }

        // Check if the user's guess is in the phrase
        // If true, find the letter(s) elements in the list and 
        // run showMatchedLetter() method to reveal the letters
        if (this.checkLetter()) {
            const letterListItems = document.querySelectorAll(`.${this.guess}`)
            for (let i = 0; i < letterListItems.length; i++) {
                this.showMatchedLetter(letterListItems[i])
            }
        }
    }

    // checkLetter() method [Helper]
    // Helper method for the addPhraseToDisplay() method
    // Returns true/false if the user guess is in the phrase 
    checkLetter(guess) {
        return this.phrase.includes(guess)
    }

    // showMatchedLetter() method [Helper]
    // Helper method for addPhrasetoDisplay() method
    // If the guessed letter is in the phrase, iterate through the letters in the phrase
    // and update the hide/show class properties
    showMatchedLetter(guess) {
        const matchingLetters = document.querySelectorAll(`.${guess.innerText}`)
        if (matchingLetters.length > 0) {
            matchingLetters.forEach(element => {
                element.removeAttribute("hide")
                element.setAttribute("class", "show")
            })
        }
    }
}
