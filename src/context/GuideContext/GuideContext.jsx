import { createContext, useState, useContext } from "react";

const GuideContext = createContext();

function GuideProvider({ children }) {

  const hasSelectedGuide = getGuideLocal();

  const [guide, setGuide] = useState(hasSelectedGuide ? hasSelectedGuide : '');

  function getGuideLocal() {
    const stringyGuide = localStorage.getItem('GUIDE');
    return JSON.parse(stringyGuide);
  }

  function setGuideLocal(guide) {
    const stringyGuide = JSON.stringify(guide);
    localStorage.setItem('GUIDE', stringyGuide)
  }

  function setGuideGlobal(e) {
    const { value } = e.target
    setGuideLocal(value);
    setGuide(value);
  }

  return (
    <GuideContext.Provider value={{ guide, setGuideGlobal }} >
      {children}
    </GuideContext.Provider>
  )
}

const useGuide = () => {
  const context = useContext(GuideContext);
  if (context === undefined) throw new Error('Guide context not accessible outside of the guide provider.')
  return context;
}

export { GuideProvider, useGuide }