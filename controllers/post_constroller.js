const { render } = require('ejs');
const express = require('express');
const db = require('./../db');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM posts ORDER BY title ASC;"
    db.query(sql, (err, dbRes) => {
        let posts = dbRes.rows;
        let now = new Date()
        dbRes.rows.forEach(post => {
            let timePassed = (now - post.init_time) / 1000;
            if (timePassed < 60) {
                timePassed = Math.floor(timePassed)
                post.timePassed = `${timePassed} seconds ago`;
            } else if (timePassed < 3600) {
                timePassed = Math.floor(timePassed/60)
                post.timePassed = `${timePassed} minutes ago`;
            } else if (timePassed < 86400) {
                timePassed = Math.floor(timePassed/3600)
                post.timePassed = `${timePassed} hours ago`;
            } else {
                timePassed = Math.floor(timePassed/86400)
                post.timePassed = `${timePassed} days ago`;
            }
        })
        
        res.render('home', { posts, })
    })
})

router.get('/post/new', (req, res) => {
    res.render('new_post.ejs')
})

router.post('/post', (req, res) => {
    
})

module.exports = router;