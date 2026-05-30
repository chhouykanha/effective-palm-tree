import { Link } from "react-router"

function Sidebar({isActive}) {
  return (
    <div className={`${isActive ? 'w-65' : 'w-0'} transition-all duration-300 bg-slate-700 min-h-screen`}>
            <div className="bg-red-500 text-white h-12 flex items-center justify-center text-xl">
                 MasterIT
            </div>

            <ul className="text-white">
                    <li className="w-full">
                         <Link to={`/admin`} className="p-2 hover:bg-slate-600/60 w-full block">Dashboard</Link>
                    </li>
                    <li>
                         <Link to={`/admin`} className="p-2 hover:bg-slate-600/60 w-full block">Orders</Link>
                    </li>
            </ul>
    </div>
  )
}

export default Sidebar
