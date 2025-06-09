// components/WorkSection.js
import React from 'react'
import styles from './WorkSection.module.css'

const WorkSection = ({ scrollY }) => {
  const projects = [
    {
      id: 1,
      title: "Voice-Enabled AI Chatbot",
      description: "Interactive voice assistant using AI with natural language processing. Features speech-to-text conversion, dynamic responses, and URL opening capabilities.",
      year: "2024",
      season: "CURRENT",
      element: "voice",
      tech: ["JavaScript", "Speech API", "AI Integration", "Web APIs"],
      github: "https://github.com/keransanjay88/chatbot",
      demo: "https://keransanjay88.github.io/chatbot"
    },
    {
      id: 2,
      title: "Flutter TODO Application",
      description: "Task management app built with Flutter using Hive for local storage and GitHub Actions for automated APK releases. Features intuitive swipe gestures and clean UI.",
      year: "2024",
      season: "ACTIVE",
      element: "mobile",
      tech: ["Flutter", "Hive", "GitHub Actions", "Dart"],
      github: "https://github.com/keransanjay88/todo_flutter",
      demo: "https://github.com/keransanjay88/todo_flutter/releases"
    },
    {
      id: 3,
      title: "Sleep Quality Prediction ML",
      description: "Machine learning model using Support Vector Machine (SVM) to predict sleep quality in osteoporosis patients, providing insights for personalized healthcare interventions.",
      year: "2023",
      season: "RESEARCH",
      element: "ml",
      tech: ["Python", "SVM", "Machine Learning", "Healthcare Data"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Web Security Assessment",
      description: "Comprehensive vulnerability assessment testing for XSS, SQL Injection, and CSRF using industry-standard security tools and penetration testing methodologies.",
      year: "2023",
      season: "SECURITY",
      element: "security",
      tech: ["Burp Suite", "Nmap", "SQLmap", "Wireshark"],
      github: "#",
      demo: "#"
    }
  ]
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.headerSubtitle}>
              Portfolio of innovations
            </div>
            <h2 className={styles.headerTitle}>Featured Projects</h2>
            <div className={styles.headerDivider}></div>
          </div>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={project.id}>
              <div className={styles.projectGroup}>
                <div className={`${styles.projectImageContainer} ${index % 2 === 1 ? styles.projectImageOrder2 : ''}`}>
                  <div className={`${styles.projectImageContainer} group-hover:${styles.projectImageContainerHover}`}>
                    {project.element === 'voice' && (
                      <>
                        <div className={styles.voiceElement}>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className={styles.voiceWave}
                              style={{
                                top: `${40 + i * 4}%`,
                                width: `${60 + Math.sin(i) * 20}%`,
                                opacity: 0.4 - i * 0.05
                              }}
                            />
                          ))}
                          <div className={styles.voiceIcon}>🎤</div>
                        </div>
                      </>
                    )}

                    {project.element === 'mobile' && (
                      <>
                        <div className={styles.mobileElement}>
                          <div className={styles.mobileDevice}></div>
                          <div className={styles.mobileScreen}></div>
                          <div className={styles.mobileLine1}></div>
                          <div className={styles.mobileLine2}></div>
                          <div className={styles.mobileIcon}>📱</div>
                        </div>
                      </>
                    )}

                    {project.element === 'ml' && (
                      <>
                        <div className={styles.mlElement}>
                          <div className={styles.mlBar1}></div>
                          <div className={styles.mlBar2}></div>
                          <div className={styles.mlBar3}></div>
                          <div className={styles.mlBar4}></div>
                          <div className={styles.mlIcon}>🧠</div>
                        </div>
                      </>
                    )}

                    {project.element === 'security' && (
                      <>
                        <div className={styles.securityElement}>
                          <div className={styles.securityDot1}></div>
                          <div className={styles.securityDot2}></div>
                          <div className={styles.securityDot3}></div>
                          <div className={styles.securityLine1}></div>
                          <div className={styles.securityLine2}></div>
                          <div className={styles.securityIcon}>🛡️</div>
                        </div>
                      </>
                    )}
                    <div className={styles.seasonTag}>
                      {project.season}
                    </div>
                  </div>
                </div>

                <div className={`${styles.projectContent} ${index % 2 === 1 ? styles.projectContentOrder1 : ''}`}>
                  <div>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectYear}>{project.year}</span>
                      <span className={styles.projectSeason}>{project.season}</span>
                    </div>

                    <div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>

                      <div className={styles.techStack}>
                        {project.tech.map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={styles.projectDivider}></div>

                    <div className={styles.projectLinks}>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                        Live Demo
                        <div className={styles.projectLinkUnderline}></div>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                        Source Code
                        <div className={styles.projectLinkUnderline}></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection