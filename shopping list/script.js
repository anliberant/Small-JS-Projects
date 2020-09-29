'use strict';
let myList = ['bananas', 'milk', 'humus', 'cola', 'apples'];
const output = document.querySelector('.output'),
    btnAdd = document.querySelector('#addNew'),
    newItem = document.querySelector('#addItem');
btnAdd.addEventListener('click', () => {
    if (newItem.value) {
        myList.push(newItem.value);
        build();
        newItem.value = '';
    }
});
document.addEventListener('DOMContentLoaded', build);
window.onload = build;
function build() {
    output.innerHTML = '<h2>My Shopping List</h2>';
    const table = document.createElement('table');
    for (let i = 0; i < myList.length; i++) {
        const row = document.createElement('tr');
        row.ind = i;
        const cell1 = document.createElement('td');
        cell1.innerHTML = myList[i];
        row.appendChild(cell1);
        const cell2 = document.createElement('td'),
            span1 = document.createElement('span'),
            span2 = document.createElement('span');
        span1.innerText = 'Delete';
        span1.addEventListener('click', function () {
            // let temp = this.closest('tr');
            let itemOut = myList.splice(i, 1);
            build();
        });
        span2.innerText = 'Edit';
        span2.addEventListener('click', function () {
            row.style.backgroundColor = 'Yellow';
            let tempElem = row.firstElementChild;
            const newInput = document.createElement('input');
            newInput.value = tempElem.innerText;
            newInput.focus();
            tempElem.innerHTML = '';
            tempElem.appendChild(newInput);
            newInput.addEventListener('blur', function () {
                tempElem.innerHTML = newInput.value;
                row.style.backgroundColor = 'white';
                myList[i] = newInput.value;
            });
        });
        cell2.appendChild(span1);
        cell2.appendChild(span2);
        row.appendChild(cell2);
        table.appendChild(row);
    }
    output.appendChild(table);
}
