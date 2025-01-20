import { PiFlagLight } from 'react-icons/pi'

export default function MatchCard() {
  return (
    <div className='w-full rounded-xl relative bg-zinc-800'>
    <div className='absolute inset-0 '>
        <img className='w-full h-full object-cover' src="https://curedboulder.com/wp-content/themes/bongda/dist/images/bg-match/bg-match.png" alt="" />
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 font-semibold px-6 text-white text-sm flex items-center justify-center h-8 bg-rose-800 border-b-2 border-b-rose-400 rounded-b-full">
        Hiệp 2 : 75'
    </div>
    <div className='flex items-center justify-between p-2'>
        <div className='flex items-center gap-2'>
            <div className='w-6 h-6 rounded-full overflow-hidden'>
                <img src="https://football-tribe.com/vietnam/wp-content/uploads/sites/11/2019/02/logo-vleague_1vt4evsdwfww410hn12kwc3j3s-800x800.png" alt="" />
            </div>
            <p className='text-zinc-300 text-xs'>V.LEAGUE 1</p>
        </div>
        <div className='text-zinc-300 text-xs flex items-center gap-2 h-6 px-3 bg-red-600/30 rounded-full'>
            <span className='h-2 w-2 rounded-full bg-red-500'></span>
            <span>Trực tiếp</span>
        </div>
    </div>
    <div className='w-full h-full flex flex-col items-center relative'>
        <div className='grid grid-cols-12 items-center gap-4 py-6'>
            <div className="flex items-center gap-2 col-span-5 justify-end">
                <p className='font-semibold text-white'>Thể công Viettel</p>
                <div className='h-10 w-10'>
                    <img src="https://upload.wikimedia.org/wikipedia/vi/8/80/Logo_CLB_TC-VT.svg" alt="" />
                </div>
            </div>
            <div className='rounded-full flex items-center bg-rose-800 p-0.5 relative col-span-2'>
                <div className="w-6 h-6 flex text-lg items-center justify-center text-white text-md font-semibold rounded-full bg-rose-600">1</div>
                <div className="text-white w-6 h-6 text-2xl font-semibold pb-2 flex items-center justify-center">
                    <span>:</span>
                </div>
                <div className="w-6 h-6 flex text-lg items-center justify-center text-white text-md font-semibold rounded-full ">0</div>
            </div>
            <div className="flex items-center gap-2 col-span-5">
                <div className='h-10 w-10'>
                    <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/0/03/Logo_CLB_DATH.svg/1200px-Logo_CLB_DATH.svg.png" alt="" />
                </div>
                <p className='font-semibold text-white'>Đông Á Thanh Hóa</p>
            </div>
        </div>
        <div className='px-2 py-2 w-full'>
            <div className='grid grid-cols-3 border-t border-t-zinc-700 pt-2'>
                <div className='bg-zinc-700 flex gap-3 items-center rounded-full px-4 text-xs w-fit'>
                    <div className='flex gap-1 items-center'>
                        <p className='text-green-500'>HT</p>
                        <p className='text-white font-semibold'>0-0</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <p className='text-blue-300'>
                            <PiFlagLight size={14}></PiFlagLight>
                        </p>
                        <p className='text-white font-semibold'>0-0</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div className='bg-yellow-500 h-3 w-2 rounded-sm'>
                        </div>
                        <p className='text-white font-semibold'>0-0</p>
                    </div>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M15.2328 2.96681L19.5921 6.134C21.5198 7.53454 22.3264 10.0171 21.5901 12.2832L19.925 17.4078C19.1887 19.6739 17.0769 21.2082 14.6942 21.2082H9.30583C6.92309 21.2082 4.81133 19.6739 4.07502 17.4078L2.40993 12.2832C1.67363 10.0171 2.48025 7.53454 4.40793 6.134L8.76718 2.96682C10.6949 1.56627 13.3051 1.56627 15.2328 2.96681Z" fill="url(#pattern4wyrn4hx3lx5q86_0)" stroke="#E97519"></path>
                        <path d="M8.76718 2.96682C10.6949 1.56627 13.3051 1.56627 15.2328 2.96681L19.5921 6.134C21.5198 7.53454 22.3264 10.0171 21.5901 12.2832L19.925 17.4078C19.1887 19.6739 17.0769 21.2082 14.6942 21.2082H9.30583C6.92309 21.2082 4.81133 19.6739 4.07502 17.4078L2.40993 12.2832C1.67363 10.0171 2.48025 7.53454 4.40793 6.134L8.76718 2.96682Z" stroke="#E97519"></path>
                        <defs>
                            <pattern id="pattern4wyrn4hx3lx5q86_0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image_4wyrn4hx3lx5q86_0" transform="scale(0.000510204)"></use>
                            </pattern>
                            <image id="image_4wyrn4hx3lx5q86_0" width="1960" height="1960" xlinkHref="https://cdn.lfastcdn.com/2024/09/JAY-1.jpg"></image>
                        </defs>
                    </svg>
                
                    <span className='text-sm text-zinc-300'>A Mập</span>
                </div>
                <div className='flex items-center justify-end'>
                    <button className='py-1 px-4 font-semibold bg-rose-700 text-white rounded-full hover:bg-rose-600 duration-150'>
                        Xem ngay
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
