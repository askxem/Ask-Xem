import { createContext, useState, useContext, useMemo } from "react";
import { getUser, signInUser, signOutUser, signUpUser } from "../services/users.js";


const AuthContext = createContext();

function ProvideAuth({children}) {

    const currentUser = getUser();

    const [user, setUser] = useState(
        currentUser ? {...currentUser} : {}
    );

    async function signUp(email, password) {
        const newUser = await signUpUser(email, password);
        setUser(newUser);
    }

    async function signIn(email, password) {
        const newUser = await signInUser(email, password);
        setUser(newUser);
    }

    async function signOut() {
        await signOutUser();
        localStorage.clear();
        setUser({});
        history.push('/home');
    }

    const value = useMemo(() => ({ user, signUp, signIn, signOut}), [user]);

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

/**
 * 
 * @returns a user object, a signup, signin, and signout fn that hits the database.
 */
function useAuth(){
    const context = useContext(AuthContext);

    if (context === undefined) throw new Error('Auth context not accessible outside of the auth provider.')

    return context;
}


export { ProvideAuth, useAuth }