const db = require('./db');

let array = ['lifting', 'yoga', 'workout', 'squat', 'dancing', 'plank']
let now = new Date();
console.log(now.getTime())
array.forEach(element => {
    let userId = 1
    let imageUrl = 'http://via.placeholder.com/200x300'
    let title = element;
    let onlineUrl = 'zoom.com/testing_link'
    const sql = `INSERT INTO posts (user_id, title, image_url, online_url, init_time) VALUES ('${userId}', '${title}', '${imageUrl}', '${onlineUrl}', '${now.getTime()}');`
    console.log(sql)
    db.query(sql, (err, dbRes) => {

        console.log(err)
    })
});


