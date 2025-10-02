import pic_Overall from '../../assets/image/Home_img/Overall-1.png'
import pic_BasicPrograming from '../../assets/image/Home_img/BasicPropraming.png'
import pic_DataStructure from '../../assets/image/Home_img/DataStructure.png'







function Overall(){




    return (
        <div className="w-full bg-[#3e3b3b] mt-10 border-y-2 border-[#752984] h-[500px]">
            <div className="w-3/4 m-auto h-full flex">
                
                <div className="basis-1/4 flex flex-col">
                    <p className='basis-1/2 text-center items-center flex text-[30px] text-white'>Các Bài Tập Thú Vị</p>
                    <img src={pic_Overall} alt="" className='size-45 items-end'/>
                </div>
                
                
                <div className="basis-3/4 relative bg-blue-600 my-[8%] mx-5 rounded-4xl border-2 border-[#242429]">
                    <img src={pic_BasicPrograming} alt="" className='h-1/2 absolute right-2 bottom-[50%]' />
                </div>
            
            </div>
        </div>
    )
}


export default Overall;