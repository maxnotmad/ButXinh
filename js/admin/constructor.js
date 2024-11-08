const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
let brandValues = ['IPhone', 'Samsung', 'Oppo', 'Xiaomi', 'Vivo', 'Realme', 'Nokia', 'Masstel', 'Itel', 'Mobell']
let romValues = ['16 GB', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB'];
let ramValues = ['1 GB', '2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB']
class Product {
    static lastProductID = 0;
    constructor(name, price_old, price_current, img, brand, ram, rom, sale) {
        this.productID = (Product.getProducts() === null) ? ++Product.lastProductID : Product.getLastProductID() + 1;
        this.name = name;
        this.price_old = price_old;
        this.price_current = price_current;
        this.img = img;
        this.brand = brand.toLowerCase();
        this.ram = ram
        this.rom = rom
        this.sale = sale
    }
    // Lấy danh sách sản phẩm trả về mảng
    static getProducts() {
        if (localStorage.listProducts) {
            return JSON.parse(localStorage.listProducts);
        }
        return null;
    }
    //Load danh sách sản phẩm lên localStorage
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
        })
        return product;
    }
    //load mã sản phẩm mới nhất
    static getLastProductID() {
        const myList = Product.getProducts();
        if (!myList || myList.length === 0) return null;
        return myList[myList.length - 1].productID;
    }
    // Thêm sản phẩm mới
    static addProduct(name, price_old, price_current, img, brand, ram, rom, sale) {
        const product = new Product(name, price_old, price_current, img, brand, ram, rom, sale)
        const list = Product.getProducts();
        list.push(product);
        Product.loadProducts(list);
        return true;

    }
    //Cập nhật sản phẩm
    static updateProduct(productID, name, price_old, price_current, img, brand, ram, rom, sale) {
        const listProduct = Product.getProducts();

        if (!listProduct || listProduct.length === 0) return null;
        listProduct.forEach(product => {
            if (product.productID === parseInt(productID)) {
                product.name = name;
                product.price_old = price_old
                product.price_current = price_current
                product.img = img
                product.brand = brand
                product.ram = ram
                product.rom = rom
                product.sale = sale
            }
        })
        Product.loadProducts(listProduct)
        return true
    }
    // Xóa sản phẩm bằng cách truyền vào productID 
    static deleteProduct(productID) {
        const listProduct = Product.getProducts();
        if (!listProduct || listProduct.length === 0) return false
        let isDeleted = false;
        listProduct.forEach((product, index) => {
            if (product.productID === productID) {
                listProduct.splice(index, 1)
                if (Product.loadProducts(listProduct)) isDeleted = true;
            }
        })
        return isDeleted;
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
        this.totalPrice = this.quantity * this.product_price;
        this.storeProduct = Product.getProductID(productID);
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
    //load danh sách user lên LocalStorage
    static loadUsers(listUser) {
        localStorage.listUsers = JSON.stringify(listUser);
        if (localStorage.listUsers) {
            return true;
        }
        return false;
    }
    // Lấy danh sách user từ LocalStorage trả về mảng
    static getUsers() {
        if (localStorage.listUsers) {
            return JSON.parse(localStorage.listUsers);
        }
        return null;
    }
    //Lấy ra 1 user bằng cách truyền vào 1 userID
    static getUserID(userID) {
        const listUsers = User.getUsers();
        if (!listUsers || listUsers.length === 0) return null;
        var accountz = null;
        listUsers.forEach(account => {
            if (account.userID === userID) {
                accountz = account;
            }
        })
        return accountz;
    }
    // Load mã user mới nhất
    static getLastUserID() {
        const myList = User.getUsers()
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
            let isAdmin = localStorage.isAdmin === 'true'
            return isAdmin
        }
        return null
    }
    static checkIsActive() {
        if (localStorage.isActive) {
            let isActive = localStorage.isActive === 'true'
            return isActive
        }
        return null
    }
    static setIsAdmin(isAdmin) {
        if (isAdmin == null || isAdmin == undefined) {
            localStorage.isAdmin = false;
        } else {
            if (isAdmin === true) {
                localStorage.isAdmin = true;
            } else {
                localStorage.isAdmin = false;
            }
        }
    }
    static setIsActive(isActive) {
        if (isActive == null || isActive == undefined) {
            localStorage.isActive = false;
        } else {
            if (isActive === true) {
                localStorage.isActive = true;
            } else {
                localStorage.isActive = false;
            }
        }
    }

    // Update giỏ hàng của user
    static updateUserCart(userID, newCartList) {
        const list = User.getUsers();
        if (!list || list.length == 0) return false;
        var isSet = false;
        newCartList = cart.getNoDuplicatesProducts(newCartList);
        list.forEach((item) => {
            if (item.userID == userID) {
                item.cartList = newCartList;
                User.loadUsers(list);
                isSet = true;
            }
        })
        return isSet;
    }

    // Kiểm tra tên đăng nhập
    static isExistUsername(username) {
        const list = User.getUsers();
        if (!list || list.length === 0) return false;
        let isExist = false;
        list.forEach((user) => {
            if (user.username === username) {
                isExist = true;
            }
        })
        return isExist;
    }
    // Kiểm tra tên đăng nhập và mật khẩu
    static checkUserToLogin(username, password) {
        const list = User.getUsers();
        if (!list || list.length === 0) return false;
        let userID
        let isAdmin = false;
        let isActive = false;
        list.forEach((user) => {
            if (user.username === username && user.password === password) {
                userID = user.userID;
                (user.isAdmin == 1) ? isAdmin = true : false;
                (user.isActive == 1) ? isActive = true : false;
            }
        })
        console.log(isAdmin)
        if (!userID) return false;
        User.setLoginState(userID)
        User.setIsAdmin(isAdmin)
        User.setIsActive(isActive)
        return true;
    }
    //Đăng xuất
    static logOut() {
        User.setLoginState(null);
        User.setIsAdmin(null);
        User.setIsActive(null)
        redirectToProductPage()
    }

    // Cập nhật địa chỉ và số ĐT
    static updatePhoneAndAddress(userID, phone, address) {
        const list = User.getUsers()
        if (!list || list.length === 0) return false
        list.forEach(user => {
            if (user.userID === userID) {
                user.phone = phone
                user.address = address
            }
        })
        User.loadUsers(list)

        return true;
    }

    static addUser(username, password, email, phone, fullName, address, isAdmin, isActive) {
        const user = new User(username, password, email, phone, fullName, address, isAdmin, isActive, isAdmin, isActive)
        const list = User.getUsers()
        if (!list || list.length === 0) return false
        list.push(user)

        User.loadUsers(list)
        return true;
    }
    //cập nhật thông tin của user
    static updateUser(userID, username, password, email, phone, fullName, address, isActive) {
        const listUser = User.getUsers()
        if (!listUser || listUser.length === 0) return false
        listUser.forEach(user => {
            if (parseInt(userID) === user.userID) {
                user.username = username
                user.password = password
                user.email = email
                user.phone = phone
                user.full_name = fullName
                user.address = address
                user.isActive = isActive
            }
        })
        User.loadUsers(listUser)
        return true

    }
    //Xóa user
    static deleteUser(userID) {
        const listUser = User.getUsers()
        if (!listUser || listUser.length === 0) return false
        let isDeleted = false

        listUser.forEach((user, index) => {
            if (user.userID === parseInt(userID)) {
                listUser.splice(index, 1)
                if (User.loadUsers(listUser)) isDeleted = true

            }
        })
        return isDeleted
    }



}
// Load data users lên localStorage
class cart {
    static getCartList(userID) {
        const myUser = User.getUserID(userID);
        if (myUser) {
            return myUser.cartList;
        }
        return [];
    }
    //Lấy item trong cart muốn thực hiện các hành vi
    static getCartID(userID, cartID) {
        const list = cart.getCartList(userID);
        if (!list || list.length === 0) return null;
        let myCart = null;
        list.forEach(item => {
            if (item.cartID === cartID)
                myCart = item
        })
        return myCart
    }
    // Đảm bảo giỏ hàng không có 2 sản phẩm giống nhau
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

        })
        return result;
    }
    static addItemCart(userID, productID, quantity) {
        const myList = cart.getCartList(userID)
        const myProduct = Product.getProductID(productID)
        myList.push(new ProductInCart(productID, myProduct.price_current, quantity, myProduct.img[0]));
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
    // Tăng/Giảm số lượng của 1 item trong cart
    static updateCartItemQuantity(userID, cartID, quantity) {
        const myList = cart.getCartList(userID)
        if (!myList || myList.length === 0) return null;
        myList.forEach(item => {
            if (item.cartID === cartID) {
                item.quantity = item.quantity + quantity;
                item.totalPrice = item.quantity * item.product_price
                User.updateUserCart(userID, myList)
            }
        })
    }
    //Remove sản phẩm khỏi giỏ hàng
    static removeCartItem(userID, cartID) {
        const myList = cart.getCartList(userID)
        if (!myList || myList.length === 0) return null;
        let isDeleted = false
        myList.forEach((item, index) => {
            if (item.cartID === cartID) {
                myList.splice(index, 1)
                if (myList === null) myList = [];
                User.updateUserCart(userID, myList)
                isDeleted = true
            }
        })
        return isDeleted
    }
    // Remove tất cả sản phẩm khỏi giỏ hàng
    static removeAllCartItems(userID) {
        const myList = []
        if (User.updateUserCart(userID, myList)) {
            return true;
        }
        return false;
    }
    // Tỉnh tổng tiền các sản phẩm trong giỏ hàng
    static getTotalMoney(userID) {
        const myList = cart.getCartList(userID)
        if (!myList || myList.length === 0) return 0;
        let sum = 0;
        sum = myList.reduce((total, cartItem) => {
            return total + cartItem.totalPrice
        }, 0)
        return sum;
    }
}
class money {
    static formatCurrencytoVND(tien) {
        let nf = new Intl.NumberFormat('en-US');
        let formattedTien = nf.format(tien);
        return formattedTien.replace(/,/g, ".") + "₫";
    }
}

