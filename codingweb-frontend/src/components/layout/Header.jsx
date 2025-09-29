import {Link} from 'react-router'
import Logo from '../../assets/image/logo.png'
import FontAwesomeIcon from '../ui/FontAwesomeIcon'






function Header({SideBarActive}){
    return(
        <div className='wapper border-b-1 border-[#7f7186]'>
            <header className='bg-gradient-to-r from-[#26162b] to-purple-700 text-white flex h-[70px]'>
                <div className= 'flex-8'>
                    <div className='inline-block' onClick={SideBarActive}><FontAwesomeIcon className='text-[20px] ml-[10px]' icon = 'faBars'/></div>
                    <img src= {Logo} alt="" className='h-full inline-block'/>
                    <span className='text-[30px]'>RE-ELSE</span>
                    <input type="text" name="search" id="search" className='bg-[#742791] rounded-[7px] ml-10 pr-10' placeholder="Search..."/>
                </div>
                <ul className='flex-1 flex space-x-7'>
                    <li className='flex items-end mb-[5px]'><Link to = '/'>Đăng Nhập</Link></li>
                    <li className='flex items-end mb-[10px]'><FontAwesomeIcon className='text-[20px]' icon = 'faUser'/></li>
                </ul>
            </header>
        </div>
    )
}

export default Header