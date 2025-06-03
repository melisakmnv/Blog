
// import { Outlet } from 'react-router-dom'
// import { Navbar } from './old/components/Navbar'
// import { Footer } from './old/components/Footer'

import { Outlet } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { ScrollToTop } from './components/ScrollTop'
import { TooltipProvider } from './components/ui/tooltip'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'


function App() {
    return (
        <ErrorBoundary>
            <TooltipProvider>
                <ScrollToTop />
                <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </TooltipProvider>
        </ErrorBoundary>
    )
}

export default App
