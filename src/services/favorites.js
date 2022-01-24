import { getCard } from './cards';
import { client, parseData } from './client';


export async function getFavs(userId) {
    try {           
        const request = await client
            .from('favs')
            .select()
            .match({ user_id: userId })
        return parseData(request)
    } catch (error) {
        console.log(error)
        return {}
    }
  }

export async function addFav(cardId, userId) {
    try {
        const request = await client
            .from('favs')
            .insert({ card_id: cardId, user_id: userId })
        return parseData(request)
    } catch (error) {
        console.log(error)
        return {}
    }
}

export async function deleteFav(cardId) {
    try {
        const request = await client
            .from('favs')
            .delete()
            .match({ card_id: cardId });
        return parseData(request)
    } catch (error) {
        console.log(error)
        return {}
    }
}


export async function getFavCards(cardIdArray) {
    let allFavCards = []
    try {
       await Promise.all(cardIdArray.map(async(cardid) => {
           const [response] = await getCard(cardid)
           allFavCards.push(response)
       })) 
       return allFavCards
    } catch (error) {
        console.log(error.message)
    }
}