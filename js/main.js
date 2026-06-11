const productList = [
    // ================= DÒNG IPHONE (10 Sản phẩm) =================
    {id:"01", name: "iPhone 15 Pro Max", price:"29.000.000vnđ", image:"assets/images/ipmax.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"02", name: "iPhone 15 Pro", price:"27.000.000vnđ", image:"assets/images/ippro.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"03", name: "iPhone 15", price:"20.000.000vnđ", image:"assets/images/ip15.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"04", name: "iPhone 14 Pro Max", price:"26.000.000vnđ", image:"assets/images/ip14max.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"05", name: "iPhone 14 Pro", price:"24.000.000vnđ", image:"assets/images/ip14pro.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"06", name: "iPhone 14", price:"18.000.000vnđ", image:"assets/images/ip14.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"07", name: "iPhone 13 Pro Max", price:"20.000.000vnđ", image:"assets/images/ip13max.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"08", name: "iPhone 13", price:"15.000.000vnđ", image:"assets/images/ip13.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"09", name: "iPhone 12", price:"10.000.000vnđ", image:"assets/images/ip12.jpg", productLink:"product-detail.html", brand: "iPhone"},
    {id:"10", name: "iPhone 11", price:"7.000.000vnđ", image:"assets/images/ip11.jpg", productLink:"product-detail.html", brand: "iPhone"},

    // ================= DÒNG SAMSUNG (10 Sản phẩm) =================
    {id:"11", name: "Samsung Galaxy S24 Ultra", price:"30.000.000vnđ", image:"assets/images/samsung1.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"12", name: "Samsung Galaxy S24+", price:"25.000.000vnđ", image:"assets/images/samsung2.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"13", name: "Samsung Galaxy S24", price:"20.000.000vnđ", image:"assets/images/samsung3.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"14", name: "Samsung Galaxy Z Fold 5", price:"40.000.000vnđ", image:"assets/images/samsung4.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"15", name: "Samsung Galaxy Z Flip 5", price:"22.000.000vnđ", image:"assets/images/samsung5.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"16", name: "Samsung Galaxy S23 Ultra", price:"24.000.000vnđ", image:"assets/images/samsung6.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"17", name: "Samsung Galaxy A55 5G", price:"10.000.000vnđ", image:"assets/images/samsung7.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"18", name: "Samsung Galaxy A35 5G", price:"8.000.000vnđ", image:"assets/images/samsung8.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"19", name: "Samsung Galaxy M54", price:"9.000.000vnđ", image:"assets/images/samsung9.jpg", productLink:"product-detail.html", brand: "Samsung"},
    {id:"20", name: "Samsung Galaxy S21 FE", price:"11.000.000vnđ", image:"assets/images/samsung10.jpg", productLink:"product-detail.html", brand: "Samsung"},

    // ================= DÒNG NOKIA (10 Sản phẩm) =================
    {id:"21", name: "Nokia 1280", price:"350.000vnđ", image:"assets/images/nokia1.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"22", name: "Nokia X30 5G", price:"10.000.000vnđ", image:"assets/images/nokia2.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"23", name: "Nokia G22", price:"3.500.000vnđ", image:"assets/images/nokia3.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"24", name: "Nokia C32", price:"3.000.000vnđ", image:"assets/images/nokia4.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"25", name: "Nokia G11 Plus", price:"2.500.000vnđ", image:"assets/images/nokia5.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"26", name: "Nokia C21 Plus", price:"2.000.000vnđ", image:"assets/images/nokia6.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"27", name: "Nokia 8210 4G", price:"1.500.000vnđ", image:"assets/images/nokia7.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"28", name: "Nokia 3310 (2017)", price:"1.000.000vnđ", image:"assets/images/nokia8.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"29", name: "Nokia 215 4G", price:"800.000vnđ", image:"assets/images/nokia9.jpg", productLink:"product-detail.html", brand: "Nokia"},
    {id:"30", name: "Nokia 105 4G", price:"700.000vnđ", image:"assets/images/nokia10.jpg", productLink:"product-detail.html", brand: "Nokia"},

    // ================= DÒNG OPPO (10 Sản phẩm) =================
    {id:"31", name: "Oppo Find N3 Fold", price:"40.000.000vnđ", image:"assets/images/oppo1.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"32", name: "Oppo Find N3 Flip", price:"20.000.000vnđ", image:"assets/images/oppo2.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"33", name: "Oppo Reno 11 Pro 5G", price:"14.000.000vnđ", image:"assets/images/oppo3.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"34", name: "Oppo Reno 11 5G", price:"10.000.000vnđ", image:"assets/images/oppo4.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"35", name: "Oppo Reno 10 5G", price:"8.000.000vnđ", image:"assets/images/oppo5.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"36", name: "Oppo A98 5G", price:"8.500.000vnđ", image:"assets/images/oppo6.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"37", name: "Oppo A78", price:"6.500.000vnđ", image:"assets/images/oppo7.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"38", name: "Oppo A58", price:"5.500.000vnđ", image:"assets/images/oppo8.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"39", name: "Oppo A38", price:"4.000.000vnđ", image:"assets/images/oppo9.jpg", productLink:"product-detail.html", brand: "Oppo"},
    {id:"40", name: "Oppo A18", price:"3.500.000vnđ", image:"assets/images/oppo10.jpg", productLink:"product-detail.html", brand: "Oppo"},

    // ================= DÒNG XIAOMI (10 Sản phẩm) =================
    {id:"41", name: "Xiaomi 14 Ultra", price:"32.990.000vnđ", image:"assets/images/xiaomi1.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"42", name: "Xiaomi 14", price:"22.990.000vnđ", image:"assets/images/xiaomi2.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"43", name: "Xiaomi 13T Pro", price:"15.990.000vnđ", image:"assets/images/xiaomi3.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"44", name: "Xiaomi 13T", price:"11.990.000vnđ", image:"assets/images/xiaomi4.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"45", name: "Redmi Note 13 Pro+ 5G", price:"10.490.000vnđ", image:"assets/images/xiaomi5.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"46", name: "Redmi Note 13 Pro", price:"7.490.000vnđ", image:"assets/images/xiaomi6.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"47", name: "Redmi 13", price:"4.290.000vnđ", image:"assets/images/xiaomi7.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"48", name: "Redmi 12", price:"3.490.000vnđ", image:"assets/images/xiaomi8.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"49", name: "Poco X6 Pro 5G", price:"8.490.000vnđ", image:"assets/images/xiaomi9.jpg", productLink:"product-detail.html", brand: "Xiaomi"},
    {id:"50", name: "Poco M6 Pro", price:"5.490.000vnđ", image:"assets/images/xiaomi10.jpg", productLink:"product-detail.html", brand: "Xiaomi"},

    // ================= DÒNG VIVO (10 Sản phẩm) =================
    {id:"51", name: "Vivo X100 Pro 5G", price:"29.990.000vnđ", image:"assets/images/vivo1.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"52", name: "Vivo X100 5G", price:"21.990.000vnđ", image:"assets/images/vivo2.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"53", name: "Vivo V30 5G", price:"13.990.000vnđ", image:"assets/images/vivo3.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"54", name: "Vivo V30e 5G", price:"9.490.000vnđ", image:"assets/images/vivo4.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"55", name: "Vivo V29 5G", price:"11.490.000vnđ", image:"assets/images/vivo5.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"56", name: "Vivo V29e 5G", price:"8.490.000vnđ", image:"assets/images/vivo6.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"57", name: "Vivo Y100", price:"6.990.000vnđ", image:"assets/images/vivo7.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"58", name: "Vivo Y36", price:"5.490.000vnđ", image:"assets/images/vivo8.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"59", name: "Vivo Y17s", price:"3.490.000vnđ", image:"assets/images/vivo9.jpg", productLink:"product-detail.html", brand: "Vivo"},
    {id:"60", name: "Vivo Y03", price:"2.790.000vnđ", image:"assets/images/vivo10.jpg", productLink:"product-detail.html", brand: "Vivo"},
];

