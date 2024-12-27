import NFLTeams from './NFLTeams.js';

let NFLIndex = {};

NFLTeams.forEach((team, index) => {
    NFLIndex[team] = index;
});

export default NFLIndex;