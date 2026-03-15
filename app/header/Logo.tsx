import Image from "next/image";

const Logo = ({
  mode = "dark",
  className,
}: {
  className?: string;
  mode: "dark" | "light";
}) => {
  return (
    <Image
      src={mode === "dark" ? "/logo/logo-light.png" : "/logo/logo-dark.png"}
      width={120}
      height={120}
      className={className}
      alt={"MeUniversal Logo"}
    />
  );
};

export default Logo;
