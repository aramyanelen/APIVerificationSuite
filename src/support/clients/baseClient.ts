import { Test } from 'supertest';

export interface BaseClient {
    sendGetRequest: (url: string) => Test;
    sendPostRequest: (url: string, data: object) => Test;
    sendPutRequest: (url: string, data: object) => Test;
    sendDeleteRequest: (url: string) => Test;
}
