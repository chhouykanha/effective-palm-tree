
import Card from "../components/Card"
import { useFetch } from "../hooks/useFetch"

function Products() {
  const {products, isLoading, errorMsg} = useFetch()

  if(errorMsg){
    return (
       <div className="text-center my-10">
            <p>{errorMsg}</p>
       </div>
    )
  }

  if(isLoading){
    return (
       <div className="h-96 flex items-center justify-center">
           <div class="h-6 w-6 animate-spin rounded-full border-b-2 border-current" />
       </div>
    )
  }

  return (
    <>
       <section className="w-full p-4 lg:max-w-5xl lg:w-full  mx-auto">
         <h1 className="text-center text-4xl font-bold">Our Products</h1>
         <p className="text-center mt-1 text-lg">Explore our products</p>

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

export default Products
