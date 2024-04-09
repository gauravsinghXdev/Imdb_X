import Menuitems from './Menuitems';
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <div className='flex justify-between px-10 py-7'>
        <div className='flex gap-4'>
          <Menuitems title="home" address="/" icon={FaHome} />
          <Menuitems title="about" address="/about" icon={FaCircleInfo} />
        </div>
        <div className=''>
          <span className='font-bold p-2 bg-amber-500 rounded-lg'>IMDb_X</span>
          <span className='text-xl hidden '></span>
        </div>
      </div>
    </>
  )
}


