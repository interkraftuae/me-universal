import Image from "next/image";
import Link from "next/link";
const Logo = ({
  mode = "dark",
  className,
}: {
  className?: string;
  mode: "dark" | "light";
}) => {
  return (
    <Link href="/">
      <Image
        src={
          mode === "dark"
            ? "/logo/Logo-light-trans.png"
            : "/logo/mk_universal_no_bg.png"
        }
        width={100}
        height={100}
        className={className}
        alt={"MeUniversal Logo"}
      />
    </Link>
  );
};

export default Logo;
