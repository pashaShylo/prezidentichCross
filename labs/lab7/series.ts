import log from "./log";
function factorial(n: number): number {
    return n != 1 ? n * factorial(n - 1) : 1;
}

function getSumm(x: number): number {
    let a = (-1 * Math.pow(x, 2 * 1)) / factorial(2 * 1);
    let n = 2;
    let S = 1 - Math.pow(x, 2 * 1) / factorial(2 * 1);
    while (Math.abs(a) > 0.001) {
        a = (Math.pow(-1, n) * Math.pow(x, 2 * n)) / factorial(2 * n);
        S += a;
        n++;
    }
    return S;
}
export default function series(arrX: any) {
    const res = arrX.map((elem: any) => {
        return Number(getSumm(elem).toFixed(2));
    });
    log(res);
    return res;
}
