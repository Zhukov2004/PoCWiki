/**
 * Path of Champions Wiki - Mobile Optimization Script
 */
(function() {
    const mobileStyle = document.createElement('style');
    mobileStyle.innerHTML = `
        /* 1. Tối ưu Header & Container */
        @media (max-width: 768px) {
            body { padding-top: 20px !important; }
            .container-wiki { padding: 0 10px 30px !important; }
            
            .wiki-header { 
                flex-direction: column; 
                align-items: center; 
                padding: 15px !important; 
                text-align: center;
                gap: 15px !important;
            }
            
            .wiki-header img { 
                width: 140px !important; 
                height: auto; 
            }

            h1 { font-size: 1.8rem !important; }

            /* 2. Tối ưu Grid thông tin */
            .info-grid { 
                grid-template-columns: 1fr 1fr !important; 
                width: 100%;
            }

            /* 3. Tối ưu Tab (Cho phép vuốt ngang) */
            .tab-container { 
                overflow-x: auto; 
                white-space: nowrap; 
                display: flex;
                padding-bottom: 5px;
                -webkit-overflow-scrolling: touch;
            }
            .tab-btn { 
                padding: 10px 15px !important; 
                font-size: 0.75rem !important; 
                flex-shrink: 0;
            }

            /* 4. Chuyển Table thành Card trên Mobile để dễ đọc */
            .wiki-table thead { display: none; }
            .wiki-table tr { 
                display: block; 
                margin-bottom: 15px; 
                background: var(--wiki-card);
                border: 1px solid var(--wiki-border);
                border-radius: 8px;
            }
            .wiki-table td { 
                display: block; 
                width: 100% !important; 
                border: none !important; 
                padding: 10px 15px !important;
            }
            
            .star-col { 
                background: rgba(200, 155, 60, 0.1); 
                text-align: left !important; 
                font-size: 1.2rem !important;
                border-bottom: 1px solid var(--wiki-border) !important;
            }

            /* 5. Tối ưu Grid vật phẩm & bài */
            .wiki-grid-equal {
                grid-template-columns: 1fr !important;
            }
            
            .grid-cols-5 {
                grid-template-columns: repeat(2, 1fr) !important;
            }

            /* 6. Fix lỗi tràn ảnh nền */
            body { background-attachment: scroll !important; }
        }

        /* Hiệu ứng mượt mà khi bấm */
        .tab-btn, .data-card, .tab-btn {
            -webkit-tap-highlight-color: transparent;
        }
    `;
    document.head.appendChild(mobileStyle);

    // Hàm bổ trợ xử lý UX Mobile
    function applyMobileFixes() {
        // Tự động thêm Lucide icons sau khi nội dung thay đổi
        if (window.lucide) {
            lucide.createIcons();
        }

        // Fix lỗi click trên mobile cho các thẻ card
        const cards = document.querySelectorAll('.data-card');
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.background = '#252830';
            }, {passive: true});
            card.addEventListener('touchend', function() {
                this.style.background = '#1c1e24';
            }, {passive: true});
        });
    }

    // Chạy khi trang load xong
    window.addEventListener('DOMContentLoaded', applyMobileFixes);
    
    // Theo dõi thay đổi của DOM để re-run fix (Dành cho trang dùng AJAX/Render động)
    const observer = new MutationObserver(applyMobileFixes);
    const targetNode = document.getElementById('app');
    if (targetNode) {
        observer.observe(targetNode, { childList: true });
    }
})();