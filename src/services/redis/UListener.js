import { includes } from '../../models/Messages.js';
import Update from '../postgres/Update.js';
import { broadcastToWebDisplays } from '../../routes/sse.js';

export default async function UListener(message, channel) {
    if (includes(message)) {
        console.log(`Received Message:  ${message} on channel: ${channel}`);
        await Update(message, false);

        if (channel === 'update') {
        // Message *is* the app identifier
        broadcastToWebDisplays({
            timestamp: Date.now(),
            app: message,
            message: `Update available for ${message}`
        });
        }
    } else {
        console.log(`Received UNHANDLED Message: ${message} on channel: ${channel}`);
    }
};