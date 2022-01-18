import { client, parseData } from './client';

// confirm that with our policies in place we can do these gets without specifying userId

export async function getJournal(userId) {
    const request = await client
      .from('journal')
      .select('journal, user_id')
      .match({ user_id: userId });
    return parseData(request)
  }

export async function updateJournal(userId, journalUpdate) {
    const request = await client
    .from('journal')
    .update('journal')
    .match({ user_id: userId });
    return parseData(request)
}