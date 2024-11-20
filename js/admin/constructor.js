const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Thay đổi các giá trị của sản phẩm cho bút
let brandValues = ['Thiên Long', 'Hồng Hà', 'Bến Nghé'];
let typeValues = ['Lông', 'Bi', 'Chì']; 
let sizeValues = ['0.5mm','0.6mm', '0.7mm', '1mm', '2mm'];
let colorValues = ['Xanh', 'Đen', 'Đỏ'];

class Product {
    static lastProductID = 0;
    
    constructor(name, price, img, brand ,type, color, size) {
        this.productID = (Product.getProducts() === null) ? ++Product.lastProductID : Product.getLastProductID() + 1;
        this.name = name;
        this.price = price;
        this.img = img;
        this.brand = brand.toLowerCase();
        this.type = type;
        this.color = color;
        this.size = size;
    }
    
    // Lấy danh sách sản phẩm trả về mảng
    static getProducts() {
        return JSON.parse(localStorage.getItem('listProducts')) || [];
    }
    
    // Load danh sách sản phẩm lên localStorage
    static loadProducts(list) {
        localStorage.listProducts = JSON.stringify(list);
        if (localStorage.listProducts) 
            return true;
        return false;
    }

    // Lấy ra 1 sản phẩm
    static getProductID(myProductID) {
        const list = Product.getProducts();
        if (!list || list.length === 0) return null;
        let product = null;
        list.forEach(item => {
            if (item.productID === myProductID) {
                product = item;
            }
        });
        return product;
    }
    
    // Load mã sản phẩm mới nhất
    static getLastProductID() {
        const myList = Product.getProducts();
        if (!myList || myList.length === 0) return null;
        return myList[myList.length - 1].productID;
    }
    
    // Thêm sản phẩm mới
    static addProduct(name, price, img, brand, type, color, size) {
        const product = new Product(name, price, img, brand, type, color, size);
        const list = this.getProducts(); // Luôn trả về mảng (sau chỉnh sửa trên)
        list.push(product);
        this.loadProducts(list);
        return true;
    }
    
    // Cập nhật sản phẩm
    static updateProduct(productID, name, price, img, brand, type, color, size) {
        const listProduct = this.getProducts();
        const updatedList = listProduct.map(product => {
            if (product.productID === parseInt(productID)) {
                return {
                    ...product,
                    name,
                    price,
                    img,
                    brand,
                    type,
                    color,
                    size
                };
            }
            return product;
        });
        this.loadProducts(updatedList);
        return true;
    }
    
    // Xóa sản phẩm
    static deleteProduct(productID) {
        const listProduct = Product.getProducts();
        if (!listProduct || listProduct.length === 0) return false;
        
        // Lọc danh sách sản phẩm để loại bỏ sản phẩm có ID trùng
        const updatedList = listProduct.filter(product => product.productID !== productID);
        // Cập nhật lại danh sách vào localStorage
        Product.loadProducts(updatedList);
        return true;
    }
}
class ProductInCart {
    static totalCart = 0;
    
    constructor(productID, product_price, quantity, productIMG) {
        this.cartID = ++ProductInCart.totalCart;
        this.productID = productID;
        this.product_price = product_price;
        this.quantity = quantity;
        this.productIMG = productIMG;
        this.totalPrice = this.quantity * this.product_price; // Tính tổng giá
        this.storeProduct = Product.getProductID(productID); // Lấy thông tin sản phẩm
    }
}
class User {
    static userID = 0;
    cartList = [];

    constructor(username, password, email, phone, full_name, address, is_admin, is_active) {
        this.userID = (User.getUsers() === null) ? ++User.userID : User.getLastUserID() + 1;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.full_name = full_name;
        this.address = address;
        this.ngay_lap = Date.now();
        this.isAdmin = is_admin;
        this.isActive = is_active;
    }

    // Load danh sách user lên LocalStorage
    static loadUsers(listUser) {
        localStorage.listUsers = JSON.stringify(listUser);
        return !!localStorage.listUsers;
    }

    // Lấy danh sách user từ LocalStorage trả về mảng
    static getUsers() {
        if (localStorage.listUsers) {
            return JSON.parse(localStorage.listUsers);
        }
        return null;
    }

    // Lấy ra 1 user bằng cách truyền vào userID
    static getUserID(userID) {
        const listUsers = User.getUsers();
        if (!listUsers || listUsers.length === 0) return null;
        return listUsers.find(user => user.userID === userID);
    }

