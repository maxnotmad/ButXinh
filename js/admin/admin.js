const usernameLabel = $('.info__name')
const contentContainer = $('#content')
const listControlItems = $$('.nav-links__item')

Array.from(listControlItems).forEach((item) => {
    item.addEventListener('click', () => {
        const activeItem = $('.nav-links__item.active');
        if (activeItem) {
            activeItem.classList.remove('active')
        }
        //Trang chủ admin
        if (item.getAttribute('data-value') === 'trang-chu') {
            item.classList.add('active')
            contentContainer.innerHTML =
                `
                <div class="top-line">
                <h1 class="top-line__heading">TRANG CHỦ</h1>
            </div>
            <div class="filter">
                <div class="filter__container">
                    <label for="" class="filter__label">Chọn tháng cần xem</label>
                    <select name="filter__select" id="filter__select" class="filter__control">
                        <option value="">--Chọn tháng--</option>
                        <option value="customer">Khách hàng</option>
                        <option value="admin">Admin</option>

                    </select>
                    <div class="filter__button">Lọc</div>
                </div>


            </div>



            <div class="box-analysis__container">
                <div class="box-analysis__item" data-value="total-customer">
                    <div class="box-analysis__heading">
                        <div class="box-analysis__icon">
                            <i class="fa-solid fa-money-bill"></i>
                        </div>
                        <div class="box-analysis__label">Khách hàng</div>
                    </div>
                    <div class="box-analysis__number">100000</div>


                </div>
                <div class="box-analysis__item" data-value="total-invoice">
                    <div class="box-analysis__heading">
                        <div class="box-analysis__icon">
                            <i class="fa-solid fa-money-bill"></i>
                        </div>
                        <div class="box-analysis__label">Tổng hóa đơn</div>
                    </div>
                    <div class="box-analysis__number">100000</div>
                </div>
                <div class="box-analysis__item" data-value="total-price">
                    <div class="box-analysis__heading">
                        <div class="box-analysis__icon">
                            <i class="fa-solid fa-money-bill"></i>
                        </div>
                        <div class="box-analysis__label">Tổng doanh thu</div>
                    </div>
                    <div class="box-analysis__number">100000</div>
                </div>
                <div class="box-analysis__item" data-value="total-product">
                    <div class="box-analysis__heading">
                        <div class="box-analysis__icon">
                            <i class="fa-solid fa-money-bill"></i>
                        </div>
                        <div class="box-analysis__label">Tổng sản phẩm bán ra</div>
                    </div>
                    <div class="box-analysis__number">100000</div>
                </div>
            </div>
            <div id="table_wrapper">

                <div class="table__container" data-value="1">
                    <div class="table__title">
                        TỔNG SẢN PHẨM BÁN RA THEO THƯƠNG HIỆU
                    </div>
                    <table class="analysis-table">
                        <thead>
                            <tr class="analysis-table__heading">
                                <th>Tên thương hiệu</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody class="analysis-table__list">
                            <tr class="analysis-table__row">
                                <td>Samsung</td>
                                <td>2</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="table__container" data-value="2">
                    <div class="table__title">
                        TỔNG DOANH THU BÁN RA THEO THƯƠNG HIỆU
                    </div>
                    <table class="analysis-table">
                        <thead>
                            <tr class="analysis-table__heading">
                                <th>Tên thương hiệu</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody class="analysis-table__list">
                            <tr class="analysis-table__row">
                                <td>Samsung</td>
                                <td>2</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            `
            initDashboardPage()

        }
        //Quan ly khach hang
        if (item.getAttribute('data-value') === 'ql-nguoidung') {
            item.classList.add('active')
            contentContainer.innerHTML =
                `
                <div class="top-line">
                <h1 class="top-line__heading">QUẢN LÝ KHÁCH HÀNG</h1>
            </div>


            <div class="content__container">
                <ul class="function__list">
                    <li class="function__item active" data-value="add">
                        <span class="function__item-title">
                            Thêm mới
                        </span>
                    </li>
                    <li class="function__item" data-value="update">
                        <span class="function__item-title">
                            Chỉnh sửa
                        </span>
                    </li>
                    <li class="function__item" data-value="delete">
                        <span class="function__item-title">
                            Xóa
                        </span>
                    </li>


                </ul>
                <form id="form-admin">
                    <div class="form-container">

                        <div class="form-group">
                            <label for="user-id" class="form-label">Mã người dùng</label>

                            <input id="user-id" name="user-id" type="text" class="form-control" disabled="true">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-full_name" class="form-label">Họ tên người dùng</label>

                            <input id="user-full_name" name="user-full_name" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>

                        <div class="form-group">
                            <label for="user-username" class="form-label">Tên đăng nhập</label>

                            <input id="user-username" name="user-username" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-password" class="form-label">Mật khẩu</label>

                            <input id="user-password" name="user-password" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-email" class="form-label">Email</label>

                            <input id="user-email" name="user-email" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-phone" class="form-label">Số ĐT</label>

                            <input id="user-phone" name="user-phone" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group form-group--full">
                            <label for="user-address" class="form-label">Địa chỉ</label>

                            <input id="user-address" name="user-address" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-permission" class="form-label">Quyền</label>
                            <select name="user-permission" id="user-permission" class="form-control">
                                <option value="">--Chọn quyền--</option>
                                <option value="customer">Khách hàng</option>
                                <option value="admin">Admin</option>

                            </select>
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-status" class="form-label">Trạng thái</label>
                            <select name="user-status" id="user-status" class="form-control">
                                <option value="">--Chọn trạng thái--</option>

                                <option value="active">Hoạt động</option>
                                <option value="inactive">Không hoạt động</option>

                            </select>
                            <span class="form-message"></span>
                        </div>
                        



                    </div>
                    <div class="form-controls">
                        <button class="btn-control" id="btn-save">Lưu</button>
                        <button class="btn-control" id="btn-cancel">Hủy</button>
                    </div>
                </form>
                <table id="product-table">
                    <thead>
                        <tr class="product-table__heading">
                            <th>Mã User</th>
                            <th>Tên đăng nhập</th>
                            <th>Mật khẩu</th>
                            <th>Họ tên người dùng</th>
                            <th>Email</th>
                            <th>Số ĐT</th>
                            <th style="width: 250px;">Địa chỉ</th>
                            <th>Hành động</th>
                            <!-- <th></th> -->

                        </tr>
                    </thead>
                    <tbody class="product-table__list">
                        <tr class="product-table__row product-table__row--clicked">
                            <td>1</td>
                            <td>Bút bi - Eco Style Thiên Long TL-08/ECO</td>
                            <td>10000000</td>
                            <td>9000000</td>
                            <td>Đã xử lý</td>
                            <td>
                                <button class="product-table__update-btn product-table-btn">Sửa</button>
                                <button class="product-table__delete-btn product-table-btn">Xóa</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
            `
            initUserPage()
        }
        //Quản lý sản phẩm
        if (item.getAttribute('data-value') === 'ql-sanpham') {
            item.classList.add('active')


            contentContainer.innerHTML = `
            <div class="top-line">
                <h1 class="top-line__heading">QUẢN LÝ SẢN PHẨM</h1>
            </div>

            <div class="content__container">

                <ul class="function__list">
                    <li class="function__item active" value="add">
                        <span class="function__item-title" >
                            Thêm mới
                        </span>
                    </li>
                    <li class="function__item" value="update">
                        <span class="function__item-title" >
                            Chỉnh sửa
                        </span>
                    </li>
                    <li class="function__item" value="delete">
                        <span class="function__item-title" >
                            Xóa
                        </span>
                    </li>


                </ul>
                <form id="form-admin">
                    <div class="form-container">

                        <div class="form-group">
                            <label for="product-id" class="form-label">Mã SP</label>

                            <input id="product-id" name="product-id" type="text" placeholder="VD: 1"
                                class="form-control" disabled="true">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-name" class="form-label">Tên SP</label>

                            <input id="product-name" name="product-name" type="text" placeholder="VD: Bút bi - Eco Style Thiên Long TL-08/ECO"
                                class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-price" class="form-label">Giá</label>

                            <input id="product-price" name="product-price" type="text"
                                placeholder="VD: 5000" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-brand" class="form-label">Brand</label>
                            <select name="product-brand" id="product-brand" class="form-control">
                                <option value="Thiên Long">Thiên Long</option>
                                <option value="Hồng Hà">Hồng Hà</option>
                                <option value="Bến Nghé">Bến Nghé</option>
                            </select>
                            <span class="form-message"></span>
                        </div>
                        <!-- Form Group for Kích thước Ngòi Bút -->
                        <div class="form-group">
                            <label class="form-label">Kích thước Ngòi Bút</label>
                            <div class="checkbox-group checkbox-group-size">
                                <input type="checkbox" id="size-05mm" name="size-05mm" class="form-checkbox" data-value="0.5mm">
                                <label for="size-05mm">0.5mm</label>

                                <input type="checkbox" id="size-06mm" name="size-06mm" class="form-checkbox" data-value="0.6mm">
                                <label for="size-06mm">0.6mm</label>

                                <input type="checkbox" id="size-07mm" name="size-07mm" class="form-checkbox" data-value="0.7mm">
                                <label for="size-07mm">0.7mm</label>

                                <input type="checkbox" id="size-1mm" name="size-1mm" class="form-checkbox" data-value="1mm">
                                <label for="size-1mm">1mm</label>

                                <input type="checkbox" id="size-2mm" name="size-2mm" class="form-checkbox" data-value="2mm">
                                <label for="size-2mm">2mm</label>

                            </div>
                            <span class="form-message"></span>
                        </div>

                        <!-- Form Group for Loại Bút -->
                        <div class="form-group">
                            <label class="form-label">Loại Bút</label>
                            <div class="checkbox-group checkbox-group-type">
                                <input type="checkbox" id="type-long" name="type-long" class="form-checkbox" data-value="Lông">
                                <label for="type-long">Lông</label>

                                <input type="checkbox" id="type-bi" name="type-bi" class="form-checkbox" data-value="Bi">
                                <label for="type-bi">Bi</label>

                                <input type="checkbox" id="type-chi" name="type-chi" class="form-checkbox" data-value="Chì">
                                <label for="type-chi">Chì</label>

                            </div>
                            <span class="form-message"></span>
                        </div>

                        <!-- Form Group for Màu Mực -->
                        <div class="form-group">
                            <label for="product-color">Màu mực</label>
                            <div class="checkbox-group-color">
                                <label><input type="checkbox" value="Xanh"> Xanh</label>
                                <label><input type="checkbox" value="Đen"> Đen</label>
                                <label><input type="checkbox" value="Đỏ"> Đỏ</label>
                            </div>
                        </div>

                        <!-- Form Group for Hình Ảnh -->
                        <div class="form-group form-group--full">
                            <label for="product-img" class="form-label">Ảnh (Nhập đường dẫn)</label>

                            <input id="product-img" name="product-img" type="text"
                                placeholder="VD: https://example.com/images/but-bi-thien-long.png"
                                class="form-control">
                            <span class="form-message"></span>
                        </div>


                    </div>
                    <div class="form-controls">
                        <button class="btn-control" id="btn-save">Lưu</button>
                        <button class="btn-control" id="btn-cancel">Hủy</button>
                    </div>
                </form>

            </div>
            <table id="product-table">
                <thead>
                    <tr class="product-table__heading">
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá</th>
                        <th>Loại Bút</th>
                        <th>Kích Thước Ngòi</th>
                        <th>Màu Mực</th>
                        <th>Brand</th>
                        <th>Link ảnh</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody class="product-table__list">
                    <tr class="product-table__row">
                        <td>1</td>
                        <td>Bút Bi Eco Style Thiên Long TL-08/ECO</td>
                        <td>15000</td>
                        <td>Bi</td>
                        <td>0.7mm</td>
                        <td>Xanh</td>
                        <td>Thiên Long</td>
                        <td><img class="product-table__img"
                                src="https://example.com/images/but-bi-thien-long.png"
                                alt=""></td>
                        <td>
                            <button class="product-table__update-btn product-table-btn">Sửa</button>
                            <button class="product-table__delete-btn product-table-btn">Xóa</button>
                        </td>
                    </tr>

                </tbody>
            </table>
            8`

            initProductPage()
        }
        if (item.getAttribute('data-value') === 'ql-hoadon') {
            item.classList.add('active')

            contentContainer.innerHTML = `
            <div class="top-line">
                <h1 class="top-line__heading">QUẢN LÝ HÓA ĐƠN</h1>
            </div>

            <div class="search">
            </div>

            <div class="filter">
                <div class="filter__item">
                    <label class="filter__label" for="filter__start-date">Chọn ngày bắt đầu:</label>
                    <input type="datetime-local" class="filter__input" id="filter__start-date" name="filter__start-date"
                        placeholder="Chọn ngày bắt đầu">
                </div>
                <div class="filter__item">
                    <label class="filter__label" for="filter__end-date">Chọn ngày kết thúc:</label>
                    <input type="datetime-local" class="filter__input" id="filter__end-date" name="filter__end-date"
                        placeholder="Chọn ngày bắt đầu">
                </div>
                <div class="filter__item">
                    <div class="filter__button">Lọc</div>
                </div>
            </div>
            <div class="content__container">
                <form id="form-admin">
                    <div class="form-container">

                        <div class="form-group">
                            <label for="invoice-id" class="form-label">Mã HĐ</label>

                            <input id="invoice-id" name="invoice-id" type="text" class="form-control" disabled="true">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="invoice-user-id" class="form-label">Mã KH</label>

                            <input id="invoice-user-id" name="invoice-user-id" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="invoice-order-time" class="form-label">Thời gian đặt hàng</label>

                            <input id="invoice-order-time" name="invoice-order-time" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="invoice-total-price" class="form-label">Tổng tiền</label>

                            <input id="invoice-total-price" name="invoice-total-price" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="invoice-status" class="form-label">Tình trạng</label>

                            <input id="invoice-status" name="invoice-status" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>

                        <div class="form-label">
                            <div class="invoice-label">Đơn hàng chưa được xử lý! Nhấn nút để xử lý ngay</div>
                        </div>


                    </div>
                    <div class="form-controls">
                        <button class="btn-control" id="btn-process">Xử lý</button>
                        <button class="btn-control" id="btn-cancel">Hủy</button>
                    </div>
                </form>
                <table id="product-table">
                    <thead>
                        <tr class="product-table__heading">
                            <th>Mã HD</th>
                            <th>Thời gian đặt hàng </th>
                            <th>Mã KH</th>
                            <th>Tổng tiền</th>
                            <th>Tình trạng</th>
                            <th>Chi tiết hóa đơn</th>
                        </tr>
                    </thead>
                    <tbody class="product-table__list">
                        <tr class="product-table__row product-table__row--clicked">
                            <td>1</td>
                            <td>2024-11-16 14:30</td>
                            <td>KH001</td>
                            <td>45,000 VND</td>
                            <td>Đã xử lý</td>
                            <td>
                                <button class="product-table__see-btn product-table-btn">Xem</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div class="invoice-details">
                    <div class="invoice-details__header">
                        CHI TIẾT HÓA ĐƠN
                    </div>
                    <div class="invoice-details__list">
                        
                    </div>
                </div>
            </div>
            `

            initInvoicePage()
        }
        if (item.getAttribute('data-value') === 'product-page') {
            redirectToProductPage()
        }
        const logOutBtn = $('#log-out-btn')
        logOutBtn.addEventListener('click', (e) => {
            e.preventDefault()
            User.logOut()
            // redirectToProductPage()
        })
    })
})

// Các hàm validate
const validate = {
    validateProductName: function (name) {
        let value = true;
        let message = 'Hợp lệ'
        if (name.trim() === '') {
            value = false;
            message = 'Tên sản phẩm không được để trống';
            return { value, message };
        }
        if (name.length < 7) {
            value = false
            message = 'Tên sản phẩm phải ít nhất 7 ký tự'
            return { value, message }
        }
        if (/^\d+$/.test(name)) {
            value = false;
            message = 'Tên sản phẩm không được chứa toàn bộ là số';
            return { value, message }
        }
        return { value, message };
    },

    showErrMessage: function (errorLabel, message) {
        errorLabel.innerText = message
        errorLabel.classList.add('active')
    },
    validateProductInt: function (input) {
        let value = true;
        let message = 'Hợp lệ'
        if (input.toString().trim() === '') {
            value = false;
            message = 'Không được để trống';
            return { value, message };
        }
        if (/\D/.test(input)) {
            value = false;
            message = 'Không được chứa ký tự chữ';
        }
        return { value, message }
    },
    hideErrMessage: function (errorLabel) {
        errorLabel.innerText = ''
        errorLabel.classList.remove('active')
    },
    hideAllErrMessage: function (listErrorMessage) {
        listErrorMessage.forEach(mess => {
            mess.innerText = ''
            mess.classList.remove('active')
        })

    },
    validateProductList: function (list) {
        let value = true;
        let message = 'Hợp lệ'
        if (!list || list.length === '') {
            value = false;
            message = 'Phải chọn ít nhất 1 giá trị';
        }
        return { value, message }

    },
    validateValue: function (input) {
        let value = true;
        let message = 'Hợp lệ'
        if (input.trim() === '') {
            value = false;
            message = 'Phải chọn ít nhất 1 giá trị';
        }
        return { value, message }
    },
    validateUserFullName: function (fullName) {
        let value = true;
        let message = 'Hợp lệ'
        if (fullName.trim() === '') {
            value = false;
            message = 'Họ tên không được để trống';
            return { value, message };
        }

        if (/^\d+$/.test(fullName)) {
            value = false;
            message = 'Họ tên không được chứa toàn bộ là số';
            return { value, message }
        }
        return { value, message };
    },
    validateUserUsername: function (username) {
        let value = true;
        let message = 'Hợp lệ'
        if (username.trim() === '') {
            value = false;
            message = 'Tên đăng nhập không được để trống';
            return { value, message };
        }
        if (username.length < 6) {
            value = false;
            message = 'Tên đăng nhập tối thiểu 6 ký tự';
            return { value, message };
        }

        if (/^\d+$/.test(username)) {
            value = false;
            message = 'Tên đăng nhập không được chứa toàn bộ là số';
            return { value, message }
        }
        return { value, message };

    },
    validateUserPassword: function (password) {
        let value = true;
        let message = 'Hợp lệ'
        if (password.trim() === '') {
            value = false;
            message = 'Mật khẩu không được để trống';
            return { value, message };
        }
        if (password.length < 6) {
            value = false;
            message = 'Mật khẩu tối thiểu 6 ký tự';
            return { value, message };
        }
        return { value, message };

    },
    validateUserEmail: function (email) {
        let value = true;
        let message = 'Hợp lệ'
        if (email.trim() === '') {
            value = false;
            message = 'Email không được để trống';
            return { value, message };
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            value = false;
            message = 'Email phải đúng định dạng. VD: wizardsc1111@gmail.com';
            return { value, message };
        }
        return { value, message };
    },
    validateUserPhone: function (phone) {
        let value = true;
        let message = 'Hợp lệ'
        if (/\D/.test(phone)) {
            value = false;
            message = 'SĐT không được chứa ký tự chữ';
        }
        return { value, message };

    }
}


