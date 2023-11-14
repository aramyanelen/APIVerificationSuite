/* eslint-disable no-var */

import { PrivateClient } from '../support/clients/privateClient';
import { PublicClient } from '../support/clients/publicClient';

declare global {
    namespace globalThis {
        var PUBLIC_CLIENT: PublicClient;
        var PRIVATE_CLIENT: PrivateClient;
    }
}
