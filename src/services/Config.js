import dotenv from 'dotenv';

dotenv.config();

// console.log(process.env);

const Config = {
    timezone: process.env.timezone,
    db_host: process.env.db_host,
    db_port: process.env.db_port,
    dbuser:  process.env.dbuser,
    dbpass:  process.env.dbpass,
    dbname:  process.env.dbname,
    dbtable: process.env.dbtable,
    rhost:   process.env.rhost,
    rpass:   process.env.rpass,
};

export default Config;