interface MenuItem {
    icon: React.ReactNode;
    label: string;
    disabled?: boolean;
    active?: boolean;
}

interface Props {
    title: string;
    menuItems: MenuItem[];
}

export const SideMenu = ({ menuItems, title }: Props) => {
    return (
        <ul role="menu" className="menu rounded-[4px] border border-slate-100 bg-base-100 menu-vertical">
            <li role="menuitem" className="menu-title">
                <span>{title}</span>
            </li>
            {menuItems.map((menuItem, index) => {
                let className = '';
                if (menuItem.active) {
                    className += 'active ';
                }
                if (menuItem.disabled) {
                    className += '!cursor-default !text-slate-400 !bg-transparent';
                }
                return (
                    <li key={index} role="menuitem">
                        <a className={className.trim()} href="#">
                            {menuItem.icon} {menuItem.label}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}