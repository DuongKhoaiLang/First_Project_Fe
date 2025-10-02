import FontAwesome from './FontAwesomeIcon'



function Carousel({sildesList}){
    console.log(sildesList);
    
    return (
        <div className="overflow-hidden flex size-full">
            <div className="flex size-full">
                {
                    sildesList.map((slide,index) => (
                        <div className='w-full h-2/4  bg-[#7667ff] flex-none m-auto relative rounded-2xl flex flex-row' key={index}>
                            <div className="basis-2/5 ml-5 text-white flex-col">
                            <p className="text-[25px] mt-2">Basic Programing</p>
                            <p className="text-[12px]">Lập trình căn bản là bước khởi đầu để làm quen với thế giới công nghệ phần mềm. 
                            Đây là môn học giúp người mới học hiểu được cách máy tính “suy nghĩ” và xử lý thông tin thông qua ngôn ngữ lập trình.</p>
                            <button className="bg-[#3a393c] absolute bottom-3 px-3 rounded-2xl"> <FontAwesome icon="faArrowRight"/></button>
                            </div>
                            <img src={slide} alt="" className="size-40 absolute bottom-0 right-0"/>
                            
                            <button></button>
                            
                            <button></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel