function solution(N) {
    // N is positive (1..1000000000)
    if (!(N >= 1 && N <= 1000000000)) return 0;

    let highestPower = 1;
    let result = 2;

    for ( let num = 1; num <= N; num += 1) {
        console.log('num: ', num);
        result = Math.pow(2, num);
        console.log('result: ', result);
        if (result <= N) {
            if (N % result === 0) {
                highestPower = num;
                console.log('HP: ', highestPower);
            }
        } else break;
    }

    return highestPower;
}

const result = solution(24);
console.log('Answer: ', result);
