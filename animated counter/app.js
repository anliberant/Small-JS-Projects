const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach((c) => {
    const updateCount = () => {
        const target = +c.getAttribute('data-target');
        const count = +c.innerText;
        const inc = target / speed;
        console.log(target);
        if (count < target) {
            c.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            c.innerText = target;
        }
    };
    updateCount();
});
