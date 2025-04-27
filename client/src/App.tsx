
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { TooltipProvider } from './components/ui/tooltip'
import { ScrollToTop } from './components/ScrollTop'
<<<<<<< HEAD
=======

>>>>>>> c44e3ecfce11b03fdf34bafa466c2b8cf944db71
import ErrorBoundary from './components/ErrorBoundary'


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
