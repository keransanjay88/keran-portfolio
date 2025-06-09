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
                  creating secure, innovative solutions through careful code craftsmanship.
                </p>
              </div>

              <div className={styles.buttonGroup}>
                <button
                  onClick={() => setCurrentSection('work')}
                  className={styles.primaryButton}
                >
                  <span className={styles.buttonText}>View Projects</span>
                  <div className={styles.buttonBackground}></div>
                </button>

                <button
                  onClick={() => setCurrentSection('contact')}
                  className={styles.secondaryButton}
                >
                  <span>Begin conversation →</span>
                  <div className={styles.ctaUnderline}></div>
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