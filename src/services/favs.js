import { client, parseData } from './client';

// how to get cards from the cards table where ids match the ids 
// associated with a specific userid in the favs table?

export async function getFavs(userId) {
    const request = await client
      .from('favs')
      .select('id, user_id')
      .match({ user_id: userId });
    return parseData(request)
  }

export async function getFavs(userId) {
    const request = await client
      .from('cards')
      .select(`
        id,
        favs (id)`)
      .match({ user_id: userId });
    return parseData(request)
  }


export async function addFav(cardId, userId) {
    const request = await client
    .from('favs')
    .insert([{ id: cardId, user_id: userId }])
  return parseData(request);
}


  export async function deleteFav(cardId, userId) {
    try {
      const request = await client
        .from('favs')
        .delete()
        .match({ id: cardId, user_id: userId });
      return parseData(request);
    } catch (e) {
      console.log(e)
      return {}
    }
  }
  