    // Load mã user mới nhất
    static getLastUserID() {
        const myList = User.getUsers();
        if (!myList || myList.length === 0) return null;
        return myList[myList.length - 1].userID;
    }

    static setLoginState(userid) {
        if (userid == null || userid == undefined) {
            localStorage.userID = 0;
        } else {
            if (Number.isInteger(userid)) {
                localStorage.userID = userid;
            }
        }
    }

    static checkLoginId() {
        if (localStorage.userID) {
            const a = parseInt(localStorage.userID);
            if (a > 0) return a;
        }
        return null;
    }

    static checkIsAdmin() {
        if (localStorage.isAdmin) {
            return localStorage.isAdmin === 'true';
        }
        return null;
    }

    static checkIsActive() {
        if (localStorage.isActive) {
            return localStorage.isActive === 'true';
        }
        return null;
    }

    static setIsAdmin(isAdmin) {
        localStorage.isAdmin = isAdmin === true;
    }

    static setIsActive(isActive) {
        localStorage.isActive = isActive === true;
    }

    // Update giỏ hàng của user
    static updateUserCart(userID, newCartList) {
        const list = User.getUsers();
        if (!list || list.length === 0) return false;
        newCartList = cart.getNoDuplicatesProducts(newCartList);
        list.forEach((item) => {
            if (item.userID == userID) {
                item.cartList = newCartList;
                User.loadUsers(list);
            }
        });
        return true;
    }

    // Kiểm tra tên đăng nhập
    static isExistUsername(username) {
        const list = User.getUsers();
        if (!list || list.length === 0) return false;
        return list.some(user => user.username === username);
    }

    // Kiểm tra tên đăng nhập và mật khẩu
    static checkUserToLogin(username, password) {
        const list = User.getUsers();
        if (!list || list.length === 0) return false;
        let userID;
        let isAdmin = false;
        let isActive = false;
        list.forEach((user) => {
            if (user.username === username && user.password === password) {
                userID = user.userID;
                isAdmin = user.isAdmin === 1;
                isActive = user.isActive === 1;
            }
        });
        if (!userID) return false;
        User.setLoginState(userID);
        User.setIsAdmin(isAdmin);
        User.setIsActive(isActive);
        return true;
    }

    // Đăng xuất
    static logOut() {
        User.setLoginState(null);
        User.setIsAdmin(null);
        User.setIsActive(null);
        redirectToProductPage();
    }

    // Cập nhật địa chỉ và số ĐT
    static updatePhoneAndAddress(userID, phone, address) {
        const list = User.getUsers();
        if (!list || list.length === 0) return false;
        list.forEach(user => {
            if (user.userID === userID) {
                user.phone = phone;
                user.address = address;
            }
        });
        User.loadUsers(list);
        return true;
    }

    static addUser(username, password, email, phone, fullName, address, isAdmin, isActive) {
        const user = new User(username, password, email, phone, fullName, address, isAdmin, isActive);
        const list = User.getUsers();
        if (!list) return false;
        list.push(user);
        User.loadUsers(list);
        return true;
    }

    // Cập nhật thông tin của user
    static updateUser(userID, username, password, email, phone, fullName, address, isActive) {
        const listUser = User.getUsers();
        if (!listUser || listUser.length === 0) return false;
        listUser.forEach(user => {
            if (user.userID === parseInt(userID)) {
                user.username = username;
                user.password = password;
                user.email = email;
                user.phone = phone;
                user.full_name = fullName;
                user.address = address;
                user.isActive = isActive;
            }
        });
        User.loadUsers(listUser);
        return true;
    }

    // Xóa user
    static deleteUser(userID) {
        const listUser = User.getUsers();
        if (!listUser || listUser.length === 0) return false;
        let isDeleted = false;
        listUser.forEach((user, index) => {
            if (user.userID === parseInt(userID)) {
                listUser.splice(index, 1);
                if (User.loadUsers(listUser)) isDeleted = true;
            }
        });
        return isDeleted;
    }
}
// Lớp cart: Quản lý giỏ hàng của người dùng
class cart {
    static getCartList(userID) {
        const myUser = User.getUserID(userID);
        if (myUser) {
            return myUser.cartList;
        }
        return [];
    }

    static getCartID(userID, cartID) {
        const list = cart.getCartList(userID);
        if (!list || list.length === 0) return null;
        let myCart = null;
        list.forEach(item => {
            if (item.cartID === cartID)
                myCart = item;
        });
        return myCart;
    }

