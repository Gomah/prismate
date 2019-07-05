import { objectType, stringArg } from '@prisma/nexus/dist';
import { User } from '@generated/photon';
import { Context } from '../../../types';

export const Mutation = objectType({
  name: 'Mutation',
  definition(t): void {
    t.field('signup', {
      type: 'User',
      args: {
        email: stringArg({ required: true }),
        username: stringArg({ required: true }),
      },
      resolve: (parent, { email, username }, ctx: Context): Promise<User> => {
        return ctx.photon.users.create({
          data: {
            email,
            username,
          },
        });
      },
    });
  },
});
