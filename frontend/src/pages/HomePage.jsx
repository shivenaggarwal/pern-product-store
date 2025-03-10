import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore"
import { PlusCircleIcon, RefreshCcwDot } from "lucide-react";

const HomePage = () => {

  const {products, loading, error, fetchProducts} = useProductStore();

  useEffect(()=>{
    fetchProducts();
  }, [fetchProducts])

  // console.log("products", products)
  return (
    <main className= "max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <button className="btn btn-primary ">
          <PlusCircleIcon className="size-5 mr-2"/>
          Add Product
        </button>
        <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
          <RefreshCcwDot className="size-5"/>
        </button>
      </div>
    </main>
  )
}

export default HomePage