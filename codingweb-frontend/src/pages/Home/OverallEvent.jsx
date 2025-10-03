
import pic1 from '../../assets/image/Home_img/pic1_OverallEvent.png'
import pic2 from '../../assets/image/Home_img/pic2_OverallEvent.png'


function OverallEvent(){

    const events = [
        {
            title: "Thử thách mỗi ngày"
        }
    ]

    return (
        <div className="h-[400px]">
            <div className="w-3/4 h-full ml-auto flex flex-row bg-[#2b2b2b] mt-40 rounded-l-4xl border-y-2 border-[#752984]">
                
                <div className="basis-2/3">

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