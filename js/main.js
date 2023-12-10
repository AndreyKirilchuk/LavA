//Бургер меню / burger menu
function toggleMenu(){
    console.log('Функция toggleMenu работает');
    document.querySelector('.fon').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
}

//Кнопка наверх / upbutton
window.addEventListener('scroll', function(){
    if(scrollY > 180){
        document.querySelector('.upbutton').style.display = 'block';
    }else{
        document.querySelector('.upbutton').style.display = 'none';
    }
});

//Валидация формы
function subscribe(){

    let input_name = document.querySelector('#input_name');
    let input_email = document.querySelector('#input_email');

    let name = input_name.value;
    let email = input_email.value;
    
    const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    console.log(name);
    if ((name == null || name == "") && (email == null || email == "")){
        input_name.placeholder = 'Введите имя';
        input_email.placeholder = 'Введите почту';
    }else if (name == null || name == ""){
        input_name.placeholder = 'Введите имя';
    }else if(email == null || email == ""){
        input_email.placeholder = 'Введите почту';
    }else if(!emailFormat.test(email)) {
        input_email.value = '';
        input_email.placeholder = 'Введите корректную почту';
    }else{
        alert('Спасибо за подписку');
        input_name.value = ''; 
        input_email.value = '';
        input_name.placeholder = '';
        input_email.placeholder = '';
    }
}

//Валидация входа
function login(){

    let input_login = document.querySelector('#login');
    let input_pass = document.querySelector('#pass');

    let login = input_login.value;
    let pass = input_pass.value;

    console.log(name);
    if ((login == null || login == "") && (pass == null || pass == "")){
        input_login.placeholder = 'Введите логин';
        input_pass.placeholder = 'Введите пароль';
    }else if (login == null || login == ""){
        input_login.placeholder = 'Введите логин';
    }else if(pass == null || pass == ""){
        input_pass.placeholder = 'Введите пароль';
    }else{
        alert('Вы не зарегестрированны');
    }

}

//Валидация заказа звонка
function order(){
    let name_order_input = document.querySelector('#name_order');
    let number_input = document.querySelector('#number');

    let name_order = name_order_input.value;
    let number = number_input.value;

    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    console.log(name);
    if ((name_order == null || name_order == "") && (number == null || number == "")){
        name_order_input.placeholder = 'Введите имя';
        number_input.placeholder = 'Введите номер';
    }else if (name_order == null || name_order == ""){
        name_order_input.placeholder = 'Введите имя';
    }else if(number == null || number == ""){
        number_input.placeholder = 'Введите номер';
    }else if(!phonePattern.test(number)){
        number_input.value = '';
        number_input.placeholder = 'Введите корректнный номер';
    }else{
        alert('Ваши данные успешно записаны, скоро мы вам с вами свяжемся');
    }
}