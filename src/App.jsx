import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/global/Navbar/Navbar';
import Sidebar from './components/global/Sidebar/Sidebar';
// import Dashboard from './pages/dashboard';
// import Team from './pages/team';
// import Contacts from './pages/contacts';
// import Invoices from './pages/invoices';
// import Form from './pages/form';
// import Bar from './pages/bar';
// import Pi from './pages/pi';
// import Line from './pages/line';
// import Faq from './pages/faq';
// import Geography from './pages/geography';
// import Calendar from './pages/calendar';

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
        <main className='dark:bg-bgDark bg-milky text-bgDark dark:text-milky flex'>
            <Sidebar />
            <Navbar darkModeTrigger={darkModeTrigger} />

        </main>
    )
}

export default App