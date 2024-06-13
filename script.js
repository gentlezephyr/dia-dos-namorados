function ready() {
    console.log('DOM Carregado!');
}

document.addEventListener("DOMContentLoaded", ready);

function aperta() {

    const UnHideIt = document.querySelector('#toggle-hidden');
    const UnHideItImage = document.querySelector('#image-hidden');
    let randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber === 0) {
        UnHideIt.classList.remove('hidden');
        UnHideItImage.classList.remove('hidden');
        UnHideIt.innerHTML = 'ESTAMOS NAMORANDO AGORA!';
        document.getElementById('background').style.backgroundColor = 'pink';
    } else {
        UnHideIt.classList.remove('hidden');
        UnHideIt.innerHTML = 'VOCÊ ESTÁ SOLTEIRO(A), TENTE NOVAMENTE!';
        UnHideItImage.classList.add('hidden');
        document.getElementById('background').style.backgroundColor = 'black';
    };

    console.log(UnHideIt);
    console.log(randomNumber);
    
}