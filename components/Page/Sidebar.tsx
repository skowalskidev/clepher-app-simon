import { SquareButton } from "../Actions/SquareButton"
import { Horseshoe } from "../Icons/Horseshoe"

export const Sidebar = () => {
    return (
        <nav className="hidden sm:block fixed menu border-r border-r-base-300 min-h-full bg-base-100 mt-16">
            <SquareButton href="/" active>
                <Horseshoe />
            </SquareButton>
        </nav>
    )
}