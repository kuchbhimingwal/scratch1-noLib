document.addEventListener('mousemove', function(e){
    const scratch = document.createElement('span');
    const body = document.querySelector('body');

    scratch.style.top = e.offsetY + 'px';
    scratch.style.left = e.offsetX + 'px';

    body.appendChild(scratch);
});