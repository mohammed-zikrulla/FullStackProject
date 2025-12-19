const express = require('express');
const dbConfig = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const app = express();

//built in middleware
app.use(express.json());

//custom middleware
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);

app.listen(8082, ()=>{
    console.log('server started on 8082');
})