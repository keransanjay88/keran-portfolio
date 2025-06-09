import React from 'react'
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      {/* Minimalist zen loading */}
      <div className={styles.loaderWrapper}>
        {/* Simple breathing circle */}
        <div className={styles.circleContainer}>
          <div className={styles.outerCircle} />
          <div className={styles.innerCircle} />
          {/* Central dot */}
          <div className={styles.centerDot}></div>
        </div>

        {/* Minimalist text */}
        <div className={styles.loadingText}>
          <div>Loading</div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen