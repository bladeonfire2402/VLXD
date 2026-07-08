# Kiến trúc Layer 2: Global Modal Manager

Tài liệu này ghi lại luồng hoạt động và cấu trúc của hệ thống Modal toàn cục (Layer 2) được implement trong dự án.

## 1. Tổng quan (Overview)
Hệ thống Modal được thiết kế theo dạng **"Layer 2 Architecture"**. Thay vì import và render các component Modal rải rác ở khắp các trang/component con, toàn bộ ứng dụng chỉ có duy nhất **một** Container Modal chung (`GlobalModalManager`). Container này sẽ nằm ở cấp cao nhất (thường là Root Layout) và lắng nghe trạng thái từ Redux để quyết định *khi nào hiển thị* và *hiển thị Modal nào*.

## 2. Các thành phần chính (Core Components)

### 2.1. Redux Store (`modalSlice.ts`)
Đóng vai trò là "bộ não" điều khiển trạng thái Modal.
- **State bao gồm:**
  - `isOpen`: Trạng thái đóng/mở của Modal (boolean).
  - `modalType`: Tên của Modal cần render (string, là key liên kết với `ModalRegistry`).
  - `modalProps`: Bất kỳ data hoặc props nào cần truyền vào Modal đó.
- **Actions:**
  - `openModal(type, props)`: Gọi action này ở bất kỳ đâu trong app để mở Modal.
  - `closeModal()`: Đóng Modal, reset thông tin.

### 2.2. Modal Registry (`ModalRegistry.tsx`)
Đóng vai trò là một "cuốn danh bạ". Nó ánh xạ một chuỗi định danh (key) sang một Component thực tế (value).
- **Mục đích:** `GlobalModalManager` không cần phải import tất cả các modal tĩnh mà chỉ cần truy xuất thông qua Registry này.
- **Cách hoạt động:** Khi tạo Modal mới (VD: `LoginForm`, `ProductQuickView`), ta chỉ cần thêm vào danh sách `MODAL_COMPONENTS` trong file này.

### 2.3. Global Modal Manager (`GlobalModalManager.tsx`)
Đóng vai trò là "lớp vỏ" (Wrapper) và chịu trách nhiệm UI chính của Layer 2.
- **Lấy State:** Component này dùng `useSelector` để lấy `isOpen`, `modalType` và `modalProps` từ Redux.
- **Render động:** Dựa vào `modalType`, nó truy xuất Component tương ứng từ `MODAL_COMPONENTS`. Nếu tìm thấy, nó sẽ render Component đó bên trong một Backdrop (lớp phủ màn hình tối) và truyền toàn bộ `modalProps` vào Component con.
- **Xử lý đóng/mở:** Chứa sẵn nút `X` (close) hoặc lắng nghe sự kiện click vào phần backdrop để dispatch action `closeModal()`.

## 3. Lợi ích của kiến trúc này
1. **Clean Code & Tách biệt trách nhiệm:** Các trang (Pages) hoặc component con không phải chịu trách nhiệm quản lý state đóng/mở (useState) của Modal.
2. **Global Control:** Có thể gọi mở Modal từ **bất kỳ đâu**, ngay cả bên trong các hàm xử lý API (ví dụ: token hết hạn -> tự động trigger Redux dispatch `openModal('LOGIN_FORM')`).
3. **Hiệu suất (Performance):** DOM không bị nhồi nhét hàng tá component Modal bị ẩn rải rác khắp nơi. Chỉ duy nhất Component Modal đang được gọi mới được React gắn vào DOM.
4. **Dễ mở rộng:** Việc thêm một Modal mới chỉ tốn 2 bước: tạo Component con và đăng ký nó vào `ModalRegistry`.
