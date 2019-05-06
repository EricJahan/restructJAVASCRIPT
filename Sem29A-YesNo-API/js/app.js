let container = document.querySelector('.container');
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        fetch('https://yesno.wtf/api?force='+btn.innerText.toLowerCase())
            .then(res => {
                return res.json()
            })
            .then(obj => {
                container.style.backgroundImage = `url(${obj.image})`;
            })
    });
});