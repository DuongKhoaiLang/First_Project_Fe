import pic_Overall from '../../assets/image/Home_img/Overall-1.png'
import pic_BasicPrograming from '../../assets/image/Home_img/BasicPropraming.png'
import pic_DataStructure from '../../assets/image/Home_img/DataStructure.png'
import pic_GraphTheory from '../../assets/image/Home_img/GraphTheory.png'
import pic_Algorithm from '../../assets/image/Home_img/Algorithm.png'
import Carousel from '../../components/ui/Carousel.jsx'







function OverallTheme() {


    const sildes = [
        {
            title: "Basic Programing",
            content: "Lập trình căn bản là bước khởi đầu để làm quen với thế giới công nghệ phần mềm."
            +"Đây là môn học giúp người mới học hiểu được cách máy tính “suy nghĩ” và xử lý thông tin thông qua ngôn ngữ lập trình.",
            src: pic_BasicPrograming,
            className:"w-full h-2/4  bg-blue-500 flex-none m-auto relative rounded-2xl flex flex-row"
        },
        {
            title: "DataStructure",
            content: "Cấu trúc dữ liệu (Data Structures) là một trong những môn học nền tảng quan trọng nhất trong lĩnh vực CNTT. Môn học này cung cấp cho sinh viên những kiến thức cơ bản về cách tổ chức, lưu trữ và quản lý dữ liệu trong máy tính sao cho hiệu quả và tối ưu.",
            src: pic_DataStructure,
            className:"w-full h-2/4  bg-red-500 flex-none m-auto relative rounded-2xl flex flex-row"
        },
        {
            title: "Graph Theory",
            content: "Lý thuyết đồ thị (Graph Theory) là một lĩnh vực quan trọng của Toán học rời rạc và Khoa học máy tính, nghiên cứu về các cấu trúc dữ liệu gọi là đồ thị – tập hợp các đỉnh (nút) và các cạnh (liên kết giữa các đỉnh).",
            src: pic_GraphTheory,
            className:"w-full h-2/4  bg-yellow-500 flex-none m-auto relative rounded-2xl flex flex-row"
        },
        {
            title: "Algorithm",
            content: "Thuật toán (Algorithm) là một trong những nền tảng quan trọng nhất của Tin học và Khoa học máy tính. Thuật toán được hiểu là tập hợp các bước xử lý có thứ tự, rõ ràng và hữu hạn, nhằm giải quyết một bài toán cụ thể.",
            src: pic_Algorithm,
            className:"w-full h-2/4  bg-pink-500 flex-none m-auto relative rounded-2xl flex flex-row"
        },

    ]
    

    return (
        <div className="w-full mt-10 h-[400px]">
            <div className="w-3/4 h-full flex bg-[#2b2b2b] pr-25 rounded-r-4xl border-y-2 border-r-2 border-[#752984]">

                <div className="basis-1/4 flex flex-col relative ml-10">
                    <p className='basis-1/2 text-center items-center flex text-[28px] text-white absolute top-5 font-bold'>Các chủ đề thú vị</p>
                    <img src={pic_Overall} alt="" className='size-40 absolute bottom-1/5' />
                </div>

                <div className='w-3/4 h-full'>
                    <Carousel sildesList = {sildes} autoTrans = {true}/>
                </div>
            </div>
        </div>
    )
}


export default OverallTheme;

