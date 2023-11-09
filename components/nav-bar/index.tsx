import { NavItem } from "@/types/nav-item"
import NavItemComponent from "@/components/nav-bar/nav-item"

export default function NavBar() {
    const items: NavItem[] = [
        {path: '/', title: 'Home', icon: 'home'},
        {path: '/explore', title: 'Explore', icon: 'search'},
        {path: '/workout', title: 'Workout', icon: 'exercise'},
        {path: '/notifications', title: 'Notifications', icon: 'notifications'},
        {path: '/account', title: 'Account', icon: 'account_circle'}
    ]

    return (
        <nav className="p-4 border-t sm:border-t-0 sm:border-r border-yellow-400">
            <ul className="flex flex-row sm:flex-col gap-4 items-start justify-between">
                {items.map((item) => (
                    <NavItemComponent key={item.path} {...item} />
                ))}
            </ul>
        </nav>
    )
}