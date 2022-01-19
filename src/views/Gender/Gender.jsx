import { useState, useEffect } from "react"
import { getCardsbyCategory } from "../../services/cards"
import CardList from "../../components/Cards/CardList"
import { useDeck } from "../../context/DeckContext/DeckContext"
import renderRainbow from "../../utils/rainbow"



export default function Gender() {
  const [deck, setDeck] = useState('')
  const [loading, setLoading] =useState(true)
  const { genSeen } = useDeck()

  const rainbow = renderRainbow(genSeen.length)


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

  return (
    <main>
      {loading && <p>Loading...</p>}
      <CardList cards={deck}/>
      {rainbow}
    </main>
  )
}
