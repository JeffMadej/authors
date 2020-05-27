const mongoose = require('mongoose'),   
    database = 'authorsdb'

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Database Connection Good"))
    .catch(err => console.log("There Was An Issue Connection To The Database", err))