function taoSanPham(maMay, tenMay, giaTien, linkAnh, linkXemChiTiet) {
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "productItem");

    const productDiv1 = document.createElement("div");
    productDiv1.setAttribute("class", "productDiv1");
    const productImage = document.createElement("img");
    productImage.setAttribute("src", linkAnh);
    productImage.setAttribute("alt", tenMay);
    productDiv1.appendChild(productImage);

    const productDiv2 = document.createElement("div");
    productDiv2.setAttribute("class", "productDiv2");
    const productId = document.createElement("p"); 
    productId.appendChild(document.createTextNode("Mã: " + maMay));
    const productName = document.createElement("p");
    productName.appendChild(document.createTextNode(tenMay));
    const productPrice = document.createElement("p"); 
    productPrice.appendChild(document.createTextNode(giaTien));
    const productLink = document.createElement("a");
    productLink.appendChild(document.createTextNode("Xem chi tiết"));
    
    productLink.setAttribute(
        "href",
        "html/" + linkXemChiTiet + "?id=" + maMay
    );
    productLink.setAttribute("target", "_blank");

    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productId);
    productDiv2.appendChild(productLink);

    // TẠO 2 NÚT BẤM (MUA NGAY & THÊM GIỎ HÀNG)
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "10px";
    btnContainer.style.marginTop = "10px";

    const btnBuyNow = document.createElement("button");
    btnBuyNow.appendChild(document.createTextNode("Mua ngay"));
    btnBuyNow.style.padding = "8px";
    btnBuyNow.style.backgroundColor = "#e74c3c"; // Đồng màu đỏ cam
    btnBuyNow.style.color = "white";
    btnBuyNow.style.border = "none";
    btnBuyNow.style.borderRadius = "5px";
    btnBuyNow.style.cursor = "pointer";
    btnBuyNow.style.fontWeight = "bold";
    btnBuyNow.style.flex = "1";

    // --- SỰ KIỆN NÚT MUA NGAY ---
    btnBuyNow.addEventListener("click", function() {
        // 1. Thêm vào giỏ hàng ngầm
        let gioHang = JSON.parse(localStorage.getItem("gioHangCuaMinh")) || [];
        let sanPhamDaCo = gioHang.find(sp => sp.id === maMay);

        if (sanPhamDaCo) {
            sanPhamDaCo.soLuong += 1; 
        } else {
            gioHang.push({ id: maMay, name: tenMay, price: giaTien, image: linkAnh, soLuong: 1 });
        }
        localStorage.setItem("gioHangCuaMinh", JSON.stringify(gioHang));
        capNhatSoLuongGioHang();

        // 2. Thông báo và chuyển hướng thẳng sang trang giỏ hàng
        alert("🎉 Đã thêm " + tenMay + " vào giỏ! Chuyển sang trang thanh toán...");
        window.location.href = "html/cart.html";
    });

    const btnAddCart = document.createElement("button");
    btnAddCart.appendChild(document.createTextNode("Giỏ hàng"));
    btnAddCart.style.padding = "8px";
    btnAddCart.style.backgroundColor = "#2c3e50"; // Màu navy cho nút phụ
    btnAddCart.style.color = "white";
    btnAddCart.style.border = "none";
    btnAddCart.style.borderRadius = "5px";
    btnAddCart.style.cursor = "pointer";
    btnAddCart.style.fontWeight = "bold";
    btnAddCart.style.flex = "1";

    btnAddCart.addEventListener("click", function() {
        luuVaoGioHang(maMay, tenMay, giaTien, linkAnh);
    });

    btnContainer.appendChild(btnBuyNow);
    btnContainer.appendChild(btnAddCart);
    productDiv2.appendChild(btnContainer);

    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    return productItem;
}

