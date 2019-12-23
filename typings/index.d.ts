/// <reference path="./types/index.d.ts" />

interface IAppOption {
    globalData: {
        userInfo?: WechatMiniprogram.UserInfo;
    };
    userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}
interface ResponseData {
    data?: [];
    result?: AnyObject | string | undefined;
    errMsg?: string
}
interface Databaseres{

}
interface IAPISuccessParam {
    errMsg: string
}
interface CallFunctionResult extends IAPISuccessParam {
    result: AnyObject | string | undefined
}
