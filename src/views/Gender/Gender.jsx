import { useState, useEffect } from "react"
import { getCardsbyCategory } from "../../services/cards"
import CardList from "../../components/Cards/CardList"


export default function Gender() {
  const [deck, setDeck] = useState('')
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        setLoading(true)
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
    </main>
  )
}