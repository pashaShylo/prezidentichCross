import _ from "lodash";
import log from "./log";

export default function tabX(min: number, max: number, step: number): any {
    const res = _.range(min, max + step, step).map((elem: number) => {
        return Number(elem.toFixed(2));
    });
    log(res);
    return res;
}
