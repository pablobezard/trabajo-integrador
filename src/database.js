const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/products-db-app', {
    userCreateIndex: true,
    useNewUrlParser: true,
    useUnifedTopology: true,
    useFindAndModify: false,

})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));  