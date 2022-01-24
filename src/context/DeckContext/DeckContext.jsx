import { createContext, useState, useContext } from "react";

const DeckContext = createContext()

const DeckProvider = ({ children }) => {
    const [genSeen, setGenSeen] = useState(JSON.parse(localStorage.getItem('genSeen')) || [])
    const [pronSeen, setPronSeen] = useState(JSON.parse(localStorage.getItem('pronSeen')) || [])

    const seen = (id, category) => {

        if(category == 'gender') {
            let genSet = new Set(genSeen)
            genSet.add(id)
            const arr = Array.from(genSet)
            setGenSeen(arr)
            localStorage.setItem('genSEEN', JSON.stringify(arr))
        }
        if(category == 'pronoun') {
            let pronSet = new Set(pronSeen)
            pronSet.add(id)
            const arr = Array.from(pronSet)
            setPronSeen(arr)
            localStorage.setItem('pronSEEN', JSON.stringify(arr))
        }
    }

    return(
        <DeckContext.Provider value={{ genSeen, pronSeen, seen }}>{children}</DeckContext.Provider>
    )

}

const useDeck = () => {
    const context = useContext(DeckContext)
    if (context === undefined) {
        throw new Error('useDeck not used inside provider')
    }
    return context
}

export { DeckProvider, useDeck }