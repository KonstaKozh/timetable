import {add, intervalToDuration, isAfter} from "date-fns";
import {TRAVEL_TIME} from "./consts";

export const convertTimeToDate= (time)=> {
    const date = new Date()
    date.setHours(time.substring(0,2), time.substring(3,5))
    return date
}

export const getArrivalTime = (time) => {
    const date = convertTimeToDate(time)
    return add(date, {minutes: TRAVEL_TIME})
}
export const isTimeAfter = (deportationTime, arrivalTime) => {
    return isAfter(deportationTime, arrivalTime)
}

export const getDurationTime = (deportationTime, returnTime) => {
    const deportation = convertTimeToDate(deportationTime)
    const arrival = getArrivalTime(returnTime)
    return intervalToDuration({start: deportation, end: arrival})
}

