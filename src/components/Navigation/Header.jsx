// src/components/Header.jsx
import { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
    // State to manage whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link className={styles.logo} to="/">Saul Enriquez</Link>
            </div>

            {/* The navigation links */}
            <nav className={`${styles.headerLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/about" onClick={toggleMenu}>About</Link>
                <Link to="/projects" onClick={toggleMenu}>Portfolio</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                <a 
                    href="https://better-code-saul-e.github.io/Digital_Resume/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </nav>

            {/* The Hamburger Button */}
            <button className={styles.hamburgerButton} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </header>
    );
}

export default Header;