import Image from "next/image";
import { Circle } from "lucide-react";

const ProductRange = ({
  products,
  titleText,
}: {
  products: { img: string; title: string; desc: string; list: string[] }[];
  titleText: string;
}) => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex gap-8 justify-center items-start ">
          <div className="w-full mt-3 h-0.5 bg-primary" />
          <p className="text-primary">{titleText}</p>
        </div>

        <div className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 uppercase font-montserrat">
            Product Range
          </h2>
          <ul className="space-y-7 ">
            {products.map((product, idx) => (
              <li
                key={idx}
                className={`grid p-5 lg:p-10 bg-linear-to-b  ${idx % 2 === 1 ? "from-[#FFEDEE]" : "from-[#F7FAFF]"} items-center grid-cols-1 lg:grid-cols-2 gap-10`}
              >
                <div className="h-[320px] bg-gray-200 relative">
                  <Image src={`${product.img}`} alt={""} className="object-cover" fill />
                </div>

                <div>
                  <h2 className="text-2xl font-montserrat font-[500]">
                    {product.title}
                  </h2>
                  <p className="text-lg mt-6 text-primary">{product.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {product.list.map((item, id) => (
                      <li key={id} className="flex items-center gap-2">
                        <div>
                          <Circle className=" size-2 fill-black " />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
