"use client"
import Image from 'next/image'
import React from 'react'

const item = [
    {
        title: ' 01. Learn',
        icon: '/online-learning.png',
        message: 'สอนโดยผู้เชี่ยวชาญที่มีประสบการณ์ไม่ตลาดมากว่า 7 ปี',
    },
    {
        title: '02. Graduate',
        icon: '/online-course.png',
        message: 'ปูพื้นฐานด้านทฤษฎี เเละมีตัวอย่างชัดเจน',
    },
    {
        title: '03. Work',
        icon: '/computer.png',
        message: 'เรียนเเล้วสามารถนำไปใช้จริงได้',
    },
]

const WhyLearnCourse = () => {
    return (
        <>
            <div className="w-full bg-[#fffcf2] p-10 pb-20 ">
                <div className="w-full" data-aos="fade-down" data-aos-delay="500">
                    <p className="text-[#2f2f2f] text-center font-bold text-[30px] mt-10"><span className='text-gradient'>Why learn</span> with  our courses?</p>
                    <p className="text-[#2f2f2f] text-center text-sm mb-16">คอร์สเรียนของเราดียังไง</p>
                </div>
                <div className='flex flex-col md:flex-row gap-8 justify-center items-center text-black' data-aos="fade-down" data-aos-delay="1000" >
                    {
                        item.map(ele => <div key={ele.title} className="w-[376px] box-shadow-grow h-[330px] bg-[#FFFF] rounded-xl text-[#3c3c3c] p-10">
                            <div className="flex mt-3 items-center justify-center flex-col gap-4">
                                <div>
                                    <Image
                                        src={ele.icon}
                                        width={100}
                                        height={100}
                                        alt=""
                                        className="object-contain "
                                    />
                                </div>
                                <p className='font-bold text-2xl'>
                                    {ele.title}
                                </p>
                                <p className='text-center'>
                                    {ele.message}
                                </p>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </>
    )
}

export default WhyLearnCourse