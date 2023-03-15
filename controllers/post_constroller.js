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
            let timePassed = (now - Date.parse(post.init_second)) / 1000;
            let timeToStart = (Date.parse(post.begin_datetime) - now) / 1000;
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
            if (timeToStart < 60) {
                timeToStart = Math.floor(timeToStart)
                post.timeToStart = `${timeToStart} seconds ago`;
            } else if (timeToStart < 3600) {
                timeToStart = Math.floor(timeToStart/60)
                post.timeToStart = `${timeToStart} minutes ago`;
            } else if (timeToStart < 86400) {
                timeToStart = Math.floor(timeToStart/3600)
                post.timeToStart = `${timeToStart} hours ago`;
            } else {
                timeToStart = Math.floor(timeToStart/86400)
                post.timeToStart = `${timeToStart} days ago`;
            }
        })
        
        res.render('home', { posts, })
    })
})

router.get('/post/new', (req, res) => {
    if (!req.session.userID) {
        res.render('login', {message: 'please login first'})
        return
    }
    res.render('new_post')
})

router.post('/post', (req, res) => {
    if (!req.session.userID) {
        res.render('login', {message: 'please login first'})
        return
    }
    let now = new Date();
    let postContent = req.body;
    res.json(postContent)
    let dateString = `${postContent.year}-${("0" + (postContent.month)).slice(-2)}-${("0" + postContent.date).slice(-2)}T${("0" + postContent.hour).slice(-2)}:${("0" + postContent.minutes).slice(-2)}:00`
    let schedule = new Date(dateString)
    // console.log (postContent)
    // const sql = `INSERT INTO posts (user_id, title, sport_type, image_url, online_url, workout_description, init_second, init_date, init_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    // db.query(sql, [req.session.userID, postContent.title, postContent.sportType, postContent.imageUrl, postContent.onlineUrl, postContent.description, now.getTime(), now.toLocaleDateString(), now.toLocaleTimeString()], (err, dbRes) => {
    //     console.log(err)
    //     res.redirect('/')
    // })
})

router.get('/post/:id', (req, res) => {
    const sql = `SELECT * FROM posts WHERE id = $1;`
    db.query(sql, [req.params.id], (err, dbRes) => {
        let now = new Date()
        console.log(err)
        let postDetails = dbRes.rows[0];
        let timePassed = (now - Date.parse(postDetails.init_second)) / 1000;
        if (timePassed < 60) {
            timePassed = Math.floor(timePassed)
            postDetails.timePassed = `${timePassed} seconds ago`;
        } else if (timePassed < 3600) {
            timePassed = Math.floor(timePassed/60)
            postDetails.timePassed = `${timePassed} minutes ago`;
        } else if (timePassed < 86400) {
            timePassed = Math.floor(timePassed/3600)
            postDetails.timePassed = `${timePassed} hours ago`;
        } else {
            timePassed = Math.floor(timePassed/86400)
            postDetails.timePassed = `${timePassed} days ago`;
        }
        res.render('post_details', { postDetails })
    })
})

module.exports = router;