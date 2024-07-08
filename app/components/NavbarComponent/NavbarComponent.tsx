import Link from "next/link"
import styles from "./NavbarComponent.module.scss"

const NavbarComponent = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.nav}>Home</Link>
            <Link href="/about" className={styles.nav}>About</Link>
            <Link href="/projects" className={styles.nav}>Projects</Link>
            <Link href="/contact" className={styles.nav}>Contact</Link>
        </nav>
    )
}

export default NavbarComponent;