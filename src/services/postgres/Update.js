import { DateTime } from 'luxon';
import Data from '../../models/Data.js';
import Query from './Query.js';

export default async function Update(msgType) {
    const querystr = "SELECT rectype, recupdate, recvalid, recvalues FROM feed WHERE rectype=$1";
    const result = await Query(querystr, [msgType]);
    Data[msgType] = result.rows[0].recvalues;
    const now = DateTime.now().setZone('America/New_York');
    Data.updateTime = now.toLocaleString(DateTime.TIME_WITH_SECONDS);
    Data.updateDate = now.toLocaleString(DateTime.DATE_SHORT);
    console.log(`Updated ${msgType} @ ${now.toLocaleString(DateTime.TIME_WITH_SECONDS)}`);
};