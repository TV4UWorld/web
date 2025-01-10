// Definicije odgovora za pitanja
const answers = {
    "GLOBAL TELECOM OTT OTV Aplikacija": `
        <h3>Upute za pristup na Global-Telecom aplikaciju</h3>
        <h4>1. Instalacija aplikacije</h4>
        <p>Otvorite <strong>Google Play Store</strong> i prijavite se s vašom email adresom. Ako nemate račun, kreirajte ga na <a href="https://www.gmail.com" target="_blank">gmail.com</a>. U tražilici Play Store-a upišite <strong>Global-Telecom OTT</strong> i odaberite aplikaciju iz rezultata. Kliknite <strong>Instaliraj</strong> i pričekajte završetak instalacije. Pokrenite aplikaciju klikom na <strong>Otvori</strong>.</p>
        
        <h4>2. Prijava u aplikaciju</h4>
        <p>Odaberite vrstu uređaja (mobilni telefon ili TV) i unesite vaše <strong>korisničko ime</strong> i <strong>lozinku</strong>. Kliknite na <strong>Login</strong> nakon što provjerite ispravnost unesenih podataka.</p>
        
        <h4>3. Početak korištenja</h4>
        <p>Nakon prijave, dobit ćete glavni izbornik:</p>
        <ul>
            <li><strong>Live TV:</strong> Pregled TV kanala uživo.</li>
            <li><strong>Movies:</strong> Pregled filmova.</li>
            <li><strong>Series:</strong> Pregled serija.</li>
            <li><strong>Catch-Up:</strong> Gledanje TV kanala unazad 3 dana (potrebno je prvo instalirati <strong>EPG</strong> opciju).</li>
        </ul>
        
        <h4>4. Podešavanje EPG (elektronskog programa)</h4>
        <p>U glavnom izborniku idite na <strong>Settings</strong> (simbol zupčanika). Odaberite opciju <strong>EPG</strong> i postavite na <strong>Inbuilt EPG Source</strong>, zatim kliknite <strong>Save</strong>.</p>
        
        <h4>5. Automatsko ažuriranje</h4>
        <p>U <strong>Settings</strong> idite na <strong>Automation</strong> i postavite opciju <strong>Auto-Update Live, Movies & Series</strong> na <strong>1 dan</strong> (umjesto 2 dana). Kliknite <strong>Save changes</strong>.</p>
        
        <h4>6. Podešavanje Player opcija</h4>
        <p>U <strong>Settings</strong> idite na <strong>Player Selection</strong> i provjerite:</p>
        <ul>
            <li>Postavite <strong>Live</strong> na <strong>NATIVE Player</strong>.</li>
            <li>Za ostale opcije (Movies, Series, Catch-Up) možete koristiti <strong>VLC Player</strong>:</li>
        </ul>
        <ol>
            <li>Instalirajte <strong>VLC Player</strong> s Google Play Store-a.</li>
            <li>U <strong>Settings</strong> dodajte <strong>VLC</strong> kao eksterni player.</li>
        </ol>
        
        <h4>7. Gledanje sadržaja</h4>
        <p>
            <strong>Live TV with EPG:</strong> Prikazuje raspored TV programa s mogućnošću pregleda kada se što emitira.<br>
            <strong>Catch-Up:</strong> Gledajte TV kanale unazad do 3 dana. Odaberite kanal, datum i željeni sadržaj te kliknite <strong>Play</strong>.
        </p>
    `,
    "Instalacija i registracija na ProtonVPN.": `
        <strong>Android:</strong> Većina pametnih telefona i tableta koristi Android. Proton VPN aplikaciju možete besplatno preuzeti <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>iOS:</strong> Ako imate iPhone ili iPad, Proton VPN možete besplatno preuzeti <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Windows:</strong> Proton VPN je dostupan za besplatno preuzimanje za Windows uređaje <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>macOS:</strong> Za korisnike Apple Mac računala, Proton VPN možete instalirati <a href="#" target="_blank">ovdje</a>.<br><br>
        <strong>Linux:</strong> Linux korisnici mogu preuzeti Proton VPN za svoju distribuciju <a href="#" target="_blank">ovdje</a>.
    `,
    "Cjenik usluge i plaćanje.": `
        <h3>Cjenik usluge</h3>
        <ul>
            <li>1 mjesec - €10</li>
            <li>3 mjeseca - €30</li>
            <li>6 mjeseci - €55</li>
            <li>12 mjeseci - €100</li>
        </ul>
        <p>Za dodatne informacije i upute oko plaćanja, kontaktirajte nas putem WhatsAppa klikom na sljedeći link:</p>
        <a href="https://wa.me/385976688910?text=Pozdrav,%20želim%20postati%20Vaš%20korisnik%20i%20platiti%20uslugu." target="_blank">Kontaktirajte nas na WhatsApp</a>
    `
};

// Prikaz odgovora prilikom klika na pitanje
document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const question = button.textContent.trim();
        const answer = answers[question] || "Odgovor nije dostupan.";
        const answerPanel = document.getElementById('answer-text');
        answerPanel.innerHTML = answer;
    });
});

document.getElementById('service-status').textContent = 'AKTIVNA';
document.getElementById('status-light').className = 'status-light active';
document.getElementById('reason').textContent = 'Sve usluge su trenutno dostupne.';

