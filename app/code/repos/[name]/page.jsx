import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoDetail = ({ params: { name } }) => {
  console.log(name);

  return (
    <div className="max-w-[40rem] mx-auto p-4 bg-[#222] my-8">
      <div className="mb-4 border-b-[1px] pt-2 pb-4">
        <Link href="/code/repos" className="bg-[#333] rounded-lg py-2 px-4">
          Go Back
        </Link>
      </div>
      <Suspense fallback={<div className="mt-6">Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div className="mt-6">Loading Dirs...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoDetail;
