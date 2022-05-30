console.log(divide(1, 1));

function divide(dividend: number, divisor: number): number {
    const sign1 = dividend > 0 ? 1: -1;
    const sign2 = divisor > 0 ? 1: -1;
    const resultSign = sign1 === sign2 ? 1 : -1;
    if([0, -0].includes(dividend)) return resultSign === 1 ? 0 : -0;

    let count = 0;
    let _dividend = Math.abs(dividend);
    let _divisor = Math.abs(divisor);
    while (_dividend >= _divisor) {
        let _step = 1;
        let jianshu = _divisor;
        while (jianshu + jianshu < _dividend) {
            _step+=_step;
            jianshu+=jianshu;
        }
        count+=_step;
        _dividend -= jianshu;
    }
    let result = count * resultSign;
    const max = Math.pow(2, 31) - 1;
    if(result > max){
        result = max
    }
    return result;
};
