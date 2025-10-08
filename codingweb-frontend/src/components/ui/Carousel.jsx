import FontAwesome from './FontAwesomeIcon'
import { useState ,useEffect} from 'react'



function Carousel({ sildesList ,autoTrans}) {
    

    const [curr , setCurr] = useState(0)

    const pre = () => {        
        setCurr(curr == 0 ? sildesList.length - 1 : curr-1)
    }

    const next = () => {        
        setCurr(curr == sildesList.length - 1 ? 0  : curr + 1)
    }

    useEffect(() => {
        const timerId = setInterval(next,7000) 
        return () => clearInterval(timerId)
    })
    

    return (
        <div className="overflow-hidden flex size-full">
            <div className="flex size-full relative transition-transform ease-out duration-500" style={{transform : `translateX(-${curr*100}%)`}}>
                {
                    sildesList.map((slide, index) => (
                        <div className={slide.className} key={index}>
                            <div className="basis-2/5 ml-10 text-white flex-col">
                                <p className="text-[25px] mt-2">{slide.title}</p>
                                <p className="text-[12px]">{slide.content}</p>
                                <button className="bg-[#3a393c] absolute bottom-3 px-2 rounded-2xl text-[16px] cursor-pointer">Truy Cập</button>
                            </div>
                            <img src={slide.src} alt="" className="size-40 absolute bottom-0 right-0" />
                            <div className='absolute flex inset-0 items-center justify-between px-1 w-full text-black'>
                                <button className='bg-white rounded-full text-[16px]' onClick={pre}>
                                    <FontAwesome icon="faChevronLeft" />
                                </button>

                                <button className='bg-white rounded-full text-[16px]' onClick={next}>
                                    <FontAwesome icon="faChevronRight" />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Carousel