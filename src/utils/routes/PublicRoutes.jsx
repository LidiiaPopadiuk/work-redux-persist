import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { selectLogin } from "redux/users/usersSelectors"


export const PublicRoutes = ({ children, restricted = false }) => {
    const isLogin = useSelector(selectLogin)
    const shouldNavigate = isLogin && restricted
    return (
        shouldNavigate ? <Navigate to={"/list"} /> : children
    )

}