import { useNavigate } from "react-router"

function UserCart() {
  const navigate = useNavigate()
  const handleCheckOut = () => {
     navigate("/checkout")
  }

  return (
    <div className="px-8 lg:px-20 min-h-screen py-10">
        <h1 className="text-3xl font-bold">Your Cart</h1>

        <div className="grid grid-cols-12 gap-4 mt-8">
             <div className="col-span-12 lg:col-span-8">

                 <table className="w-full rounded-md overflow-hidden">
                    <thead>
                        <tr>
                            <th className="text-left p-2 bg-gray-100">Product</th>
                            <th className="text-left p-2 bg-gray-100">Unit Price</th>
                            <th className="text-left p-2 bg-gray-100">Quantity</th>
                            <th className="text-left p-2 bg-gray-100">Sub Total</th>
                            <th className="text-left p-2 bg-gray-100">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-left p-2 flex gap-2">
                                <img className="w-10 h-10 rounded-md" src="https://storage.ratanakaphivath.com/images/1777526086334-_______________________________________________.png" alt="" />
                                <h1>Avacado (Ratanakiri)</h1>
                            </td>
                            <td className="text-left p-2">$2.00</td>
                            <td className="text-left p-2">
                                <div className="flex gap-2">
                                    <button className="btn-cart">-</button>
                                    <button className="btn-cart text-xs">1</button>
                                    <button className="btn-cart">+</button>
                                </div>
                            </td>
                            <td className="text-left p-2">$2.00</td>
                            <td className="text-left p-2">
                                x
                            </td>
                        </tr>
                    </tbody>
                 </table>

             </div>
             <div className="shadow border p-2 border-gray-100 rounded-md col-span-12 lg:col-span-4">
                  <div className="flex items-center justify-between">
                        <p>Total: </p>
                        <p>$2.00</p>
                  </div>
                  <hr className="my-4"/>
                  <div className="flex items-center justify-end">
                        <button onClick={handleCheckOut} className="btn-primary">CheckOut</button>
                  </div>
             </div>
        </div>

    </div>
  )
}

export default UserCart
