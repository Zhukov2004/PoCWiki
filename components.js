function injectNavbar() {
    const navHTML = `
    <style>
        .group-glow:hover {
            box-shadow: 0 0 20px -5px var(--glow-color);
            border-color: var(--border-color) !important;
            background: rgba(255, 255, 255, 0.05) !important;
            transform: translateX(4px);
        }
        /* Custom thanh cuộn cho menu dữ liệu */
        .glow-scrollbar::-webkit-scrollbar {
            width: 5px;
        }
        .glow-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 10px;
        }
        .glow-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, rgba(200, 155, 60, 0.1), rgba(200, 155, 60, 0.4));
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(200, 155, 60, 0.2);
        }
        .glow-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(200, 155, 60, 0.6);
        }
    </style>

    <nav class="fixed top-0 left-0 right-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-[#04060b]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="mainNav">
        <a href="index.html" class="ml-20 flex items-center group transition-all active:scale-90 hover:brightness-125">
            <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Legends_of_Runeterra_nav_icon%40Gold.png/400px-Legends_of_Runeterra_nav_icon%40Gold.png?215d1" 
                 alt="Legends of Runeterra" 
                 class="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(200,155,60,0.3)]">
        </a>
        
        <div class="hidden lg:flex gap-10 items-center">
            <div class="relative group">
                <button class="text-white/80 group-hover:text-cyan-400 font-semibold transition-colors flex items-center gap-2 py-3">
                    <i data-lucide="database" class="w-4 h-4"></i> Dữ liệu
                    <i data-lucide="chevron-down" class="w-3 h-3 transition-transform group-hover:rotate-180"></i>
                </button>

                <!-- Dropdown Wrapper -->
                <div class="absolute top-full left-1/2 -translate-x-1/2 w-[340px] pt-3 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 z-[110]">
                    <div class="bg-[#0d111c]/98 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9)] p-2">
                        <!-- Vùng cuộn chính -->
                        <div class="max-h-[750px] overflow-y-auto pr-2 glow-scrollbar flex flex-col gap-3 p-1">
                            ${renderMenuItem("champ.html", "user-square", "Tướng", "Chỉ số & Kỹ năng", "rgba(249, 115, 22, 0.4)", "orange-500")}
                            ${renderMenuItem("relics.html", "gem", "Cổ vật", "Trang bị sức mạnh", "rgba(34, 211, 238, 0.4)", "cyan-400")}
                            ${renderMenuItem("powers.html", "zap", "Sức mạnh", "Nội tại đặc biệt", "rgba(234, 179, 8, 0.4)", "yellow-500")}
                            ${renderMenuItem("items.html", "wrench", "Vật phẩm", "Phụ kiện đi kèm", "rgba(59, 130, 246, 0.4)", "blue-500")}
                            ${renderMenuItem("cards.html", "layers", "Lá bài", "Thư viện Runeterra", "rgba(16, 185, 129, 0.4)", "emerald-500")}
                            ${renderMenuItem("progression.html", "trending-up", "Tiến trình", "Cấp độ & Thưởng", "rgba(200, 155, 60, 0.4)", "[#c89b3c]")}
                            ${renderMenuItem("maps.html", "map", "Bản đồ", "Viễn chinh thế giới", "rgba(239, 68, 68, 0.4)", "red-500")}
                            ${renderMenuItem("resources.html", "database", "Tài Nguyên", "Bụi Tinh Tú & Mảnh ghép", "rgba(168, 85, 247, 0.4)", "purple-500")}
                            ${renderMenuItem("skin.html", "sparkles", "Trang Phục", "Ngoại hình tướng", "rgba(236, 72, 153, 0.4)", "pink-500")}
                            ${renderMenuItem("lungbai.html", "gallery-vertical-end", "Lưng Bài", "Mặt sau lá bài", "rgba(99, 102, 241, 0.4)", "indigo-400")}
                            ${renderMenuItem("bandau.html", "layout-template", "Bàn Đấu", "Giao diện chiến trường", "rgba(20, 184, 166, 0.4)", "teal-500")}
                            ${renderMenuItem("emote.html", "smile", "Emote", "Biểu cảm hài hước", "rgba(251, 146, 60, 0.4)", "orange-400")}
                        </div>
                        
                        <!-- Một cái chân nhỏ cho dropdown nhìn tinh tế hơn -->
                        <div class="mt-2 pt-2 border-t border-white/5 text-center">
                            <p class="text-[9px] text-white/20 uppercase tracking-[0.2em]">Cập nhật bản mới nhất</p>
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
        <a href="${href}" class="flex items-center gap-4 p-4 rounded-xl transition-all border border-white/5 relative overflow-hidden bg-[#0a141e] hover:bg-[#121c28] group" 
           style="--glow-color: ${glow};">
            
            <!-- Vạch trang trí bên trái -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-${iconColor} shadow-[0_0_10px_${glow}]"></div>
            
            <!-- Icon Box -->
            <div class="w-11 h-11 flex items-center justify-center bg-${iconColor}/10 text-${iconColor} rounded-lg flex-shrink-0 border border-${iconColor}/20 shadow-lg">
                <i data-lucide="${icon}" class="w-5 h-5"></i>
            </div>

            <!-- Nội dung chữ -->
            <div class="flex flex-col">
                <h4 class="text-[#f0e6d2] font-bold text-[14px] tracking-wider uppercase leading-none group-hover:text-white transition-colors">${title}</h4>
                <p class="text-slate-400 text-[11px] mt-1.5 font-medium leading-tight">${desc}</p>
            </div>

            <!-- Mũi tên chỉ hướng -->
            <i data-lucide="chevron-right" class="w-4 h-4 ml-auto text-white/10 group-hover:text-${iconColor} group-hover:translate-x-1 transition-all"></i>
        </a>
    `;
}

document.addEventListener('DOMContentLoaded', injectNavbar);