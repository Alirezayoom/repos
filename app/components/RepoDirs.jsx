import Link from "next/link";

async function fetchRepoDirs(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/alirezayoom/${name}/contents`,
    { next: { revalidate: 60 } }
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const dirs = await fetchRepoDirs(name);
  //   const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div className="mt-6">
      <h2 className="text-xl">Files & Directories:</h2>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            {/* <Link href={`/code/repos/${name}/${dir.path}`}>- {dir.path}</Link> */}
            - {dir.path}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
