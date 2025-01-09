// Definicije odgovora za pitanja
const answers = {
    "Pitanje 1: Što je TV4U?": "TV4U je usluga koja omogućuje korisnicima gledanje omiljenih kanala putem interneta.",
    "Pitanje 2: Kako se prijaviti?": "Registracija je jednostavna putem naše web stranice u nekoliko koraka.",
    "Pitanje 3: Koliko košta usluga?": "Cijena usluge ovisi o paketu, a informacije možete pronaći na stranici s cijenama.",
};

// Kada se klikne na pitanje, prikaži odgovor desno
document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const question = button.textContent;
        const answerText = answers[question] || "Odgovor nije dostupan.";
        document.getElementById('answer-text').textContent = answerText;
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
// setStatus
