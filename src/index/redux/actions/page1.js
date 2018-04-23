//卸载页面恢复默认
export const PAGE1_INIT = 'page1/init';

export const PAGE1_GETLIST = 'page1/getList';
export const PAGE1_GETDATA = 'page1/getData';
export const PAGE1_REMOVEDATA = 'page1/removeData';
export const PAGE1_GETXINTIAODATA = 'page1/getXintiaoData';
export const PAGE1_SAVEXINTIAODATA = 'page1/saveXintiaoData';


export function unmount() {
  return {type: PAGE1_INIT};
}

// export function getList(data = {}) {
//   return {type: PAGE1_GETLIST, data};
// }

export function getData(data = {}) {
    return {type: PAGE1_GETDATA, data};
}

export function removeData(data = {}) {
    return {type: PAGE1_REMOVEDATA, data};
}

export function getXintiaoData(data = {}) {
    return {type: PAGE1_GETXINTIAODATA, data};
}
