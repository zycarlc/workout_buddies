
let now = new Date();
let schedule = new Date(2023, 03, 16, 06, 20, 0)

let dateString = "1995-12-17T03:24:00";

const [month, day, year] = [
    schedule.getMonth(),
    schedule.getDate(),
    schedule.getFullYear(),
];
const [hour, minutes, seconds] = [
    schedule.getHours(),
    schedule.getMinutes(),
    schedule.getSeconds(),
];

let timeStamp = `${year}-${("0" + (month + 1)).slice(-2)
}-${("0" + day).slice(-2)} ${("0" + hour).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`

console.log(schedule)
console.log(timeStamp)

//TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
//new Date(year, monthIndex, day, hours, minutes, seconds)

// 2023-03-16 06:20:00