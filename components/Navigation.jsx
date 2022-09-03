import Link from "next/link";

const Navigation = () => {
  return (
    <div className="p-20 flex flex-col font-bold text-[90px] text-white h-3/4 border justify-between">
      <Link href="" passHref>
        <a>Hello!</a>
      </Link>
      <Link href="" passHref>
        <a>I'm</a>
      </Link>
      <Link href="" passHref>
        <a>Leon</a>
      </Link>
    </div>
  );
};

export default Navigation;
