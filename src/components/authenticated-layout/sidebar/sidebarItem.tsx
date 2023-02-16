import { faHeart, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"

interface Props{
    icon: IconDefinition | ReactNode,
    text: string
}

export const SidebarItem = (props: Props) => {
    return <>
        <div className="text-gray-600  items-center flex gap-5 px-10 py-3 hover:cursor-pointer hover:text-teal-600">
            <span className="basis-4 ">
                {/* <FontAwesomeIcon icon={props.icon as IconDefinition} /> */}
                { props.icon as ReactNode }
            </span>
            <span className="text-sm">{props.text}</span>
        </div>
    </>
}