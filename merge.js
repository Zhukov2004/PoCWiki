const fs = require('fs');
const https = require('https');

// Hàm tải dữ liệu thô
function getJSON(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error(`Lỗi tại ${url}`));
                }
            });
        }).on('error', (err) => reject(err));
    });
}

async function rawMerge() {
    // Danh sách các nguồn từ Riot
    const sources = [
        "https://dd.b.pvp.net/latest/tpoc/vi_vn/data/tpoc-vi_vn.json",
        "https://dd.b.pvp.net/latest/set1/vi_vn/data/set1-vi_vn.json",
        "https://dd.b.pvp.net/latest/set2/vi_vn/data/set2-vi_vn.json",
        "https://dd.b.pvp.net/latest/set3/vi_vn/data/set3-vi_vn.json",
        "https://dd.b.pvp.net/latest/set4/vi_vn/data/set4-vi_vn.json",
        "https://dd.b.pvp.net/latest/set5/vi_vn/data/set5-vi_vn.json",
        "https://dd.b.pvp.net/latest/set6/vi_vn/data/set6-vi_vn.json",
        "https://dd.b.pvp.net/latest/set7/vi_vn/data/set7-vi_vn.json",
        "https://dd.b.pvp.net/latest/set8/vi_vn/data/set8-vi_vn.json",
        "https://dd.b.pvp.net/latest/set9/vi_vn/data/set9-vi_vn.json",
        "https://dd.b.pvp.net/latest/set6cde/vi_vn/data/set6cde-vi_vn.json",
        "https://dd.b.pvp.net/latest/set7b/vi_vn/data/set7b-vi_vn.json",
        "https://dd.b.pvp.net/1_0_0/set1/vi_vn/data/set1-vi_vn.json",
        "https://dd.b.pvp.net/1_0_0/set2/vi_vn/data/set2-vi_vn.json",
        "https://dd.b.pvp.net/1_8_0/set3/vi_vn/data/set3-vi_vn.json",
        "https://dd.b.pvp.net/2_3_0/set4/vi_vn/data/set4-vi_vn.json",
        "https://dd.b.pvp.net/2_14_0/set5/vi_vn/data/set5-vi_vn.json",
        "https://dd.b.pvp.net/4_2_0/set6cde/vi_vn/data/set6cde-vi_vn.json",
        "https://dd.b.pvp.net/4_3_0/set7/vi_vn/data/set7-vi_vn.json",
        "https://dd.b.pvp.net/4_6_0/set7b/vi_vn/data/set7b-vi_vn.json",
        "https://dd.b.pvp.net/4_9_0/set8/vi_vn/data/set8-vi_vn.json",
        "https://dd.b.pvp.net/5_4_0/set9/vi_vn/data/set9-vi_vn.json"
    ];

    let bigArray = [];

    console.log("🛠️  Đang bắt đầu copy-paste dữ liệu thô...");

    for (const url of sources) {
        try {
            console.log(`📥 Đang bốc dữ liệu từ: ${url.split('/').slice(-3).join('/')}`);
            const data = await getJSON(url);
            
            // "Dán vào đít": Đẩy toàn bộ các phần tử của file mới vào mảng tổng
            bigArray = bigArray.concat(data);
            
            console.log(`✅ Đã nối xong ${data.length} dòng.`);
        } catch (e) {
            console.log(`⚠️  Bỏ qua nguồn này do lỗi link.`);
        }
    }
    
    // Xuất file với định dạng thụt lề 2 khoảng trắng cho đẹp
    fs.writeFileSync('LoR_Raw_Merged.json', JSON.stringify(bigArray, null, 2));

    console.log("\n-------------------------------------------");
    console.log(`🏆 XONG! Đã nối đuôi tất cả thành 1 file JSON duy nhất.`);
    console.log(`📂 Tên file: LoR_Raw_Merged.json`);
    console.log(`📊 Tổng số Object: ${bigArray.length}`);
    console.log("-------------------------------------------");
}

rawMerge();