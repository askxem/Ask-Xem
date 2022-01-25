import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardBack from '../../components/Cards/CardBack'
import Guide from '../../components/Guide/Guide.jsx'
import retrieveGuideText from '../../utils/retrieveGuideText/retrieveGuideText.js'
import { getCard } from '../../services/cards'
import { getFavs } from '../../services/favorites'
import { useDeck } from '../../context/DeckContext/DeckContext'
import { useAuth } from '../../context/AuthContext'
import Loader from '../../components/Loading/Loader.jsx'

export default function PronounsDetail() {
  const { user } = useAuth()
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState(null)
  const [guideText, setGuideText] = useState('')
  const { seen } = useDeck()
  const [favStatus, setFavStatus] = useState(false)

  useEffect(() => {
    const fetchFavs = async () => {
      if (user.id) {
        try {
          //get the card ids in the favs table for this user
          const response = await getFavs(user.id)
          //extract an array of just the card ids from the response         
          const favArr = response.map((item) => item.card_id)
          //does the extracted array include the current card?
          const faved = favArr.includes(Number(id))
          //set favStatus to pass to card component so appropriate heart is displayed
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
      {loading && <Loader />}
      {card && <CardBack card={card} favStatus={favStatus} />}
      {guideText && <Guide text={guideText} />}
    </main>
  )
}
