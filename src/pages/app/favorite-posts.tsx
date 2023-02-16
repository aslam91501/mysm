import { Post } from "@/components/post/brief";
import { faFireFlameCurved, faHouseFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillClockCircle, AiOutlineBook, AiOutlineClockCircle, AiOutlineFire, AiTwotoneClockCircle } from 'react-icons/ai';

export default function FavoritePosts(){
    return <>
        <div className="flex flex-col gap-5">
            <div className="px-10  py-5 flex items-center gap-3">
                <span className="text-teal-500 text-2xl">
                    <AiOutlineBook />
                </span>
                <h1 className="gradient-text font-bold text-2xl uppercase ">Favorite Posts</h1>
            </div>

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