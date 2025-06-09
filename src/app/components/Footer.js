// components/Footer.js
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            © 2024 — Crafted with mindfulness in the spirit of traditional arts
          </div>

          <div className={styles.signature}>
            <div className={styles.square}></div>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.initials}>KS</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer