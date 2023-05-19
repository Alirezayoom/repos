import Link from "next/link";
import Image from "next/image";

const pages = [
  { id: 1, link: "/about", name: "About" },
  { id: 2, link: "/about/team", name: "Team" },
  { id: 3, link: "/code/repos", name: "Code" },
];

const Header = () => {
  return (
    <header className=" bg-[#222] py-8 px-4 mx-auto">
      <div className="mb-4 mx-auto w-max">
        <Link href="/">
          <Image src="/ak.svg" width="50" height="50" />
        </Link>
      </div>
      <div className="grid justify-center">
        <ul className="flex gap-4">
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={page.link}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
