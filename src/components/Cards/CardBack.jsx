import styles from './CardBack.css'
import { useState, useEffect } from 'react'
import { addFav, deleteFav, getFavs } from '../../services/favorites'
import { useAuth } from '../../context/AuthContext'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
 
export default function CardBack({ card, favStatus }) {
    const history = useHistory()

    const [fav, setFav] = useState(favStatus)
    const { user } = useAuth()

    const handleFav = async () => {
        if(user.id) { setFav(prevFav => !prevFav) } 
        else {
          alert('Sign in to be able to fav!') }  
    }

    useEffect(() => {
        const updateFavTable = async () => {
          if(user.id) {  
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
           }
           updateFavTable()
      }, [fav])

      const containerVariants = {
        initial: {
            opacity: 0, 
            x: '100vw'
        },
        animate: {
            opacity: [0, 1], 
            x: 0,
            transition: { delay: .5, duration: .5 }
        }  
      }

    return (
        <div className={styles.container}>

          <motion.figure className={styles.backcontainer} variants={containerVariants} initial={'initial'} animate={'animate'}>
                <div className={styles.heartcontainer}>
                    <img className={styles.heart} onClick={handleFav} src={fav ? '/redheart.png' : '/heart.png'} alt='heart' />
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
        </motion.figure>

        <button className={styles.backbutton} onClick={() => history.goBack()}>Back</button>
      </div>
    )
}
