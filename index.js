const { mongoose } = require('mongoose');
const { app, startScrapping } = require('./app');
const config = require('config');

// Database connection
mongoose.connect(config.get('Database'))
    .then(() => {
        startScrapping()
        console.log("Connected to Database")
        console.log(`Server is running on port : ${config.get('Port')}`)
        app.listen(4001)
    })
    .catch(err => console.log("Error in connecting to database, error : ", err.message))