import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function DevelopedBy() {
  return (
    <div className="flex justify-center items-center bg-white px-4 py-4 border-b border-b-[#e6ebf4]">
      <div className="flex-1 ">
        Developed by &nbsp;
        <Link
          className="underline text-blue-500"
          href={"https://twitter.com/risesumit"}
        >
          Er. Sumit KR.
          <sup className=" inline-flex">
            <ArrowTopRightOnSquareIcon className="w-3 h-3 text-blue-500" />
          </sup>
        </Link>
      </div>
    </div>
  );
}

export default DevelopedBy;
