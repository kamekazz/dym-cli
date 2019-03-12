import { combineReducers } from 'redux';
import transiton from './transiton';
import moduler from './moduler';

export default combineReducers({
    transiton:transiton,
    moduler:moduler
});