    static getNoDuplicatesProducts(list) {
        if (!list || list.length === 0)
            return [];
        var result = [];
        var hasProductId = [];
        list.forEach((myCart, i) => {
            if (hasProductId.indexOf(i) === -1) {
                var soluong = myCart.quantity;
                hasProductId.push(i);
                for (let j = i + 1; j < list.length; j++)
                    if (cart.Equals(myCart, list[j])) {
                        soluong += list[j].quantity;
                        hasProductId.push(j);
                    }
                result.push(new ProductInCart(myCart.productID, myCart.product_price, soluong, myCart.productIMG));
            }
        });
        return result;
    }

    static addItemCart(userID, productID, quantity) {
        const myList = cart.getCartList(userID);
        const myProduct = Product.getProductID(productID);
        myList.push(new ProductInCart(productID, myProduct.price, quantity, myProduct.img[0]));
        if (User.updateUserCart(userID, myList)) {
            return true;
        }
        return false;
    }

    static Equals(cartItemA, cartItemB) {
        if (!cartItemA || !cartItemB) return false;
        if (cartItemA.productID !== cartItemB.productID) return false;
        return true;
    }

    static updateCartItemQuantity(userID, cartID, quantity) {
        const myList = cart.getCartList(userID);
        if (!myList || myList.length === 0) return null;
        myList.forEach(item => {
            if (item.cartID === cartID) {
                item.quantity = item.quantity + quantity;
                item.totalPrice = item.quantity * item.product_price;
                User.updateUserCart(userID, myList);
            }
        });
    }

    static removeCartItem(userID, cartID) {
        const myList = cart.getCartList(userID);
        if (!myList || myList.length === 0) return null;
        let isDeleted = false;
        myList.forEach((item, index) => {
            if (item.cartID === cartID) {
                myList.splice(index, 1);
                if (myList === null) myList = [];
                User.updateUserCart(userID, myList);
                isDeleted = true;
            }
        });
        return isDeleted;
    }

    static removeAllCartItems(userID) {
        const myList = [];
        if (User.updateUserCart(userID, myList)) {
            return true;
        }
        return false;
    }

    static getTotalMoney(userID) {
        const myList = cart.getCartList(userID);
        if (!myList || myList.length === 0) return 0;
        let sum = 0;
        sum = myList.reduce((total, cartItem) => {
            return total + cartItem.totalPrice;
        }, 0);
        return sum;
    }
}

// Lớp money: Quản lý các chức năng liên quan đến tiền tệ
class money {
    static formatCurrencytoVND(tien) {
        let nf = new Intl.NumberFormat('en-US');
        let formattedTien = nf.format(tien);
        return formattedTien.replace(/,/g, ".") + "₫";
    }
}

// Lớp Invoice: Quản lý các hóa đơn
class Invoice {
    static total = 0;
    
    constructor(cartList, userID, orderTime) {
        this.invoiceID = Invoice.getInvoices() === null ? ++Invoice.total : Invoice.getLastInvoiceID() + 1;
        this.cartList = cartList;
        this.userID = userID;
        this.userProfile = User.getUserID(userID);
        this.orderTime = orderTime;
        this.status = false;
    }

    static loadInvoices(list) {
        localStorage.listInvoices = JSON.stringify(list);
        if (localStorage.listInvoices)
            return true;
        return false;
    }

    static getInvoices() {
        if (localStorage.listInvoices) {
            return JSON.parse(localStorage.listInvoices);
        }
        return null;
    }

    static getLastInvoiceID() {
        const myList = Invoice.getInvoices();
        if (!myList || myList.length === 0) return null;
        return myList[myList.length - 1].invoiceID;
    }

    static getInvoiceByInvoiceID(invoiceID) {
        const list = Invoice.getInvoices();
        if (!list || list.length === 0) return null;
        let foundInvoice = null;
        list.forEach(invoice => {
            if (invoice.invoiceID === invoiceID) {
                foundInvoice = invoice;
            }
        });
        return foundInvoice;
    }

    static getTotalPriceOfInvoice(invoiceID) {
        const invoice = Invoice.getInvoiceByInvoiceID(invoiceID);
        if (!invoice) return 0;
        const sum = invoice.cartList.reduce((accumulator, currentItem) =>
            accumulator + currentItem.totalPrice, 0);
        return sum;
    }

    static getInvoiceByUserID(userID) {
        const myList = Invoice.getInvoices();
        if (!myList || myList.length === 0) return [];
        let result = [];
        myList.forEach(invoice => {
            if (invoice.userID === userID) {
                result.push(invoice);
            }
        });
        return result;
    }

