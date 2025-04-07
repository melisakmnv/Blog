
import { Outlet } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar'

function App() {


    return (
        <>
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default App
