import pg from 'pg';

const dbhost = process.env.DBHOST;
const dbuser = process.env.DBUSER;
const dbpass = process.env.DBPASS;

const Pool = new pg.Pool({
    host: dbhost,
    port: 5432,
    user: dbuser,
    password: dbpass,
    database: 'matrix',
});

export default Pool