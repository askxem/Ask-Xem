import { createContext, useState, useContext } from "react";

const GuideContext = createContext();

function GuideProvider({children}) {

    const [guide, setGuide] = useState('');

    return (
        <GuideContext.Provider value={{guide, setGuide}} >
            {children}
        </GuideContext.Provider>
    )
}

function useGuide(){
    const context = useContext(GuideContext);

    if (context === undefined) throw new Error('Guide context not accessible outside of the guide provider.')

    return context;
}


export { GuideProvider, useGuide }