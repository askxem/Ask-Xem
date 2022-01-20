import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardBack from '../../components/Cards/CardBack'
import { getCard } from '../../services/cards'
import { useDeck } from '../../context/DeckContext/DeckContext'
import { getFavs } from '../../services/favorites'
import { useAuth } from '../../context/AuthContext'


export default function GenderDetail() {
  const { user } = useAuth()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState(null)
  const { seen } = useDeck()
  const [favStatus, setFavStatus] = useState(false)
  const [favsArray, setFavsArray] = useState([])

  useEffect(() => {
    const fetchFavs = async () => {
      if (user.id){
        try {
          const response = await getFavs(user.id)
          console.log(response)
          const favCards = response.map((entry) => entry.card_id)
          setFavsArray(favCards)
          console.log(favCards)
          const faved = favsArray.includes(id)
          setFavStatus(faved)
        } catch (error) {
         console.log(error.message) 
        }
      }
    }
    fetchFavs()
  }, [])

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true)

      try {
        const [response] = await getCard(id)
        setCard(response)
        setLoading(false)
        seen(response.id, response.category)
      } catch (error) {
       console.log(error.message) 
      }
    }
    fetchCard()
  }, [])


  return (
    <main>
      {loading && <p>Loading...</p>}
      {card && <CardBack card={card} favStatus={favStatus}/>}
    </main>
  )
}
