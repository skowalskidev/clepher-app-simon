import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface Props {
    children: React.ReactNode
    active?: boolean;
    href?: Url;
}

export const SquareButton = ({ children, active, href }: Props) => {
    return (
        <Link href={href ? href : ''}>
            <button className={`btn btn-square ${active ? 'bg-[#031531] text-[#c5cbd3] hover:bg-[#031531]' : ''}`}>
                {children}
            </button>
        </Link>
    )
}