class Invoice {
    static total = 0
    constructor(cartList, userID, orderTime) {
        this.invoiceID = Invoice.getInvoices() === null ? ++Invoice.total : Invoice.getLastInvoiceID() + 1;
        this.cartList = cartList;
        this.userID = userID;
        this.userProfile = User.getUserID(userID);
        this.orderTime = orderTime;
        this.status = false;
    }
    // Load danh sách hóa đơn lên local storage
    static loadInvoices(list) {
        localStorage.listInvoices = JSON.stringify(list);
        if (localStorage.listInvoices)
            return true;
        return false;
    }
    // Lấy danh sách hóa đơn từ local storage trả về mảng
    static getInvoices() {
        if (localStorage.listInvoices) {
            return JSON.parse(localStorage.listInvoices);
        }
        return null;
    }

    //load mã hóa đơn mới nhất
    static getLastInvoiceID() {
        const myList = Invoice.getInvoices();
        if (!myList || myList.length === 0) return null;
        return myList[myList.length - 1].invoiceID;
    }
    //Lấy ra 1 hóa đơn với mã HD truyền vào
    static getInvoiceByInvoiceID(invoiceID) {
        const list = Invoice.getInvoices()
        if (!list || list.length === 0) return null
        let foundInvoice = null;
        list.forEach(invoice => {
            if (invoice.invoiceID === invoiceID) {
                foundInvoice = invoice
            }
        })
        return foundInvoice;
    }
    // Lấy ra tổng tiền của hóa đơn
    static getTotalPriceOfInvoice(invoiceID) {
        // const invoice = Invoice.getInvoiceByInvoiceID(invoiceID)
        // let sum=0;
        // invoice.cartList.forEach(currentItem => {
        //     sum += currentItem.totalPrice
        // })
        // return sum;
        const invoice = Invoice.getInvoiceByInvoiceID(invoiceID);
        if (!invoice) return 0;
        // Sử dụng reduce để tính tổng giá trị totalPrice
        const sum = invoice.cartList.reduce((accumulator, currentItem) =>
            accumulator + currentItem.totalPrice
            , 0);
        return sum;
    }
    //Lấy ra danh sách hóa đơn của 1 User ID
    static getInvoiceByUserID(userID) {
        const myList = Invoice.getInvoices()
        if (!myList || myList.length === 0) return []
        let result = []
        myList.forEach(invoice => {
            if (invoice.userID === userID) {
                result.push(invoice)
            }
        })
        return result
    }
    //Thêm 1 sản phẩm vào hóa đơn khi nhấn nút mua ngay
    static buyNowProduct(userID, productID, quantity) {
        const list = Invoice.getInvoices()
        if (!list) return false
        let myProduct
        myProduct = [new ProductInCart(productID, Product.getProductID(productID).price_current, quantity, Product.getProductID(productID).img[0])]
        list.push(new Invoice(myProduct, userID, Date.now()))
        Invoice.loadInvoices(list)
    }
    // Mua hàng với danh sách sản phẩm trong giỏ hàng và tạo hóa đơn
    static checkoutListProductAndCreateInvoice(userID, cartList) {
        const list = Invoice.getInvoices()
        if (!list) return false;
        if (!cartList || cartList.length === 0) return false;
        list.push(new Invoice(cartList, userID, Date.now()))
        Invoice.loadInvoices(list)
        cart.removeAllCartItems()
        return true;
    }
    //Lấy ra các hóa đơn thỏa điều kiện về ngày tháng
    static getInvoiceByDateTime(startDate, endDate) {
        const list = Invoice.getInvoices();
        if (!list || list.length === 0) return [];

        let myList = [];
        list.forEach(invoice => {
            let currentDate = invoice.orderTime;
            if (time.parseDateTime(startDate) <= currentDate && currentDate <= time.parseDateTime(endDate)) {
                console.log(invoice)
                myList.push(invoice);
            }
        });

        return myList;
    }
    //cập nhật trạng thái của đơn hàng
    static updateInvoiceStatus(invoiceID, status) {
        const list = Invoice.getInvoices()
        if (!list || list.length === 0) return false
        let customerInfoProvided = false;
        list.forEach(invoice => {
            if (invoice.invoiceID === invoiceID) {
                const newUser = User.getUserID(invoice.userID)
                invoice.userProfile.phone = newUser.phone
                invoice.userProfile.phone = newUser.address
                if (invoice.userProfile.phone === '' || invoice.userProfile.address === undefined) {
                    alert("Khách hàng chưa cung cấp thông tin địa chỉ và số điện thoại giao hàng");
                    customerInfoProvided = false;
                    return;
                }
                invoice.status = status
                Invoice.loadInvoices(list)
                customerInfoProvided = true;
            }
        })

        return customerInfoProvided;
    }
    //lấy ra danh sách hóa đơn trong 1 tháng

