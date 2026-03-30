import Image from "next/image";
const HeroSection = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <section className="h-[40dvh] container lg:h-[80dvh] mt-24 lg:mt-20 ">
      <div className=" rounded-xl overflow-hidden h-full relative">
        <Image src={`${img}`} fill alt={title} className="object-cover" />
        <div className="absolute inset-0 w-full h-full bg-black/60 " />
        <div className="w-full flex justify-center max-w-2xl mx-auto relative flex-col items-center gap-5 h-full ">
          <h1 className="text-4xl text-gray-100 font-medium text-center font-montserrat">
            {title}
          </h1>
          <p className="text-center text-gray-200 text-lg">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
