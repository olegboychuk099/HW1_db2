// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".sidebar");
// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    bar.classList.toggle("active");
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});


//Sign UP
const pass = document.querySelector(".password");
const complexity_item = document.getElementsByClassName('complexity__item');
const complexity = document.querySelector(".complexity");
const content = document.querySelector(".content");
// On click
content.addEventListener("click", (event) => {
    // Toggle class "is-active"
    if(event.target === pass ){
        complexity.classList.add("active");
    }
    else {
        complexity.classList.remove("active");
    }
    pass.addEventListener("input", (event) => {
        let lengthOfPass = event.target.value.split('').length;
        if(lengthOfPass==0){
            complexity.classList.remove("active");
        } else if (lengthOfPass <= 6) {
            for (let i = 0; i < complexity_item.length; i++) {
                complexity_item[i].classList.remove('complexity__item--good')
                complexity_item[i].classList.remove('complexity__item--perfect')
            }
            complexity_item[0].classList.add('complexity__item--bad');
        } else if (lengthOfPass <= 10) {
            for (let i = 0; i < complexity_item.length; i++) {
                complexity_item[i].classList.remove('complexity__item--bad')
                complexity_item[i].classList.remove('complexity__item--perfect')
            }
            for (let i = 0; i < complexity_item.length-1; i++) {
                complexity_item[i].classList.add('complexity__item--good');
            }
        } else {
            for (let i = 0; i < complexity_item.length; i++) {
                complexity_item[i].classList.remove('complexity__item--bad')
                complexity_item[i].classList.remove('complexity__item--good')
            }
            for (let i = 0; i < complexity_item.length; i++) {
                complexity_item[i].classList.add('complexity__item--perfect');
            }
        }
    });
    // Do something else, like open/close menu
});

//profile content swap
const personal = document.querySelector(".headline__personal");
const account = document.querySelector(".headline__account");
const user__personal = document.querySelector(".user__personal");
const user__account = document.querySelector(".user__account");
const underline__personal = document.querySelector(".underline__personal");
const underline__account = document.querySelector(".underline__account");
// On click
personal.addEventListener("click", function () {
    // Toggle class "is-active"
    if(user__account.classList.contains("account-active")){
        user__account.classList.remove("account-active");
        user__personal.classList.add("personal-active");
        if(!personal.classList.contains("headline__active")){
            personal.classList.add("headline__active");
            account.classList.add("headline__nonact");
            underline__personal.classList.add("underline__active");
            underline__account.classList.add("underline__nonact");

            personal.classList.remove("headline__nonact");
            account.classList.remove("headline__active");
            underline__personal.classList.remove("underline__nonact");
            underline__account.classList.remove("underline__active");
        }
    }
});
account.addEventListener("click", function () {
    // Toggle class "is-active"
    if (user__personal.classList.contains("personal-active")) {
        user__personal.classList.remove("personal-active");
        user__account.classList.add("account-active");
        if (!account.classList.contains("headline__active")) {
            account.classList.add("headline__active");
            personal.classList.add("headline__nonact");
            underline__account.classList.add("underline__active");
            underline__personal.classList.add("underline__nonact");

            account.classList.remove("headline__nonact");
            personal.classList.remove("headline__active");
            underline__account.classList.remove("underline__nonact");
            underline__personal.classList.remove("underline__active");
        }
    }
});