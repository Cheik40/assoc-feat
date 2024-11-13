import { memo, ReactNode } from "react";

interface NavListInterface {
    children: ReactNode;
    className: string;
}

function NavList({ children, className }: NavListInterface) {
    return <ul className={className}>{children}</ul>;
}

export default memo(NavList);
