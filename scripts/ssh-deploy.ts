import { createConnection, createLongLivedTokenAuth } from 'home-assistant-js-websocket';
import child_process from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.SSH_HOST || !process.env.SSH_USER) {
  console.error('SSH_HOST or SSH_USER is not set');
  process.exit(1);
}

if (!process.env.SSH_HA_PATH) {
  console.error('SSH_HA_PATH is not set');
  process.exit(1);
}

// Copy dist/go-hass-cards.js to SSH_HA_PATH
child_process.execSync(
  `scp ./dist/go-hass-cards.js ${process.env.SSH_USER}@${process.env.SSH_HOST}:${process.env.SSH_HA_PATH}/config/www/`,
);

if (!process.env.HA_TOKEN || !process.env.RESOURCE_ID) {
  console.error('HA_TOKEN or RESOURCE_ID is not set');
  process.exit(0);
}

const auth = createLongLivedTokenAuth(`http://${process.env.SSH_HOST}:8123`, process.env.HA_TOKEN);

const connection = await createConnection({ auth });
const res = await connection.sendMessagePromise({
  id: 43,
  type: 'lovelace/resources/update',
  url: `/local/go-hass-cards.js?version=${Date.now()}`,
  resource_id: process.env.RESOURCE_ID,
});

console.log('Resource updated...', res);
process.exit(0);
