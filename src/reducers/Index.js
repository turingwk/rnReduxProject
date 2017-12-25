import {combineReducers} from 'redux';
import loginIn from './Login';
import getAgreement from './Agreement';

const rootReducer = combineReducers({
    loginIn: loginIn,
    getAgreement: getAgreement
});

export default rootReducer;