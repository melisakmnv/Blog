import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-muted-foreground">Oops! The page you're looking for doesn’t exist.</p>
            <Link to="/" className="mt-6 inline-block text-blue-600 underline">
                Go back home
            </Link>
        </div>
    )
}
