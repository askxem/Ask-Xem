import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.css'

const loaderVariants ={
    animationOne: {
        x: [-30, 30],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25
            },
        }
    }
}

export default function Loader() {

    return(
        <div className={styles.container}>
            <motion.div className={styles.loader} variants={loaderVariants} animate='animationOne' aria-label='Loading.'></motion.div>
        </div>
    );
}
