import { Link, useLocation } from "react-router-dom";

interface BaliseLinkInterface {
    path: string;
    pathName?: string;
    styles?: string;
    active?: string;
    label: string;
}

function BaliseLink({
    path,
    pathName,
    styles,
    active,
    label,
}: BaliseLinkInterface) {
    const location = useLocation();
    return (
        <Link
            className={`${styles} ${
                location.pathname === pathName ? active : ""
            }`}
            to={path}
        >
            {label}
        </Link>
    );
}

export default BaliseLink;
