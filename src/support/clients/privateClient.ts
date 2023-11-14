import { BaseClient } from './baseClient';
import { Test } from 'supertest';

export interface PrivateClient extends BaseClient{

}

export function createPrivateClient (): PrivateClient {
  return {
    sendGetRequest (url: string): Test {
      // @ts-expect-error
      return Promise.resolve(undefined);
    },
    sendPostRequest (url: string, data: object): Test {
      // @ts-expect-error
      return Promise.resolve(undefined);
    },
    sendDeleteRequest (url: string): Test {
    // @ts-expect-error
      return Promise.resolve(undefined);
    },
    sendPutRequest (url: string, data: object): Test {
    // @ts-expect-error
      return Promise.resolve(undefined);
    }
  };
}
