import environment from './environment.js';
import nfl from './nfl.js';
import mlb from './mlb.js';
import webcontrol from './webcontrol.js';
 
const mountRoutes = (app) => {
  app.use('/environment', environment);
  app.use('/nfl', nfl);
  app.use('/mlb', mlb);
  app.use('/webcontrol', webcontrol);
  // etc..
}
 
export default mountRoutes;