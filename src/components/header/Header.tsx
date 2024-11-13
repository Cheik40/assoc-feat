import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import NavList from "../navList/NavList";
import NavItem from "../navItem/NavItem";
import BaliseLink from "../ui/link/BaliseLink";

interface NavLinkInterfance {
    path: string;
    label: string;
}

const navLinks: NavLinkInterfance[] = [
    { path: "/", label: "Accueil" },
    { path: "/information", label: "Information" },
    { path: "/actualite", label: "Actualité" },
];

function Navbar() {
    const location = useLocation();
    return (
        <header className={styles.header}>
            <div className={styles.logo}>F.E.A.T</div>
            <nav className={styles.nav}>
                <NavList className={styles.ul}>
                    {navLinks.map(({ path, label }) => {
                        const className = `${styles.Link} ${
                            location.pathname === path ? styles.active : ""
                        }`;

                        return (
                            <NavItem key={path} className={styles.li}>
                                <BaliseLink styles={className} to={path}>
                                    {label}
                                </BaliseLink>
                            </NavItem>
                        );
                    })}
                </NavList>
            </nav>
        </header>
    );
}

export default Navbar;
