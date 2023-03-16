const db = require('./db');

let array = [
    'Full Body', 
    'Abs', 
    'Arms', 
    'Shoulders', 
    'Back', 
    'Legs', 
    'Chest', 
    'Test1', 
    'Test2',
    'Full Body', 
    'Abs', 
    'Arms', 
    'Shoulders', 
    'Back', 
    'Legs', 
    'Chest', 
    'Test1', 
    'Test2'
]


let scheduleArr = [
    "2023-03-16T9:30:00",
    "2023-03-16T10:30:00",
    "2023-03-16T11:30:00",
    "2023-03-16T12:30:00",
    "2023-03-16T13:30:00",
    "2023-03-16T14:30:00",
    "2023-03-16T15:30:00",
    "2023-03-16T16:30:00",
    "2023-03-16T17:30:00",
    "2023-03-17T9:30:00",
    "2023-03-17T10:30:00",
    "2023-03-17T11:30:00",
    "2023-03-17T12:30:00",
    "2023-03-17T13:30:00",
    "2023-03-17T14:30:00",
    "2023-03-17T15:30:00",
    "2023-03-17T16:30:00",
    "2023-03-17T17:30:00"
]

let finishTimeArr = [
    "2023-03-16T10:30:00",
    "2023-03-16T11:30:00",
    "2023-03-16T12:30:00",
    "2023-03-16T13:30:00",
    "2023-03-16T14:30:00",
    "2023-03-16T15:30:00",
    "2023-03-16T16:30:00",
    "2023-03-16T17:30:00",
    "2023-03-16T18:00:00",
    "2023-03-17T10:30:00",
    "2023-03-17T11:30:00",
    "2023-03-17T12:30:00",
    "2023-03-17T13:30:00",
    "2023-03-17T14:30:00",
    "2023-03-17T15:30:00",
    "2023-03-17T16:30:00",
    "2023-03-17T17:30:00",
    "2023-03-17T18:00:00",
]
// console.log(array.length)
// console.log(scheduleArr.length)
// console.log(finishTimeArr.length)
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
let i = 0;
function randomHeight () {
    let pick = Math.floor(Math.random() * 2) + 1 ;
    if (pick === 1 ) {
        return 200
    } else if (pick === 2) {
        return 260
    } else {
        return 360
    }
} 


// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)

while (i < array.length) {
    let userId = 2
    let imageUrl = 'http://via.placeholder.com/200x300'
    let type = array[i];
    let onlineUrl = 'http://localhost:8080/'
    let description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iste fugiat error a vero nam dolor nulla, consequuntur maxime? Voluptate debitis rem, unde aliquid modi blanditiis nemo eos eaque deserunt?'
    const sql = `INSERT INTO posts (user_id, title, sport_type, image_url, online_url, workout_description, begin_datetime, end_datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    db.query(sql, [userId, 'For Present', type, `http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`, onlineUrl, description, scheduleArr[i], finishTimeArr[i]], (err, dbRes) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`import successful`)
        }
    })
    i++;
}
// array.forEach(element => {
//     let userId = 2
//     let imageUrl = 'http://via.placeholder.com/200x300'
//     let title = element;
//     let onlineUrl = 'http://localhost:8080/'
//     let description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iste fugiat error a vero nam dolor nulla, consequuntur maxime? Voluptate debitis rem, unde aliquid modi blanditiis nemo eos eaque deserunt?'
//     const sql = `INSERT INTO posts (user_id, title, sport_type, image_url, online_url, workout_description, begin_datetime, end_datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
//     db.query(sql, [userId, title, 'abs', imageUrl, onlineUrl, description, schedule, finishTime], (err, dbRes) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(`import successful`)
//         }
//     })
// });

