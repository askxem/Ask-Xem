import { createContext, useState, useContext } from "react";

const GuideContext = createContext();

function GuideProvider({children}) {

  const hasSelectedGuide = getGuideLocal();

  const [guide, setGuide] = useState(hasSelectedGuide ? hasSelectedGuide : '');

    return (
        <GuideContext.Provider value={{guide, setGuide}} >
            {children}
        </GuideContext.Provider>
    )

function setGuideGlobal(guide) {
  setGuideLocal(guide);
  setGuide(guide);
}

function getGuideLocal() {
  const stringyGuide = localStorage.getItem('GUIDE');
  return JSON.parse(stringyGuide);
}

function setGuideLocal(guide) {
  const stringyGuide = JSON.stringify(guide);
  localStorage.setItem('GUIDE', stringyGuide)
}

function useGuide(){
    const context = useContext(GuideContext);
    if (context === undefined) throw new Error('Guide context not accessible outside of the guide provider.')
    return context;
}
}

export { GuideProvider, useGuide, setGuideGlobal }