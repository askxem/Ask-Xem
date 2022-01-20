import styles from './CardBack.css'
import { useState } from 'react'

export default function CardBack({ card, favStatus }) {
    const [fav, setFav] = useState(favStatus)
    
    const handleFav = () => {
        setFav(prevFav => !prevFav)
        //acount for lag in state change below
        //came in fav'd already, then unfaved so fav is now false
        if (fav == true && favStatus == true) {
            console.log('removing')
        }

        //came in not fav'd (favstatus false), then faved so fav is now true
        if (fav == false && favStatus == false) {
            console.log('adding')
        }
    }

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
      </div>
    )
}
