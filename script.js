document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        const isOpen = panel.style.display === 'block';

        document.querySelectorAll('.panel').forEach((p) => (p.style.display = 'none'));
        document.querySelectorAll('.accordion').forEach((btn) => (btn.classList.remove('active')));

        if (!isOpen) {
            panel.style.display = 'block';
            button.classList.add('active');
        }
    });
});
