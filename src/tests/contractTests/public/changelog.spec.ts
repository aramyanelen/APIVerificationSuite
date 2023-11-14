import { z } from 'zod';
import { ChangeLogSchema } from '../../../schemas/changelog.api';

describe('/changelog', () => {
  it('should return 200 OK for get request', async () => {
    const response = await PUBLIC_CLIENT.sendGetRequest('/changelog');
    type ChangeLog = z.infer<typeof ChangeLogSchema>
    const changeLog: ChangeLog = ChangeLogSchema.parse(response.body);
    expect(response.status).toBe(200);
    expect(changeLog).not.toBeNull();
  });
});
