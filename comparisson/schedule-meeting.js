const moment = require('moment')

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {

    const startTimeSplitted = startTime.split(":") || undefined
    if (!startTime || durationMinutes < 0 ||
        !startTimeSplitted || startTimeSplitted.length != 2) {
        console.log('Invalid arguments received so returning false')
        return false
    }

    return timeInRange(startTime, dayStart, dayEnd) &&
        timeInRange(moment()
            .hour(startTimeSplitted[0])
            .minutes(startTimeSplitted[1])
            .add(durationMinutes, 'minutes')
            .format("HH:mm"), dayStart, dayEnd)

}

function timeInRange(startTime, dayStart, dayEnd) {

    const dayStartHour = Number(dayStart.split(":")[0])
    const dayStartMinutes = Number(dayStart.split(":")[1])
    const dayEndHour = Number(dayEnd.split(":")[0])
    const dayEndMinutes = Number(dayEnd.split(":")[1])
    const startTimeHour = Number(startTime.split(":")[0])
    const startTimeMinutes = Number(startTime.split(":")[1])
    const start = dayStartHour * 60 + dayStartMinutes
    const end = dayEndHour * 60 + dayEndMinutes
    const meeting = startTimeHour * 60 + startTimeMinutes

    return start <= meeting && meeting <= end

}

console.log(`${scheduleMeeting("7:00", 15)} should be false`);     // false
console.log(`${scheduleMeeting("07:15", 30)} should be false`);    // false
console.log(`${scheduleMeeting("7:30", 30)} should be true`);     // true
console.log(`${scheduleMeeting("11:30", 60)} should be true`);    // true
console.log(`${scheduleMeeting("17:00", 45)} should be true`);    // true
console.log(`${scheduleMeeting("17:30", 30)} should be false`);    // false
console.log(`${scheduleMeeting("18:00", 15)} should be false`);    // false
console.log(`${scheduleMeeting("7:50", 0)} should be true`);    // false