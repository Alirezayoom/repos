import Link from "next/link";

async function fetchRepoDirs(name) {
  const response = await fetch(
    `https://api.github.com/repos/alirezayoom/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoDirs(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div className="mt-6">
      <h2 className="text-xl">Directories:</h2>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>- {dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
