// src/server/router/context.ts
import * as trpc from '@trpc/server';
import {Session} from 'next-auth';
import {prisma} from '../db/client';

type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;
