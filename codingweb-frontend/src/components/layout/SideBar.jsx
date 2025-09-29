import { Link } from "react-router"

import FontAwesomeIcon from "../ui/FontAwesomeIcon"


function SideBar() {
    return (
        <div className="m-5 shadow-md basis-1/5">
            <ul className="m-auto">
                <li className='h-[48] text-[20px] p-2 border-t-1 border-[#e9dada]'><Link to='/' ><FontAwesomeIcon icon = 'faHouse' className='mr-[5px]'/>Trang Chủ</Link></li>
                <li className='h-[48] text-[20px] p-2 border-t-1 border-[#e9dada]'><Link to='/Source' ><FontAwesomeIcon icon = 'faBook' className='mr-[5px]'/>Bài Tập</Link></li>
                <li className='h-[48] text-[20px] p-2 border-t-1 border-[#e9dada]'><Link to='/Event' ><FontAwesomeIcon icon = 'faStar' className='mr-[5px]'/>Sự kiện</Link></li>
                <li className='h-[48] text-[20px] p-2 border-t-1 border-[#e9dada]'><Link to='/' ><FontAwesomeIcon icon = 'faCalendar' className='mr-[5px]'/>Lịch</Link></li>
                <li className='h-[48] text-[20px] p-2 border-t-1 border-[#e9dada]'><Link to='/' ><FontAwesomeIcon icon = 'faFile' className='mr-[5px]'/>Tập tập riêng tư</Link></li>
            </ul>
        </div>
    )
}


export default SideBar