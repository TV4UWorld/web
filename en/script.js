// Definitions of answers for questions
const answers = {
    "GLOBAL TELECOM OTT OTV Application": `
        <h3>Instructions for accessing the Global-Telecom application</h3>
        <h4>1. Installing the application</h4>
        <p>Open <strong>Google Play Store</strong> and sign in with your email address. If you don't have an account, create one at <a href="https://www.gmail.com" target="_blank">gmail.com</a>. In the Play Store search bar, type <strong>Global-Telecom OTT</strong> and select the application from the results. Click <strong>Install</strong> and wait for the installation to complete. Launch the application by clicking <strong>Open</strong>.</p>
        
        <h4>2. Logging in to the application</h4>
        <p>Select the type of device (mobile phone or TV) and enter your <strong>username</strong> and <strong>password</strong>. Click on <strong>Login</strong> after verifying the entered data.</p>
        
        <h4>3. Getting started</h4>
        <p>After logging in, you will see the main menu:</p>
        <ul>
            <li><strong>Live TV:</strong> View live TV channels.</li>
            <li><strong>Movies:</strong> Browse movies.</li>
            <li><strong>Series:</strong> Browse series.</li>
            <li><strong>Catch-Up:</strong> Watch TV channels from the past 3 days (you need to first install the <strong>EPG</strong> option).</li>
        </ul>
        
        <h4>4. Setting up EPG (electronic program guide)</h4>
        <p>In the main menu, go to <strong>Settings</strong> (gear symbol). Select the <strong>EPG</strong> option and set it to <strong>Inbuilt EPG Source</strong>, then click <strong>Save</strong>.</p>
        
        <h4>5. Automatic updates</h4>
        <p>In <strong>Settings</strong>, go to <strong>Automation</strong> and set the <strong>Auto-Update Live, Movies & Series</strong> option to <strong>1 day</strong> (instead of 2 days). Click <strong>Save changes</strong>.</p>
        
        <h4>6. Configuring Player options</h4>
        <p>In <strong>Settings</strong>, go to <strong>Player Selection</strong> and check:</p>
        <ul>
            <li>Set <strong>Live</strong> to <strong>NATIVE Player</strong>.</li>
            <li>For other options (Movies, Series, Catch-Up), you can use <strong>VLC Player</strong>:</li>
        </ul>
        <ol>
            <li>Install <strong>VLC Player</strong> from Google Play Store.</li>
            <li>In <strong>Settings</strong>, add <strong>VLC</strong> as an external player.</li>
        </ol>
        
        <h4>7. Watching content</h4>
        <p>
            <strong>Live TV with EPG:</strong> Displays the TV program schedule with the option to see when something airs.<br>
            <strong>Catch-Up:</strong> Watch TV channels from up to 3 days ago. Select the channel, date, and desired content, then click <strong>Play</strong>.
        </p>
    `,
    "Installation and registration on ProtonVPN.": `
        <strong>Android:</strong> Most smartphones and tablets use Android. You can download the Proton VPN app for free <a href="#" target="_blank">here</a>.<br><br>
        <strong>iOS:</strong> If you have an iPhone or iPad, you can download Proton VPN for free <a href="#" target="_blank">here</a>.<br><br>
        <strong>Windows:</strong> Proton VPN is available for free download for Windows devices <a href="#" target="_blank">here</a>.<br><br>
        <strong>macOS:</strong> For Apple Mac users, Proton VPN can be installed <a href="#" target="_blank">here</a>.<br><br>
        <strong>Linux:</strong> Linux users can download Proton VPN for their distribution <a href="#" target="_blank">here</a>.<br><br>
        <strong>Why use ProtonVPN?</strong><br>
        ProtonVPN is recommended for IPTV services due to potential blocks by your internet provider. ProtonVPN masks your IP address and encrypts traffic, bypassing restrictions and ensuring secure, uninterrupted IPTV streaming. It also prevents speed throttling and allows access to geo-blocked content.
    `,
    "Service pricing and payment.": `
        <h3>Service Pricing</h3>
        <ul>
            <li>1 month - €10</li>
            <li>3 months - €30</li>
            <li>6 months - €55</li>
            <li>12 months - €100</li>
        </ul>
        <p>For additional information and payment instructions, contact us via WhatsApp by clicking the following link:</p>
        <a href="https://wa.me/385976688910?text=Hello,%20I%20would%20like%20to%20become%20your%20customer%20and%20pay%20for%20the%20service." target="_blank">Contact us on WhatsApp</a>
    `
};

// Displaying answers when a question is clicked
document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const question = button.textContent.trim();
        const answer = answers[question] || "Answer not available.";
        const answerPanel = document.getElementById('answer-text');
        answerPanel.innerHTML = answer;
    });
});

document.getElementById('service-status').textContent = 'ACTIVE';
document.getElementById('status-light').className = 'status-light active';
document.getElementById('reason').textContent = 'All services are currently available.';
