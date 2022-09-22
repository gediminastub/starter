import {describe} from '@jest/globals';
import {createContextInner} from '../context';
import {appRouter} from './index';

describe('rpc example test', () => {
  it('should do the trick', async () => {
    const ctx = await createContextInner({session: null});
    const caller = appRouter.createCaller(ctx);

    const test = await caller.user.getUsers();
    expect(test).not.toBeNull();
    expect(test.length > 0).toBe(true);
  });
});
