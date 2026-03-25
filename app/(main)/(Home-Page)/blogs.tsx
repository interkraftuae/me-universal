const articles = [
  {
    title: "Gorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function NewsAndContact() {
  return (
    <section className=" mt-20">
      <div className="container">
        {/* ================= NEWS SECTION ================= */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold font-montserrat tracking-wide">
            LATEST NEWS & ARTICLES
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm">
            Stay updated with the latest insights on smart building
            technologies, automation systems, and sustainable infrastructure
            solutions.
          </p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {articles.map((item, index) => (
            <div key={index} className="group">
              <div className="relative w-full h-66 overflow-hidden rounded">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>

              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>

              <button className="mt-3 text-indigo-600 text-sm flex items-center gap-1 hover:gap-2 transition">
                Read Article →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
