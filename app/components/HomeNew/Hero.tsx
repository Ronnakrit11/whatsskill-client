'use client';
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

import WaveParalax from './WaveParalax';

function Hero({ setOpen, banner }: any) {
    const router = useRouter()

    return (
        <div className='relative'>
            <div className="w-full 1000px:flex items-center bg-[#fffcf2] 1000px:pt-10 ">
                {/* <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] 1100px:right-8 1500px:left-14"></div> */}
                <div className="pt-50 1000px:w-[60%]  justify-center md:justify-start flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left min-h-[70vh]">
                    <h2 data-aos="fade-up" data-aos-delay="50" className="font-Poppins dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[50px] font-[600] py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%]">
                    Whats <span className='text-[#FFD230] underline'>Skill</span>
                    </h2>
                    <br />
                    <p data-aos="fade-up" data-aos-delay="100" className="dark:text-[#edfff4] text-[#000000ac] font-Poppins font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%] p-[10px] md:p-[0px]">
                        {banner?.subTitle}
                    </p>
                    <br />
                    <br />
                    <div className="flex gap-2 1500px:!w-[55%] 1100px:!w-[78%] flex-wrap">
                        <div onClick={() => setOpen(true)} data-aos="fade-up" data-aos-delay="500" className="box-shadow-grow flex items-center justify-center h-[40px] w-[150px] md:h-[60px] md:w-[200px] font-size-[12px]  md:font-size-[16px] text-[16px] font-bold leading-[56px] fill-[#FFFFFF] text-[#ffff] bg-[#FFD230] hover:bg-[#FFD230] hover:border-[#FFD230] cursor-pointer border-solid border-[2px_2px_2px_2px] border-[#FFD230] rounded-lg px-[20px] md:px-[50px] py-0">
                           <span>เข้าร่วม </span> 
                        </div>
                        <div onClick={() => {router.push('/courses')}} data-aos="fade-up" data-aos-delay="600" className="flex items-center justify-center  h-[40px] w-[150px]  ml-4 md:h-[60px] md:w-[200px] font-size-[12px]  md:font-size-[16px] text-[16px] font-medium leading-[56px] bg-[#FFFFFF] text-[#FFD230]  border-solid border-2 border-[#FFD230] box-shadow-grow hover:text-black cursor-pointer hover:border-[#FFD230]  rounded-lg text-center px-[20px] md:px-[40px]">
                            ดูคอร์ส
                        </div>
                    </div>
                    <br />
                </div>


                <div data-aos="fade-left" data-aos-delay="500" className="hidden 1000px:w-[40%] md:flex 1000px:min-h-[60vh] items-center justify-end pt-[70px] 1000px:pt-[0] z-10 relative">
                   
                    <Image
                        src={banner?.image?.url || '/kchgd5cp3jqkvg7zzdin.webp'}
                        width={400}
                        height={400}
                        alt=""
                        className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
                    />
                </div>

            </div>
            <WaveParalax />
        </div>

    )
}

export default Hero