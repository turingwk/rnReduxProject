import * as types from '../constants/ActionTypes';

const initalState = {
    content: '内容为空',
}

export default function getAgreement(state = initalState, action) {
    switch(action.type) {
        case types.GET_AGREEMENT:
        return Object.assign({}, state, {
            content: action.content,
        });
        default:
        return state;
    }
}