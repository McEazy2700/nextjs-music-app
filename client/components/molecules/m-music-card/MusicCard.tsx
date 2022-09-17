import React from 'react'
import styles from './MusicCard.module.scss'
import Pods from '../../../assets/headphones.jpg'
import Image from 'next/image'

const MusicCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
         <Image src={Pods} alt='headphones'/> 
      </div>
      <div className={styles.textBox}>
        <div className={styles.title}>
          <h4>Test Song</h4>
          <h6>The weekend</h6>
        </div>
        <h5>3:40</h5>
     </div>
    </div>
  )
}

export default MusicCard
