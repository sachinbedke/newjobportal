import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AdminProtected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    return (user && user.role === "admin") ? compo : <Navigate to="/login" />
}
export default AdminProtected