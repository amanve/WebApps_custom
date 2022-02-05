let btnAction = document.querySelector('.btn-action');
let text = document.querySelector('.box');
btnAction.addEventListener('click', changeFontStyle);
btnAction.addEventListener('click', changeTextAlign);

function changeFontStyle(e) {
    // console.log(e.target.id);
    if (e.target.id === 'bold') {
        e.target.classList.toggle('active');
        text.classList.toggle('bold');
    }
    if (e.target.id === 'italics') {
        e.target.classList.toggle('active');
        text.classList.toggle('italics');
    }
    if (e.target.id === 'underline') {
        e.target.classList.toggle('active');
        text.classList.toggle('underline');
    }
}

function changeTextAlign(e) {
    if (e.target.id === 'justify') {
        e.target.classList.toggle('active');
        text.classList.toggle('justify');
    }
    else if (e.target.id === 'centre') {
        e.target.classList.toggle('active');
        text.classList.toggle('centre');
    }
    else if (e.target.id === 'left-align') {
        e.target.classList.toggle('active');
        text.classList.toggle('left-align');
    }
    else if (e.target.id === 'right-align') {
        e.target.classList.toggle('active');
        text.classList.toggle('right-align');
    }
}