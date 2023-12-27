import client from './RedisClient.js'

const subscriber = client.duplicate();
subscriber.on('error', err => console.log('Redis Subscribe (Client) Error', err));
await subscriber.connect();

export default async function Subscribe(channel, callback) {
    await subscriber.subscribe(channel, callback);
}