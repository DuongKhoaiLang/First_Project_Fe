
import pic_Schedule from '../../assets/image/Home_img/schedule.png'
import sticker from '../../assets/image/Home_img/scheduleSticker.gif'



function Overallschedule(){
    return (
        <div className="h-[400px] flex flex-row w-3/4 bg-gradient-to-r from-[#be2424] to-[#d2d228] mt-30 rounded-r-4xl border-y-2 border-r-2 border-[#752984]">
            
            <div className='basis-1/2 ml-10 mt-5 relative'>
                <p className='font-bold text-white text-[35px]'>Lịch</p>
                <p className='text-2xl text-white mt-5'>Tính năng Xem lịch học giúp bạn quản lý thời gian học tập dễ dàng và khoa học. Lịch học được hiển thị trực quan theo ngày, tuần hoặc tháng, kèm thông báo nhắc nhở để bạn không bỏ lỡ bất kỳ buổi học nào</p>
                <img src={sticker} alt="" className='size-15 absolute left-1/4 top-0'/>
                <button className='absolute bottom-5 right-5 text-white bg-[#0f0fef] px-3 rounded-3xl cursor-pointer'>Truy Cập</button>
            </div>


            <div className='basis-1/2 flex justify-center items-center'>
                <img src={pic_Schedule} alt="" className='h-3/4 w-3/4 object-contain'/>
            </div>


        </div>
    )
}


export default Overallschedule