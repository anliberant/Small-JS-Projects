'use strict';
const copyTxt = document.querySelector('textarea[name=copyTxt]'),
    finalTxt = document.querySelector('textarea[name=finalTxt]'),
    moverBtn = document.querySelector('.moverBtn'),
    copyBtn = document.querySelector('.copyBtn'),
    output = document.querySelector('.output');
moverBtn.addEventListener('click', moveText);
copyBtn.addEventListener('click', copyText);
finalTxt.addEventListener('click', selAll);
copyTxt.addEventListener('click', selAll);

function selAll() {
    this.select();
}
function moveText() {
    let temp = copyTxt.value;
    finalTxt.value = temp;
}
function copyText() {
    let temp = copyTxt.value;
    copyToClipBoart(temp);
}
function copyToClipBoart(str) {
    const textarea = document.createElement('textarea');
    textarea.value = str;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    output.innerHTML = '<h3>Copied content</h3>' + textarea.value;
    console.log(textarea);
}
