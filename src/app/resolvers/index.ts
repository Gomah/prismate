import Photon from '@generated/photon';
import { nexusPrismaPlugin } from '@generated/nexus-prisma';
import { Query } from './Query';
import { Mutation } from './Mutation';
import { User } from './User';
import { Context } from '../../types';

const nexusPrisma = nexusPrismaPlugin({
  photon: (ctx: Context): Photon => ctx.photon,
});

export { Query, Mutation, User, nexusPrisma };
