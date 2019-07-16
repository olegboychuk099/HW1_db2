
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
        console.log(lengthOfPass);
        console.log(event.target.value);
        if(lengthOfPass==0){
            complexity.classList.remove("active");
        }else if (lengthOfPass <= 7) {
            for (let i = 0; i < complexity_item.length; i++) {
                complexity_item[i].classList.remove('complexity__item--good')
                complexity_item[i].classList.remove('complexity__item--perfect')
            }
            complexity_item[0].classList.add('complexity__item--bad');
        }
        else if (lengthOfPass <= 8 && event.target.value.match(/[A-Z]/i)) {
            for (let i = 0; i < complexity_item.length; i++) {
                complexity_item[i].classList.remove('complexity__item--bad')
                complexity_item[i].classList.remove('complexity__item--perfect')
            }
            for (let i = 0; i < complexity_item.length-1; i++) {
                complexity_item[i].classList.add('complexity__item--good');
            }
        } else if (lengthOfPass > 8 && event.target.value.match(/[A-Z]/i) && event.target.value.match(/\d/i)&& event.target.value.match(/[a-z]/i)) {
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