const refs = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector("#text")
}

refs.inputRange.addEventListener('input', event => {
    let range = event.currentTarget.value;

    refs.text.setAttribute('style', 'font-size:16');


    refs.text.style.fontSize = range + 'px';

})
