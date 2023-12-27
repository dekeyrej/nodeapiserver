import pg from 'pg';
import Config from '../Config.js';

const dbhost = Config.db_host;
const dbuser = Config.dbuser;
const dbpass = Config.dbpass;

const Pool = new pg.Pool({
    host: dbhost,
    port: 5432,
    user: dbuser,
    password: dbpass,
    database: 'matrix',
});

export default Pool