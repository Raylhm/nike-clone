import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
const PopularProducts = () => {
  return (
    <div>
      <section id="products" className="max-container mx-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold"> Our  
            <span className="text-coral-red"> Popular</span> products</h2>
          <p className="lg:max-w-lg mt-2
          font-montserrat text-slate-gray">Experience top-notch quality
             and style with our sought-after 
             selections. Discover a world of 
             comfot, design, and value</p>
        </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
    sm:gap-4 gap-14">
          {products.map((product) => (
            <PopularProductCard key= {product.name} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default PopularProducts