// Hàm Thêm vào giỏ hàng (chỉ báo thành công và ở lại trang)
function luuVaoGioHang(id, name, price, image) {
    let gioHang = JSON.parse(localStorage.getItem("gioHangCuaMinh")) || [];
    let sanPhamDaCo = gioHang.find(sp => sp.id === id);

    if (sanPhamDaCo) {
        sanPhamDaCo.soLuong += 1; 
    } else {
        gioHang.push({ id: id, name: name, price: price, image: image, soLuong: 1 });
    }
    localStorage.setItem("gioHangCuaMinh", JSON.stringify(gioHang));
    // Dùng Toast thay cho alert
    showToast("Đã thêm " + name + " vào giỏ!");
    
    capNhatSoLuongGioHang();
}

function xoaGioHang() {
    localStorage.removeItem("gioHangCuaMinh");
    alert("Đã xóa toàn bộ giỏ hàng!");
    location.reload();
}

function xoaSanPham(id) {
    let gioHang = JSON.parse(localStorage.getItem("gioHangCuaMinh")) || [];
    gioHang = gioHang.filter(sp => sp.id !== id);
    localStorage.setItem("gioHangCuaMinh", JSON.stringify(gioHang));
    location.reload();
}

// Hàm cập nhật con số đếm trên Header
function capNhatSoLuongGioHang() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        let gioHang = JSON.parse(localStorage.getItem("gioHangCuaMinh")) || [];
        let tongSo = gioHang.reduce((tong, sp) => tong + sp.soLuong, 0);
        cartCountEl.innerText = tongSo;
    }
}

// Tự động cập nhật số lượng khi web vừa tải xong
window.addEventListener('DOMContentLoaded', capNhatSoLuongGioHang);
// ================= LOGIC TOAST MESSAGE =================
function showToast(message, isError = false) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return; 

    const toast = document.createElement('div');
    toast.classList.add('toast');
    if (isError) toast.classList.add('error');

    // Dùng emoji làm icon cho sinh động
    const icon = isError ? '❌' : '✅';
    toast.innerHTML = `<span style="font-size: 18px;">${icon}</span> <span>${message}</span>`;

    toastContainer.appendChild(toast);

    // Tự động mờ dần và xóa sau 3 giây (3000ms)
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3000);
}

// ================= LOGIC DARK MODE =================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Lưu lựa chọn vào Local Storage
    localStorage.setItem('chếĐộTối', isDark ? 'yes' : 'no');
    
    // Đổi icon mặt trăng / mặt trời
    const toggleBtn = document.getElementById('darkModeToggle');
    if (toggleBtn) toggleBtn.innerText = isDark ? '☀️' : '🌙';
}

// Tự động kiểm tra chế độ lúc tải trang
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('chếĐộTối') === 'yes') {
        document.body.classList.add('dark-mode');
        const toggleBtn = document.getElementById('darkModeToggle');
        if(toggleBtn) toggleBtn.innerText = '☀️';
    }
});