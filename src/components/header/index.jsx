import styles from "./header.module.scss"
import { useEffect } from "react"
import { useState } from "react";

export default function Header() {
    const anchors = ["Accueil", "A propos", "Skills", "Réalisations", "Parcours", "Contact"]
    const [isShrunk, setIsShrunk] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const handleScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            setIsShrunk(true);
        } else {
            setIsShrunk(false);
        }

        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // For mobile or negative scrolling
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return(
        <div className={styles.wrapper}>
            <nav className={`${styles.nav} ${isShrunk ? styles.shrink : ""}`}>
                <div className={`burger ${isShrunk ? "active" : ""}`}></div>
                <div className={styles.navContent}>
                    {anchors.map(anchor => 
                        <a href={`#${anchor.toLowerCase()}`}>{anchor}</a>
                    )}
                </div>
            </nav>
        </div>
    )
}