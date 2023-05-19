import Repo from "@/app/components/Repo";
import Link from "next/link";

const RepoDetail = ({ params: { name } }) => {
  console.log(name);

  return (
    <div className="max-w-[40rem] mx-auto p-4 bg-[#222] my-8">
      <div className="mb-4 border-b-[1px] py-1">
        <Link href="/code/repos">Go Back</Link>
      </div>
      <Repo name={name} />
    </div>
  );
};

export default RepoDetail;
