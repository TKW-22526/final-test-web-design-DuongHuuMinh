# 📱 Shop Hữu Minh - Website Cửa Hàng Điện Thoại Trực Tuyến

Đây là đồ án kết thúc môn Thiết kế Web. Dự án là một giao diện Front-end website thương mại điện tử chuyên cung cấp các thiết bị điện thoại di động chính hãng, được thiết kế theo hướng hiện đại, trực quan và tối ưu hóa trải nghiệm người dùng (UX/UI).

## 🚀 Các tính năng nổi bật

* **Giao diện Responsive:** Bố cục linh hoạt, tương thích và hiển thị đẹp mắt trên nhiều kích thước màn hình nhờ ứng dụng CSS Flexbox.
* **Sticky Header & Banner Slider:** Thanh điều hướng luôn được ghim cố định giúp dễ dàng thao tác. Trình chiếu banner quảng cáo tự động chuyển cảnh mượt mà bằng JavaScript.
* **Tìm kiếm Thời gian thực (Real-time Search):** Lọc và tìm kiếm sản phẩm tức thì ngay trên Header mà không cần tải lại trang.
* **Kết xuất dữ liệu động (Dynamic DOM Rendering):** Hiển thị danh mục 60 sản phẩm (iPhone, Samsung, Xiaomi, Vivo) tự động từ mảng đối tượng JavaScript, giúp mã nguồn HTML cực kỳ tối giản.
* **Chi tiết Sản phẩm thông minh:** Sử dụng tham số URL (`URLSearchParams`) để tái sử dụng một trang `product-detail.html` duy nhất cho toàn bộ sản phẩm.
* **Quản lý Giỏ hàng (Local Storage):** Thêm, xóa và cập nhật số lượng sản phẩm trong giỏ hàng. Dữ liệu được lưu trữ an toàn trên trình duyệt, không bị mất khi F5 tải lại trang.

## 🛠️ Công nghệ sử dụng

Dự án được xây dựng hoàn toàn bằng các công nghệ Front-end cốt lõi (Không sử dụng thư viện/framework bên ngoài):
* **HTML5:** Xây dựng cấu trúc trang với các thẻ ngữ nghĩa (Semantic HTML).
* **CSS3:** Định dạng giao diện, Box Model, Flexbox, Animations và Hover effects.
* **JavaScript (Vanilla JS):** Thao tác HTML DOM, xử lý mảng đối tượng (Array of Objects), bắt sự kiện (Event Listeners) và Web Storage API (Local Storage).

## 📂 Cấu trúc thư mục
📦 Shop-Huu-Minh--T
 ┣ 📂 assets
 ┃ ┗ 📂 images          # Chứa toàn bộ hình ảnh sản phẩm, banner, logo
 ┣ 📂 css
 ┃ ┗ 📜 style.css       # File định dạng giao diện chung
 ┣ 📂 html
 ┃ ┣ 📜 cart.html             # Trang quản lý giỏ hàng
 ┃ ┗ 📜 product-detail.html   # Trang xem cấu hình chi tiết sản phẩm
 ┣ 📂 js
 ┃ ┗ 📜 main.js         # Chứa mảng dữ liệu (60 SP) và logic xử lý DOM
 ┣ 📜 index.html        # Trang chủ website
 ┗ 📜 README.md         # File tài liệu dự án
