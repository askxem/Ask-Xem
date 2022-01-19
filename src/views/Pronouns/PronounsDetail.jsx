import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardBack from '../../components/Cards/CardBack'
import { getCard } from '../../services/cards'

export default function PronounsDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState(null)

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true)

      try {
        const [response] = await getCard(id)
        console.log(response)
        setCard(response)
        setLoading(false)
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
    </main>
  )
}
