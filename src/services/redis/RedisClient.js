import { createClient } from 'redis';
import Config from '../Config.js';

const rdhost = Config.rhost;

const client = createClient({
        url: `redis://${rdhost}:6379`
});

export default client;