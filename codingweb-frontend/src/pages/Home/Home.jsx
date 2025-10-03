import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HomeImage1 from '../../assets/image/Home_img/Home-pic-1.png'
import goUp from '../../assets/image/Home_img/Goup.png'
import Options from "./Options"
import OverallTheme from "./OverallTheme"
import OverallEvent from "./OverallEvent"
import Overallschedule from "./Overallschedule"

function Home() {


    return (
        <div className="text-[25px] bg-gradient-to-r from-[#26162b] to-purple-700 min-h-[500px] basis-full">
            <div className="flex">
                <img src={HomeImage1} alt="" />
                <div className="flex flex-col justify-center text-center">
                    <span className="text-5xl mt-6 text-center text-white">Chào mừng các bạn đã đến với RE-ELSE</span>
                </div>
            </div>
            <Options />
            <OverallTheme />
            <OverallEvent />
            <Overallschedule />
            <div className="h-200px flex flex-row-reverse">
                <img src={goUp} alt="" className="size-20 rounded-full m-5 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Home