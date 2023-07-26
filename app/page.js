import Image from 'next/image'
import styles from './page.module.css'
import profilePic from '../public/profilepic.png'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Page() {
  return (
    <>
      <div className = {styles.aboutContainer}>
        <div className={styles.imgBox}>
          <Image 
            src={profilePic} 
            alt="Profile Picture"
            fill
          />
        </div>
        <div className={styles.txtBox}>
          <p>Hello! I am David Petre</p>
          <p>I am a rising third-year at the&nbsp;
            <a href="https://www.uchicago.edu/en" target="_blank">University of Chicago</a>
             &nbsp;studying Computer Science and Economics.
          </p>
          <p>I am curious about a lot of things, especially related to technology
            and statistics, but some of my interests include:
          </p>
          <ul>
            <li>Robotics.</li>
            <li>Studying games of chance.</li>
            <li>Starcraft 2.</li>
          </ul>
        </div>
        <div className={styles.iconCon}>
          <div className={styles.iconsBox}>
          <a href="https://github.com/dpeachpeach" style={{gridColumn:2}}target="_blank"><FontAwesomeIcon className={styles.icon} icon={faGithub} /></a>
          <a href="https://twitter.com/originalwololo" style={{gridColumn:3}}target="_blank"><FontAwesomeIcon className={styles.icon} icon={faTwitter} /></a>
          <a href="https://www.linkedin.com/in/david-petre-1079b61b7/" style={{gridColumn:4}}target="_blank"><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </>
  )
}
