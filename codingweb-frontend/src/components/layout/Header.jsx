import {Link} from 'react-router'
import Logo from '../../assets/image/logo.png'

function Header(){
    return(
        <div>
            <header className='bg-gradient-to-r from-[#26162b] to-purple-700 text-white flex h-[70px]'>
                <div className= 'flex-2'>
                    <img src= {Logo} alt="" className='h-18 inline-block'/>
                    <span className='text-[25px]'>CODEPLEASE</span>
                </div>
                <ul className='flex-5 flex space-x-7'>
                    <li className='flex items-end mb-[5px]'><Link to = '/' className='px-[3px] border-[2px]'>Trang Chủ</Link></li>
                    <li className='flex items-end mb-[5px]'><Link to = '/Source'>Bài Tập</Link></li>
                    <li className='flex items-end mb-[5px]'><Link to = '/About'>Giới Thiệu</Link></li>
                </ul>

                <ul className='flex-2 flex space-x-7'>
                    <li className='flex items-end mb-[5px]'><Link to = '/'>Đăng Nhập</Link></li>
                    <li className='flex items-end mb-[5px]'><Link to = '/Source'>Đăng ký</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header