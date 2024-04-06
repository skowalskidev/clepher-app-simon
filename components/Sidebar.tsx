import { SquareButton } from "./SquareButton"
import { Horseshoe } from "./icons/Horseshoe"

export const Sidebar = () => {
    return (
        <nav className="fixed menu border-r border-r-base-300 min-h-full bg-base-100 mt-16">
            <SquareButton active>
                <Horseshoe />
            </SquareButton>
        </nav>
    )
}