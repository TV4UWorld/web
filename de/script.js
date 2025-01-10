// Definitionen der Antworten auf die Fragen
const answers = {
    "GLOBAL TELECOM OTT OTV Anwendung": `
        <h3>Anweisungen für den Zugriff auf die Global-Telecom-Anwendung</h3>
        <h4>1. Installation der Anwendung</h4>
        <p>Öffnen Sie den <strong>Google Play Store</strong> und melden Sie sich mit Ihrer E-Mail-Adresse an. Falls Sie kein Konto haben, erstellen Sie eines auf <a href="https://www.gmail.com" target="_blank">gmail.com</a>. Geben Sie in die Suchleiste des Play Stores <strong>Global-Telecom OTT</strong> ein und wählen Sie die Anwendung aus den Ergebnissen aus. Klicken Sie auf <strong>Installieren</strong> und warten Sie, bis die Installation abgeschlossen ist. Starten Sie die Anwendung, indem Sie auf <strong>Öffnen</strong> klicken.</p>
        
        <h4>2. Anmeldung in der Anwendung</h4>
        <p>Wählen Sie den Gerätetyp aus (Smartphone oder TV) und geben Sie Ihren <strong>Benutzernamen</strong> und Ihr <strong>Passwort</strong> ein. Klicken Sie auf <strong>Login</strong>, nachdem Sie die Eingaben überprüft haben.</p>
        
        <h4>3. Erste Schritte</h4>
        <p>Nach der Anmeldung sehen Sie das Hauptmenü:</p>
        <ul>
            <li><strong>Live TV:</strong> Live-TV-Kanäle ansehen.</li>
            <li><strong>Filme:</strong> Filme durchsuchen.</li>
            <li><strong>Serien:</strong> Serien durchsuchen.</li>
            <li><strong>Catch-Up:</strong> TV-Kanäle der letzten 3 Tage ansehen (die Option <strong>EPG</strong> muss vorher installiert werden).</li>
        </ul>
        
        <h4>4. EPG (Elektronischer Programmführer) einstellen</h4>
        <p>Gehen Sie im Hauptmenü zu <strong>Einstellungen</strong> (Zahnradsymbol). Wählen Sie die Option <strong>EPG</strong> aus und stellen Sie sie auf <strong>Inbuilt EPG Source</strong>, dann klicken Sie auf <strong>Speichern</strong>.</p>
        
        <h4>5. Automatische Updates</h4>
        <p>Gehen Sie in <strong>Einstellungen</strong> zu <strong>Automatisierung</strong> und stellen Sie die Option <strong>Auto-Update Live, Movies & Series</strong> auf <strong>1 Tag</strong> (statt 2 Tage). Klicken Sie auf <strong>Änderungen speichern</strong>.</p>
        
        <h4>6. Player-Einstellungen konfigurieren</h4>
        <p>Gehen Sie in <strong>Einstellungen</strong> zu <strong>Playerauswahl</strong> und überprüfen Sie:</p>
        <ul>
            <li>Stellen Sie <strong>Live</strong> auf <strong>NATIVE Player</strong>.</li>
            <li>Für andere Optionen (Filme, Serien, Catch-Up) können Sie den <strong>VLC Player</strong> verwenden:</li>
        </ul>
        <ol>
            <li>Installieren Sie den <strong>VLC Player</strong> aus dem Google Play Store.</li>
            <li>Fügen Sie in den <strong>Einstellungen</strong> <strong>VLC</strong> als externen Player hinzu.</li>
        </ol>
        
        <h4>7. Inhalte ansehen</h4>
        <p>
            <strong>Live TV mit EPG:</strong> Zeigt den TV-Programmplan mit der Möglichkeit an, wann etwas ausgestrahlt wird.<br>
            <strong>Catch-Up:</strong> Sehen Sie TV-Kanäle bis zu 3 Tage zurück. Wählen Sie den Kanal, das Datum und den gewünschten Inhalt aus und klicken Sie auf <strong>Play</strong>.
        </p>
        <h4>DIREKTER DOWNLOAD DER ANWENDUNG</h4>
        <p>
            <strong>Android/Google Play:</strong> http://aftv.news/903639 <br>
            <strong>Windows:</strong> http://aftv.news/163058 <strong>Play</strong>.
        </p>

    `,
    "Installation und Registrierung bei ProtonVPN.": `
        <strong>Android:</strong> Die meisten Smartphones und Tablets verwenden Android. Sie können die Proton VPN-App kostenlos <a href="#" target="_blank">hier</a> herunterladen.<br><br>
        <strong>iOS:</strong> Wenn Sie ein iPhone oder iPad besitzen, können Sie Proton VPN kostenlos <a href="#" target="_blank">hier</a> herunterladen.<br><br>
        <strong>Windows:</strong> Proton VPN ist für Windows-Geräte kostenlos verfügbar <a href="#" target="_blank">hier</a>.<br><br>
        <strong>macOS:</strong> Für Apple Mac-Benutzer kann Proton VPN <a href="#" target="_blank">hier</a> installiert werden.<br><br>
        <strong>Linux:</strong> Linux-Benutzer können Proton VPN für ihre Distribution <a href="#" target="_blank">hier</a> herunterladen.<br><br>
        <strong>Warum ProtonVPN verwenden?</strong><br>
        Die Verwendung von ProtonVPN wird für IPTV-Dienste empfohlen, da es zu Sperrungen durch Ihren Internetanbieter kommen kann. ProtonVPN maskiert Ihre IP-Adresse und verschlüsselt den Datenverkehr, um Einschränkungen zu umgehen und ein sicheres und ununterbrochenes IPTV-Streaming zu gewährleisten. Es verhindert auch Drosselung und ermöglicht den Zugriff auf geo-blockierte Inhalte.
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
        <a href="https://wa.me/385976688910?text=Hallo,%20ich%20möchte%20Ihr%20Kunde%20werden%20und%20den%20Service%20bezahlen." target="_blank">Kontaktieren Sie uns auf WhatsApp</a>
    `
};

// Anzeige der Antworten beim Klicken auf eine Frage
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
