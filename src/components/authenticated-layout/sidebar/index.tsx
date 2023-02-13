import { faBookmark, faClock, faHeart, faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { SidebarItem } from "./sidebarItem"

export const Sidebar = () => {
    return <>
        <aside className="basis-72 border border-gray-100 flex flex-col">
            <div className="flex justify-center items-center basis-1/6 py-10">
                <img src="/logo.svg" alt="Logo" className="w-3/4"  />
            </div>

            <div className="flex flex-col gap-2">
                <SidebarItem icon={faUser} text="Favorite Users" />
                <SidebarItem icon={faBookmark} text="Favorite Posts"/>
                <SidebarItem icon={faClock} text="History" />
                {/* <SidebarItem /> */}
            </div>
        </aside>
    </>
}