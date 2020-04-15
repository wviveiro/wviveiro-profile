import {useState, useEffect} from 'react';
import { differenceInMilliseconds } from 'date-fns';


const getDiff = (milliseconds) => {
    if (milliseconds < 0) milliseconds *= -1;

    let calcYear = (1000 * 60 * 60 * 24 * 365);
    let years = Math.floor(milliseconds / calcYear);
    milliseconds -= years * calcYear;

    let calcMonth = (1000 * 60 * 60 * 24 * 30.417);
    let months = Math.floor(milliseconds / calcMonth);
    milliseconds -= months * calcMonth;

    let calcDays = (1000 * 60 * 60 * 24);
    let days = Math.floor(milliseconds / calcDays);
    milliseconds -= days * calcDays;

    let calcHours = (1000 * 60 * 60);
    let hours = Math.floor(milliseconds / calcHours);
    milliseconds -= hours * calcHours;

    let calcMinutes = (1000 * 60);
    let minutes = Math.floor(milliseconds / calcMinutes);
    milliseconds -= minutes * calcMinutes;

    let calcSeconds = (1000);
    let seconds = Math.floor(milliseconds / calcSeconds);
    milliseconds -= seconds * calcSeconds;


    return {years, months, days, hours, minutes, seconds};
}

export const useDateDiffState = (props) => {
    const [diff, setDiff] = useState();

    useEffect(() => {
        const dt = new Date(props.date);
        const _d = differenceInMilliseconds(new Date(), dt);

        setDiff(getDiff(_d));
    }, [props.date]);

    return {
        diff
    }
}