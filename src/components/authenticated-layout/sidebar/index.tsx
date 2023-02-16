import { faBookmark, faClock, faHeart, faUser } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { AiOutlineBook, AiOutlineClockCircle, AiOutlineFullscreenExit, AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { SidebarItem } from "./sidebarItem"
import {BiExit} from 'react-icons/bi';

export const Sidebar = () => {
    return <>
        <aside className=" basis-60 rounded-tl-2xl border bg-white/90 shadow-sm border-gray-100 flex flex-col">
            <div className="flex justify-center items-center basis-32 py-10
                text-6xl text-teal-400">
                <FontAwesomeIcon icon={faHeart} />
            </div>

            <div className="flex flex-col gap-2">
                <SidebarItem icon={<AiOutlineHome />} text="Home"  />
                <SidebarItem icon={<AiOutlineUser />} text="Favorite Users" />
                <SidebarItem icon={<AiOutlineBook />} text="Favorite Posts"/>
                <SidebarItem icon={<AiOutlineClockCircle />} text="History" />
                <SidebarItem icon={<BiExit />} text="Log Out" />
                {/* <SidebarItem /> */}
            </div>
        </aside>
    </>
}