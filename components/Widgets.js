import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";

function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5 ">
      

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12 ">
        <h4 className="font-bold text-xl px-4 ">News
        </h4>
        {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))}
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>

      
    </div>
  );
}

export default Widgets;
