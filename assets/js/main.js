// dùng chung
// lấy ra 1 cái hoặc tất
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// onclick="timKiem()" id="header__navbar-iten-Incomplete  --> chức năn chưa hoàn thiện "
var Incomplete = document.getElementById('header__navbar-iten-Incomplete')
Incomplete.addEventListener('click', function () {
    alert('chức năng đang hoàn thiện !')
})

// đóng mở đăng ký 



const modalOpen = document.querySelector('.js-modal-open')

const register = document.querySelector('.js-register')

const btnClose = document.querySelector('.js-btn-close')

const model__body = document.querySelector('.js-model__body')


function register_open ()  {
    modalOpen.classList.add('open')
}

function register_close ()  {
    modalOpen.classList.remove('open')
}

register.addEventListener('click',register_open)

btnClose.addEventListener('click',register_close)


modalOpen.addEventListener('click',register_close)

model__body.addEventListener('click',function (event) {
    event.stopPropagation()
})




const like_primary = document.querySelector('.js-home-product-item__like')
const like = document.querySelector('.home-product-item__like')
const like_2 = document.querySelector('.home-product-item__like--liked')

function like_primary_open () {
    like_primary.classList.add('home-product-item__like--liked')
}

like.addEventListener('click', like_primary_open)


function like_primary_remove () {
    like_primary.classList.remove('home-product-item__like--liked ')
    
}

like_2.addEventListener('click', like_primary_remove)



/* start toast */

// toast function


function toast( {
    title = '',
    message = '',
    type = 'info',
    duration = 1000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const autoRemoveId = setTimeout(function() {  //đóng song khoảng thời gian duration cộng với 1000 animation fadeOut
            main.removeChild(toast)
        },duration + 1000);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle',
            error: 'fas fa-times',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);  // chánh số thập phân dung toFixed(2) "lấy ra hai số thập phân thôi"
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInleft ease 0.3s, fadeOut linear 1s  ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast) //mở 

        
    }
} 




function showSuccessToast(){
    toast({
        title: 'Success',
        message: 'chúc mừng bạn đã đăng ký thành công 😊',
        type: 'success',    // kiểu quết định "class"
        duration: 6000   // khoảng thời gian ẩn duration: 1000  mi li s = 1s
    })

}

function showErrorToast(){
    toast({
        title: 'Error',
        message: 'Có lỗi sảy ra! Đăng nhập thất bại 🤔🤷‍♂️',
        type: 'error',    
        duration: 6000   
    })

}

function warning(){
    toast({
        title: 'Thông báo',
        message: 'Chức năng chưa hoàn thiện😪',
        type: 'warning',    
        duration: 6000   
    })

}
function info(){
    toast({
        title: 'Thông báo',
        message: 'Bạn muốn mua hàng ?, vui lòng đăng ký tài khoản của bạn',
        type: 'info',    
        duration: 600000   
    })

}


// oclick nenu phụ

const menu_items = $$('.header__menu-item')

menu_items.forEach((menu_item) => {
    menu_item.onclick = function () {
        $('.header__menu-item.header__menu-item--yellow').classList.remove('header__menu-item--yellow')

        this.classList.add('header__menu-item--yellow')
    }
});



// Tìm Kiếm Trong Shop, Ngoài Shop

const in_the_shops = $$('.header__search-select-label')
const outside_the_shops = $$('.header__search-option-item')


outside_the_shops.forEach((outside_the_shop, index) => {
    const label = in_the_shops[index]

    outside_the_shop.onclick = function () {
        $('.header__search-option-item.header__search-option-item--active').classList.remove('header__search-option-item--active')
        $('.header__search-select-label.show_display_block').classList.remove('show_display_block')

        this.classList.add('header__search-option-item--active')
        label.classList.add('show_display_block')
    }
});


// nút hiển thị số trang 

const filter_page_btns = $$('.home-filter__page-btn')
const btn_disableds = $$('.home-filter__page-btn--disabled')

const curent = $$('.home-filter__page-curent')
const curent_2 = $$('.home-filter__page-curent_2')

filter_page_btns.forEach((filter_page_btn, index) => {
    const show_curent = curent[index]
    filter_page_btn.onclick = function () {
        $('.home-filter__page-btn.home-filter__page-btn--disabled').classList.remove('home-filter__page-btn--disabled')
        this.classList.add('home-filter__page-btn--disabled')

        $('.home-filter__page-curent.show_display_block').classList.remove('show_display_block')

        show_curent.classList.add('show_display_block')
    }
});

// giá 

const lable_prices = $$('.select-input__lable')
const link_prices = $$('.select-input__link')

link_prices.forEach((link_prices, lable_price) => {
    const price = lable_prices[lable_price]
    link_prices.onclick = function () {
        $('.select-input__link.select-input__link--color').classList.remove('select-input__link--color')
        $('.select-input__lable.show_display_block').classList.remove('show_display_block')

        this.classList.add('select-input__link--color')
        price.classList.add('show_display_block')
    }
});


//menu-mobole-tabte
// Tự động dóng menu khi chọn 1 phần tử trong menu
const menu_mobile_tablte =$('.header__menu-mobile-tablte')
const menu_btn =$('.mobile-tablet-menu-btn')

// querySelectorAll : lấy ra tất cả thẻ , #nav li a[href*="#] : lấy ra những the href = # trong #nav li a
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        // this: thằng mk vừa kích, nextElementSibling: phải có yếu tố anh chị em liền kề, và classList: lấy ra class, contains kiểm tra điều kiện có tồn tại ko "kiểm tra class subnav có tông tại ko"
        var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParenMenu) {
            event.preventDefault();      
        }
        else{
            menu_mobile_tablte.classList.add('close_display_none')
            menu_btn.onclick = function () {
                menu_mobile_tablte.classList.remove('close_display_none')
            }
            
        }
        
    }
}
