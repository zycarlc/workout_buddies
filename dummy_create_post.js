const db = require('./db');

let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let schedule = "2023-03-16T15:50:00"
let finishTime = "2023-03-16T16:00:00"
// const [month, day, year] = [
//     now.getMonth(),
//     now.getDate(),
//     now.getFullYear(),
// ];
// const [hour, minutes, seconds] = [
//     now.getHours(),
//     now.getMinutes(),
//     now.getSeconds(),
// ];
// let timeStamp = `${year}-${("0" + (month + 1)).slice(-2)
// }-${("0" + day).slice(-2)} ${hour}:${minutes}:${seconds}`

array.forEach(element => {
    let userId = 2
    let imageUrl = 'http://via.placeholder.com/200x300'
    let title = element;
    let onlineUrl = 'http://localhost:8080/'
    let description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iste fugiat error a vero nam dolor nulla, consequuntur maxime? Voluptate debitis rem, unde aliquid modi blanditiis nemo eos eaque deserunt?'
    const sql = `INSERT INTO posts (user_id, title, sport_type, image_url, online_url, workout_description, begin_datetime, end_datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    db.query(sql, [userId, title, 'abs', imageUrl, onlineUrl, description, schedule, finishTime], (err, dbRes) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`import successful`)
        }
    })
});

