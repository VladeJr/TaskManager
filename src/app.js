const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./database');
dotenv.config();

const app = express();
app.use(express.json());


app.use(express.static(path.join(__dirname, '..', 'public')));

const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
