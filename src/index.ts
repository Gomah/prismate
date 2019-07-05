import Photon from '@generated/photon';
import { makeSchema } from '@prisma/nexus';
import { ApolloServer } from 'apollo-server';
import { join } from 'path';
import * as dataModelInfo from './app/resolvers';

const photon = new Photon();

const schema = makeSchema({
  types: dataModelInfo,
  outputs: {
    typegen: join(__dirname, '../generated/nexus-typegen.ts'),
    schema: join(__dirname, '/schema.graphql'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon',
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
});

const server = new ApolloServer({
  schema,
  context: { photon },
});

server.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000`));
