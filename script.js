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

// Postavi status usluge
const serviceStatus = document.getElementById('service-status');
const statusLight = document.getElementById('status-light');

function setStatus(isActive, reason) {
    if (isActive) {
        serviceStatus.textContent = 'AKTIVNA';
        statusLight.classList.remove('inactive');
        statusLight.classList.add('active');
    } else {
        serviceStatus.textContent = 'NEAKTIVNA';
        statusLight.classList.remove('active');
        statusLight.classList.add('inactive');
    }
    if (reason) {
        document.getElementById('reason').textContent = `Razlog: ${reason}`;
    }
}

// Primjer promjene statusa
// setStatus(false, 'Privremeni problemi s uslugom.');
