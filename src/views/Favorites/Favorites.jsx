import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardList from "../../components/Cards/CardList";
import { useAuth } from "../../context/AuthContext";
import { getFavCards, getFavs } from "../../services/favorites";
import Loader from "../../components/Loading/Loader.jsx";


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
      <h3>Cards You <img src='/redheart.png' alt='red heart' style={{ width: '25px' }}/></h3>
      {loading && <Loader />}
      <div><p>These are the cards you wanted to remember! If you don't see any yet, visit the cards and click on some hearts!</p><CardList cards={favorites} /></div>
    </div>
  )
}
