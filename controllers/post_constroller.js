const { render } = require('ejs');
const express = require('express');
const db = require('./../db');
const router = express.Router();
const moment = require('moment');

router.get('/', (req, res) => {
    const sql = `SELECT * FROM posts WHERE end_datetime >= Now() ORDER BY begin_datetime ASC;`
    db.query(sql, (err, dbRes) => {
        let posts = dbRes.rows;
        posts.forEach(post => {
            let scheduleTime = post.begin_datetime
            let endTime = post.end_datetime
            let inTime = moment(scheduleTime, 'YYYY-MM-DD hh:mm:ss').fromNow();
            let endIn = moment(endTime, 'YYYY-MM-DD hh:mm:ss').fromNow();
            let startDateTime = moment(scheduleTime, 'YYYY-MM-DD hh:mm:ss').format(' h:mm a, DD/MM/YYYY')
            post.startDateTime = startDateTime;
            if (inTime.includes('ago')) {
                post.inTime = `In progress. Ends ${endIn}`
            } else {
                post.inTime = inTime
            }
        })
        // res.json(posts)
        res.render('home', { posts, })
    })
})

router.get('/post/new', (req, res) => {
    if (!req.session.userID) {
        res.render('login', {message: 'please login first'})
        return
    }
    res.render('new_post', { message: '' })
})

router.post('/post', (req, res) => {
    if (!req.session.userID) {
        res.render('login', {message: 'please login first'})
        return
    }
    
    let postContent = req.body;
    let {title, sportType, date, month, year, hour, minutes, ap, lastTime, imageUrl, onlineUrl, description } = postContent;
    let scheduleTimeString = `${year + month + date} ${hour}:${minutes}:00 ${ap.slice(0, 1)}`
    let beginTimeStamp = moment(scheduleTimeString, 'YYYYMMDD hh:mm:ss a')
    let scheduleTime = beginTimeStamp.format();
    let finishTime = beginTimeStamp.add(Number(lastTime), 'minutes').format();
    let now = moment().format();

    const sql = `INSERT INTO posts (user_id, title, sport_type, image_url, online_url, workout_description, begin_datetime, end_datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    db.query(sql, [req.session.userID, title, sportType, imageUrl, onlineUrl, description, scheduleTime, finishTime], (err, dbRes) => {
        if (err) {
            res.render('new_post', { message: 'check your input' })
            return
        } else {
            res.render('new_post', { message: 'post successfully' })
        }
    })
})

router.get('/history', (req, res) => {
    let now = moment().format()
    const sql = `SELECT * FROM posts WHERE end_datetime <= Now() ORDER BY end_datetime DESC;`
    db.query(sql, (err, dbRes) => {
        let posts = dbRes.rows;
        dbRes.rows.forEach(post => {
            let scheduleTime = post.begin_datetime
            let endTime = post.end_datetime
            let inTime = moment(scheduleTime, 'YYYY-MM-DD hh:mm:ss').fromNow();
            let endIn = moment(endTime, 'YYYY-MM-DD hh:mm:ss').fromNow();
            post.inTime = inTime;
            let startDateTime = moment(scheduleTime, 'YYYY-MM-DD hh:mm:ss').format('DD/MM/YYYY')
            post.startDateTime = startDateTime;
        })
        res.render('history', { posts, })
    })
})

router.get('/post/:id', (req, res) => {
    const sql = `SELECT * FROM posts WHERE id = $1;`
    db.query(sql, [req.params.id], (err, dbRes) => {
        let postDetails = dbRes.rows[0];
        let scheduleTime = postDetails.begin_datetime
        let endTime = postDetails.end_datetime
        let inTime = moment(scheduleTime, 'YYYY-MM-DD hh:mm:ss').fromNow();
        let endIn = moment(endTime, 'YYYY-MM-DD hh:mm:ss').fromNow();
        let startDateTime = moment(scheduleTime, 'YYYY-MM-DD hh:mm:ss').format(' h:mm a, DD/MM/YYYY')
        postDetails.inTime = inTime
        postDetails.startDateTime = startDateTime
        res.render('post_details', { postDetails })
    })
})


module.exports = router;