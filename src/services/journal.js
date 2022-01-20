import { client, parseData } from './client';

// confirm that with our policies in place we can do these gets without specifying userId

export async function getJournal(userId) {
    try{
      const request = await client
      .from('journal')
      .select()
      .match({user_id: userId})
      .single()
    return parseData(request)
    } catch (error) {
      console.log(error.detail);
      throw(error);
    }
  }

  // returns array with object and journal property
export async function insertJournal(userId, journal) {
  try {
    const request = await client
        .from('journal')
        .insert({user_id: userId, journal})
      return parseData(request);
  } catch (error) {
    console.log(error);
    return [{journal: ''}];
  }
}

export async function updateJournal(userId, journal) {
    try{
      const request = await client
      .from('journal')
      .update({journal})
      .match({ user_id: userId });
      return parseData(request)
    } catch(error) {
      console.log(error);
      return [{journal: ''}]
    }
}