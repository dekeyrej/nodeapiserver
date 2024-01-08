import { DateTime } from 'luxon';
import Data from '../../models/Data.js';
import NFLTeams from '../../models/NFLTeams.js';
import NFLIndex from '../../models/NFLIndex.js';
import Query from './Query.js';

function ClearNLFIndex() {
    for (let team in NFLTeams) {
        NFLIndex[NFLTeams[team]] = 0;
    }
};

function NFLReindex() {
    const count = Data['NFL'].length
    for (let i = 0; i < count; i++) {   
        NFLIndex[Data.NFL[i].awayabrv] = i;
        NFLIndex[Data.NFL[i].homeabrv] = i;
    }
};

export default async function Update(msgType) {
    const querystr = "SELECT rectype, recupdate, recvalid, recvalues FROM feed WHERE rectype=$1";
    const result = await Query(querystr, [msgType]);
    Data[msgType] = result.rows[0].recvalues;
    if (msgType === 'NFL') {
        ClearNLFIndex();
        NFLReindex();
    }
    const now = DateTime.now().setZone('America/New_York');
    Data.updateTime = now.toLocaleString(DateTime.TIME_WITH_SECONDS);
    Data.updateDate = now.toLocaleString(DateTime.DATE_SHORT);
    console.log(`Updated ${msgType} @ ${now.toLocaleString(DateTime.TIME_WITH_SECONDS)}`);
};