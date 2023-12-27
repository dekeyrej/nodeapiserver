import Messages from '../../models/Messages.js';
import Update from '../postgres/Update.js';

export default async function UListener(message, channel) {
    if (Messages.includes(message)) {
        console.log(`Received Message:  ${message} on channel: ${channel}`);
        await Update(message, false);
    } else {
        console.log(`Received UNHANDLED Message: ${message} on channel: ${channel}`);
    }
};