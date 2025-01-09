// Definicije odgovora za pitanja
const answers = {
    "Pitanje 1: GLOBAL TELECOM OTT OTV Aplikacija": "GLOBAL TELECOM OTT OTV aplikacija omogućuje korisnicima pristup velikom broju TV kanala i sadržaja putem interneta. Više informacija o aplikaciji možete pronaći na službenoj stranici.",
    
    "Pitanje 2: Instalacija i registracija na ProtonVPN.": `
        <strong>Android:</strong> Većina pametnih telefona i tableta koristi Android. Proton VPN aplikaciju možete besplatno preuzeti <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>iOS:</strong> Ako imate iPhone ili iPad, Proton VPN možete besplatno preuzeti <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Windows:</strong> Proton VPN je dostupan za besplatno preuzimanje za Windows uređaje <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>macOS:</strong> Za korisnike Apple Mac računala, Proton VPN možete instalirati <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Linux:</strong> Linux korisnici mogu preuzeti Proton VPN za svoju distribuciju <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Proširenje za preglednik:</strong> Dostupno za korisnike s plaćenim Proton VPN planom na <a href="#" target="_blank">Chrome</a> i <a href="#" target="_blank">Firefox</a>.
    `,

    "Pitanje 3: Cjenik usluge i plaćanje.": "Cijena usluge ovisi o odabranom paketu. Plaćanje je moguće izvršiti putem kreditnih kartica, PayPala ili drugih dostupnih metoda. Detalje o cijenama i paketima možete pronaći na našoj stranici Cjenik."
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
