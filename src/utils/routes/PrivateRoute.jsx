import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { selectLogin } from "redux/users/usersSelectors"

export const PrivateRoute = ({ children }) => {
    const isLogin = useSelector(selectLogin)
    return (
        isLogin ? children : <Navigate to={"/"} />
    )
}