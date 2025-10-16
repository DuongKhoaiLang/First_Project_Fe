import { Link  } from "react-router"
import login_img from "../../assets/image/Login_Register_img/LogInimg.png"
import { useRef } from "react"




function Login({onClose,changeToRegister}){

    const login_Module = useRef(null);

    const handleOverLayClick = (event) => {
        if(login_Module.current && !login_Module.current.contains(event.target)){
            onClose();
            console.log(login_Module.current.target);
        }
    }

    const handleClickToChangeRegister = () => {
        onClose()
        changeToRegister()
    }



    return <div className="font-bold h-screen w-full flex items-center fixed z-1 bg-[rgba(0,0,0,0.5)]" onClick={handleOverLayClick}>
        <div className="m-auto min-w-[300px] flex flex-col w-2/7 h-3/5 items-center justify-center rounded-4xl bg-[#e2e2ff]" ref={login_Module}>
            <div className="size-1/2">
                <img src={login_img} alt="" />
            </div>
            <div className="mt-[15px]">
                <label htmlFor = "username" className="w-[150px] inline-block">Tên đăng nhập</label>
                <input id = "username" type="text" className="border-[#7a7777] border-2 px-2 rounded-[5px]" placeholder = "Tên đăng nhập..."/>
            </div>
            <div className="mt-[15px]">
                <label htmlFor = "userpassword" className="w-[150px] inline-block">Mật khẩu</label>
                <input id="userpassword" placeholder = "Mật khẩu..." type="password" className="border-[#7a7777] border-2 px-2 rounded-[5px]"/>
            </div>
            <div className="mt-10">
                <button className="text-2xl cursor-pointer bg-[#2b2b2b] p-2 rounded-2xl text-white">Đăng nhập</button>
            </div>
            <div className=" w-3/4 flex flex-row justify-between mt-10">
                <Link to= "/">Quên mật khẩu ?</Link>
                <span className="cursor-pointer" onClick={handleClickToChangeRegister}>Đăng ký</span>
            </div>
        </div>
    </div>
}


export default Login