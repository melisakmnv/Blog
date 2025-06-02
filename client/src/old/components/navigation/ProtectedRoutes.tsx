import useUserStore from "@/old/store/useUserStore";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
    children: React.ReactNode;
}
export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {

    const { user } = useUserStore()

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <>{children}</>
    )
}
