// Hàm tạo và chèn Navbar vào trang
function injectNavbar() {
    const navHTML = `
    <nav class="fixed top-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-[#04060b]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="mainNav">
        <a href="index.html" class="flex items-center gap-3 group transition-transform active:scale-95">
            <div class="w-8 h-8 md:w-10 md:h-10 bg-[#c89b3c] rounded-md flex items-center justify-center text-black font-bold text-lg md:text-xl shadow-[0_0_15px_rgba(200,155,60,0.4)] group-hover:shadow-[0_0_25px_rgba(200,155,60,0.6)] transition-all">
                P
            </div>
            <span class="text-xl md:text-2xl tracking-tighter uppercase text-white font-bold font-primary group-hover:text-[#c89b3c] transition-colors">
                PoC Guide
            </span>
        </a>
        
        <div class="hidden lg:flex gap-10 items-center">
            <a href="champions.html" class="text-white/80 hover:text-[#c89b3c] font-semibold transition-colors flex items-center gap-2">
                <i data-lucide="users" class="w-4 h-4"></i> Tướng
            </a>
            <a href="database.html" class="text-white/80 hover:text-[#c89b3c] font-semibold transition-colors flex items-center gap-2">
                <i data-lucide="database" class="w-4 h-4"></i> Dữ liệu
            </a>
            <a href="tools.html" class="text-white/80 hover:text-[#c89b3c] font-semibold transition-colors flex items-center gap-2">
                <i data-lucide="wrench" class="w-4 h-4"></i> Công cụ
            </a>
        </div>
    </nav>`;

    // Chèn vào đầu thẻ body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Khởi tạo lại các icon Lucide sau khi chèn HTML
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Chạy hàm ngay khi nội dung trang đã sẵn sàng
document.addEventListener('DOMContentLoaded', injectNavbar);