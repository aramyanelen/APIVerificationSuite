import { createPublicClient } from './clients/publicClient';
import { createPrivateClient } from './clients/privateClient';

global.PUBLIC_CLIENT = createPublicClient();
global.PRIVATE_CLIENT = createPrivateClient();
