// components/AboutSection.js
import React from 'react'
import styles from './AboutSection.module.css'

const AboutSection = () => {
  const skills = [
    { name: "Java Programming", mastery: "EXPERT", element: "code", description: "Core language with internship experience" },
    { name: "Cybersecurity", mastery: "ADVANCED", element: "shield", description: "Penetration testing and vulnerability assessment" },
    { name: "Web Development", mastery: "SKILLED", element: "web", description: "HTML, CSS, and modern web technologies" },
    { name: "Machine Learning", mastery: "DEVELOPING", element: "brain", description: "SVM and predictive modeling" },
    { name: "Mobile Development", mastery: "ACTIVE", element: "mobile", description: "Flutter and cross-platform apps" },
    { name: "Database Management", mastery: "PROFICIENT", element: "data", description: "SQL and database optimization" }
  ]

  const certifications = [
    "Basic SQL - HackerRank",
    "Microsoft Student Ambassadors Bootcamp",
    "Google Developer Certification",
    "Project Expo 2022 - 3rd Place"
  ]

  const tools = [
    "Burp Suite", "Eclipse", "Visual Studio Code", "Nikto",
    "Nmap", "SQLmap", "Wireshark", "Adobe Photoshop"
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <div className={styles.spaceBlock}>
              <div>
                <div className={styles.subtitle}>The journey of learning</div>
                <h2 className={styles.heading}>About Keran</h2>
              </div>
            </div>

            <div className={styles.text}>
              <p>
                Computer and Communication Engineering graduate from Sri Eshwar College
                with a passion for creating secure, innovative solutions. My journey spans
                from Java development to cybersecurity, always seeking new challenges.
              </p>
              <p>
                I believe in continuous learning and practical application. Through internships,
                certifications, and hands-on projects, I&apos;ve developed expertise in multiple
                domains while maintaining focus on security and user experience.
              </p>
              <p>
                My goal is to leverage technology for meaningful impact, whether through
                machine learning models for healthcare or security assessments that
                protect digital assets.
              </p>
            </div>

            <div className={styles.spaceBlock}>
              <h3 className={styles.sectionTitle}>Education Journey</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon}>DEGREE</div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTitle}>Computer and Communication Engineering</div>
                    <div className={styles.timelineSubtitle}>Sri Eshwar College of Engineering (2020-2024) • CGPA: 8.0</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon}>HSC</div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTitle}>Higher Secondary Certificate</div>
                    <div className={styles.timelineSubtitle}>Rajalakshmi Gengusamy Matric HSS (2019-2020) • 73.67%</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon}>SSLC</div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTitle}>Secondary School Certificate</div>
                    <div className={styles.timelineSubtitle}>Rajalakshmi Gengusamy Matric HSS (2017-2018) • 84.6%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.spaceBlock}>
              <h3 className={styles.sectionTitle}>Certifications & Awards</h3>
              <div className={styles.certList}>
                {certifications.map((cert, index) => (
                  <div key={index} className={styles.certItem}>
                    <div className={styles.certDot}></div>
                    <span className={styles.certText}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.metaCol}>
            <div className={styles.spaceBlock}>
              <h3 className={styles.sectionTitle}>Technical Skills</h3>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.mastery}</span>
                    </div>
                    <div className={styles.skillDescription}>{skill.description}</div>
                    <div className={styles.skillBar}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.spaceBlock}>
              <h3 className={styles.sectionTitle}>Tools & Technologies</h3>
              <div className={styles.toolsGrid}>
                {tools.map((tool, index) => (
                  <div key={index} className={styles.toolItem}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.spaceBlock}>
              <h3 className={styles.sectionTitle}>Current Status</h3>
              <div className={styles.currentStatus}>
                <div className={styles.statusItem}>
                  <div className={styles.statusDot}></div>
                  <span>Open to opportunities</span>
                </div>
                <div className={styles.statusItem}>
                  <div className={styles.statusDotOutline}></div>
                  <span>Based in Coimbatore</span>
                </div>
                <div className={styles.statusItem}>
                  <div className={styles.statusLineH}></div>
                  <span>Continuous learning</span>
                </div>
                <div className={styles.statusItem}>
                  <div className={styles.statusLineV}></div>
                  <span>Building innovative solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
