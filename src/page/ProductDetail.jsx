import { useParams } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { useFetchOne } from "../hooks/useFetchOne";

function ProductDetail() {
  let route = useParams();
  let {product, errorMsg, isLoading} = useFetchOne(route.id)

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


  const items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title },
  ];


  return (
    <>
      <Breadcrumbs items={items} />
      {product.title}
    </>
  );
}

export default ProductDetail;
