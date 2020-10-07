function timeConversion(s) {
    let hour = parseInt(s.substring(0, 2), 10);
    if (s[8] === 'P') {
        if (hour !== 12) {
            hour += 12;
        }
    } else {
        if (hour === 12) {
            hour = 0;
        }
    }
    return String(hour).padStart(2, '0') + ':' + s.substring(3, 8);
}
