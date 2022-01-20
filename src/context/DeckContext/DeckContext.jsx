import { createContext, useState, useContext } from "react";

const DeckContext = createContext()

    //on click, 
        //push id to array IF not aleady in array.
        //render rainbow color according to number of array elements
        //once array.length=8, some sort of animation


const DeckProvider = ({ children }) => {
    const [genSeen, setGenSeen] = useState([])
    const [pronSeen, setPronSeen] = useState([])

    const seen = (id, category) => {

        if(category == 'gender') {
            let genSet = new Set(genSeen)
            genSet.add(id)
            setGenSeen(Array.from(genSet))
        }
        if(category == 'pronoun') {
            let pronSet = new Set(pronSeen)
            pronSet.add(id)
            setPronSeen(Array.from(pronSet))
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