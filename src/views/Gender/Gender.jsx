import { useState, useEffect } from "react"
import { getCardsbyCategory } from "../../services/cards"
import CardList from "../../components/Cards/CardList"
import { useDeck } from "../../context/DeckContext/DeckContext"
import renderRainbow from "../../utils/rainbow"
import Guide from "../../components/Guide/Guide.jsx"



export default function Gender() {
  const [deck, setDeck] = useState('')
  const [loading, setLoading] =useState(true)
  const [rainbow, setRainbow] = useState('')
  const { genSeen } = useDeck()

  const guideText = 'This is the Gender Deck'

  useEffect(() => {
    const fetchDeck = async () => {
      setLoading(true)

      try {
        const response = await getCardsbyCategory('gender')
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
      {loading && <p>Loading...</p>}
      <CardList cards={deck} rainbow={rainbow} />
      {rainbow}
      <Guide text={guideText} />
    </main>
  )
}