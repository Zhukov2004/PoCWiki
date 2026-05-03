function injectNavbar() {
    const navHTML = `
    <style>
        /* Loại bỏ hiệu ứng dịch chuyển và đổ bóng mờ, thay bằng border đặc */
        .group-glow:hover {
            border-color: var(--border-color) !important;
            background: #1a2430 !important; /* Màu đặc không trong suốt */
        }
        
        /* Tùy chỉnh thanh cuộn - dùng màu đặc */
        .glow-scrollbar::-webkit-scrollbar {
            width: 5px;
        }
        .glow-scrollbar::-webkit-scrollbar-track {
            background: #0d111c;
        }
        .glow-scrollbar::-webkit-scrollbar-thumb {
            background: #c89b3c;
            border-radius: 10px;
        }
        .glow-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #e2b75a;
        }

        /* Hiệu ứng hiển thị menu: Chỉ dùng Transform và Visibility, bỏ Opacity */
        .group:hover .dropdown-content {
            visibility: visible !important;
            transform: translateX(-50%) translateY(0) !important;
        }
        .dropdown-content {
            visibility: hidden;
            transform: translateX(-50%) translateY(10px);
            transition: transform 0.3s ease;
        }
    </style>

    <nav class="fixed top-0 left-0 right-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-[#04060b] border-b border-[#1e232a]" id="mainNav">
        <a href="index.html" class="ml-20 flex items-center group transition-all active:scale-90 hover:brightness-125">
            <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Legends_of_Runeterra_nav_icon%40Gold.png/400px-Legends_of_Runeterra_nav_icon%40Gold.png?215d1" 
                 alt="Legends of Runeterra" 
                 class="w-12 h-12 object-contain">
        </a>
        
        <div class="hidden lg:flex gap-10 items-center">
            <div class="relative group">
                <button class="text-[#f0e6d2] group-hover:text-[#c89b3c] font-semibold transition-colors flex items-center gap-2 py-3">
                    <i data-lucide="database" class="w-4 h-4"></i> Dữ liệu
                    <i data-lucide="chevron-down" class="w-3 h-3 transition-transform group-hover:rotate-180"></i>
                </button>

                <!-- Dropdown Wrapper: Bỏ opacity-0, invisible và backdrop-blur -->
                <div class="dropdown-content absolute top-full left-1/2 w-[340px] pt-3 z-[110]">
                    <div class="bg-[#0d111c] border border-[#32363d] rounded-2xl shadow-2xl p-2">
                        <!-- Vùng cuộn chính -->
                        <div class="max-h-[60vh] overflow-y-auto pr-2 glow-scrollbar flex flex-col gap-2 p-1">
                            ${renderMenuItem("champ.html", "user-square", "Tướng", "Chỉ số & Kỹ năng", "#f97316")}
                            ${renderMenuItem("relics.html", "gem", "Cổ vật", "Trang bị sức mạnh", "#22d3ee")}
                            ${renderMenuItem("powers.html", "zap", "Sức mạnh", "Nội tại đặc biệt", "#eab308")}
                            ${renderMenuItem("items.html", "wrench", "Vật phẩm", "Phụ kiện đi kèm", "#3b82f6")}
                            ${renderMenuItem("cards.html", "layers", "Lá bài", "Thư viện Runeterra", "#10b981")}
                            ${renderMenuItem("progression.html", "trending-up", "Tiến trình", "Cấp độ & Thưởng", "#c89b3c")}
                            ${renderMenuItem("maps.html", "map", "Bản đồ", "Viễn chinh thế giới", "#ef4444")}
                            ${renderMenuItem("resources.html", "database", "Tài Nguyên", "Bụi Tinh Tú & Mảnh ghép", "#a855f7")}
                            ${renderMenuItem("skin.html", "sparkles", "Trang Phục", "Ngoại hình tướng", "#ec4893")}
                            ${renderMenuItem("lungbai.html", "gallery-vertical-end", "Lưng Bài", "Mặt sau lá bài", "#6366f1")}
                            ${renderMenuItem("bandau.html", "layout-template", "Bàn Đấu", "Giao diện chiến trường", "#14b8a6")}
                            ${renderMenuItem("emote.html", "smile", "Emote", "Biểu cảm hài hước", "#fb923c")}
                            ${renderMenuItem("hoatanhthangcap.html", "video", "Thăng Cấp", "Hoạt ảnh đặc biệt", "#ff4655")}
                        </div>
                    </div>
                </div>
            </div>

            <a href="tools.html" class="text-[#f0e6d2] hover:text-[#c89b3c] font-semibold transition-colors flex items-center gap-2">
                <i data-lucide="wrench" class="w-4 h-4"></i> Công cụ
            </a>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
    if (window.lucide) window.lucide.createIcons();
}

// Hàm render mục menu đã loại bỏ hoàn toàn màu RGBA
function renderMenuItem(href, icon, title, desc, colorHex) {
    return `
        <a href="${href}" class="flex items-center gap-4 p-4 rounded-xl transition-all border border-[#1e232a] bg-[#0a141e] hover:bg-[#1a2430] group">
            <!-- Icon Box: Dùng màu đặc -->
            <div class="w-11 h-11 flex items-center justify-center bg-[#161d2b] border border-[#32363d] rounded-lg flex-shrink-0" style="color: ${colorHex};">
                <i data-lucide="${icon}" class="w-5 h-5"></i>
            </div>

            <!-- Nội dung chữ -->
            <div class="flex flex-col">
                <h4 class="text-[#f0e6d2] font-bold text-[13px] tracking-wider uppercase leading-none group-hover:text-white transition-colors">${title}</h4>
                <p class="text-[#8a8e96] text-[11px] mt-1.5 font-medium leading-tight">${desc}</p>
            </div>

            <i data-lucide="chevron-right" class="w-4 h-4 ml-auto text-[#2d3139] group-hover:text-white transition-all"></i>
        </a>
    `;
}

document.addEventListener('DOMContentLoaded', injectNavbar);