import Messages from './Messages.js';
import Update from '../services/postgres/Update.js';
import Subscribe from '../services/redis/Subscribe.js';
import UListener from '../services/redis/UListener.js';

Messages.forEach(Update);
await Subscribe('update', UListener);

let Data = {
    updateTime: null,
    updateDate: null,
    AQI: {},
    Moon: {},
    Weather: {},
    MLB: [],
    NFL: [],
    Calendar: [],
    Events: [],
    GitHub: {},
};

export default Data;