const messages = [
    'AQI', 'Calendar', 'Events', 'GitHub', 
    'MLB', 'Moon', 'NFL', 'Weather'
];

export function includes(message) {
    return messages.includes(message);
}

export default messages;