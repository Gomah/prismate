import Photon from '@generated/photon';

const photon = new Photon();

async function main() {
  const users = await Promise.all([
    photon.users.create({
      data: {
        email: 'admin@gomah.fr',
        username: 'admin',
      },
    }),
    photon.users.create({
      data: {
        email: 'hi@gomah.fr',
        username: 'Gomah',
      },
    }),
  ]);
  console.log({ users });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
