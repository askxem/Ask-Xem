import { client, parseData } from './client';

export function getUser() {
  try {
    return client.auth.user();
  } catch (error) {
    console.log(error);
  }
}

export function getSession() {
  try {
    return client.auth.session();
  } catch (error) {
    console.log(error);
  }
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
