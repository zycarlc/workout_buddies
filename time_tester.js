
const moment = require('moment');



// const [month, day, year] = [
//     schedule.getMonth(),
//     schedule.getDate(),
//     schedule.getFullYear(),
// ];
// const [hour, minutes, seconds] = [
//     schedule.getHours(),
//     schedule.getMinutes(),
//     schedule.getSeconds(),
// ];

// let timeStamp = `${year}-${("0" + (month + 1)).slice(-2)
// }-${("0" + day).slice(-2)} ${("0" + hour).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`

function dateTime (dateObject) {
    const [month, day, year] = [
        dateObject.getMonth(),
        dateObject.getDate(),
        dateObject.getFullYear(),
    ];
    const [hour, minutes, seconds] = [
        dateObject.getHours(),
        dateObject.getMinutes(),
        dateObject.getSeconds(),
    ];

    return `${year}-${("0" + (month + 1)).slice(-2)}-${("0" + day).slice(-2)} ${("0" + hour).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
}

let scheduleDateString = "2023-03-16T10:50:00";
// let schedule = new Date(scheduleDateString);

// let now = new Date();


// console.log(dateTime(schedule))

// console.log(dateTime(now))

console.log(moment(scheduleDateString).add(30, 'minutes').toString())

console.log(moment('2023-03-16 15:50:00', 'YYYY-MM-DD hh:mm:ss').fromNow());

//TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
//new Date(year, monthIndex, day, hours, minutes, seconds)

// 2023-03-16 06:20:00