import { useState } from "react";

//if a user is not present, redirect them to the login page. 
//the guide displays a welcoming message like "these are the cards you wanted to remember!"
//if they are logged in:
//the favorites view will make a call to supabase in a useEffect to get the list of favorites and map through them
//and will render a card front component for each of those favorites
//each card front will link to the detail page for that card, using the id from the card clicked for as the URL id for the redirect path
//with the card front, we need two buttons one to edit the favorite and one to delete the favorite 



export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  //useEffect will:
  //getFaves
  //setFaves

  return (
    <div>
      Favorites view.
    </div>
  )
}
