// Definicije odgovora za pitanja
const answers = {
    "GLOBAL TELECOM OTT OTV Aplikacija": "GLOBAL TELECOM OTT OTV aplikacija omogućuje korisnicima pristup velikom broju TV kanala i sadržaja putem interneta. Više informacija o aplikaciji možete pronaći na službenoj stranici.",
    "Instalacija i registracija na ProtonVPN.": `
        <strong>Android:</strong> Većina pametnih telefona i tableta koristi Android. Proton VPN aplikaciju možete besplatno preuzeti <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>iOS:</strong> Ako imate iPhone ili iPad, Proton VPN možete besplatno preuzeti <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Windows:</strong> Proton VPN je dostupan za besplatno preuzimanje za Windows uređaje <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>macOS:</strong> Za korisnike Apple Mac računala, Proton VPN možete instalirati <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Linux:</strong> Linux korisnici mogu preuzeti Proton VPN za svoju distribuciju <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Proširenje za preglednik:</strong> Dostupno za korisnike s plaćenim Proton VPN planom na <a href="#" target="_blank">Chrome</a> i <a href="#" target="_blank">Firefox</a>.
    `,
    "Cjenik usluge i plaćanje.": "Cijena usluge ovisi o odabranom paketu. Plaćanje je moguće izvršiti putem kreditnih kartica, PayPala ili drugih dostupnih metoda. Detalje o cijenama i paketima možete pronaći na našoj stranici Cjenik."
};

// Prikaz odgovora prilikom klika na pitanje
document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const question = button.textContent.trim(); // Dohvati pitanje iz gumba
        const answer = answers[question] || "Odgovor nije dostupan.";
        
        // Prikaz odgovora u desnom panelu
        const answerPanel = document.getElementById('answer-text');
        answerPanel.innerHTML = answer; // Koristi innerHTML za interpretaciju HTML-a
    });
});
