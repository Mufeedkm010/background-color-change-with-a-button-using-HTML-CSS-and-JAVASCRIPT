document.getElementById('changeColorButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const button = this;
    if (container.style.backgroundColor === 'black') {
        container.style.backgroundColor = 'red';
        button.textContent = 'Background Color: Blue';
        button.style.backgroundColor = 'blue';
    } else if (container.style.backgroundColor === 'red') {
        container.style.backgroundColor = 'blue';
        button.textContent = 'Background Color: Black';
        button.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
        button.textContent = 'Background Color: Red';
        button.style.backgroundColor = 'red';
    }
});
