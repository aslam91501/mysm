import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavCreatePostButton } from "./createButton"
import { NavUserComponent } from "./navUser"
import { PostsViewedComponent } from "./postsViewed"

export const Navbar = () => {
    return <>
        <nav className="basis-24 bg-transparent  flex justify-between items-center px-8 bg-gray-50">
            {/* <PostsViewedComponent /> */}
            <div className="flex">
                <input type="text" name="" id="" placeholder="Search.." 
                    className="rounded-full text-sm px-5 bg-gray-200 border-gray-200
                        focus:outline-none focus:ring-0 focus:border-0"  />
                <button className="btn text-gray-600"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="flex gap-4 items-center">
                <NavCreatePostButton />
                <NavUserComponent />
            </div>
        </nav>
    </>
}