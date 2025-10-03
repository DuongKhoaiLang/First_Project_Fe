import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HomeImage1 from '../../assets/image/Home_img/Home-pic-1.png'
import Options from "./Options"
import OverallTheme from "./OverallTheme"
import OverallEvent from "./OverallEvent"

function Home(){
    return (
        <div className="text-[25px] bg-gradient-to-r from-[#26162b] to-purple-700 min-h-[500px] basis-full">
            <div className="flex">
                <img src={HomeImage1} alt=""/>
                <div className="flex flex-col justify-center text-center">
                    <span className="text-5xl mt-6 text-center text-white">Chào mừng các bạn đã đến với RE-ELSE</span>
                </div>
            </div>
            <Options/>
            <OverallTheme />
            <OverallEvent />
        </div>
    )
}

export default Home