function initProductPage() {
    const usernameLabel = $('.info__name')
    const btnSave = $('#btn-save')
    const btnCancel = $('#btn-cancel')
    const btnUpdate = $('.product-table__update-btn')
    const btnDelete = $('.product-table__delete-btn')
    const functionList = $$('.function__item')
    const contentContainer = $('#content')
    const listControlItems = $$('.nav-links__item')
    const listErrorMessage = $$('.form-message')
    renderProductToTable()

    function renderProductToTable() {
        const tableBody = $('.product-table__list'); // Đảm bảo chọn đúng phần tử DOM
        const productList = Product.getProducts(); // Lấy danh sách sản phẩm từ localStorage
    
        tableBody.innerHTML = '';;
    
        productList.forEach((product) => {
            const row = document.createElement('tr');
    
            // Cột 1: ID
            const idCell = document.createElement('td');
            idCell.textContent = product.productID;
    
            // Cột 2: Tên sản phẩm
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
    
            // Cột 3: Giá sản phẩm
            const priceCell = document.createElement('td');
            priceCell.textContent = `${product.price.toLocaleString()}₫`;
    
            // Cột 4: Loại bút
            const typeCell = document.createElement('td');
            typeCell.textContent = Array.isArray(product.type) ? product.type.join(', ') : '';
    
            // Cột 5: Kích thước ngòi
            const sizeCell = document.createElement('td');
            sizeCell.textContent = Array.isArray(product.size) ? product.size.join(', ') : '';
    
            // Cột 6: Màu mực
            const colorCell = document.createElement('td');
            colorCell.textContent = Array.isArray(product.color) ? product.color.join(', ') : '';
    
            // Cột 7: Thương hiệu
            const brandCell = document.createElement('td');
            brandCell.textContent = product.brand;
    
            // Cột 8: Hình ảnh
            const imgCell = document.createElement('td');
            const imgTag = document.createElement('img');
            imgTag.src = product.img || 'placeholder.png'; // Đường dẫn ảnh mặc định nếu không có
            imgTag.alt = product.name;
            imgTag.style.width = '50px'; // Thiết lập kích thước ảnh nhỏ
            imgCell.appendChild(imgTag);
    
            // Cột 9: Hành động
            const actionCell = document.createElement('td');

            // Nút xóa
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Xóa';
            deleteBtn.addEventListener('click', () => deleteProduct(product.productID));
            actionCell.appendChild(deleteBtn);

            // Nút sửa
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Sửa';
            editBtn.addEventListener('click', () => editProduct(product.productID)); // Hàm sửa sản phẩm
            actionCell.appendChild(editBtn);


            // Thêm tất cả các ô vào hàng
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(typeCell);
            row.appendChild(sizeCell);
            row.appendChild(colorCell);
            row.appendChild(brandCell);
            row.appendChild(imgCell);
            row.appendChild(actionCell);
    
            // Thêm hàng vào bảng
            tableBody.appendChild(row);
        });
    }
    
let listType = [];
let listSize = [];
let listColor = [];
let productId = document.getElementById('product-id');
let productName = document.getElementById('product-name');
let productPrice = document.getElementById('product-price');
let productBrand = document.getElementById('product-brand');
let productSale = document.getElementById('product-sale');
let productIMG = document.getElementById('product-img');
let listTypeCheckbox = $$('.checkbox-group-type input[type="checkbox"]');  // Loại bút (Bi, Lông, Chì)
let listSizeCheckbox = $$('.checkbox-group-size input[type="checkbox"]');  // Size bút (0.5mm, 0.7mm, 1mm, 2mm)
let listColorCheckbox = $$('.checkbox-group-color input[type="checkbox"]'); // Màu bút (Xanh, Đen, Đỏ)
    function resetValue() {
        productId.value = '';
        productName.value = '';
        productPrice.value = '';
        productBrand.selectedIndex = -1; // Bỏ chọn option trong select
        productIMG.value = '';
        listSize = [];
        listType = [];
        listColor = [];
        Array.from(listTypeCheckbox).forEach(item => item.checked = false)
        Array.from(listSizeCheckbox).forEach(item => item.checked = false)
        Array.from(listColorCheckbox).forEach(item => item.checked = false);
        validate.hideAllErrMessage(listErrorMessage)
    }
    // Khi nhấn nút thêm thì active nút thêm
    Array.from(functionList).forEach(item => {
        item.addEventListener('click', () => {
            // Loại bỏ lớp 'active' từ tất cả các phần tử
            Array.from(functionList).forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Thêm lớp 'active' cho phần tử được kích hoạt có giá trị là 'add'
            if (item.getAttribute('value') === 'add') {
                item.classList.add('active');
                resetValue()
            }
        });
    })


    function addProduct() {

        // Lấy các giá trị của các input
        const productBrand = document.getElementById('product-brand'); // Lấy phần tử input
        const productName = document.getElementById('product-name'); // Lấy tên sản phẩm
        const productPrice = document.getElementById('product-price'); // Lấy giá
        const productIMG = document.getElementById('product-img'); // Lấy link ảnh

        let selectedType = [];
        let selectedSize = [];
        let selectedColor = [];
    
        // Lấy giá trị của các input
        Array.from(listTypeCheckbox).forEach((item, index) => {
            if (item.checked) {
                selectedType.push(typeValues[index]); // Sử dụng selectedType
            }
        });
        Array.from(listSizeCheckbox).forEach((item, index) => {
            if (item.checked) {
                selectedSize.push(sizeValues[index]); // Sử dụng selectedSize
            }
        });
        Array.from(listColorCheckbox).forEach((item, index) => {
            if (item.checked) {
                selectedColor.push(colorValues[index]); // Sử dụng selectedColor
            }
        });
    
        // Kiểm tra dữ liệu
        const validateAndDisplayError = (input, errorMessageElement, validationFunction) => {
            const validationResult = validationFunction(input);
            if (!validationResult.value) {
                validate.showErrMessage(errorMessageElement, validationResult.message);
                return false;
            } else {
                validate.hideErrMessage(errorMessageElement);
                return true;
            }
        };
    
        const isValidProductName = validateAndDisplayError(productName.value, listErrorMessage[1], validate.validateProductName);
        const isValidProductPrice = validateAndDisplayError(productPrice.value, listErrorMessage[2], validate.validateProductInt);
        const isValidBrand = validateAndDisplayError(productBrand.value, listErrorMessage[3], validate.validateValue);
        const isValidListType = validateAndDisplayError(selectedType, listErrorMessage[4], validate.validateProductList);
        const isValidListSize = validateAndDisplayError(selectedSize, listErrorMessage[5], validate.validateProductList);
        const isValidListColor = validateAndDisplayError(selectedColor, listErrorMessage[6], validate.validateProductList);
    
        if (isValidProductName && isValidProductPrice && isValidBrand && isValidListType && isValidListSize && isValidListColor) {
            // Lưu sản phẩm vào danh sách nếu không có lỗi
            Product.addProduct(
                productName.value,
                parseFloat(productPrice.value), // Chuyển giá thành số
                productIMG.value,
                productBrand.value.toUpperCase(),
                selectedType, // Thêm loại bút đã chọn
                selectedSize, // Thêm kích thước ngòi đã chọn
                selectedColor // Thêm màu mực đã chọn
            );
            resetValue();
            renderProductToTable();
        }
    }
    
    function renderProduct(productItem, isUpdate) {
        resetValue()
        //active cho thẻ sửa
        Array.from(functionList).forEach(item => {
            if (item.classList.contains('active')) item.classList.remove('active')
            if (item.getAttribute('value') === 'update' && isUpdate == true) {

                item.classList.add('active')
            }
            if (item.getAttribute('value') === 'delete' && isUpdate == false) {
                item.classList.add('active')
            }
        })

        //Render thông tin sản phẩm lên form
        productId.value = productItem.productID
        productName.value = productItem.name
        productPrice.value = productItem.price
        productIMG.value = productItem.img
        const indexToSelect = Array.from(productBrand.options).findIndex(option => option.value.toLowerCase() === productItem.brand.toLowerCase());
        if (indexToSelect !== -1) {
            // Chọn option bằng cách gán giá trị cho selectedIndex
            productBrand.selectedIndex = indexToSelect;
        } else {
            console.error(`Không tìm thấy option với giá trị ${productItem.brand}`);
        }

        Array.from(listTypeCheckbox).forEach((item) => {
            productItem.type.forEach((value) => {
                if (item.getAttribute('data-value') === value) {
                    item.checked = true
                    listType.push(value)
                }
            })
        })

        Array.from(listSizeCheckbox).forEach((item) => {
            productItem.size.forEach((value) => {
                if (item.getAttribute('data-value') === value) item.checked = true
                listSize.push(value)
            })
        })

        Array.from(listColorCheckbox).forEach((item) => {
            productItem.color.forEach((value) => {
                if (item.getAttribute('data-value') === value) {
                    item.checked = true;  // Đánh dấu checkbox màu sắc đã chọn
                    listColor.push(value);
                }
            });
        });    
    }

    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        const isUpdateActive = Array.from(functionList).some(item => {
            if (item.getAttribute('value') === 'update' && item.classList.contains('active')) {

                updateProduct();
                renderProductToTable();
                return true;
            }
            if (item.getAttribute('value') === 'add' && item.classList.contains('active')) {

                addProduct();
                renderProductToTable();
                return true;
            }
            return false;
        });

        if (!isUpdateActive) {
            console.log('No active "update" item found.');
        }
    });
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        resetValue();
    })
    function updateProduct() {
        listType = [];
        listSize = [];
        listColor = [];
        //chỉnh sửa thông tin sản phẩm
        Array.from(listTypeCheckbox).forEach((item, index) => {
            if (item.checked) {
                listType.push(typeValues[index])
            }
        })
        Array.from(listSizeCheckbox).forEach((item, index) => {
            if (item.checked) {
                listSize.push(sizeValues[index])
            }

        })
        Array.from(listColorCheckbox).forEach((item, index) => {
            if (item.checked) {
                listColor.push(colorValues[index])
            }
        })


        Product.updateProduct(productId.value, productName.value, productPrice.value, productIMG.value, productBrand.value, listType, listSize, listColor)
    }

    function deleteProduct(productID) {
        if (confirm('Bạn có muốn xóa sản phẩm này?')) {
            const isDeleted = Product.deleteProduct(productID);  // Kiểm tra nếu sản phẩm được xóa thành công
            
            // Nếu sản phẩm đã bị xóa, render lại bảng
            if (isDeleted) {
                renderProductToTable();
            } else {
                alert("Xóa sản phẩm không thành công");
            }        
        }
    }
}


