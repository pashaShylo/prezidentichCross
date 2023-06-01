import _ from "lodash";
import log from "./log";
export default function tabY(arrX: any): any {
    const res = arrX.map((elem: any) => {
        return Number(Math.cos(elem).toFixed(2));
    });
    log(res);
    return res;
}
