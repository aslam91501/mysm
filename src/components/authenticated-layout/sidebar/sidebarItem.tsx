import { faHeart, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props{
    icon: IconDefinition,
    text: string
}

export const SidebarItem = (props: Props) => {
    return <>
        <div className="text-gray-600 text-sm flex gap-7 px-10 py-3 hover:cursor-pointer hover:bg-gray-100">
            <span><FontAwesomeIcon icon={props.icon} /></span>
            <span>{props.text}</span>
        </div>
    </>
}