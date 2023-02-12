import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavCreatePostButton = () => {
    return <>
        <button className="px-5 py-2 text-sm font-semibold text-white 
            default-gradient rounded-full hover:translate-y-[-4px] transition-all
            disabled:bg-slate-600 disabled:translate-y-0
            flex items-center gap-2">
            <span className="text-white">
                <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>New</span> 
        </button>
    </>
}