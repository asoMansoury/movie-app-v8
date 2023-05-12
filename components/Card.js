import Image from "next/image";
import {HandThumbUpIcon} from "@heroicons/react/24/outline";
export default function Card({result,key}) {
    const BASE_URL ="https://image.tmdb.org/t/p/original"
  return (
    <div className="p-3 hover:text-white cursor-pointer active:text-red-400 xl:hover:scale-105 transition-transform duration-200">
            <Image
                layout="responsive"
                width={200}
                height={100}
                src ={BASE_URL + result.backdrop_path}
            ></Image>
            <div className="p-2">
                <p className="truncate text-lg">{result.overview}</p>
                <h2 className="text-lg font-bold">{result.title || result.name}</h2>
                <p className="flex items-center">{result.release_date || result.first_air_date}
                    <HandThumbUpIcon className="h-5 ml-3 mr-1"></HandThumbUpIcon>
                    {result.vote_count}
                </p>
            </div>
    </div>
  )
}
