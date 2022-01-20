import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardList from "../../components/Cards/CardList";
import { useAuth } from "../../context/AuthContext";
import { getFavCards, getFavs } from "../../services/favorites";


export default function Favorites() {
  const { user } = useAuth()
  const [favsArray, setFavsArray] = useState([])
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavs = async () => {
        try {
          //get the card ids in the favs table for this user
          const response = await getFavs(user.id)
          //extract an array of just the card ids from the response         
          const favArr = response.map((item) => item.card_id)
          setFavsArray(favArr)
        } catch (error) {
          console.log(error.message)
        }
     }
     fetchFavs()
  }, [])

  useEffect(() => {
    const fetchFavCards = async () => {
        try {
          //get the cards for the cardids from prior fetch
          const response = await getFavCards(favsArray)
          setFavorites(response)
          setLoading(false)
        } catch (error) {
          console.log(error.message)
        }
      }
     fetchFavCards()
  }, [favsArray])


  return (
    <div>
      <h3>Welcome to your Favorites Page</h3>
      { loading ?
      'Loading your favorites...' :
      (
      <div>
        <p>These are the cards you wanted to remember</p>
        <CardList cards={favorites} />
      </div>
    )}      
    </div>
  )
}
