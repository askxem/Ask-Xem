import { client, parseData } from './client'

export async function getCards() {
  const request = await client.from('cards').select().order('title')
  return parseData(request)
}

export async function getCardsByCategory(category) {
  try {
    const request = await client
      .from('cards')
      .select()
      .order('title')
      .match({ category })
    return parseData(request)
  } catch (error) {
    console.log(error.details)
    return []
  }
}

export async function getCard(id) {
  try {
    const request = await client.from('cards').select().match({ id })
    return parseData(request)
  } catch (error) {
    console.log(error)
    return {}
  }
}

export async function getCardbyTitle(title) {
  try {
    const request = await client
      .from('cards')
      .select()
      .textSearch('title', title)
    return parseData(request)
  } catch (error) {
    console.log(error)
    return {}
  }
}
