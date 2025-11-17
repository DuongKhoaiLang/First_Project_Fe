import React from "react";
import a from './assets/image/lmc.png'
import b from './assets/image/b.png'
import c from './assets/image/c.png'
import d from './assets/image/d.png'
import z from './assets/image/z.png'

const Card20_11 = () => {
  return (
    <div className="h-screen">
    <div className="relative m-auto h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-orange-200 to-purple-200">
      <img src={c} alt="" className="absolute z-20 bottom-0 left-0 h-[600px] w-[400px]"/>
      <img src={d} alt="" className="absolute z-20 top-0 right-0 size-200"/>
      <img src={z} alt="" className="z-20 right-0 bottom-0 absolute"/>
      <div className="relative w-[1600px] h-[900px] bg-white rounded-3xl shadow-2xl flex flex-col justify-center items-center p-12">
        {/* Hoa trang trí */}
        <img
          src={a}
          alt="flower"
          className="absolute top-0 left-0 w-80 h-80 opacity-30"
          />
        <img
          src={b}
          alt="flower"
          className="absolute bottom-0 right-0 w-80 h-80 opacity-30"
          />

        {/* Nội dung chính */}
        <h1 className="text-6xl font-bold text-pink-600 mb-8 text-center">
          Chúc Mừng Ngày Nhà Giáo Việt Nam 20/11
        </h1>

        <p className="text-2xl text-gray-700 text-center max-w-3xl mb-8">
          Kính gửi các Thầy Cô, <br />
          Nhân ngày Nhà Giáo Việt Nam 20/11, chúng em xin gửi lời tri ân sâu
          sắc đến những người lái đò thầm lặng, đã dìu dắt, dạy dỗ và truyền
          cảm hứng cho thế hệ trẻ. <br />
          Chúc các Thầy Cô luôn mạnh khỏe, hạnh phúc và tràn đầy năng lượng
          để tiếp tục công việc cao quý của mình.
        </p>

        {/* Thơ */}
        <p className="text-xl text-gray-600 italic text-center max-w-2xl">
          “Dòng sông tri thức chảy dài, <br />
          Người lái đò tặng bao nụ cười, <br />
          Dạy dỗ trò nhỏ từng ngày, <br />
          Tấm lòng vàng sáng muôn đời.”
        </p>

        {/* Footer */}
        <div className="absolute bottom-8 text-gray-500 text-lg">
          Thân tặng từ học sinh
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card20_11;
