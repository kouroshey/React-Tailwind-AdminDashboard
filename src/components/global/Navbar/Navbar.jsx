import NavButtons from "./content/NavButtons"
import SearchBox from "./content/SearchBox"

const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto">
            {/* SEARCHBOX */}
            <div>
                <SearchBox />
            </div>

            {/* BUTTONS */}
            <div>
                <NavButtons />
            </div>
        </nav>
    )
}

export default Navbar