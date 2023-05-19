import Link from "next/link";

const pages = [
  { id: 1, link: "/about", name: "About" },
  { id: 2, link: "/about/team", name: "Team" },
  { id: 3, link: "/code/repos", name: "Code" },
];

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">alireza repos</Link>
      </div>
      <div>
        <ul>
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
