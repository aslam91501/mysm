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
            <div className="bg-white rounded-2xl shadow-lg min-h-screen w-full flex">
                <Sidebar />
                <div className="flex flex-col flex-1 bg-gray-50 rounded-tr-2xl">
                    <Navbar />
                    <main className="flex-1">
                        { props.children }
                    </main>
                </div>
            </div>
        </div>
    </>
}