import React, { useEffect, useState } from 'react'

const App = () => {
    const [isDark, setIsDark] = useState(true);

    const darkModeTrigger = () => { setIsDark(prev => prev = !prev) }
    
    const rootElem = document.getElementById('root')

    useEffect(() => {
        if (isDark) {
            rootElem.className = 'dark'
            console.log('theme is dark')
        } else {
            rootElem.className = 'light'
            console.log('theme is light')
        }
    }, [isDark] )
    return (
        <div className=''>
            App
        </div>
    )
}

export default App