import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Navbar() {
    const location = useLocation();
    return (
        <header className={styles.header}>
            <div className={styles.logo}>F.E.A.T</div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link
                            className={`${styles.Link} ${
                                location.pathname === "/" ? styles.active : ""
                            }`}
                            to='/'
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${styles.Link} ${
                                location.pathname === "/information"
                                    ? styles.active
                                    : ""
                            }`}
                            to='/information'
                        >
                            Information
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${styles.Link} ${
                                location.pathname === "/actualite"
                                    ? styles.active
                                    : ""
                            }`}
                            to='/actualite'
                        >
                            Actualité
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
