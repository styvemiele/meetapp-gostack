const date = new Date();

const subscribers = [...Array(51).keys()].filter(n => n !== 0);

const description =
  'Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React, Spark AR ou Games em HTML5.\n';

const location = 'Av. Paulista, 159';

const meetapps = [
  {
    id: 1,
    title: 'React - Community Challenge',
    description,
    location,
    date: '2019-11-28T18:00:00.000Z',
    owner_id: 1,
    banner_id: 1,
    updated_at: date,
    created_at: date,
    canceled_at: null,
    subscribers,
  },
  {
    id: 2,
    title: 'JS summit 2019',
    description,
    location,
    date: '2019-11-30T18:00:00.000Z',
    owner_id: 43,
    banner_id: 2,
    updated_at: date,
    created_at: date,
    canceled_at: null,
    subscribers,
  },
  {
    id: 3,
    title: 'React - Frontend Week',
    description,
    location,
    date: '2019-12-31T18:00:00.000Z',
    owner_id: 27,
    banner_id: 3,
    updated_at: date,
    created_at: date,
    canceled_at: null,
    subscribers,
  },
  {
    id: 4,
    title: 'Rocketseat summit 2019',
    description,
    location,
    date: '2019-11-01T18:00:00.000Z',
    owner_id: 5,
    banner_id: 4,
    updated_at: date,
    created_at: date,
    canceled_at: null,
    subscribers,
  },
  {
    id: 5,
    title: 'Frontend - Especial FrontendWeek!',
    description,
    location,
    date: '2019-11-11T18:00:00.000Z',
    owner_id: 7,
    banner_id: 5,
    updated_at: date,
    created_at: date,
    canceled_at: null,
    subscribers,
  },
];

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('meetapps', meetapps, {});
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "meetapps_id_seq" RESTART WITH ${meetapps.length + 1}`
    );
  },
  down: queryInterface => queryInterface.bulkDelete('meetapps', null, {}),
};
