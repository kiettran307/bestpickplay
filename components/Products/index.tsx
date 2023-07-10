import { SingleProduct } from "./SingleProduct";
import ProductData from "./data";

export function Products(): JSX.Element {
  return (
    <section id="products" className="py-16 lg:px-24 px-7 lg:py-28">
      <div className="container flex justify-center">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
          {
            ProductData.map((item, i): JSX.Element => {
              return (
                <SingleProduct product={item} key={i}/>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}
