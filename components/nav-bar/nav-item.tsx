import { NavItem } from "@/types/nav-item";
import Link from "next/link";
import Icon from "@/components/icon";

export default function NavItem({ title, icon,  path }: NavItem) {
    return (
        <li>
            <Link href={path} className="flex flex-row gap-2 p-4 rounded-full hover:bg-yellow-400/[.08] transition">
                <Icon>{icon}</Icon>
                <span className="hidden lg:block">{title}</span>
            </Link>
        </li>
    )
}