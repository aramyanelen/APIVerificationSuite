import { getEnvVar } from '../utils/credsLoaderUtil';
import { BaseClient } from './baseClient';
import supertest, { Test, SuperTest } from 'supertest';

export interface PublicClient extends BaseClient {
}

export function createPublicClient (): PublicClient {
  const apiBaseURL = getEnvVar('HOST') + getEnvVar('BASE_PATH');
  const request: SuperTest<Test> = supertest(apiBaseURL);

  const createRequest = (method: 'get' | 'post' | 'put' | 'delete') =>
    (url: string, data?: object, params?: object): Test => {
      const req = request[method](url);
      if (params) {
        req.query(params);
      }
      if (data) {
        req.send(data);
      }
      return req;
    };

  return {
    sendGetRequest: createRequest('get'),
    sendPostRequest: createRequest('post'),
    sendPutRequest: createRequest('put'),
    sendDeleteRequest: createRequest('delete')
  };
}
