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
            <div className="basis-20 bg-white rounded-b-xl flex gap-3 items-center  justify-between px-3">
                <p className="text-gray-700 hover:cursor-pointer hover:text-teal-500 text-sm font-semibold tracking-wide truncate flex-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, dignissimos quo. Exercitationem asperiores, voluptas quidem sunt a quas, maxime delectus pariatur quaerat tempore nobis iure, accusantium explicabo dignissimos porro vitae!
                </p>
                {/* <p className="text-xs text-gray-400 basis-24 text-right">2 Hours Ago</p> */}
            </div>
        </div>
    </>
}