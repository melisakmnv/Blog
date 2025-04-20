
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { TooltipProvider } from './components/ui/tooltip'
import { ScrollToTop } from './components/ScrollTop'
import { Suspense } from 'react'

function App() {
    return (
        <Suspense>
            <TooltipProvider>
                <ScrollToTop />
                <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </TooltipProvider>
        </Suspense>
    )
}

export default App
