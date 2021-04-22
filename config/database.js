const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://fernandobiaus:cohort3@cluster0.9z7nr.gcp.mongodb.net/colegio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database connected"))
.catch(err => console.log(err))