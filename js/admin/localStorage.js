

//Load data lên localStorage
if (Product.getProducts() === null) {
    Product.loadProducts(productArr);
}

if(User.checkLoginId() === null){
    User.setLoginState()
    User.setIsAdmin()
    User.setIsActive()
}

if(Invoice.getInvoices() === null){
    Invoice.loadInvoices([])
    //truyền vào 1 mảng rỗng
}

function redirectToOrderPage() {
    location.href = './checkout.html'
}

function redirectToAdminPage() {
    location.href = './admin.html'
}

function redirectToProductPage() {
    location.href = './product.html'
}

function redirectToIndexPage(){
    location.href = './index.html'
}

if (User.getUsers() === null) {
    User.loadUsers(userArr);
}

