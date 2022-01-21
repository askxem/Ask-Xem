import { client, parseData } from './client';

export function getUser() {
  try{
    return client.auth.user();
  } catch (error) {
    console.log(error);
  }
}

export function getSession() {
  try{
    return client.auth.session();
  } catch(error){
    console.log(error);
  }
}

export async function signUpUser(email, password) {
  try {
    const response = await client.auth.signUp({ email, password });
    return parseData(response);
  } catch (error) {
    console.log(error);
  }
}

export async function signInUser(email, password) {
  try {
    const { user, error } = await client.auth.signIn({ email, password });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function signOutUser() {
  return client.auth.signOut();
}
