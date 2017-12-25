import * as types from '../constants/ActionTypes';

export function getAgree() {
    return {
        type:types.GET_AGREEMENT,
        content: '协议列表'
    }
}