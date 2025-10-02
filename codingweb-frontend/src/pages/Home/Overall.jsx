import pic_Overall from '../../assets/image/Home_img/Overall-1.png'
import pic_BasicPrograming from '../../assets/image/Home_img/BasicPropraming.png'
import pic_DataStructure from '../../assets/image/Home_img/DataStructure.png'
import pic_GraphTheory from '../../assets/image/Home_img/GraphTheory.png'
import Carousel from '../../components/ui/Carousel.jsx'







function Overall() {


    const sildes = [
        pic_BasicPrograming,
        pic_DataStructure,
        pic_GraphTheory,
        pic_BasicPrograming
    ]
    

    return (
        <div className="w-full bg-[#3e3b3b] mt-10 border-y-2 border-[#752984] h-[500px]">
            <div className="w-3/4 m-auto h-full flex">

                <div className="basis-1/4 flex flex-col relative">
                    <p className='basis-1/2 text-center items-center flex text-[22px] text-white absolute bottom-3/6 '>Các chủ đề thú vị</p>
                    <img src={pic_Overall} alt="" className='size-25 absolute bottom-1/5' />
                </div>

                <div className='w-3/4 h-4/5'>
                    <Carousel sildesList = {sildes}/>
                </div>
            </div>
        </div>
    )
}


export default Overall;

