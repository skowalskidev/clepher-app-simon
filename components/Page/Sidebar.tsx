import { SquareButton } from "../Actions/SquareButton"
import { Horseshoe } from "../Iconsx/Horseshoe"

export const Sidebar = () => {
    return (
        <nav className="hidden sm:block fixed menu border-r border-r-base-300 min-h-full bg-base-100 mt-16">
            <SquareButton active>
                <Horseshoe />
            </SquareButton>
        </nav>
    )
}