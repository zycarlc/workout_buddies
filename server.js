const express = require('express');
const app = express();
const port = 8080;
const expressLayouts = require('express-ejs-layouts')
const db = require('./db')
const postController = require('./controllers/post_constroller')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(expressLayouts)
app.use(postController)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})