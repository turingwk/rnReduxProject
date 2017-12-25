import * as types from '../constants/ActionTypes';

let user = {
    'name': 'admin',
    'age': '24'
}

export function doLogin() {
    return function (dispatch) {
        dispatch(isLogining());
        return fetch('https://github.com/')
        .then((res)=>{
            dispatch(loginSuccess(true, user));
        }).catch((e)=>{
            dispatch(loginSuccess(false, null));
        });
    }
}

function isLogining(){
    return {
        type:types.LOGIN_IN_DOING
    }
}

export function loginSuccess(isSuccess, user){
    return {
        type: types.LONGIN_IN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}