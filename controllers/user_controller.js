const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("./../db");

// router.get('/users'); //list of users
router.post('/users', (req, res) => {
    let {username, plainTextPassword, confirmedPassword} = req.body;
    if (plainTextPassword !== confirmedPassword) {
        res.render('sign_up', {message: 'check your password'})
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) => {
                // console.log(digestedPassword)
                const sql = `
                    INSERT INTO users (username, password_encrypted) VALUES ($1, $2) RETURNING id;
                `
                db.query(sql, [username, digestedPassword],(err, dbRes) => {
                    req.session.userID = dbRes.rows[0].id
                    res.redirect('/')
                })
            })
        })
    }
});  //create a user
// router.delete('/users/:id'); //delete a user
// router.put('/users/:id'); //update single user
router.get('/users/new', (req, res) => {
    res.render('sign_up', {message: ''})
}); //get new user form
// router.get('/users/:id/edit'); //get existing user form
// router.get('/users/:id'); // get single user

module.exports = router