
// import { Outlet } from 'react-router-dom'
// import { Navbar } from './old/components/Navbar'
// import { Footer } from './old/components/Footer'

import { Outlet } from 'react-router-dom'
import ErrorBoundary from './old/components/ErrorBoundary'
import { ScrollToTop } from './old/components/ScrollTop'
import { TooltipProvider } from './old/components/ui/tooltip'


function App() {
    return (
        <ErrorBoundary>
                <TooltipProvider>
                    <ScrollToTop />
                    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                        <Outlet />
                    </div>
                </TooltipProvider>
        </ErrorBoundary>
    )
}

export default App
