const db = require('./db');

let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let now = new Date();
let schedule = new Date()
const [month, day, year] = [
    now.getMonth(),
    now.getDate(),
    now.getFullYear(),
];
const [hour, minutes, seconds] = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
];
let timeStamp = `${year}-${("0" + (month + 1)).slice(-2)
}-${("0" + day).slice(-2)} ${hour}:${minutes}:${seconds}`

array.forEach(element => {
    let userId = 1
    let imageUrl = 'http://via.placeholder.com/200x300'
    let title = element;
    let sql = `INSERT INTO posts (
            user_id, 
            title, 
            sport_type, 
            image_url, 
            online_url, 
            workout_description, 
            init_second, 
            begin_datetime, 
            end_datetime
        ) VALUES (
            ${userId}, 
            '${title}', 
            'abs', 
            '${imageUrl}', 
            'https://www.youtube.com/watch?v=NCsVnmmNA3E&list=RDoYw4uH80gcw&index=27', 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iste fugiat error a vero nam dolor nulla, consequuntur maxime? Voluptate debitis rem, unde aliquid modi blanditiis nemo eos eaque deserunt?', 
            '${timeStamp}', 
            '2023-03-16 06:20:00', 
            '2023-03-16 06:30:00'
        )`
    console.log(sql)
    db.query(sql, (err, dbRes) => {

        console.log(err)
    })
});

