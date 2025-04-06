import dotenv from 'dotenv';

dotenv.config();

const Config = {
    db_host: process.env.db_host,
    db_port: process.env.db_port,
    dbuser:  process.env.dbuser,
    dbpass:  process.env.dbpass,
    rhost:   process.env.rhost,
    rpass:   process.env.rpass,
};

export default Config;