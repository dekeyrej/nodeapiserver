import { createClient } from 'redis';

const rdhost = process.env.RDHOST;

const client = createClient({
        url: `redis://${rdhost}:6379`
});

export default client;