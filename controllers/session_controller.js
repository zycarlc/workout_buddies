const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("./../db");

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/session', (req, res) => {
    // console.log(req.body)
    const { username, password } = req.body;
    // do you even existing the users table
    const sql = `SELECT * FROM users WHERE username = '${username}'`
    console.log(sql)
    db.query(sql, (err, dbRes) => {
        //did we get a record back?
        if (dbRes.rows.length === 0) {
            //no good, user doesnt exist in the users table. stay at the login page.
            res.render("login")
            return;
        }
        const users = dbRes.rows[0];

        bcrypt.compare(password, dbRes.rows[0].password_encrypted, (err, result) => {
            if (result) {
                req.session.userID = users.id
                res.redirect('/')
            } else {
                res.render("login")
            }
        })
    })

    // res.json(req.body)
})

router.delete('/session', (req, res) => {
    req.session.destroy(() => {
        res.redirect("/")
    })
})

module.exports = router