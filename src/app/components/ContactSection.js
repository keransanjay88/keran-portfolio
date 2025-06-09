// components/ContactSection.js
import React from 'react'
import styles from './ContactSection.module.css'

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! I will respond to your message soon.')
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <div>
                <div className={styles.subtitle}>Get in touch</div>
                <h2 className={styles.heading}>Contact</h2>

                <div className={styles.iconGroup}>
                  <div className={styles.iconLine}></div>
                  <div className={styles.iconDot}></div>
                </div>

                <p className={styles.text}>
                  I&apos;m seeking challenging opportunities to leverage my skills in Java development,
                  cybersecurity, and innovative technology solutions. Let&apos;s discuss how we can
                  create meaningful impact together.
                </p>
              </div>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactLabel}>
                <div className={styles.contactDot}></div>
                Email
              </div>
              <div className={styles.contactValue}>
                <a href="mailto:keransanjay88ifs@gmail.com" className={styles.contactLink}>
                  keransanjay88ifs@gmail.com
                </a>
              </div>

              <div className={styles.contactLabel}>
                <div className={styles.contactLine}></div>
                Phone
              </div>
              <div className={styles.contactValue}>
                <a href="tel:+919080209982" className={styles.contactLink}>
                  +91 9080209982
                </a>
              </div>

              <div className={styles.contactLabel}>
                <div className={styles.contactLineV}></div>
                Location
              </div>
              <div className={styles.contactValue}>Coimbatore, Tamil Nadu</div>

              <div className={styles.contactLabel}>
                <div className={styles.contactLine}></div>
                GitHub
              </div>
              <div className={styles.contactValue}>
                <a href="https://github.com/keransanjay88" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  github.com/keransanjay88
                </a>
              </div>

              <div className={styles.contactLabel}>
                <div className={styles.contactDot}></div>
                LinkedIn
              </div>
              <div className={styles.contactValue}>
                <a href="https://linkedin.com/in/keran-sanjay-a93205254" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  linkedin.com/in/keran-sanjay-a93205254
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className={styles.input}
                />
                <div className={styles.inputUnderline}></div>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className={styles.input}
                />
                <div className={styles.inputUnderline}></div>
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  placeholder="Your Message"
                  required
                  className={`${styles.input} ${styles.textarea}`}
                ></textarea>
                <div className={styles.inputUnderline}></div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.sendIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
