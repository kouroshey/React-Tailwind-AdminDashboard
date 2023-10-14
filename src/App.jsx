import { useEffect, useState } from 'react'
import Navbar from './components/global/Navbar/Navbar';

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
    }, [isDark] )
    return (
        <main className='dark:bg-bgDark bg-milky text-bgDark dark:text-milky'>
            <Navbar />
        </main>
    )
}

export default App