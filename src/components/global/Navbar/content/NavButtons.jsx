import { HiOutlineMoon, HiOutlineBell, HiOutlineCog8Tooth, HiOutlineUser } from 'react-icons/hi2'
const NavButtons = ({ darkModeTrigger }) => {
    
    const toggleDarkMode = () => {
        darkModeTrigger()
    }
    return (
        <div className='flex justify-between container text-bgDark dark:text-milky text-2xl gap-4 hover:cursor-pointer'>
            <HiOutlineMoon onClick={toggleDarkMode} className='transition-all ease-in-out hover:scale-105'/>
            <HiOutlineBell className='transition-all ease-in-out hover:scale-105'/>
            <HiOutlineCog8Tooth className='transition-all ease-in-out hover:scale-105'/>
            <HiOutlineUser className='transition-all ease-in-out hover:scale-105'/>
        </div>
    )
}

export default NavButtons