import { NextComponentType, NextPageContext } from "next"
import { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"

interface Props{
    children: ReactNode
}

export const AuthenticatedLayout = (props: Props) => {
    return <>
        <div className='default-gradient pt-5 px-5 bg-no-repeat min-h-screen'>
            <div className="bg-white shadow-lg min-h-screen w-full flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <Navbar />
                    <main className="bg-gray-50 flex-1">
                        { props.children }
                    </main>
                </div>
            </div>
        </div>
    </>
}