import fs from 'fs';

// import Config from '../../config/secrets.json';

const Config = JSON.parse(fs.readFileSync('../../config/secrets.json', 'utf-8'))

export default Config