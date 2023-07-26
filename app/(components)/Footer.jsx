import styles from './(styles)/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
       <div className={styles.footer}>
        <footer>
            <p>
                <Link href="https://github.com/dpeachpeach/dpeachpeach.github.io">
                    Made in 2023 using React and Next.js 13. Hosted on Github Pages.
                </Link>
            </p>
        </footer>
       </div> 
    )
}
