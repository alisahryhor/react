import React, {useState, useEffect} from "react";

export default function WatchFunc(props) {
    const {date} = props;
    const [stateDate, setStateDate] = useState(date);
    const timerClock = setInterval( () => setStateDate(new Date()));

    useEffect(() => {
        return () => {
            clearInterval(timerClock)
        }
    })

    return (
        <div>
        <h1>Время {stateDate.toLocaleString()}</h1>
        </div>
    )
}



