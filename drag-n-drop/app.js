const block1 = document.querySelector('.block1'),
    block2 = document.querySelector('.block2'),
    ufo = document.querySelector('#ufo');

block1.ondragover = allowDrop;
block2.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}
ufo.ondragstart = dragUfo;

function dragUfo(e) {
    e.dataTransfer.setData('id', e.target.id);
}
block1.ondrop = drop;
block2.ondrop = drop;

function drop(e) {
    let itemId = e.dataTransfer.getData('id');
    console.log(itemId);
    e.currentTarget.append(document.getElementById(itemId));
}
