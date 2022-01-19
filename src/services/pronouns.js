import fetch from "cross-fetch";

/**
 * Function has asynchrounous features - must be treated like a promise.
 * @param {string} pronoun 
 * @returns Examples from the pronouns API. If example don't exist, returns a default string.
 */
export default async function fetchExamples(pronoun){
    const res = await fetch(`https://en.pronouns.page/api/pronouns/${pronoun}`);

    const parsedRes = await res.json()
    const examples = parsedRes.examples;
    if (examples.length){
        return examples.join(' ');
    } else {
        const possesivePronoun = pronoun.split('/')[1];
        return `My friend the dog uses ${pronoun} pronouns. I love ${possesivePronoun}!`;
    }
}