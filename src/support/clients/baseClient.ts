import {Test} from "supertest";

export interface BaseClient {
    sendGetRequest: (url: string) => Test;
    sendPostRequest: (url: string, data: any) => Test;
}
