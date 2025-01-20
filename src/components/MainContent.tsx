import Header from './Header'
import { FaFireFlameCurved } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MatchCard from './MatchCard';
import { IoMdFootball } from "react-icons/io";
import { IoBasketballOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { useState } from 'react';
import Footer from './Footer';
import About from './About';

function MainContent() {
  const categories = [
    {
        'title': 'Bóng đá',
        'icon': <IoMdFootball size={20}></IoMdFootball>
    },
    {
        'title': 'Bóng rổ',
        'icon': <IoBasketballOutline size={20}></IoBasketballOutline>
    },
    {
        'title': 'Esports',
        'icon': <IoGameControllerOutline size={20}></IoGameControllerOutline>
    },
   
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className='max-w-7xl mx-auto pb-16'>
        <Header/>
        <div className='mt-8 w-full'>
            <div className='flex items-center justify-center mb-8'>
                <div className='relative flex flex-col items-center justify-center'>
                   <div className='h-10 px-4 bg-white rounded-full flex items-center justify-center relative'>
                        <FaFireFlameCurved className='text-rose-600 mr-1' size={24}></FaFireFlameCurved>
                        <p className='text-rose-600 font-bold text-lg'>Siêu kinh điển</p>
                   </div>
                   <div className=' bg-rose-600 h-[2px] mt-2 w-20 rounded-full'>
                    </div>
                </div>
            </div>
            <div className="relative">
                <button className='absolute z-10 h-10 w-10 top-1/2 -translate-y-1/2 -left-5 bg-black/30 text-zinc-300 hover:bg-rose-700 duration-150 rounded-full flex items-center justify-center'>
                    <FiChevronLeft size={24}></FiChevronLeft>
                </button>
                <button className='absolute z-10 h-10 w-10 top-1/2 -translate-y-1/2 -right-5  bg-black/30 text-zinc-300 hover:bg-rose-700 duration-150 rounded-full flex items-center justify-center'>
                    <FiChevronRight size={24}></FiChevronRight>
                </button>
                <div className='rounded-xl'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                           <MatchCard></MatchCard>
                        </SwiperSlide>
                        <SwiperSlide>
                           <MatchCard></MatchCard>
                        </SwiperSlide>
                        <SwiperSlide>
                           <MatchCard></MatchCard>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        <div className='mt-16 w-full'>
            <div className='flex items-center mb-6'>
                <div className='h-10'>
                    <img className='h-full w-auto' src="https://sta.vnres.co/web/assets/soco/img/hot-live.png" alt="" />
                </div>
                <div className="ml-4 h-14 flex items-center gap-6">
                    {
                        categories.map((item, index) => (
                            <div onClick={()=>handleClick(index)} key={index} className="text-white gap-2 cursor-pointer flex items-center justify-center h-full relative group">
                                {item.icon}
                                <p className="font-bold">{item.title}</p>
                                <div className={`absolute -bottom-0.5 left-0 right-0 h-[3px] bg-rose-700 duration-150 ${activeIndex===index ? 'opacity-100' :'opacity-0 group-hover:opacity-100'}`}></div>
                            </div>
                        ))
                    }
                </div>
            </div>       
            <div className="grid grid-cols-2 gap-6 pb-20">
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
                <MatchCard/>
            </div>
        </div>
        <About></About>
        <Footer></Footer>
    </div>
  )
}

export default MainContent
