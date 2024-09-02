function ClockTime(){
    let time = new Date();

    return <p className="lead">This is the current time: <b>
        {time.toLocaleTimeString()}-
        {time.toLocaleDateString()}</b></p>
}

export default ClockTime;