import Image from "next/image";

import {Dropdown,DropdownButton,ListGroup} from "react-bootstrap"
import { HomeIcon,ArrowRightIcon } from "@heroicons/react/solid";
import {
  BookmarkIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
  const { data: session } = useSession();
  
  
     
       
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <img
        src="https://oniontable-com.netlify.app/images/logo.png" width={70} height={70} />
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
      <h4 className="font-bold text-xl px-4">Groups
      </h4>

      
      
  
      <button className="text-light hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
        Discover more Groups
      </button>
    </div>
     
      
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold text-dark">{session.user.name}</h4>
          <p className="text-[#6e767d] text-dark">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
