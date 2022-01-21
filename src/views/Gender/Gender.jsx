import { useState, useEffect } from "react"
import { getCardsByCategory } from "../../services/cards"
import CardList from "../../components/Cards/CardList"
import DeckComplete from "../../components/DeckComplete/DeckComplete.jsx"
import { useDeck } from "../../context/DeckContext/DeckContext"
import renderRainbow from "../../utils/rainbow"
import Guide from "../../components/Guide/Guide.jsx"
import Loader from "../../components/Loading/Loader.jsx"



export default function Gender() {
  const [deck, setDeck] = useState('')
  const [loading, setLoading] =useState(true)
  const [rainbow, setRainbow] = useState('')
  const [showModal, setShowModal] = useState(true)
  
  const { genSeen } = useDeck()

  const guideText = 'This is the Gender Deck - click on a card to find out more!'

  const handleClick = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const showModal = () => {
      if (genSeen.length === 8) {
        setShowModal(true)
      }
    }
    showModal()
  },[genSeen])

  useEffect(() => {
    const fetchDeck = async () => {
      setLoading(true)

      try {
        const response = await getCardsByCategory('gender')
        setDeck(response)
        setLoading(false)
      } catch (error) {
       console.log(error.message) 
      }
    }
    fetchDeck()
  }, [])

  useEffect(() => {
    const showRainbow = () => {
      const rainbow = renderRainbow(genSeen.length)
      setRainbow(rainbow)
    }
    showRainbow()
  }, [genSeen])

  return (
    <main>
      {loading && <Loader />}
      <CardList cards={deck} rainbow={rainbow} />
      <Guide text={guideText} />
      { showModal && <DeckComplete handleClick={handleClick}/>}
    </main>
  )
}