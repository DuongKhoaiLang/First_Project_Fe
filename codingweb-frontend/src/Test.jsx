import React from "react";
import a from './assets/image/lmc.png'

const Card20_11 = () => {
  return (
    <div className="w-[1920px] h-[1080px] flex justify-center items-center bg-gradient-to-br from-pink-200 via-orange-200 to-purple-200">
      <div className="relative w-[1600px] h-[900px] bg-white rounded-3xl shadow-2xl flex flex-col justify-center items-center p-12">
        {/* Hoa trang trí */}
        <img
          src={a}
          alt="flower"
          className="absolute top-0 left-0 w-80 h-80 opacity-30"
        />
        <img
          src={a}
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
  );
};

export default Card20_11;
