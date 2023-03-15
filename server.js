const express = require('express');
const app = express();
const port = 8080;
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const db = require('./db')
const postController = require('./controllers/post_constroller')
const sessionController = require('./controllers/session_controller')
const viewHelpers = require('./middlewares/viewHelpers')
const currentUser = require('./middlewares/current_user')
const methodOverride = require('./middlewares/method_override')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride)
app.set('view engine', 'ejs')

app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat',
    saveUninitialized: true,
}))

app.use(express.static('public'))
app.use(expressLayouts)
app.use(currentUser)
app.use(viewHelpers)




app.use("/", postController)
app.use("/", sessionController)


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})