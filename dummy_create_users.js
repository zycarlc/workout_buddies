const bcrypt = require('bcrypt');
const db = require('./db');

const username = "admin";

const plainTextPassword = "admin";

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) => {
        // console.log(digestedPassword)
        const sql = `
            INSERT INTO users (username, password_encrypted) VALUES ('${username}', '${digestedPassword}');
        `
        db.query(sql, (err, dbRes) => {
            if (err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
    })
})