function initInvoicePage() {
    const invoiceList = Invoice.getInvoices()
    const invoiceIDInput = $('#invoice-id')
    const invoiceUserIDInput = $('#invoice-user-id')
    const invoiceOrderTimeInput = $('#invoice-order-time')
    const invoiceTotalPriceInput = $('#invoice-total-price')
    const invoiceStatusInput = $('#invoice-status')
    const message = $('.invoice-label')
    const processBtn = $('#btn-process')
    const cancelBtn = $('#btn-cancel')
    function handleInvoiceActions() {

        //Nút lọc hóa đơn
        const filterButton = $('.filter__button')
        const startDateInput = $('#filter__start-date')
        const endDateInput = $('#filter__end-date')
        filterButton.addEventListener('click', () => {
            const startDate = time.getDateTime(startDateInput.value)
            const endDate = time.getDateTime(endDateInput.value)

            const filterList = Invoice.getInvoiceByDateTime(startDate, endDate)
            renderInvoice(filterList)
        })

        processBtn.addEventListener('click', (e) => {

            e.preventDefault()

            const invoiceID = clickedRow.selectedInvoiceID;
            Invoice.updateInvoiceStatus(parseInt(invoiceID), true)
            const newList = Invoice.getInvoices()
            renderInvoice(newList)
            resetValue()
        })

        cancelBtn.addEventListener('click', (e) => {
            resetValue()
            e.preventDefault()
        })

    }
    handleInvoiceActions()
    renderInvoice(invoiceList)


    function renderInvoice(listInvoice) {
        const tableBody = $('.product-table__list')

        let html = ''
        Array.from(listInvoice).forEach(invoice => {
            let status = ''
            if (invoice.status === false) {
                status = 'Chưa xử lý'
            } else if (invoice.status === true) {
                status = 'Đã xử lý'
            }
            html += `
            <tr class="product-table__row product-table__row--clicked" data-value="${invoice.invoiceID}">
                            <td>${invoice.invoiceID}</td>
                            <td>${time.getDateTime(invoice.orderTime)}</td>
                            <td>${invoice.userID}</td>
                            <td>${money.formatCurrencytoVND(Invoice.getTotalPriceOfInvoice(invoice.invoiceID))}</td>
                            <td>${status}</td>
                            <td>
                                <button class="product-table__see-btn product-table-btn">Xem</button>
                            </td>
                        </tr>
            `
        })

        tableBody.innerHTML = html
        const productRowList = $$('.product-table__row')
        Array.from(productRowList).forEach((row) => {
            const seeButton = row.querySelector('.product-table__see-btn')
            seeButton.addEventListener('click', (e) => {
                e.preventDefault();
                renderDetailProduct(parseInt(row.dataset.value))
            })

        })
        clickedRow()


    }

    function resetValue() {

        invoiceIDInput.value = ''
        invoiceUserIDInput.value = ''
        invoiceOrderTimeInput.value = ''
        invoiceTotalPriceInput.value = ''
        invoiceStatusInput.value = ''
        message.classList.remove('active')
    }

    function clickedRow() {
        const rowTable = $$('.product-table__row--clicked')
        Array.from(rowTable).forEach(row => {
            row.addEventListener('click', () => {
                const invoiceID = row.cells[0].innerText;
                clickedRow.selectedInvoiceID = invoiceID;
                const invoiceOrderTime = row.cells[1].innerText;
                const invoiceUserID = row.cells[2].innerText;
                const invoiceTotalPrice = row.cells[3].innerText;
                const invoiceStatus = row.cells[4].innerText;

                invoiceIDInput.disabled = true
                invoiceUserIDInput.disabled = true
                invoiceOrderTimeInput.disabled = true
                invoiceTotalPriceInput.disabled = true
                invoiceStatusInput.disabled = true

                if (invoiceStatus === 'Chưa xử lý') {

                    message.classList.add('active')
                    processBtn.disabled = false;

                }
                else {
                    processBtn.disabled = true;

                    message.classList.remove('active')

                    // processBtn.style.backgroundColor = '#999'


                }
                invoiceIDInput.value = invoiceID
                invoiceOrderTimeInput.value = invoiceOrderTime
                invoiceUserIDInput.value = invoiceUserID
                invoiceTotalPriceInput.value = invoiceTotalPrice
                invoiceStatusInput.value = invoiceStatus
            })
        })



    }




    function renderDetailProduct(invoiceID) {
        const invoiceDetailList = $('.invoice-details__list')
        const listDetailInvoice = Invoice.getDetailInvoice(invoiceID)
        let html = ''
        listDetailInvoice.forEach(detailInvoice => {
            html += `
            <div class="invoice-details__item">
                <img class="invoice-details__img"
                    src="${detailInvoice.productIMG}"
                    alt="">
                <div class="invoice-details__item-wrapper">
                    <div class="invoice-details__name">
                       ${detailInvoice.storeProduct.name}
                    </div>
                    <div class="invoice-details__price">
                        <span class="invoice-details__price-label">Đơn giá: </span>
                        ${money.formatCurrencytoVND(detailInvoice.product_price)}
                    </div>
                    <div class="invoice-details__quantity">
                        <span class="invoice-details__quantity-label">Số lượng: </span>
                        ${detailInvoice.quantity}
                    </div>
                    <div class="invoice-details__total-price">
                        <span class="invoice-details__total-price-label">Tổng tiền: </span>
                        ${money.formatCurrencytoVND(detailInvoice.totalPrice)}
                    </div>
                </div>
            </div>
            `
        })
        invoiceDetailList.innerHTML = html
    }


}

