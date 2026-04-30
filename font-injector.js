(function() {
    // 1. Tạo link Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Open+Sans:wght@400;600&display=swap';
    document.head.appendChild(fontLink);

    // 2. Tạo nội dung CSS Global
    const style = document.createElement('style');
    style.innerHTML = `
        /* Biến font dùng chung */
        :root {
            --font-header: 'Space Grotesk', sans-serif;
            --font-main: 'Open Sans', sans-serif;
        }

        /* Ép toàn bộ body dùng Open Sans */
        body {
            font-family: var(--font-main) !important;
        }

        /* Ép Space Grotesk cho các thành phần tiêu đề và giao diện điều khiển */
        h1, h2, h3, h4, h5, h6, 
        input, button, select, textarea,
        .card-name, .rarity-tag, .label-text, .nav-item, .font-header {
            font-family: var(--font-header) !important;
            letter-spacing: -0.02em;
        }

        /* Tinh chỉnh riêng cho các ô input/select để nó mềm mại hơn */
        input, select {
            font-weight: 500;
        }

        /* Giữ cho mô tả luôn dễ đọc */
        p, span, li, td {
            font-family: var(--font-main);
        }
    `;
    document.head.appendChild(style);
    
    console.log("--- FONT INJECTOR ACTIVATED: Space Grotesk & Open Sans ---");
})();