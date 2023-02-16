import { Post } from "@/components/post/brief";
import { faFireFlameCurved, faHouseFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineClockCircle, AiOutlineFire } from 'react-icons/ai';

export default function TrendingPostsPage(){
    return <>
        <div className="flex flex-col gap-5">
            <section className="basis-20 flex items-center justify-center gap-2">
                <button className="btn icon-btn default-gradient text-white border-gray-600 shadow-sm hover:translate-y-[-3px]
                    transition-all">
                    <span>
                        <AiOutlineFire />
                    </span>
                    <span>
                        Trending 
                    </span>
                </button>
                <button className="btn icon-btn bg-white border-gray-600 shadow-sm text-teal-500 hover:translate-y-[-3px]
                    transition-all">
                    <span>
                        <AiOutlineClockCircle />
                    </span>
                    <span>
                        New
                    </span>
                </button>
            </section>

            <section className="flex-grow grid grid-cols-3
                gap-5 px-10">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        </div>
    </>
}