//卸载页面恢复默认
import {PAGE1_GETDATA} from "./page1";

export const PAGE2_INIT = 'page2/init';
export const PAGE2_INCREMENT_ASYNC = 'page2/increment_async';
export const PAGE2_INCREMEN = 'page2/increment';
export const PAGE2_LESSEN = 'PAGE2/lessen';




export function unmount() {
  return {type: PAGE2_INIT};
}

export function increment_async(data = {}) {
    return {type: PAGE2_INCREMENT_ASYNC, data};
}

export function lessen(data = {}) {
    return {type: PAGE2_LESSEN, data};
}