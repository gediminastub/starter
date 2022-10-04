import {t} from '../trpc';
import {z} from 'zod';

export const exampleRouter = t.router({
  hello: t.procedure
      .input(z.object({text: z.string().nullish()}).nullish())
      .query(({input}) => {
        return {
          greeting: `Hello ${input?.text ?? 'world'}`,
        };
      }),
  getUsers: t.procedure
      .query(({ctx}) => {
        return ctx.prisma.user.findMany();
      }),
  getUser: t.procedure
      .input(z.object({email: z.string()}))
      .query(({input, ctx}) => {
        return ctx.prisma.user.findFirst({where: {email: {equals: input.email}}});
      }),
});
