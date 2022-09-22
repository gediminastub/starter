import * as trpcNext from '@trpc/server/dist/adapters/next';
import {getServerAuthSession} from '../common/get-server-auth-session';
import {createContextInner} from './context';

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (
    opts: trpcNext.CreateNextContextOptions,
) => {
  const {req, res} = opts;

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({req, res});

  return await createContextInner({
    session,
  });
};
