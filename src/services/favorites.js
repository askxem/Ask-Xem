import { client, parseData } from './client';

export async function getFavs(userId) {
    try {           
        const request = await client
            .from('favs')
            .select('*, cards(*)')
            .match({ user_id: userId })
        return parseData(request)
    } catch (e) {
        console.log(e)
        return {}
    }
  }

export async function addFav(cardId) {
    try {
        const request = await client
            .from('favs')
            .insert({ card_id: cardId })
        return parseData(request)
    } catch (e) {
        console.log(e)
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
    } catch (e) {
        console.log(e)
        return {}
    }
}
  