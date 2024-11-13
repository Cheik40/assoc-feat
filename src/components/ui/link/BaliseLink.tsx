import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface BaliseLinkInterface {
    to: string;
    styles?: string;
    children: ReactNode;
}

function BaliseLink({ to, styles, children }: BaliseLinkInterface) {
    return (
        <Link className={styles} to={to}>
            {children}
        </Link>
    );
}

export default memo(BaliseLink);
