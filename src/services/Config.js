import fs from 'fs';

// rassafrassing fs.readFileSync uses paths relative to project root?!?!?!
const Config = JSON.parse(fs.readFileSync('./config/secrets.json', 'utf-8'));

export default Config