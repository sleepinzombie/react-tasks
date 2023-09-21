const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/users');
const todoRoute = require('./routes/todos');

require('dotenv').config();

const app = express();
const port = 3001;



app.get("/api", (req, res) => {
    res.send("Hello World");
});

app.use('/api/users', userRoute);
app.use('/api/todos', todoRoute);

app.listen(port, () => console.log(`App running on port : ${port}`));