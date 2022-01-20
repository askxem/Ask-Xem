import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardBack from '../../components/Cards/CardBack'
import Guide from '../../components/Guide/Guide.jsx'
import retrieveGuideText from '../../utils/retrieveGuideText/retrieveGuideText.js'
import { getCard } from '../../services/cards'
import { useDeck } from '../../context/DeckContext/DeckContext'

export default function PronounsDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState(null)
  const [guideText, setGuideText] = useState('')
  const { seen } = useDeck()

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true)

      try {
        const [response] = await getCard(id)
        setCard(response)
        setLoading(false)
        seen(response.id, response.category)
        const newGuideText = await retrieveGuideText(response.category, response.animal, response.title)
        setGuideText(newGuideText)
      } catch (error) {
       console.log(error.message) 
      }
    }
    fetchCard()
  }, [])


  return (
    <main>
      {loading && <p>Loading...</p>}
      {card && <CardBack card={card}/>}
      {guideText && <Guide text={guideText}/>}
    </main>
  )
}
