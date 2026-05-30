import { Navigate } from "react-router"

function ProtectedRoute({children}) {
  let token = localStorage.getItem("token")
  if(token){
     return children
  }else{
     return <Navigate to={`/login`} />
  }
}

export default ProtectedRoute
