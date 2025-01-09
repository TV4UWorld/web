const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Status usluge (početni podaci)
let serviceStatus = {
    status: "AKTIVNA", // ili "NEAKTIVNA"
    reason: "Sve usluge su trenutno dostupne."
};

// Endpoint za dohvaćanje statusa
app.get('/api/status', (req, res) => {
    res.json(serviceStatus);
});

// Endpoint za ažuriranje statusa
app.post('/api/status', (req, res) => {
    const { status, reason } = req.body;
    if (status) serviceStatus.status = status;
    if (reason) serviceStatus.reason = reason;
    res.json({ message: "Status uspješno ažuriran!", serviceStatus });
});

// Pokretanje servera
app.listen(PORT, () => {
    console.log(`Server pokrenut na http://localhost:${PORT}`);
});
