/* place click listener for all toggle buttons  */
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.parentElement.querySelector('.collapse-div');
        /* either expand or collapse example div */
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            this.textContent = '−';
        } else {
            content.style.display = 'none';
            this.textContent = '+';
        }
    });
});