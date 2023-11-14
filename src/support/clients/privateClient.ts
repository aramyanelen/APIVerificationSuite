import {BaseClient} from "./baseClient";
import {Test} from "supertest";

export interface PrivateClient extends BaseClient{

}

export function createPrivateClient (): PrivateClient {
  return {
    sendGetRequest(url: string): Test {
      // @ts-ignore
      return Promise.resolve(undefined);
    }, sendPostRequest(url: string, data: any): Test {
      // @ts-ignore
      return Promise.resolve(undefined);
    }

  };
}
