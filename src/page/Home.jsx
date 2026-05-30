import Card from "../components/Card"
import { useFetch } from "../hooks/useFetch"
function Home() {
  const {products} = useFetch()

  return (
    <>

      <section className="min-h-screen bg-secondary flex items-center justify-center">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">New Collections</h3>
            <h1 className="text-5xl font-bold">Luxury Without Labels</h1>
            <p>Explore new-in product and best sellers</p>
            <button className="btn-primary">View Collection</button>
          </div>
      </section>

      <section className="w-full p-4 lg:max-w-5xl lg:w-full  mx-auto">
         <h1 className="text-center text-4xl font-bold">Best Seller</h1>
         <p className="text-center mt-1 text-lg">Explore our best seller products</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
              {
                 products.map((item) => (
                   <Card 
                      url={`/products/${item.id}`}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                   />
                 ))
              }
          </div>

      </section>
    
    </>
  )
}

export default Home
