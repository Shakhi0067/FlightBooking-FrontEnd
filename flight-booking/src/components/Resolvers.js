const timeResolver = (data) => {
    const dateObj = new Date(data);
    return(dateObj.toTimeString().split(" ")[0].slice(0,-3));
}

const durationResolver = (data) => {
    var duration = data.slice(2);
    var index = duration.indexOf('H')+1;
    duration = duration.slice(0,index)+" "+ duration.slice(index);
    return(duration);
}

const dateResolver = (data) => {
    var date = new Date(data);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return(dt + '-' + month + '-' + year );
}

export {timeResolver, dateResolver, durationResolver};