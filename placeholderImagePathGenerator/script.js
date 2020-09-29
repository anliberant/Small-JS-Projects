const sel = document.querySelector('select'),
    inpAll = document.querySelectorAll('input'),
    image = document.querySelector('img'),
    textarea = document.querySelector('textarea');
sel.addEventListener('change', build);
inpAll.forEach((item) => {
    item.addEventListener('change', build);
});
function clean(str) {
    return str.replace('#', '');
}
function spacers(str) {
    return str.split(' ').join('+');
}
function build(e) {
    let i = {};
    i.size = sel.value;
    i.text = spacers(inpAll[0].value);
    i.bgColor = clean(inpAll[1].value);
    i.txtColor = clean(inpAll[2].value);
    i.path =
        'http://via.placeholder.com/' +
        i.size +
        '/' +
        i.bgColor +
        '/' +
        i.txtColor +
        '?text=' +
        i.text;
    image.src = i.path;
    textarea.value = i.path;
    textarea.select();
    textarea.focus();
    document.execCommand('copy');
}
