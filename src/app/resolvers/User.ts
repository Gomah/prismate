import { objectType } from '@prisma/nexus/dist';

export const User = objectType({
  name: 'User',
  definition(t): void {
    t.model.id();
    t.model.email();
    t.model.username();
  },
});
