const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db', {useNewUrlParser: true, useUnifiedTopology: true},(err) => {
  
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./Vehicule');
require('./Chauffeur');
require('./Parc');
require('./compte');
require('./Mission');
