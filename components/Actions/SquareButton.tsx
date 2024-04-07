interface Props {
    children: React.ReactNode
    active?: boolean;
}

export const SquareButton = ({ children, active }: Props) => {
    return (
        <button className={`btn btn-square ${active ? 'bg-[#031531] text-[#c5cbd3] hover:bg-[#031531]' : ''}`}>
            {children}
        </button>
    )
}