import Link from "next/link";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/alirezayoom/repos"
  );
  const data = await response.json();
  return data;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div className="max-w-[40rem] mx-auto">
      <h1 className="text-3xl text-center py-6">My Repositories</h1>
      <ul className="grid gap-4">
        {repos.map((repo) => (
          <li key={repo.id} className="bg-[#222] p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">
                <Link href={`/code/repos/${repo.name}`}>{repo.name}</Link>
              </h2>
              <div className="flex items-center gap-1 bg-[#333] text-white p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {repo.stargazers_count}
              </div>
            </div>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
