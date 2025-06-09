// components/HomeSection.js
import React from 'react'
import styles from './HomeSection.module.css'

const HomeSection = ({ setCurrentSection, mousePosition }) => {
  return (
    <section className={styles.homeSection}>
      {/* Mountain silhouette background */}
      <div className={styles.mountainBackground}>
        <div className={styles.mountainSilhouette}></div>
        <div className={styles.mountainPeaks}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <div>
              <div>
                <div className={styles.welcomeText}>
                  Welcome to my digital portfolio
                </div>

                <h1 className={styles.heading}>
                  Keran Sanjay
                  <br />
                  <span className={styles.headingSpan}>B S</span>
                </h1>

                <div className={styles.developerTag}>
                  <div className={styles.tagLine}></div>
                  <div className={styles.tagText}>DEVELOPER</div>
                </div>
                <p className={styles.description}>
                  Computer and Communication Engineering graduate with expertise in
                  Java development, cybersecurity, and web technologies. Passionate about
                  creating secure, innovative solutions through careful code craftsmanship.                </p>
              </div>

              <div className={styles.buttonGroup}>                <button
                onClick={() => setCurrentSection('work')}
                className={styles.primaryButton}
              >
                <span className={styles.buttonText}>
                  View Projects
                  <svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                  </svg>
                </span>
                <div className={styles.buttonBackground}></div>
              </button>

                <button
                  onClick={() => setCurrentSection('contact')}
                  className={styles.secondaryButton}
                >
                  <span className={styles.buttonText}>
                    Begin Conversation
                    <svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </span>
                  <div className={styles.buttonBackground}></div>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.imageSquare}>
              <div className={styles.imageBackground}>
                <div className={styles.mountainOverlay}></div>
                <div className={styles.mountainShadow}></div>

                <div
                  className={styles.floatingOrb}
                  style={{
                    top: `${20 + mousePosition.y * 10}%`,
                    right: `${25 + mousePosition.x * 15}%`
                  }}
                ></div>

                <div className={styles.brushStroke1}></div>
                <div className={styles.brushStroke2}></div>

                <div className={styles.cherryBlossom1}>🌸</div>
                <div className={styles.cherryBlossom2}>🌸</div>

                <div className={styles.decorativeLines}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                  <div className={styles.line3}></div>
                </div>

                <div className={styles.decorativeSymbol1}>⩗</div>
                <div className={styles.decorativeSymbol2}>⩗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection