import Image from "next/image";
const ProductRange = ({
  products,
  object = "cover",
  gradient = false,
}: {
  object?: string;
  gradient?: boolean;
  products: { label: string; img: string; lists: string[] }[];
}) => {
  return (
    <section className="mt-20">
      <div className="container">
        <h2 className="text-4xl font-montserrat mb-10 text-center">
          Product Range
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product, idx) => (
            <li key={idx}>
              <div
                className={`w-full h-[370px] relative  ${object === "cover" ? "bg-gray-300" : "bg-[radial-gradient(ellipse_at_center,white,white,#ebebeb80)]"}`}
              >
                <Image
                  src={`${product.img}`}
                  alt={product.label}
                  className={`object-${object}`}
                  fill
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-montserrat font-medium ">
                  {product.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {product.lists.map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductRange;
