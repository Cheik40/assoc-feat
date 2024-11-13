import { memo, ReactNode } from "react";

interface NavItemInterface {
    children: ReactNode;
    className: string;
}

function NavItem({ children, className }: NavItemInterface) {
    return <li className={className}>{children}</li>;
}

export default memo(NavItem);
