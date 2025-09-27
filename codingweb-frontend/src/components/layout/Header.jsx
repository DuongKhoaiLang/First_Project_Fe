import {Link} from 'react-router'
import Logo from '../../assets/image/logo.png'
import Usericon from '../ui/Usericon'


function Header(){
    return(
        <div className='wapper font-serif'>
            <header className='bg-gradient-to-r from-[#26162b] to-purple-700 text-white flex h-[70px]'>
                <div className= 'flex-2'>
                    <img src= {Logo} alt="" className='h-[100%] inline-block'/>
                    <span className='text-[22px]'>CODEPLEASE</span>
                </div>
                <ul className='flex-5 flex space-x-7'>
                    <li className='flex items-end mb-[5px]'><Link to = '/' >Trang Chủ</Link></li>
                    <li className='flex items-end mb-[5px]'><Link to = '/Source' >Bài Tập</Link></li>
                    <li className='flex items-end mb-[5px]'><Link to = '/Event' >Sự kiện</Link></li>
                    <li className='flex items-end mb-[5px]'><Link to = '/About' >Giới Thiệu</Link></li>
                </ul>

                <ul className='flex-2 flex space-x-7'>
                    <li className='flex items-end mb-[5px]'><Link to = '/'>Đăng Nhập</Link></li>
                    <li className='flex items-end mb-[5px]'><Link to = '/'>Đăng ký</Link></li>
                    <li className='flex items-end mb-[10px]'><Usericon className='text-[20px]'/></li>
                </ul>
            </header>
        </div>
    )
}

export default Header