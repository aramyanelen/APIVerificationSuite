import { config } from 'dotenv';

config();

export function getEnvVar (key: string, defaultValue: string = ''): string {
  return process.env[key] || defaultValue;
}
