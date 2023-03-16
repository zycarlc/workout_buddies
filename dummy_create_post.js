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
function randomPickImage () {
    let i = Math.floor(Math.random() * imageArr.length);
    return imageArr[i]
} 
let imageArr = [
    "https://www.muscleandfitness.com/wp-content/uploads/2016/09/Bodybuilder-Working-Out-His-Upper-Body-With-Cable-Crossover-Exercise.jpg",
    "https://media.self.com/photos/61bcd0e05aed92fc4251b026/4:3/w_2560%2Cc_limit/GettyImages-1213234926.jpeg",
    "https://hips.hearstapps.com/hmg-prod/images/outdoor-pull-ups-royalty-free-image-1572876774.jpg",
    "https://post.healthline.com/wp-content/uploads/2020/02/man-exercising-plank-push-up-1200x628-facebook.jpg",
    "https://images.healthshots.com/healthshots/en/uploads/2021/08/19133704/Dos-and-donts-of-workouts.jpg",
    "https://fitpage.in/wp-content/uploads/2021/04/Article_Banner-1-34-1.jpg",
    "https://static01.nyt.com/images/2023/02/03/multimedia/WELL-CORE-WORKOUTS2-bqwz/WELL-CORE-WORKOUTS2-bqwz-mediumSquareAt3X.jpg",
    "https://assets.vogue.in/photos/5f4f5dfe0861b305e8609f09/2:3/w_2560%2Cc_limit/workout%2520fitness%2520tips.jpg"
]
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
// console.log(`http://via.placeholder.com/${(Math.floor(Math.random() * 2) + 1) * 160}x${randomHeight()}`)
let i = 0;
while (i < array.length) {
    let userId = 2
    // let imageUrl = 'http://via.placeholder.com/200x300'
    let type = array[i];
    let onlineUrl = 'https://www.youtube.com/watch?v=ep9lHCa7F_Q'
    let description = "who says you need to get out of your seat to get your sweat on! Todays workout will prove that you dont have to go crazy over the top to get a good workout in and start to sweat. If you have a unique set of abilities where working out seated is best for you, this workout is especially for you! I want to encourage you that YOU CAN! You can get amazing results and feel amazing about yourself by committing to your health through movement. Keep your head up and just follow me. I''m so proud of how far you have come. Sit up and lets do this together!"
    // const sql = `INSERT INTO posts (user_id, title, sport_type, image_url, online_url, workout_description, begin_datetime, end_datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
    // db.query(sql, [userId, 'For Present', type, randomPickImage(), onlineUrl, description, scheduleArr[i], finishTimeArr[i]], (err, dbRes) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(`import successful`)
    //     }
    // })
    console.log(`INSERT INTO posts (user_id, title, sport_type, image_url, online_url, workout_description, begin_datetime, end_datetime) VALUES (${userId}, 'For Present', '${type}', '${randomPickImage()}', '${onlineUrl}', '${description}', '${scheduleArr[i]}', '${finishTimeArr[i]}');`)
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