    static buyNowProduct(userID, productID, quantity) {
        const list = Invoice.getInvoices();
        if (!list) return false;
        let myProduct;
        myProduct = [new ProductInCart(productID, Product.getProductID(productID).price, quantity, Product.getProductID(productID).img[0])];
        list.push(new Invoice(myProduct, userID, Date.now()));
        Invoice.loadInvoices(list);
    }

    static checkoutListProductAndCreateInvoice(userID, cartList) {
        const list = Invoice.getInvoices();
        if (!list) return false;
        if (!cartList || cartList.length === 0) return false;
        list.push(new Invoice(cartList, userID, Date.now()));
        Invoice.loadInvoices(list);
        cart.removeAllCartItems();
        return true;
    }

    static getInvoiceByDateTime(startDate, endDate) {
        const list = Invoice.getInvoices();
        if (!list || list.length === 0) return [];

        let myList = [];
        list.forEach(invoice => {
            let currentDate = invoice.orderTime;
            if (time.parseDateTime(startDate) <= currentDate && currentDate <= time.parseDateTime(endDate)) {
                myList.push(invoice);
            }
        });

        return myList;
    }

    static updateInvoiceStatus(invoiceID, status) {
        const list = Invoice.getInvoices();
        if (!list || list.length === 0) return false;
        let customerInfoProvided = false;
        list.forEach(invoice => {
            if (invoice.invoiceID === invoiceID) {
                const newUser = User.getUserID(invoice.userID);
                invoice.userProfile.phone = newUser.phone;
                invoice.userProfile.address = newUser.address;
                if (invoice.userProfile.phone === '' || invoice.userProfile.address === undefined) {
                    alert("Khách hàng chưa cung cấp thông tin địa chỉ và số điện thoại giao hàng");
                    customerInfoProvided = false;
                    return;
                }
                invoice.status = status;
                Invoice.loadInvoices(list);
                customerInfoProvided = true;
            }
        });

        return customerInfoProvided;
    }

    static getInvoiceListByMonth(month) {
        const list = Invoice.getInvoices();
        if (!list || list.length === 0) return null;
        let resultList = [];
        Array.from(list).forEach(invoice => {
            if (time.getMonth(invoice.orderTime) === month) {
                resultList.push(invoice);
            }
        });
        return resultList;
    }

    static getDetailInvoice(invoiceID) {
        const list = Invoice.getInvoices();
        if (!list || list.length === 0) return null;
        let detailInvoice;
        list.forEach(invoice => {
            if (invoice.invoiceID === invoiceID) {
                detailInvoice = invoice.cartList;
            }
        });
        return detailInvoice;
    }

    static getTotalInvoiceByMonth(month) {
        const list = Invoice.getInvoiceListByMonth(month);
        if (!list || list.length === 0) return 0;
        let count = list.length;
        return count;
    }

    static calculateRevenueByMonth(month) {
        const invoiceList = Invoice.getInvoiceListByMonth(month);
        if (!invoiceList || invoiceList.length === 0) return 0;
        let total = 0;
        invoiceList.forEach(invoice => {
            invoice.cartList.forEach(item => {
                total += item.totalPrice;
            });
        });
        return total;
    }
}

// Lớp time: Quản lý các thao tác về thời gian
class time {
    static getDateTime(timestamp) {
        var date = new Date(timestamp);
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var day = String(date.getDate()).padStart(2, '0');
        var hours = String(date.getHours()).padStart(2, '0');
        var minutes = String(date.getMinutes()).padStart(2, '0');
        var seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    static parseDateTime(dateTimeString) {
        const [datePart, timePart] = dateTimeString.split(' ');

        const [day, month, year] = datePart.split('/').map(Number);
        const [hours, minutes, seconds] = timePart.split(':').map(Number);

        const parsedDate = new Date(year, month - 1, day, hours, minutes, seconds);
        return parsedDate.getTime();
    }

    static getMonth(timestamp) {
        var date = new Date(timestamp);
        return date.getMonth() + 1;
    }
}

// Lớp admin: Chức năng quản lý và kiểm tra quyền admin
class admin {
    static redirectToAdmin(isAdmin) {
        if (typeof isAdmin !== 'boolean') {
            console.error("Error: isAdmin should be a boolean.");
            return;
        }

        if (isAdmin === false) {
            console.log("Redirecting to admin page...");
        } else {
            console.log("Access granted to admin.");
        }
    }
}
