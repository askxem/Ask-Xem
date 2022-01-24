import fetchExamples from "../../services/pronouns.js";

/**
 * Function has asynchrounous features - must be treated like a promise.
 * @param {string} cardCategory should come from backend.
 * @param {string} cardAnimal should come from backend.
 * @param {string} cardtitle should come from backend.
 * @returns the appropriate text for the guide's text box.
 */
export default async function retrieveGuideText(cardCategory, cardAnimal, cardTitle) {

    if(cardCategory === 'pronoun'){
        return await fetchExamples(cardTitle);
    } else {
        switch(cardAnimal) {
            case 'rat': 
                return 'My friend rat has been deadnamed. We try not to deadname our friends!'
            case 'raccoon': 
                return 'I\'m so glad my friend raccoon has found gender congruence. They feel happy that the way they\'re seen and named matches how they feel.'
            case 'octopus': 
                return 'What\'s your gender identity? Feel free to reflect in your journal!'
            case 'llama': 
                return 'How do you express your gender?'
            default:
                return `My friend ${cardAnimal} identifies as ${cardTitle}.`
        }
    }
}
