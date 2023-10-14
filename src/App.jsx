import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/global/Navbar/Navbar';
import Sidebar from './components/global/Sidebar/Sidebar';

const App = () => {
    const [isDark, setIsDark] = useState(true);

    const darkModeTrigger = () => { setIsDark(prev => prev = !prev) }

    const rootElem = document.getElementById('root')

    useEffect(() => {
        if (isDark) {
            rootElem.className = 'dark'
        } else {
            rootElem.className = 'light'
        }
    }, [isDark])
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <Navbar darkModeTrigger={darkModeTrigger} />
                <main className='dark:bg-bgDark bg-milky text-bgDark dark:text-milky container'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default App