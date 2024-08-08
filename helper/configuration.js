// Get the environment name from the environment variables
export const envName = process.env.ENV_NAME;

// Set the protocol based on the environment
export const protocol = envName === 'local' ? 'http' : 'https';

// Set the base DNS based on the environment
let baseDns;
switch (envName) {
  case 'local':
    baseDns = 'localhost:3000';
    break;
  case 'test':
    baseDns = process.env.TEST_ENV_DNS;
    break;
  case 'pre-prod':
    baseDns = process.env.PREPROD_ENV_DNS;
    break;
  case 'prod':
    baseDns = process.env.PROD_ENV_DNS;
    break;
  default:
    throw new Error('Unknown environment name');
}

// Construct the base URL
export const baseUrl = `${protocol}://${baseDns}`;