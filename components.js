function injectNavbar() {
    const navHTML = `
    <style>
        .group-glow:hover {
            box-shadow: 0 0 20px -5px var(--glow-color);
            border-color: var(--border-color) !important;
            background: rgba(255, 255, 255, 0.05) !important;
            transform: translateX(4px); /* Nhích nhẹ sang phải khi hover cho sinh động */
        }
        .glow-scrollbar::-webkit-scrollbar { width: 4px; }
        .glow-scrollbar::-webkit-scrollbar-thumb { background: rgba(200, 155, 60, 0.3); border-radius: 10px; }
    </style>

    <nav class="fixed top-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-[#04060b]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="mainNav">
        <a href="index.html" class="flex items-center gap-3 group transition-transform active:scale-95">
            <div class="w-10 h-10 bg-[#c89b3c] rounded-md flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(200,155,60,0.4)]">P</div>
            <span class="text-2xl tracking-tighter uppercase text-white font-bold group-hover:text-[#c89b3c] transition-colors">PoC Guide</span>
        </a>
        
        <div class="hidden lg:flex gap-10 items-center">
            <a href="champions.html" class="text-white/80 hover:text-[#c89b3c] font-semibold transition-colors flex items-center gap-2">
                <i data-lucide="users" class="w-4 h-4"></i> Tướng
            </a>

            <div class="relative group">
                <button class="text-white/80 group-hover:text-cyan-400 font-semibold transition-colors flex items-center gap-2 py-3">
                    <i data-lucide="database" class="w-4 h-4"></i> Dữ liệu
                    <i data-lucide="chevron-down" class="w-3 h-3 transition-transform group-hover:rotate-180"></i>
                </button>

                <div class="absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-3 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 z-[110]">
                    <div class="bg-[#0d111c]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] p-2">
                        <div class="max-h-[70vh] overflow-y-auto glow-scrollbar flex flex-col gap-1">
                            
                            ${renderMenuItem("champions_db.html", "user-square", "Tướng", "Chỉ số & Kỹ năng", "rgba(249, 115, 22, 0.4)", "orange-500")}
                            ${renderMenuItem("relics.html", "gem", "Cổ vật", "Trang bị sức mạnh", "rgba(34, 211, 238, 0.4)", "cyan-400")}
                            ${renderMenuItem("powers.html", "zap", "Sức mạnh", "Nội tại đặc biệt", "rgba(234, 179, 8, 0.4)", "yellow-500")}
                            ${renderMenuItem("items.html", "wrench", "Vật phẩm", "Phụ kiện đi kèm", "rgba(59, 130, 246, 0.4)", "blue-500")}
                            ${renderMenuItem("cards.html", "layers", "Lá bài", "Thư viện Runeterra", "rgba(16, 185, 129, 0.4)", "emerald-500")}
                            ${renderMenuItem("progression.html", "trending-up", "Tiến trình", "Cấp độ & Thưởng", "rgba(200, 155, 60, 0.4)", "[#c89b3c]")}
                            ${renderMenuItem("maps.html", "map", "Bản đồ", "Viễn chinh thế giới", "rgba(239, 68, 68, 0.4)", "red-500")}

                        </div>
                    </div>
                </div>
            </div>

            <a href="tools.html" class="text-white/80 hover:text-[#c89b3c] font-semibold transition-colors flex items-center gap-2">
                <i data-lucide="wrench" class="w-4 h-4"></i> Công cụ
            </a>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
    if (window.lucide) window.lucide.createIcons();
}

// Hàm phụ để tạo HTML cho từng mục menu (để code chính sạch hơn)
function renderMenuItem(href, icon, title, desc, glow, iconColor) {
    return `
        <a href="${href}" class="flex items-center gap-4 p-3 rounded-xl transition-all group-glow border border-transparent relative overflow-hidden" 
           style="--glow-color: ${glow}; --border-color: ${glow};">
            <div class="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full bg-${iconColor}"></div>
            
            <div class="w-10 h-10 flex items-center justify-center bg-${iconColor}/10 text-${iconColor} rounded-lg flex-shrink-0 shadow-inner">
                <i data-lucide="${icon}" class="w-5 h-5"></i>
            </div>
            <div class="flex flex-col">
                <h4 class="text-white font-bold text-[13px] tracking-wider uppercase leading-none">${title}</h4>
                <p class="text-slate-400 text-[11px] mt-1.5 font-medium">${desc}</p>
            </div>
            <i data-lucide="chevron-right" class="w-4 h-4 ml-auto text-white/10 group-hover:text-white/40 transition-colors"></i>
        </a>
    `;
}

document.addEventListener('DOMContentLoaded', injectNavbar);