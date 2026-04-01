import Link from "next/link";
const FeaturedProduct = () => {
  const product = [
    {
      label: "Electric Towel Warmer",
      img: "/products/towel-warmer/compact-towel.webp",
      link: "/products/electric-towel-warmer",
    },
    {
      label: "Push Pull Door Locks",
      img: "/products/push-pull-locks/Mechanical-Accessibility-Lock-System.webp",
      link: "/products/push-pull-door-locks",
    },
    {
      label: "Kitchen Air Conditioner",
      img: "/products/kitchen-ac/banner.webp",
      link: "/products/kitchen-air-conditioner",
    },
  ];
  return (
    <div className="bg-[#15141D] mt-20 py-20">
      <div className="container">
        <h1 className="text-gray-200 font-semibold tracking-tight text-4xl mb-10 text-center font-montserrat">
          Our Featured Products
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {product.map((item, key) => (
            <Link href={item.link} key={key}>
              <div className="h-[400px] relative">
                <h2 className="absolute bottom-0 left-1/2 py-8 bg-linear-to-t from-[#15141D] from-20% font-semibold via-80% via-[#15141D]/80 w-[105%] text-center -translate-x-1/2 text-white ">
                  {item.label}
                </h2>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
