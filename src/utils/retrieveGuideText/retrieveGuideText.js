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
                return 'My friend raccoon has gender disphoria!'
            case 'octopus': 
                return 'What\'s your gender identity?'
            case 'llama': 
                return 'What\'s your gender expression?'
            default:
                return `My friend ${cardAnimal} identifies as ${cardTitle}.`
        }
    }
}
