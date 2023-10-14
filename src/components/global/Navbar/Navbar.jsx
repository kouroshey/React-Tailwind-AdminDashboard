import NavButtons from "./content/NavButtons"
import SearchBox from "./content/SearchBox"

const Navbar = ({darkModeTrigger}) => {
    return (
        <nav className="flex justify-between w-full mx-auto bg-milky dark:bg-bgDark border-b-2 items-center py-6 px-7 h-fit">
            {/* SEARCHBOX */}
            <div>
                <SearchBox />
            </div>

            {/* BUTTONS */}
            <div>
                <NavButtons darkModeTrigger={darkModeTrigger} />
            </div>
        </nav>
    )
}

export default Navbar