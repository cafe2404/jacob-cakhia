
export default function Footer() {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10">
            <div className="text-zinc-300 text-center">
                Đồng hành cùng EPLTV kênh phát sóng trực tiếp bóng đá hôm nay với đường truyền full HD tốc độ cao và bình luận hấp dẫn. Cập nhật link xem bóng đá trực tuyến epltv.tv phát sóng tất cả các giải đấu đang được quan tâm hiện nay. Ngoài tên gọi EPLTV, bạn có thể biết đến chúng tôi là tructiepbongda cập nhật lịch thi đấu đầy đủ, tin bóng đá mới, video highlight, bảng xếp hạng, kết quả, kiến thức bóng đá... tất cả thông tin về môn thể thao vua sẽ được tổng hợp từ EPLTV. Truy cập website để có những giây phút Ăn EPLTV Xem Bóng Đá trực tuyến.
            </div>
            <nav className="flex justify-center flex-wrap gap-6 text-zinc-300 font-medium">
                <a className="hover:text-white" href="#">Về chúng tôi</a>
                <a className="hover:text-white" href="#">Điều khoản</a>
                <a className="hover:text-white" href="#">Chính sách</a>
                <a className="hover:text-white" href="#">Liên hệ</a>
                <a className="hover:text-white" href="#">Bản quyền</a>
                <a className="hover:text-white" href="#">Miễn trừ trách nhiệm</a>
                <a className="hover:text-white" href="#">Giải đáp câu hỏi</a>
            </nav>

            <div className="flex justify-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </a>
            </div>
            <p className="text-center text-zinc-500 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
        </footer>
    )
}
