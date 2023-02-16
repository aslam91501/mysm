import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavCreatePostButton = () => {
    return <>
        <button className="btn icon-btn text-white font-semibold
            default-gradient  hover:translate-y-[-4px] transition-all
            disabled:bg-slate-600 disabled:translate-y-0
            ">
            <span className="text-white">
                <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>New</span> 
        </button>
    </>
}