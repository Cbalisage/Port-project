import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
              src={getImageUrl("about/aboutImage.png")}
              alt="Me sitting with a laptop"
              className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div>
                      <h3>Student</h3>
                      <p>
                        I am a student attaining my Bachelor of Science, as mentioned.
                        I'm seeking an internship and/ or part-time employment opportunities in the IT field.
                      </p>
                    </div>
                </li>
                <li>
                  <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                  <div>
                    <h3>Work Ethic</h3>
                    <p>
                      Has a strong work ethic and a commitment to excellence,
                      bringing enthusiasm and a willingness to learn to any task.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                  <div>
                    <h3>Ready to Work</h3>
                    <p>
                      Eager to apply academic knowledge in a practical 
                      setting while gaining valuable professional experience.
                    </p>
                  </div>
                 </li>
                </ul>
              </div>
            </section>
          );
        }
