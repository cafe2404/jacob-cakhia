import { RiCustomerService2Line } from "react-icons/ri";

export default function About() {
    return (
        <div className="bg-zinc-950 rounded-xl">
            <section id="features"
                className="relative block px-6 py-10 md:py-20 md:px-10">
                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                        Tại sao lại chọn EPLTV
                    </span>
                    <h2
                        className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Nền tảng xem bóng đá trực tuyết không quảng cáo tốt nhất hiện nay
                    </h2>
                    <p
                        className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        Đội ngũ EPLTV luôn cố gắng đem đến cho khách hàng những trải nghiệm tốt nhất khi xem bóng đá tại EPLTV
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex text-rose-600 h-12 w-12 items-center justify-center rounded-lg border border-rose-600">
                            <RiCustomerService2Line size={24}></RiCustomerService2Line> 
                        </div>
                        <h3 className="mt-6 text-white font-semibold">Đội ngũ bình luận chuyên nghiệp</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Với đội ngũ bình luận viên chuyên nghiệp và duyên dáng, chúng tôi luôn mang đến cho mọi người những trận bóng soi nổi và hấp dẫn
                        </p>
                    </div>


                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-lg border text-rose-600 border-rose-600" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-white font-semibold">Tốc độ tuyệt vời</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Chúng tôi luôn ưu tiên tốc độ truyền tải trận bóng đá, đảm bảo cho khách hàng có trải nghiệm tuyệt vời nhất
                        </p>
                    </div>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-lg border text-rose-600 border-rose-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-white font-semibold">
                            Chất lượng truyền hình tốt nhất
                        </h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Tại EPLTV, chúng tôi luôn cố gắng mang đến cho khách hàng những trải nghiệm tốt nhất về chất lượng hình ảnh và âm thanh, chân thực và rõ nét nhất.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full">
                </div>
                <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full">
                </div>
            </section>
        </div>
    )
}
