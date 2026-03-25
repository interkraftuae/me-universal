const FeaturedProduct = () => {
  const product = [
    {
      label: "Fingerprint Sensor",
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      label: "Fingerprint Sensor",
      img: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      label: "Fingerprint Sensor",
      img: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="bg-[#15141D] mt-20 py-20">
      <div className="container">
        <h1 className="text-gray-200 tracking-tight text-5xl mb-10 text-center font-montserrat">
          Our Featured Products
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {product.map((item, key) => (
            <div key={key} className="h-[400px] relative">
              <h2 className="absolute bottom-0 left-1/2 py-8 bg-linear-to-t from-[#15141D] from-20% font-semibold via-80% via-[#15141D]/80 w-[105%] text-center -translate-x-1/2 text-white ">
                {item.label}
              </h2>
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
