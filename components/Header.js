import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon} from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div>
        <div className="">
          <HeaderIcon Icon={HomeIcon} title="HOME"></HeaderIcon>
          <HeaderIcon Icon={UserIcon} title="ACCOUNT"></HeaderIcon>
          <HeaderIcon Icon={PhoneIcon} title="CONTACT"></HeaderIcon>
          <HeaderIcon Icon={InformationCircleIcon} title="ABOUNT"></HeaderIcon>
        </div>
        <Image 
          width={100} 
          height={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png?20200406194337"
        ></Image>
    </div>
  )
}
