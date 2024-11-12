import { ReactNode } from "react";
import styles from "./NavList.module.css";

function NavList({ children }: { children: ReactNode }) {
    return <ul className={styles.containUl}>{children}</ul>;
}

export default NavList;
