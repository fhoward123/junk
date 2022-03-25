// entryTime and exitTime are strings
function solution(E, L) {
    const entryTime = E;
    const exitTime = L;
    const entryFee = 2;
    const costOfFirstHr = 3;
    const costOfMoreHrs = 4;
    const firstHour = 1;
    const entryHourMinutes = entryTime.split(':');
    const [entryHour, entryMinutes] = entryHourMinutes;
    console.log('EH: ', entryHour);
    console.log('EM: ', entryMinutes);

    const exitHourMinutes = exitTime.split(':');
    const [exitHour, exitMinutes] = exitHourMinutes;
    console.log('EH: ', exitHour);
    console.log('EM: ', exitMinutes);

    const totalHours = exitHour - entryHour;
    console.log('TTL Hours: ', totalHours);

    const totalMinutes = exitMinutes - entryMinutes;
    console.log('TTL Mins: ', totalMinutes);

    let totalBill = entryFee;

    totalBill += (costOfFirstHr + (totalHours - firstHour) * costOfMoreHrs);

    console.log('TTL Bill: ', totalBill);

    if (totalMinutes > 0) {
        totalBill += 4;
    }
    console.log('TTL Bill: ', totalBill);

    return totalBill;
}

solution('09:42', '11:42');