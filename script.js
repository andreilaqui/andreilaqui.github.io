
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.parentElement.querySelector('.collapse-div');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            this.textContent = '−';
        } else {
            content.style.display = 'none';
            this.textContent = '+';
        }
    });
});