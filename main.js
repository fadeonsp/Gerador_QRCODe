const inputValue = document.querySelector('#inputValue')
const btnValue = document.querySelector('#btnValue')
const imgQrCode =  document.querySelector('#imgQrCode')
const wrapper = document.querySelector('.wrapper')

let valueDefault;

// fazendo ação
btnValue.addEventListener('click', () => {
    let qrcodevalue = inputValue.value.trim();

    if(!qrcodevalue || qrcodevalue === valueDefault) return;
    valueDefault = qrcodevalue;
    btnValue.innerText = 'Gerando QRCODE'
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'Gerar QRCODE'
    })
})