import { User } from '@generated/photon';
import { queryType, stringArg } from '@prisma/nexus/dist';

export const Query = queryType({
  definition(t): void {
    t.field('user', {
      type: 'User',
      nullable: true,
      args: { username: stringArg() },
      resolve: (parent, { username }, ctx): Promise<User | null> => {
        return ctx.photon.users.findOne({
          where: {
            username,
          },
        });
      },
    });
  },
});
