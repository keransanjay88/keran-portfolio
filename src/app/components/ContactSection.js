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
                  I'm seeking challenging opportunities to leverage my skills in Java development,
                  cybersecurity, and innovative technology solutions. Let's discuss how we can
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
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>Send a Message</h3>

              <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={styles.input}
                  />
                  <div className={styles.inputUnderline}></div>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={styles.input}
                  />
                  <div className={styles.inputUnderline}></div>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={styles.input}
                  />
                  <div className={styles.inputUnderline}></div>
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    placeholder="Your message"
                    className={styles.textarea}
                  ></textarea>
                  <div className={styles.inputUnderline}></div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className={styles.submitButton}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection