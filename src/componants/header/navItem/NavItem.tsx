import { memo } from "react";

function NavItem({ label }: { label: string }) {
    return <li>{label}</li>;
}

export default memo(NavItem);
