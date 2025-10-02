import Option1 from '../../assets/image/Option-1.png'
import Option2 from '../../assets/image/Option-2.png'
import Option3 from '../../assets/image/Option-3.png'
import Button from "../../components/ui/Button.jsx"
import FontAwesomeIcon from '../../components/ui/FontAwesomeIcon.jsx'



function Options() {
    return (
        <div>
            <div className="w-3/4 m-auto text-white text-[40px] bg-[#27252c] rounded-[10px]">
                <p className="ml-5">Khám Phá</p>
            </div>
            <div className="flex flex-row h-[500px] shadow-md w-3/4 m-auto space-x-5 mt-[10px]">

                <div className='basis-1/3 relative  bg-[#2e1a4f] border-[#775780] border-3 rounded-[25px]'>
                    <img src={Option1} alt="" className="h-2/4 w-2/4 m-auto" />
                    <p className="text-center w-3/5 m-auto text-[#ffffff] text-[22px]">Học đi đôi với hành bắt đầu từ từng bài tập nhỏ</p>
                    <Button content="Get Started" className=" absolute bottom-3 right-3 text-white bg-[#0f0fef] px-3 rounded-2xl" />
                    <div className="inline-block px-5 absolute top-1 text-[white]">Bài Tập<FontAwesomeIcon icon = 'faBook' className='text-blue-500'/></div>
                </div>


                <div className='basis-1/3 relative  bg-[#2e1a4f] border-[#775780] border-3 rounded-[25px]'>
                    <img src={Option2} alt="" className="h-2/4 w-2/4  m-auto" />
                    <p className="text-center w-3/5 m-auto text-[#ffffff] text-[22px]">Mỗi sự kiện là một cơ hội, đừng bỏ lỡ</p>
                    <Button content="Get Started" className="absolute bottom-3 right-3 text-white bg-[#0f0fef] px-3 rounded-2xl" />
                    <div className="inline-block px-5 absolute top-1 text-[white]">Sự kiện<FontAwesomeIcon icon = 'faStar' className='text-yellow-500'/></div>
                </div>


                <div className='basis-1/3 relative  bg-[#2e1a4f] border-[#775780] border-3 rounded-[25px]'>
                    <img src={Option3} alt="" className="h-2/4 w-2/4  m-auto" />
                    <p className="text-center w-3/5 m-auto text-[#ffffff] text-[22px]">Xem lịch học để không bỏ lỡ buổi học quan trọng nào.</p>
                    <Button content="Get Started" className="absolute bottom-3 right-3 text-white bg-[#0f0fef] px-3 rounded-2xl" />
                    <div className="inline-block px-5 absolute top-1 text-[white]">Lịch<FontAwesomeIcon icon = 'faCalendar' className='text-white'/></div>
                </div>


            </div>
        </div>
    )
}


export default Options