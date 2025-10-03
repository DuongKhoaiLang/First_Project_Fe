
import pic1 from '../../assets/image/Home_img/pic1_OverallEvent.png'
import pic2 from '../../assets/image/Home_img/pic2_OverallEvent.png'
import bg1 from '../../assets/image/Home_img/bg1-Event.png'
import bg2 from '../../assets/image/Home_img/bg2-Event.png'
import bg3 from '../../assets/image/Home_img/bg3-Event.png'
import bg4 from '../../assets/image/Home_img/bg4-Event.png'
import bg5 from '../../assets/image/Home_img/bg5-Event.png'
import cat_Gif from '../../assets/image/Home_img/cat2.gif'
import './OverallEvent.css'


function OverallEvent(){

    const eventList = [
        {
            title: "Cuộc Thi Lập Trình",
            src:bg1
        },
        {
            title: "Thử thách hằng ngày",
            src:bg2
        },
        {
            title: "Diễn đàn lập trình re-else",
            src:bg3
        },
        {
            title: "Quiz và câu hỏi trắc nghiệm",
            src:bg4
        },
        {
            title: "Trò chơi lập trình re-else",
            src:bg5
        },        
    ]

    return (
        <div className="h-[400px]">
            <div className="w-3/4 h-full ml-auto flex flex-row bg-gradient-to-r from-[#2b2b2b] to-[#4242fd] mt-30 rounded-l-4xl border-y-2 border-l-2 border-[#752984]">
                
                <div className="basis-2/3 flex space-x-7 justify-center items-baseline-last relative">
                    <img src={cat_Gif} alt="" className='size-20 top-0 absolute right-0' id='sticker'/>
                    <p className='absolute top-15 font-bold text-white text-[35px]'>Các chủ đề nổi bật</p>
                    {
                        eventList.map((eventItem,index) => (
                            <div key={index} className='flex flex-col w-[100px] h-[120px] mb-8 hover:scale-[110%] cursor-pointer'>
                                <div className='basis-1/2 w-[100px] h-[100px]'>
                                    <img src={eventItem.src} alt="" className='h-full w-full object-cover rounded-4xl shadow-xl/30'/>
                                </div>
                                <div className='basis-1/2 w-full h-[20px] text-[12px] text-white text-center'>
                                    <p>{eventItem.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="basis-1/3 flex items-end mr-20">
                    <img src={pic2} alt="" className='h-3/4'/>
                    <img src={pic1} alt="" className='size-35 mb-3'/>
                </div>
            </div>
        </div>
    )

}


export default OverallEvent