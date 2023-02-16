export const UserTile = () => {
    return <>   
        <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-xl p-3">
            <div className="basis-20 w-20 rounded-full">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" alt=""
                    className="h-full w-full rounded-full" />
            </div>
            <span className=" hover:text-teal-500 hover:cursor-pointer text-sm">
                Oliver Queen
            </span>
        </div>
    </>
}