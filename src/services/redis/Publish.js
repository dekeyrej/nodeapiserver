import client from './RedisClient.js'

const sender = client.duplicate();
sender.on('error', err => console.log('Redis Publish (Client) Error', err));

export default async function Publish(channel, message) {
    await sender.connect();
    await sender.publish(channel, message);
    await sender.disconnect();
}