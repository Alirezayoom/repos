import Link from "next/link";
import Image from "next/image";

const pages = [
  { id: 1, link: "/about", name: "About" },
  { id: 3, link: "/code/repos", name: "Code" },
];

const Header = () => {
  return (
    <header className="bg-[#222] p-4">
      <div className="max-w-[40rem] mx-auto flex justify-between">
        <div className="w-max">
          <Link href="/">
            <Image src="/ak.svg" width="32" height="32" />
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-4">
            {pages.map((page) => (
              <li key={page.id}>
                <Link href={page.link}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
