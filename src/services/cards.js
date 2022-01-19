import { client, parseData } from './client';

export async function getCards() {
  const request = await client.from('cards').select().order('title');
  return parseData(request)
}

export async function getCardsbyCategory(category) {
  const request = await client
    .from('cards')
    .select()
    .order('title')
    .match({ category })
  return parseData(request)
}

export async function getCard(id) {
  try {
     const request = await client.from('cards').select().match({ id });
      return parseData(request);
  } catch (e) {
      console.log(e)
      return {}
  }
}

export async function getCardbyTitle(title) {
  try {
     const request = await client.from('cards').select().textSearch('title', title);
      return parseData(request);
  } catch (e) {
      console.log(e)
      return {}
  }
}
