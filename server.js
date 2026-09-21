const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data and serve static files (HTML/CSS)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/marvelTickets')
    .then(() => console.log('Connected to MongoDB successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define the Database Schema
const ticketSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    tickets: { type: Number, required: true },
    bookedAt: { type: Date, default: Date.now }
});

// Create the Model
const Ticket = mongoose.model('Ticket', ticketSchema);

// Route: Handle Form Submission
app.post('/book', async (req, res) => {
    try {
        // Create a new ticket document using data from the form
        const newTicket = new Ticket({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            date: req.body.date,
            tickets: req.body.tickets
        });

        // Save to database
        await newTicket.save();

        // Send a success screen back to the browser
        res.send(`
            <div style="background-color: black; color: white; text-align: center; padding: 50px; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <h1 style="color: #4CAF50;">Tickets Booked Successfully!</h1>
                <p style="font-size: 1.2rem;">Thank you, <strong>${req.body.name}</strong>. Your ${req.body.tickets} ticket(s) for ${req.body.date} have been confirmed.</p>
                <a href="/" style="color: yellow; text-decoration: none; font-size: 20px; margin-top: 20px; border: 1px solid yellow; padding: 10px 20px; border-radius: 5px;">Book More Tickets</a>
            </div>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while booking your tickets. Please try again.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
