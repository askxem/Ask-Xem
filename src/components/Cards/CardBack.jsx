import styles from './CardBack.css'
import { useState, useEffect } from 'react'
import { addFav, deleteFav, getFavs } from '../../services/favorites'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

export default function CardBack({ card, favStatus }) {
    const [fav, setFav] = useState(favStatus)
    const { user } = useAuth()

    const handleFav = async () => {
        setFav(prevFav => !prevFav)
    }

    useEffect(() => {
        const updateFavTable = async () => {
            //get current fav db data to see if card is already there
            try {
                const response = await getFavs(user.id)
                const favArr = response.map((item) => item.card_id)
                const faved = favArr.includes(Number(card.id))
                //if faved is true and fav state is now false, delete
                if(faved && fav == false) {
                  await deleteFav(card.id)
                  console.log('deleted')
                } 
                //if faved is false (card is not already in db) and fav stat is now true, add
                if(!faved && fav) {
                  await addFav(card.id, user.id)
                  console.log('added')
                }
            } catch (error) {
                console.log(error.message)
              }
           }
           updateFavTable()
      }, [fav])

    return (
        <div className={styles.container}>

          <figure>
                <div className={styles.heartcontainer}>
                    <img onClick={handleFav} src={fav ? '/redheart.png' : '/heart.png'} alt='heart' />
                </div>
                <h3>{card.title}</h3>
                <figcaption className={styles.definition}>
                {card.definition}
                </figcaption>
                <a href={card.source}>Source</a>
                <img
                    src={`/icons/${card.animal}.png`}
                    alt={card.animal}
                    className={styles.image}
                />
        </figure>

        <Link to={card.category === 'pronoun' ? '/pronouns' : '/gender'}>Back</Link>
      </div>
    )
}
