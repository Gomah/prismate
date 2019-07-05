import { objectType } from '@prisma/nexus/dist';

export const User = objectType({
  name: 'User',
  definition(t): void {
    t.id('id');
    t.string('email');
    t.string('username');
  },
});
