import { useState } from "react";



export default function Navbar() {
  const navItems = [
    {
        'title': 'Trang chủ'
    },
    {
        'title': 'Lịch thi đấu'
    },
    {
        'title': 'Bảng xếp hạng'
    },
    {
        'title': 'Kết quả bóng đá'
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-full sticky top-0 z-50">
        <div className="w-full bg-gradient-to-l from-rose-800 to-zinc-950 relative">
            <div className=" flex items-center justify-between w-full mx-auto max-w-7xl">
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="absolute bg-white top-0 -left-[200%] -right-3 bottom-0 rounded-r-full">
                            </div>
                            <div className="relative z-20 flex items-center justify-center">
                                <img  className="w-14 h-14"  src="https://static.vecteezy.com/system/resources/previews/015/863/721/non_2x/england-premier-league-logo-on-transparent-background-free-vector.jpg" alt="logo"/>
                                <p className="font-extrabold text-5xl text-rose-800">EPLTV</p>
                            </div>
                        </div>
                        <div className="ml-12 h-14 flex items-center gap-6">
                            {
                                navItems.map((item, index) => (
                                    <div onClick={()=>handleClick(index)} key={index} className="cursor-pointer flex items-center justify-center h-full relative group">
                                        <p className="text-white font-bold">{item.title}</p>
                                        <div className={`absolute -bottom-0.5 left-0 right-0 h-[3px] bg-rose-700 duration-150 ${activeIndex===index ? 'opacity-100' :'opacity-0 group-hover:opacity-100'}`}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}