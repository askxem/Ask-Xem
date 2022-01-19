import { client } from './client';

export function getUser() {
  try{
    return client.auth.user();
  } catch (e) { console.log(e) }
}

export function getSession() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) throw error;
  return user;
}

export async function signOutUser() {
  return client.auth.signOut();
}
