import { DateTime } from 'luxon';
import Data from '../../models/Data.js';
import NFLTeams from '../../models/NFLTeams.js';
import NFLIndex from '../../models/NFLIndex.js';
import MLBTeams from '../../models/MLBTeams.js';
import MLBIndex from '../../models/MLBIndex.js';
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

function ClearMLBIndex() {
    for (let team in MLBTeams) {
        MLBIndex[MLBTeams[team]] = 0;
    }
}

function MLBReindex() {
    const count = Data['MLB'].length
    for (let i = 0; i < count; i++) {   
        // console.log(Data.MLB[i].id, Data.MLB[i].awayAbbreviation, Data.MLB[i].homeAbbreviation);
        MLBIndex[Data.MLB[i].awayAbbreviation] = Data.MLB[i].id;
        MLBIndex[Data.MLB[i].homeAbbreviation] = Data.MLB[i].id;
    }
    // console.log(`Updated MLBIndex:`);
    // for (let team in MLBTeams) {
    //     console.log(MLBTeams[team], MLBIndex[MLBTeams[team]]);
    // }
    
}

export default async function Update(msgType) {
    const querystr = "SELECT rectype, recupdate, recvalid, recvalues FROM feed WHERE rectype=$1";
    const result = await Query(querystr, [msgType]);
    Data[msgType] = result.rows[0].recvalues;
    if (msgType === 'NFL') {
        ClearNLFIndex();
        NFLReindex();
    }  else if (msgType === 'MLB') {
        ClearMLBIndex();
        MLBReindex();
    }
    const now = DateTime.now().setZone('America/New_York');
    Data.updateTime = now.toLocaleString(DateTime.TIME_WITH_SECONDS);
    Data.updateDate = now.toLocaleString(DateTime.DATE_SHORT);
    console.log(`Updated ${msgType} @ ${now.toLocaleString(DateTime.TIME_WITH_SECONDS)}`);
};