export const NavUserComponent = () => {
    return <>
        <div className="pr-5 flex items-center gap-2 hover:cursor-pointer
            bg-white rounded-full p-2 shadow-sm  hover:translate-y-[-4px] transition-all">
            <div className="rounded-full h-10 w-10">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" 
                    alt="Profile Image"
                    className="rounded-full h-full w-full" />
            </div>
            <span className="text-sm">Bruce Wayne</span>
        </div>
    </>
}