// initInvoicePage()

function initUserPage() {
    const userList = User.getUsers()
    const tableBody = $('.product-table__list')
    const userIDInput = $('#user-id')
    const fullNameInput = $('#user-full_name')
    const usernameInput = $('#user-username')
    const passwordInput = $('#user-password')
    const emailInput = $('#user-email')
    const phoneInput = $('#user-phone')
    const addressInput = $('#user-address')
    const permissionInput = $('#user-permission')
    const statusInput = $('#user-status')
    const functionList = $$('.function__item')
    const listErrorMessage = $$('.form-message')
    const btnSave = $('#btn-save')
    const btnCancel = $('#btn-cancel')

    renderUserList(userList)

    function renderUserList(listUser) {
        userIDInput.value = User.getLastUserID() + 1
        let html = ''
        Array.from(listUser).forEach(user => {


            html += `
            <tr class="product-table__row" data-value=${user.userID}>
                <td>${user.userID}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.full_name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>
                            <button class="product-table__update-btn product-table-btn">Sửa</button>
                            <button class="product-table__delete-btn product-table-btn">Xóa</button>
                        </td>
            </tr>
             `
        })

        tableBody.innerHTML = html
        const tableRow = $$('.product-table__row')
        Array.from(tableRow).forEach(row => {
            const userID = row.getAttribute('data-value')
            const user = User.getUserID(parseInt(userID))
            const btnUpdate = row.querySelector('.product-table__update-btn')
            const btnDelete = row.querySelector('.product-table__delete-btn')

            const username = row.cells[1].innerText
            const password = row.cells[2].innerText
            const fullName = row.cells[3].innerText
            const email = row.cells[4].innerText
            const phone = row.cells[5].innerText
            const address = row.cells[6].innerText
            const permission = user.isAdmin ? 'admin' : 'customer'
            const status = user.isActive ? 'active' : 'inactive'
            btnUpdate.addEventListener('click', () => {
                userIDInput.value = userID
                fullNameInput.value = fullName
                passwordInput.value = password
                usernameInput.value = username
                emailInput.value = email
                phoneInput.value = phone
                addressInput.value = address
                permissionInput.value = permission
                statusInput.value = status
                Array.from(functionList).forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active')
                    }
                    if (item.dataset.value === 'update') {
                        item.classList.add('active')
                    }
                })

            })

            btnDelete.addEventListener('click', () => {
                deleteUser(userID)
                resetValue()
            })
        })

    }
    function deleteUser(userID) {

        if (confirm('Bạn có muốn xóa người dùng này?')) {
            const user = User.getUserID(parseInt(userID))
            console.log(user.username)
            console.log(user.full_name)
            console.log(user.isAdmin)
            if (user.isAdmin === true) {

                alert('Không thể xóa người dùng quản trị (admin)');
                return
            } else {
                User.deleteUser(userID)
                resetValue()
                const newList = User.getUsers()
                renderUserList(newList)
            }



        }


    }
    function updateUser() {
        const userID = userIDInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        const fullName = fullNameInput.value
        const email = emailInput.value
        const phone = phoneInput.value
        const address = addressInput.value
        const status = (statusInput.value === 'active') ? true : false
        User.updateUser(userID, username, password, email, phone, fullName, address, status)
        const newList = User.getUsers()

        User.loadUsers(newList)
        renderUserList(newList)
    }
    function addUser() {
        // const userID = userIDInput.value
        const validateAndDisplayError = (input, errorMessageElement, validationFunction) => {
            const validationResult = validationFunction(input);
            if (!validationResult.value) {
                validate.showErrMessage(errorMessageElement, validationResult.message);
                return false
            } else {
                validate.hideErrMessage(errorMessageElement);
                return true
            }
        };
        const isValidFullname = validateAndDisplayError(fullNameInput.value.toString(), listErrorMessage[1], validate.validateUserFullName);
        const isValidUsername = validateAndDisplayError(usernameInput.value.toString(), listErrorMessage[2], validate.validateUserUsername);
        const isValidPassword = validateAndDisplayError(passwordInput.value.toString(), listErrorMessage[3], validate.validateUserPassword);
        const isValidEmail = validateAndDisplayError(emailInput.value.toString(), listErrorMessage[4], validate.validateUserEmail);
        const isValidPhone = validateAndDisplayError(phoneInput.value.toString(), listErrorMessage[5], validate.validateUserPhone);
        if (isValidFullname && isValidUsername && isValidPassword && isValidEmail && isValidPhone && isValidPassword) {
            const username = usernameInput.value
            const password = passwordInput.value
            const fullName = fullNameInput.value
            const email = emailInput.value
            const phone = phoneInput.value
            const address = addressInput.value
            const permission = (permissionInput.value === 'admin') ? true : false
            const status = (statusInput.value === 'active') ? true : false
            User.addUser(username, password, email, phone, fullName, address, permission, status)
            const newList = User.getUsers()
            User.loadUsers(newList)
            renderUserList(newList)
        }
        return;


    }
    btnSave.addEventListener('click', (e) => {
        e.preventDefault()
        Array.from(functionList).forEach(item => {
            if (item.classList.contains('active') && item.dataset.value === 'update') {
                updateUser()
                resetValue()

            } else if (item.classList.contains('active') && item.dataset.value === 'add') {
                addUser()
                // resetValue()
            }
        })

    })
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        resetValue();
    })

    function resetValue() {
        functionList.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
            if (item.dataset.value === 'add') {
                item.classList.add('active')
            }

        })
        userIDInput.value = ''
        usernameInput.value = ''
        passwordInput.value = ''
        fullNameInput.value = ''
        emailInput.value = ''
        phoneInput.value = ''
        addressInput.value = ''
        statusInput.value = ""
        permissionInput.value = ""
    }
}

