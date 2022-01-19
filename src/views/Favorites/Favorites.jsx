import { useState } from "react";
import { useHistory } from "react-router-dom";
// import getFavs from '../../services/favs.js';

//to import
//useUser from user context


export default function Favorites() {
  const { user } = useUser();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  user ?
  useEffect(() => {
     try {
      // const res = getFavs(user.id);
      setFavorites(res);
      setLoading(false);
    } catch (error) {
      throw new Error(error.message);
    }
  }, []) :
  history.push('/login');


  const handleDelete = (e) => {
    const { value } = e.target ;
    // deleteFav(value);
  }


  return (
    <div>
      <h3>Welcome to your Favorites Page</h3>
      { loading ?
      'Loading your favorites...' :
      (
      <div>
        <p>These are the cards you wanted to remember</p>
        {favorites.map((fav) => 
        <div>
          <a href={`/${fav.category}/${fav.id}`}>
            <CardFront favorite={fav}/>
          </a> 
          <button value={fav.id} onClick={handleDelete} >Un-Favorite</button>
        </div>
         )}
      </div>
    )}      
    </div>
  )
}
