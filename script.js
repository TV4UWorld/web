document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        const isOpen = panel.style.display === 'block';

        // Close all panels
        document.querySelectorAll('.panel').forEach((p) => (p.style.display = 'none'));
        document.querySelectorAll('.accordion').forEach((btn) => btn.classList.remove('active'));

        // Open the selected panel
        if (!isOpen) {
            panel.style.display = 'block';
            button.classList.add('active');
        }
    });
});
