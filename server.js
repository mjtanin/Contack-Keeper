const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Database Connected
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));
const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./Routes/users'));
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/contact', require('./Routes/contact'));

app.listen(PORT, () => {
    console.log(`Server Started on ... http://localhost:${PORT}`);
})