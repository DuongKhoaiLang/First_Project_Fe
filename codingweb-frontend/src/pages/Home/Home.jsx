import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HomeImage from '../../assets/image/Home-pic-1.png'


function Home(){
    return (
        <div className="text-[25px] bg-gradient-to-r from-[#26162b] to-purple-700 min-h-[500px] transe basis-full">
            <div className="flex">
                <img src={HomeImage} alt=""/>
                <span className="text-5xl mt-6 text-center text-white">Chào mừng các bạn <br />đã đến với RE-ELSE</span>
            </div>
        </div>
    )
}

export default Home