import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdQrScanner } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { MdOutlineLightbulb } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const Carousel = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex items-center justify-center text-center mx-auto mt-6">
            <div className="">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="rounded-3xl bg-gradient-to-bl from-[#051A91] to-[#1F80EB] w-[600px]"
                        style={{
                            display: index === currentSlideIndex ? 'block' : 'none',

                        }}
                    >
                        <div>
                            <div className='text-white text-2xl font-bold flex justify-between px-10 pt-10'>

                                <button><MdOutlineLightbulb /></button>
                                <button><HiMiniSpeakerWave /></button>
                            </div>
                            <h2 className='pt-24 pb-36 text-white text-3xl font-semibold'>{slide.text}</h2>
                        </div>
                    </div>
                ))}
                <div className='flex items-center justify-around mt-6'>
                    <button className='text-[#06286E] font-bold text-3xl p-3 bg-white hover:p-3 hover:bg-slate-300 rounded-full'><TbReload /></button>
                    <div className="flex justify-center gap-8  items-center">
                        <button onClick={goToPrevSlide} className='bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full p-3 text-white text-3xl font-black' ><IoIosArrowBack /></button>
                        <span className='text-[#06286E] font-bold text-xl'>{`${currentSlideIndex + 1} / ${slides.length}`}</span>
                        <button onClick={goToNextSlide} className='bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full p-3 text-white text-3xl font-black'><IoIosArrowForward /></button>
                    </div>
                    <button className='text-[#06286E] font-bold text-3xl p-3 bg-white hover:p-3 hover:bg-slate-300 rounded-full'><IoMdQrScanner /></button>
                </div>
            </div>
        </div >
    );
};

export default Carousel;
