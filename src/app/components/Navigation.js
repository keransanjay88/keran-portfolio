// components/Navigation.js
import React from 'react'
import styles from './Navigation.module.css'

const Navigation = ({ currentSection, setCurrentSection }) => {
  const navigationItems = [
    { key: 'home', label: 'Home' },
    { key: 'work', label: 'Projects' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          {navigationItems.map(({ key, label }) => (
            <li key={key} className={styles.navItem}>
              <button
                onClick={() => setCurrentSection(key)}
                className={currentSection === key ? styles.navButtonActive : styles.navButton}
              >
                <span>{label}</span>
                <div className={currentSection === key ? styles.underlineActive : styles.underline} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation