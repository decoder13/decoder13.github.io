const express = require('express')
const mongoose = require('mongoose');
const dashboardRoute = require('./src/routes/dashboard');
const app = express()
const port = process.env.port || 5000;
app.use(express.static('public'))

// Connect database
mongoose.connect('mongodb+srv://decobro13:Asadbek97@deco.ses5fk5.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("successfully");
    })
    .catch((error) => {
        console.error("failed");
    })

// Import routes
const usersRoute = require('./src/routes/user')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    // Set static files
app.use('/styles', express.static(__dirname + '/public/styles'))
app.use('/images', express.static(__dirname + '/public/images'))
app.use('/js', express.static(__dirname + '/public/js'))

// Set template engine
app.set("view engine", "ejs")
app.set('views', './src/views')

// Set Routes
app.use('/', usersRoute)
app.use('/dashboard', dashboardRoute)

app.listen(port, () => {
    console.log(`Server is Listening on 3000`)
})