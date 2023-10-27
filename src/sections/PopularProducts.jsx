import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat mt-2 text-slate-gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          magni animi ad laudantium quae ea necessitatibus qui alias, itaque
          numquam exercitationem esse assumenda non porro cumque sint
          cupiditate! Delectus, quis!
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            {...product}
          ></PopularProductCard>
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
