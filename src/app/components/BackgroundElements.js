// components/BackgroundElements.js
import React from 'react'
import styles from './BackgroundElements.module.css'

const BackgroundElements = () => {
  return (
    <div className={styles.backgroundContainer}>
      {/* Subtle ink wash clouds - static */}
      <div className={styles.inkWashCloud1} />
      <div className={styles.inkWashCloud2} />

      {/* Static brush texture lines */}
      <div className={styles.brushLine1} />
      <div className={styles.brushLine2} />
      <div className={styles.brushLine3} />
    </div>
  )
}

export default BackgroundElements