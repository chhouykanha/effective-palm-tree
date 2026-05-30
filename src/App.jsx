import { BrowserRouter, Routes, Route } from "react-router"
import UserLayout from "./layout/UserLayout"
import Home from "./page/Home"
import Products from "./page/Products"
import About from "./page/About"
import Contact from "./page/Contact"
import ProductDetail from "./page/ProductDetail"
import UserCart from "./page/UserCart"
import CheckOut from "./page/CheckOut"
import Login from "./page/Login"
import AuthLayout from "./layout/AuthLayout"
import ProtectedRoute from "./layout/ProtectedRoute"
import AuthRoute from "./layout/AuthRoute"
import AdminLayout from "./layout/AdminLayout"
import Dashboard from "./page/admin/Dashboard"
function App() {
  return (
    <>
        <BrowserRouter>

          <Routes>
               
               <Route path="/" element={ <ProtectedRoute> <UserLayout/> </ProtectedRoute> }>
                  <Route index element={<Home/>}/>
                  <Route path="/products" element={<Products/>} />
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/products/:id" element={<ProductDetail />}/>
                  <Route path="/cart" element={<UserCart />}/>
                  <Route path="/checkout" element={<CheckOut />}/>
               </Route>

               <Route path="/login" element={ <AuthRoute> <AuthLayout /> </AuthRoute>}>
                   <Route index element={<Login />}/>
               </Route>

                <Route path="/admin" element={ <ProtectedRoute> <AdminLayout /> </ProtectedRoute>}>
                    <Route index  element={<Dashboard />}/>
                </Route>


          </Routes>

        </BrowserRouter>
    
    </>
  )
}

export default App
