
import ReactPlayer from 'react-player/youtube'

function Header() {
  return (
    <div className="w-full py-8">
        <div className="flex rounded-xl overflow-hidden h-[65vh]">
            <div className="w-full h-auto aspect-video relative ">
                <div className='absolute inset-0 bg-black/30 flex items-center flex-col justify-center z-20 gap-6'>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-16 px-8 py-12 pb-14 bg-black/40 rounded-xl backdrop-blur-lg relative'>
                            <div className='absolute top-0 left-1/2 -translate-x-1/2 font-semibold px-6 text-white text-sm flex items-center justify-center h-8 bg-rose-800 border-b-2 border-b-rose-400 rounded-b-full'>
                                Hiệp 2 : 75'
                            </div>
                            <div className='flex flex-col gap-1 items-center relative'>
                                <div className='w-14 h-14 rounded-lg overflow-hidden'>
                                    <img className='w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png" alt="" />
                                </div>
                                <p className='text-lg font-semibold text-white absolute -bottom-8 whitespace-nowrap'>Việt Nam</p>
                            </div>
                            <div className='flex gap-3 items-center bg-rose-800 rounded-lg p-1 relative'>
                                <div className='px-4 py-2 flex items-center justify-center text-white text-4xl font-semibold rounded-md bg-rose-600'>
                                    3
                                </div>
                                <div className='text-white text-4xl font-semibold px-4 pb-2'>
                                    <span>:</span>
                                </div>
                                <div className='px-4 py-2 flex items-center justify-center text-white text-4xl font-semibold'>
                                    0
                                </div>
                                <div className='absolute top-full text-center text-sm mt-2 text-zinc-300'>
                                    Mitsubishi Electric Cup 2024
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 items-center relative'>
                                <div className='w-14 h-14 rounded-lg overflow-hidden'>
                                    <img className='w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/2560px-Flag_of_Thailand.svg.png" alt="" />
                                </div>
                                <p className='text-lg font-semibold text-white absolute -bottom-8 whitespace-nowrap'>Thái Lan</p>
                            </div>
                        </div>
                    </div>
                    <button className='py-2 px-4 font-semibold bg-rose-700 text-white rounded-full hover:bg-rose-600 duration-150'>
                        Vào phòng live
                    </button>
                    <div className='absolute bottom-8 left-8 lex items-center flex-col justify-center z-20 gap-6'>
                        <button className="pr-4 font-semibold text-white p-1 bg-rose-700 rounded-full flex gap-2 items-center hover:bg-rose-600 duration-150">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20221105/a523107b11cdb6defa0365da55896220_ss300.jpg" alt="" />
                            </div>
                            BLV DECO
                        </button>
                    </div>
                </div>
                <ReactPlayer 
                    style={
                        {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }
                    } 
                    url='https://www.youtube.com/watch?v=ooseD8-Z29I' 
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                />
            </div>
            <div className="h-full bg-zinc-800 p-3 flex flex-col gap-3 max-h-full overflow-y-auto">
                <div className='w-full rounded-lg bg-white h-full overflow-hidden relative border-2 border-rose-600'>
                    <div className='absolute inset-0 bg-black/70 flex items-center flex-col justify-center z-20 gap-6'>
                        <button className="py-2 px-4 font-semibold text-white rounded-full flex gap-2 items-center duration-150">
                            <img src="https://sta.vnres.co/web/assets/soco/img/living.gif" alt="" />
                            Đang phát
                        </button>
                    </div>
                    <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20221105/a523107b11cdb6defa0365da55896220_ss300.jpg" alt="" />
                </div>
                <div className='w-full rounded-lg bg-white h-full overflow-hidden relative group'>
                    <div className='absolute inset-0 bg-black/70 flex items-center flex-col justify-center z-20 gap-6 opacity-0 group-hover:opacity-100 duration-150'>
                        <button className="pr-4 font-semibold text-white p-1 bg-rose-700 rounded-full flex gap-2 items-center duration-150">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20231110/053fecd105594fbc1bbd33888e39391b_ss300.jpg" alt="" />
                            </div>
                            BLV FANMU
                        </button>
                    </div>
                    <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20231110/053fecd105594fbc1bbd33888e39391b_ss300.jpg" alt="" />
                </div>
                <div className='w-full rounded-lg bg-white h-full overflow-hidden relative group'>
                    <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20230206/8212a47bb414a45de8d0449d11d0215c_ss300.jpg" alt="" />
                    <div className='absolute inset-0 bg-black/70 flex items-center flex-col justify-center z-20 gap-6 opacity-0 group-hover:opacity-100 duration-150'>
                        <button className="pr-4 font-semibold text-white p-1 bg-rose-700 rounded-full flex gap-2 items-center duration-150">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20230206/8212a47bb414a45de8d0449d11d0215c_ss300.jpg" alt="" />
                            </div>
                            BLV CÁ MẬP
                        </button>
                    </div>
                </div>
                <div className='w-full rounded-lg bg-white h-full overflow-hidden relative group'>
                <div className='absolute inset-0 bg-black/70 flex items-center flex-col justify-center z-20 gap-6 opacity-0 group-hover:opacity-100 duration-150'>
                        <button className="pr-4 font-semibold text-white p-1 bg-rose-700 rounded-full flex gap-2 items-center duration-150">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20230309/c0c0b8a45186e11216edc9779ecad64c_ss300.jpg" alt="" />
                            </div>
                            BLV RONALDO
                        </button>
                    </div>
                    <img className='w-full h-full object-cover' src="https://sta.vnres.co/file/head/20230309/c0c0b8a45186e11216edc9779ecad64c_ss300.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header