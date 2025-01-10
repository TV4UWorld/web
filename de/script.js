// Definitionen der Antworten für Fragen
const answers = {
    "GLOBAL TELECOM OTT OTV Anwendung": `
        <h3>Anleitung zur Nutzung der Global-Telecom-Anwendung</h3>
        <h4>1. Installation der Anwendung</h4>
        <p>Öffnen Sie den <strong>Google Play Store</strong> und melden Sie sich mit Ihrer E-Mail-Adresse an. Falls Sie noch kein Konto haben, erstellen Sie eins unter <a href="https://www.gmail.com" target="_blank">gmail.com</a>. Geben Sie im Play Store-Suchfeld <strong>Global-Telecom OTT</strong> ein und wählen Sie die Anwendung aus den Ergebnissen aus. Klicken Sie auf <strong>Installieren</strong> und warten Sie, bis die Installation abgeschlossen ist. Starten Sie die Anwendung, indem Sie auf <strong>Öffnen</strong> klicken.</p>
        
        <h4>2. Anmeldung in der Anwendung</h4>
        <p>Wählen Sie den Gerätetyp aus (Smartphone oder TV) und geben Sie Ihren <strong>Benutzernamen</strong> und Ihr <strong>Passwort</strong> ein. Klicken Sie auf <strong>Anmelden</strong>, nachdem Sie die eingegebenen Daten überprüft haben.</p>
        
        <h4>3. Erste Schritte</h4>
        <p>Nach der Anmeldung wird das Hauptmenü angezeigt:</p>
        <ul>
            <li><strong>Live TV:</strong> Live-TV-Kanäle ansehen.</li>
            <li><strong>Filme:</strong> Filme durchsuchen.</li>
            <li><strong>Serien:</strong> Serien durchsuchen.</li>
            <li><strong>Catch-Up:</strong> TV-Kanäle der letzten 3 Tage ansehen (zuerst muss die <strong>EPG</strong>-Option installiert werden).</li>
        </ul>
        
        <h4>4. EPG (elektronischer Programmführer) einstellen</h4>
        <p>Gehen Sie im Hauptmenü zu <strong>Einstellungen</strong> (Zahnradsymbol). Wählen Sie die Option <strong>EPG</strong> und setzen Sie diese auf <strong>Inbuilt EPG Source</strong>. Klicken Sie dann auf <strong>Speichern</strong>.</p>
        
        <h4>5. Automatische Updates</h4>
        <p>Gehen Sie in <strong>Einstellungen</strong> zu <strong>Automatisierung</strong> und stellen Sie die Option <strong>Auto-Update Live, Filme & Serien</strong> auf <strong>1 Tag</strong> (statt 2 Tage). Klicken Sie auf <strong>Änderungen speichern</strong>.</p>
        
        <h4>6. Player-Optionen einstellen</h4>
        <p>Gehen Sie in <strong>Einstellungen</strong> zu <strong>Player-Auswahl</strong> und überprüfen Sie:</p>
        <ul>
            <li>Setzen Sie <strong>Live</strong> auf <strong>NATIVE Player</strong>.</li>
            <li>Für andere Optionen (Filme, Serien, Catch-Up) können Sie <strong>VLC Player</strong> verwenden:</li>
        </ul>
        <ol>
            <li>Installieren Sie den <strong>VLC Player</strong> aus dem Google Play Store.</li>
            <li>Fügen Sie <strong>VLC</strong> in <strong>Einstellungen</strong> als externen Player hinzu.</li>
        </ol>
        
        <h4>7. Inhalte ansehen</h4>
        <p>
            <strong>Live TV mit EPG:</strong> Zeigt den TV-Programmplan mit der Möglichkeit an, zu sehen, was wann läuft.<br>
            <strong>Catch-Up:</strong> Sehen Sie TV-Kanäle der letzten 3 Tage. Wählen Sie den Kanal, das Datum und den gewünschten Inhalt aus und klicken Sie auf <strong>Play</strong>.
        </p>
    `,
    "Installation und Registrierung bei ProtonVPN.": `
        <strong>Android:</strong> Die meisten Smartphones und Tablets verwenden Android. Sie können die Proton VPN-App kostenlos <a href="#" target="_blank">hier</a> herunterladen.<br><br>
        <strong>iOS:</strong> Wenn Sie ein iPhone oder iPad besitzen, können Sie Proton VPN kostenlos <a href="#" target="_blank">hier</a> herunterladen.<br><br>
        <strong>Windows:</strong> Proton VPN ist für Windows-Geräte kostenlos <a href="#" target="_blank">hier</a> erhältlich.<br><br>
        <strong>macOS:</strong> Für Apple-Mac-Benutzer kann Proton VPN <a href="#" target="_blank">hier</a> installiert werden.<br><br>
        <strong>Linux:</strong> Linux-Benutzer können Proton VPN für ihre Distribution <a href="#" target="_blank">hier</a> herunterladen.
    `,
    "Preisliste und Zahlung.": `
        <h3>Preisliste</h3>
        <ul>
            <li>1 Monat - €10</li>
            <li>3 Monate - €30</li>
            <li>6 Monate - €55</li>
            <li>12 Monate - €100</li>
        </ul>
        <p>Für weitere Informationen und Zahlungsanweisungen kontaktieren Sie uns über WhatsApp, indem Sie auf den folgenden Link klicken:</p>
        <a href="https://wa.me/385976688910?text=Hallo,%20ich%20möchte%20Ihr%20Kunde%20werden%20und%20für%20den%20Service%20bezahlen." target="_blank">Kontaktieren Sie uns auf WhatsApp</a>
    `
};

// Anzeigen von Antworten beim Klicken auf eine Frage
document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const question = button.textContent.trim();
        const answer = answers[question] || "Antwort nicht verfügbar.";
        const answerPanel = document.getElementById('answer-text');
        answerPanel.innerHTML = answer;
    });
});

document.getElementById('service-status').textContent = 'AKTIV';
document.getElementById('status-light').className = 'status-light active';
document.getElementById('reason').textContent = 'Alle Dienste sind derzeit verfügbar.';
