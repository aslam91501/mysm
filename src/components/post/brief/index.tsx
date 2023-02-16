export const Post = () => {
    return <>
        <div className="flex flex-col border-gray-100 rounded-xl  bg-white shadow-sm
             transition-all  ">
            <div className="basis-52 bg-teal-600 bg-center border-t-gray-200 bg-cover rounded-t-xl "
                style={{ backgroundImage: "url('https://media.istockphoto.com/id/1364222624/photo/big-group-of-happy-friends-stands-together-on-city-street-with-raised-arms-multiracial-young.jpg?b=1&s=170667a&w=0&k=20&c=qTS25ZxQpsr2rM1XdiHvSOyXnGY7PDxHH56NQutwAHc=')" }}>
                 {/* > */}
                    {/* <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" 
                        alt="" className="h-full w-full rounded-t-xl transition-all" />  */}
            </div>
            <div className="basis-24 bg-white rounded-b-xl flex flex-col gap-4 py-3 px-3">
                <p className="text-gray-700 hover:cursor-pointer truncate hover:text-teal-500 text-sm  tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, dignissimos quo. Exercitationem asperiores, voluptas quidem sunt a quas, maxime delectus pariatur quaerat tempore nobis iure, accusantium explicabo dignissimos porro vitae!
                </p>
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" 
                        className="h-full w-full rounded-full" />
                    </div>
                    <span className="text-xs text-gray-800 font-semibold tracking-wide">John Doe</span>
                    <p className="text-xs text-gray-400 ">2 Hours Ago</p>
                </div>
            </div>
        </div>
    </>
}