/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase, guess) {
        this.phrase = phrase.toLowerCase();
        this.guess = guess
    }

    addPhrasetoDisplay() {
        const phraseDiv = document.querySelector("#phrase")
        const phraseUL = document.createElement("ul")
        let phraseLength = this.phrase.length
        let newLetterElement;

        for (let i = 0; i < phraseLength; i++) {
            let char = this.phrase[i]
            console.log(char)
            newLetterElement = document.createElement("li")

            if (char !== " ") {
                newLetterElement.setAttribute("class", `hide letter ${char}`)
                newLetterElement.innerText = `${char}`
            } else {
                newLetterElement.setAttribute("class", "space")
                newLetterElement.innerText = " "
            }

            console.log(newLetterElement)
            phraseUL.appendChild(newLetterElement)
        }

        phraseDiv.append(phraseUL)

        if (this.checkLetter) {
            const letterLI = document.querySelectorAll(`.${this.guess}`)
            for (let i = 0; i < letterLI.length; i++) {
                this.showMatchedLetter(letterLI[i])
            }
        }
    }

    checkLetter(guess) {
        if (this.phrase.includes(guess)) {
            return true
        }
        return false
    }

    showMatchedLetter(letter) {
        letter.removeAttribute("hide")
        letter.setAttribute("class", "show")
    }
}