function initDashboardPage() {
    const boxItem = $$('.box-analysis__item')
    const filterSelect = document.getElementById('filter__select');
    const filterButton = $('.filter__button')
    const defaultMonth = 11
    loadBoxAnalysis()
    loadOptionMonth()
    filterMonth()
    function loadBoxAnalysis(month = 11) {
        boxItem.forEach(item => {
            if (item.dataset.value === 'total-customer') {
                const a = Invoice.getTotalCustomerByMonth(month)
                item.querySelector('.box-analysis__number').innerText = a
            }
            if (item.dataset.value === 'total-price') {
                const a = Invoice.calculateRevenueByMonth(month)
                item.querySelector('.box-analysis__number').innerText = a
            }
            if (item.dataset.value === 'total-invoice') {
                const a = Invoice.getTotalInvoiceByMonth(month)
                item.querySelector('.box-analysis__number').innerText = a

            }
            if (item.dataset.value === 'total-product') {
                const a = Invoice.getTotalSoldProductsInMonth(month)
                item.querySelector('.box-analysis__number').innerText = a
            }
        })

    }
    function loadOptionMonth() {
        filterSelect.innerHTML = ''
        for (let i = 1; i <= 12; i++) {
            // Tạo một option
            const option = document.createElement('option');

            // Đặt giá trị và văn bản cho option
            option.value = i.toString(); // Giá trị từ 1 đến 12
            option.textContent = `Tháng ${i}`;
            if (i === defaultMonth) {
                option.selected = true;
            }
            // Thêm option vào thẻ select
            filterSelect.appendChild(option);
        }

    }

    function filterMonth() {
        filterButton.addEventListener('click', () => {
            loadBoxAnalysis(parseInt(filterSelect.value));
            renderTable(parseInt(filterSelect.value));
        })
    }

    function renderTable(month = defaultMonth) {
        const table = $$('.table__container')
        table.forEach(tb => {

            if (parseInt(tb.dataset.value) === 1) {
                const tableBody = tb.querySelector('.analysis-table__list')
                tableBody.innerHTML = ''
                renderTable1(tableBody)
            }
            if (parseInt(tb.dataset.value) === 2) {
                const tableBody = tb.querySelector('.analysis-table__list')
                tableBody.innerHTML = ''
                renderTable2(tableBody)
            }
        })
        function renderTable1(tableBody) {
            brandValues.forEach(item => {
                // Tạo một dòng mới
                const row = document.createElement('tr');
                row.classList.add('analysis-table__row');

                // Tạo và thêm các ô (td) cho dòng
                const brandCell = document.createElement('td');
                brandCell.textContent = item;

                const quantityCell = document.createElement('td');

                quantityCell.textContent = Invoice.getTotalSoldProductsInMonthByBrand(item.toLowerCase(), month)

                row.appendChild(brandCell);
                row.appendChild(quantityCell);

                // Thêm dòng vào tbody
                tableBody.appendChild(row);
            });
        }

        function renderTable2(tableBody) {
            brandValues.forEach(item => {
                // Tạo một dòng mới
                const row = document.createElement('tr');
                row.classList.add('analysis-table__row');

                // Tạo và thêm các ô (td) cho dòng
                const brandCell = document.createElement('td');
                brandCell.textContent = item;

                const quantityCell = document.createElement('td');

                quantityCell.textContent = Invoice.calculateRevenueByCategoryAndMonth(item.toLowerCase(), month)
                row.appendChild(brandCell);
                row.appendChild(quantityCell);

                // Thêm dòng vào tbody
                tableBody.appendChild(row);
            });
        }

    }
    renderTable()
}

// initInvoicePage()
