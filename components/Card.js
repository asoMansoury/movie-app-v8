import Image from "next/image";
import {HandThumbUpIcon} from "@heroicons/react/24/outline";
export default function Card({result,key}) {
    const BASE_URL ="https://image.tmdb.org/t/p/original"
  return (
    <div>
        <h1>
            <Image
                layout="responsive"
                width={200}
                height={100}
                src ={BASE_URL + result.backdrop_path}
            ></Image>
            <div className="">
                <p className="truncate">{result.overview}</p>
                <h2 className="truncate">{result.title || result.name}</h2>
                <p>{result.release_date || result.first_air_date}
                    <HandThumbUpIcon className="h-5"></HandThumbUpIcon>
                    {result.vote_count}
                </p>

            </div>
        </h1>
    </div>
  )
}
