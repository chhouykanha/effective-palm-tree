function CheckOut() {
  return (
    <div className="px-8 lg:px-20 min-h-screen py-10">
        <h1 className="text-3xl font-bold">CheckOut Your Product</h1>

        <div className="grid grid-cols-12 gap-4 mt-8">
             <div className="col-span-12 lg:col-span-8">
                    <form className="grid grid-cols-2 gap-2">
                        <input type="text" className="w-full border border-gray-200 rounded-md p-2" placeholder="Your name" />
                        <input type="text" className="w-full border border-gray-200 rounded-md p-2" placeholder="Your phone" />
                        <input type="text" className="w-full border border-gray-200 rounded-md p-2" placeholder="Your address" />
                        <input type="text" className="w-full border border-gray-200 rounded-md p-2" placeholder="Delivery location" />
                    </form>
             </div>
             <div className="shadow border p-2 border-gray-100 rounded-md col-span-12 lg:col-span-4">
                  <div className="flex items-center justify-between">
                        <p>Total: </p>
                        <p>$2.00</p>
                  </div>
                  <hr className="my-4"/>
                  <div className="flex items-center justify-end">
                        <button className="btn-primary">Pay</button>
                  </div>
             </div>
        </div>

    </div>
  )
}

export default CheckOut
