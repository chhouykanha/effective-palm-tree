function TopMenu({openSidebar}) {
  return (
    <div className="bg-white shadow h-12 flex items-center justify-between px-4">
         <div>
              <button onClick={openSidebar} className="p-1 bg-gray-100 focus:ring cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
              </button>
         </div>
         <div>
              <button className="px-4 py-1 bg-blue-200">ADMIN</button>
         </div>
    </div>
  )
}

export default TopMenu
