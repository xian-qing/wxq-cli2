//卸载页面恢复默认
export const GLOBAL_INIT = 'glabal/init';

export const GLABAL_SAVEUSERINFO = 'glabal/saveUserInfo';


export function saveUserInfo(data = {}) {
    console.log(data)
    return {type: GLABAL_SAVEUSERINFO, data};
}
