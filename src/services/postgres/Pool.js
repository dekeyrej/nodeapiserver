import pg from 'pg';
import Config from '../Config.js';

// console.log(Config.db_host, Config.db_port, Config.dbuser, Config.dbpass);

const Pool = new pg.Pool({
    host: Config.db_host,
    port: Config.db_port,
    user: Config.dbuser,
    password: Config.dbpass,
    database: Config.dbname,
});

export default Pool