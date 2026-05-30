import { Heart, Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()
  const openNavbar = () => {
    setIsActive(true);
  };
  const closeNavbar = () => {
    setIsActive(false);
  };

  const handleSignout = () => {
     localStorage.removeItem("token")
     navigate("/login")
  }

  return (
    <>
      <div className="bg-slate-950 text-white text-center py-2 text-sm">
        🚚 Free shipping on orders over{" "}
        <span className="text-red-600 font-semibold">50$</span> 🌟
      </div>
      <div className="shadow h-[70px] flex items-center justify-between px-4 lg:px-20">
        <div className="flex items-center gap-2">
          <button onClick={openNavbar} className="inline-block lg:hidden">
            <Menu />
          </button>
          <div className="font-bold">Master Store</div>
        </div>
        <nav className="space-x-4 hidden lg:inline-block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline decoration-amber-500" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "underline decoration-amber-500" : ""
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline decoration-amber-500" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline decoration-amber-500" : ""
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Heart />
          <Link to={`/login`}>
            <User />
          </Link>
          <Link to={`/cart`}>
            <ShoppingCart />
          </Link>
          <button onClick={handleSignout} className="btn-primary bg-red-500">
              Sign Out
          </button>
        </div>
      </div>

      <div
        className={`${isActive ? "left-0" : "-left-full"} transition-all duration-300 bg-slate-800 text-white w-[260px] min-h-screen p-4 absolute top-0  block lg:hidden`}
      >
        <div className="flex items-center justify-end">
          <button
            onClick={closeNavbar}
            className=" w-10 h-10 flex items-center justify-center border border-dashed border-white rounded-full hover:bg-white/10"
          >
            <X className="w-5" />
          </button>
        </div>
        <nav className="space-x-4 flex flex-col">
          <NavLink to="/" 
            className={({isActive}) => isActive ? 'w-full p-2 rounded-lg bg-white/10 ' :  'p-2 rounded-full hover:bg-white/10' }>
            Home
          </NavLink>
          <NavLink
            to="/products"
            
           className={({isActive}) => isActive ? 'w-full p-2 rounded-lg bg-white/10 ' :  'p-2 rounded-lg hover:bg-white/10' }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) => isActive ? 'w-full p-2 rounded-lg bg-white/10 ' :  'p-2 rounded-full hover:bg-white/10' }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive}) => isActive ? 'w-full p-2 rounded-lg bg-white/10 ' :  'p-2 rounded-full hover:bg-white/10' }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
