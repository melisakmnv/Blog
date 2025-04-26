
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { TooltipProvider } from './components/ui/tooltip'
import { ScrollToTop } from './components/ScrollTop'
import { Suspense } from 'react'

import ErrorBoundary from './components/ErrorBoundary'
import { Testing } from './testing/Testing'

function App() {
    return (
        <ErrorBoundary>
            <Suspense>
                <TooltipProvider>
                    <ScrollToTop />
                    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                        <Navbar />
                        <Testing />
                        <Outlet />
                        <Footer />
                    </div>
                </TooltipProvider>
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
