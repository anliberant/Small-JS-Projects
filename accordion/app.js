'use strict';
const accordion = document.querySelectorAll('.panel');
accordion.forEach(function (ele) {
    ele.addEventListener('click', toggleEle);
    ele.addEventListener('mouseenter', style1);
    ele.addEventListener('mouseover', style2);
});
function toggleEle(e) {
    console.log(e.target.parentElement);
    accordion.forEach(function (ele) {
        if (e.target.parentElement === ele) {
            ele.classList.toggle('active');
        } else {
            ele.classList.remove('active');
        }
    });
}
function style1(e) {
    e.target.style.color = 'red';
    setTimeout(() => {
        e.target.style.color = '';
    }, 500);
}
function style2(e) {
    e.target.style.color = 'blue';
    setTimeout(() => {
        e.target.style.color = '';
    }, 500);
}
