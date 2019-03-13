import { combineReducers } from 'redux';
import transiton from './transiton';
import moduler from './moduler';
import message from './falchmessages';
import authReducer from './authReducer';

export default combineReducers({
    transiton:transiton,
    moduler:moduler,
    message:message,
    authReducer:authReducer
});