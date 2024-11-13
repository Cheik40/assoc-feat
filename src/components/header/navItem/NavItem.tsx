import { ReactNode } from "react";
import styles from "./NavItem.module.css";

function NavItem({ children }: { children: ReactNode }) {
    return <li className={styles.NavItem}>{children}</li>;
}

export default NavItem;
