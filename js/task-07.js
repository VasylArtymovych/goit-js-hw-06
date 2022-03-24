const refs = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector("#text")
}

refs.text.style.fontSize = refs.inputRange.value + 'px';

refs.inputRange.addEventListener('input', event => {
    let range = event.currentTarget.value;

    refs.text.style.fontSize = range + 'px';
})