    static getInvoiceListByMonth(month) {
        const list = Invoice.getInvoices()
        if (!list || list.length === 0) return null
        let resultList = []
        Array.from(list).forEach(invoice => {
            if (time.getMonth(invoice.orderTime) === month) {
                resultList.push(invoice)
            }
        })
        return resultList
    }
    //Lấy ra chi tiết hóa đơn của 1 hóa đơn
    static getDetailInvoice(invoiceID) {
        const list = Invoice.getInvoices()
        if (!list || list.length === 0) return null
        let detailInvoice
        list.forEach(invoice => {
            if (invoice.invoiceID === invoiceID) {
                detailInvoice = invoice.cartList
            }
        })
        return detailInvoice
    }
    // Các hàm thống kê
    //Tổng hóa đơn trong 1 tháng
    static getTotalInvoiceByMonth(month) {
        const list = Invoice.getInvoiceListByMonth(month)
        if (!list || list.length === 0) return 0
        let count = list.length
        return count

    }
    //Tổng doanh thu theo tháng
    static calculateRevenueByMonth(month) {
        const invoiceList = Invoice.getInvoiceListByMonth(month)
        if (!invoiceList || invoiceList.length === 0) return 0
        let total = 0
        invoiceList.forEach(invoice => {
            invoice.cartList.forEach(item => {
                total += item.totalPrice
            })
        })
        return total
    }
    //Tổng số khách hàng 'độc nhất' trong 1 tháng
    static getTotalCustomerByMonth(month) {
        const list = Invoice.getInvoiceListByMonth(month)
        if (!list || list.length === 0) return 0
        let count = 0
        let existUserID = []
        list.forEach(invoice => {
            const userID = invoice.userID
            if (!existUserID.includes(userID)) {
                count = count + 1
                existUserID.push(userID)
                console.log(invoice.userID)
            }
        })
        return count

    }
    //Tính tổng doanh thu theo loại sản phẩm
    static calculateRevenueByCategoryAndMonth(category, month) {
        const invoiceList = Invoice.getInvoiceListByMonth(month)
        if (!invoiceList || invoiceList.length === 0) return 0
        let total = 0
        invoiceList.forEach(item => {
            item.cartList.forEach(item => {
                if (item.storeProduct.brand.includes(category)) {
                    total += item.totalPrice
                }
            })
        })
        return total
    }
    //Tổng số sản phẩm đã bán ra trong tháng
    static getTotalSoldProductsInMonth(month) {
        const invoiceList = Invoice.getInvoiceListByMonth(month)
        if (!invoiceList || invoiceList.length === 0) return 0
        let count = 0
        invoiceList.forEach(invoice => {
            invoice.cartList.forEach(item => {
                count = count + item.quantity
            })

        })
        return count
    }
    //Tổng số sản phẩm đã bán ra trong tháng theo loại
    static getTotalSoldProductsInMonthByBrand(brand, month) {
        const invoiceList = Invoice.getInvoiceListByMonth(month)
        if (!invoiceList || invoiceList.length == 0) return 0
        let count = 0
        invoiceList.forEach(invoice => {
            invoice.cartList.forEach(item => {
                if (item.storeProduct.brand.includes(brand)) {
                    count = count + item.quantity
                }
            })
        })
        return count;
    }
}

class time {
    static getDateTime(timestamp) {
        var date = new Date(timestamp)
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds();
        var formattedDateTime
        return formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    }

    static parseDateTime(dateTimeString) {
        // Split the date and time components
        const [datePart, timePart] = dateTimeString.split(' ');

        // Split the date components
        const [day, month, year] = datePart.split('/').map(Number);

        // Split the time components
        const [hours, minutes, seconds] = timePart.split(':').map(Number);

        // Create a new Date object with the parsed values
        const parsedDate = new Date(year, month - 1, day, hours, minutes, seconds);

        // Return the timestamp
        return parsedDate.getTime();
    }

    static getMonth(timestamp) {
        var date = new Date(timestamp)
        return date.getMonth() + 1
    }
}

class admin {
    static redirectToAdmin(isAdmin) {
        if (isAdmin == false) {
            console.log("admin")
        }
    }
}

