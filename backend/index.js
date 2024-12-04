const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 5000;

mongoose.connect(process.env.DATABASE_URL).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));