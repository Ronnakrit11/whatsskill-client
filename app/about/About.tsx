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
            <Image src={'/profile.jpeg'} height={100} width={200} alt="" className="object-scale-down rounded-2xl" />
          </div>
          <div className="pl-5">
            <span className="text-[24px] font-semibold text-gradient">ประวัติวิทยากร</span>
            <p className="text-[22px] mt-1 mb-1">
              อังศุธร  ศรีพรหม
            </p>
            <p className="text-[16px]">เกิด : พ.ศ.2516 </p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[16px] md:text-[24px] font-semibold text-gradient">การศึกษา ( Education )</span>
            <p className="li-item text-[12px] md:text-[16px] mt-3">ปริญญาโท &emsp; : ศึกษาศาสตรมหาบัณฑิต (สาขาการบริหารการศึกษา) มหาวิทยาลัยขอนแก่น </p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[16px] md:text-[24px] font-semibold text-gradient">ประสบการณ์ทํางาน ( Professional Experience )</span>
            <div className="flex mt-3">
              <p className="li-item text-[13px] md:text-[16px] min-w-[126px]">2559 - ปัจจุบัน</p>
              <p className="text-[13px] md:text-[16px]">: ผู้จัดการ หจก.พรพรหมอนันตทรัพย์ </p>
            </div>
            <div className="flex">
              <p className="min-w-[126px]"></p>
              <p className="text-[13px] md:text-[16px]">: นักลงทุน นักเขียนอิสระ </p>
            </div>
            <div className="flex">
              <p className="li-item text-[13px] md:text-[16px] min-w-[126px]">2552 - 2559</p>
              <p className="text-[13px] md:text-[16px]">: ครู องค์การบริหารส่วนจังหวัดขอนแก่น  </p>
            </div>
            <div className="flex">
              <p className="li-item text-[13px] md:text-[16px] min-w-[126px]">2547 - 2549</p>
              <p className="text-[13px] md:text-[16px]">: บรรณาธิการข่าว ไทยรัฐออนไลน์ </p>
            </div>
            <div className="flex">
              <p className="li-item text-[13px] md:text-[16px] min-w-[126px]">2545 - 2547</p>
              <p className="text-[13px] md:text-[16px]">: กองบรรณาธิการ AUTOCAR THAILAND </p>
            </div>
            <div className="flex">
              <p className="li-item text-[13px] md:text-[16px] min-w-[126px]">2541 - 2543</p>
              <p className="text-[13px] md:text-[16px]">: ผู้สื่อข่าวกีฬา นสพ.บ้านเมือง </p>
            </div>
            <div className="flex">
              <p className="li-item text-[13px] md:text-[16px] min-w-[126px]">2539 - 2541</p>
              <p className="text-[13px] md:text-[16px]">: ผู้สื่อข่าวเศรษฐกิจ นสพ.คู่แข่งธุรกิจ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
