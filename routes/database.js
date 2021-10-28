const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db', (err) => {

    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection ' );
});

require('./models/Mission');
require('./models/Vehicule');