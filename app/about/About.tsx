import React from "react";
import { styles } from "../styles/style";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto text-[#4e4e4e] pb-10">
        <div className="w-full flex justify-center flex-col md:flex-row items-center">
          <div className="">
            <Image src={'/newprofile.png'} height={100} width={200} alt="" className="object-scale-down rounded-2xl" />
          </div>
          <div className="pl-5">
            <span className="text-[24px] font-semibold text-gradient">ห้างหุ้นส่วนจำกัดพรพรหมอนันตทรัพย์</span>
            <p className="text-[22px] mt-1 mb-1">
              อังศุธร  ศรีพรหม
            </p>
            <p className="text-[16px]">หุ้นส่วนผู้จัดการ </p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[25px] md:text-[24px] font-semibold text-gradient">ที่อยู่</span>
            <p className="li-item text-[17px] md:text-[16px] mt-3"> 180 หมู่ 2 ถ.นิเวศสถาน ต.เขาสวนกวาง อ.เขาสวนกวาง จ.ขอนเเก่น 40280 </p>
            <br />
            <p className="li-item text-[17px] md:text-[16px] mt-3">เลขประจำตัวผู้เสียภาษี : 0403563001339</p>
            
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;
