import {getEnvVar} from '../utils/credsLoaderUtil';
import {BaseClient} from "./baseClient";
import supertest, { Test } from 'supertest';

export interface PublicClient extends BaseClient{
}
export function createPublicClient (): PublicClient {
  const apiBaseURL = getEnvVar('HOST') + getEnvVar('BASE_PATH');
  const request = supertest(apiBaseURL);
    return {
      sendGetRequest: (url: string): Test => {
        return request.get(url);
      },
      sendPostRequest: (url: string, data: any): Test => {
        return request.post(url).send(data);
      },
    };
}
