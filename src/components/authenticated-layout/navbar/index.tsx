import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavCreatePostButton } from "./createButton"
import { NavUserComponent } from "./navUser"
import { PostsViewedComponent } from "./postsViewed"

export const Navbar = () => {
    return <>
        <nav className="basis-24  flex justify-between items-center px-8 bg-gray-50">
            <PostsViewedComponent />
            <div className="flex gap-4 items-center">
                <NavCreatePostButton />
                <NavUserComponent />
            </div>
        </nav>
    </>
}