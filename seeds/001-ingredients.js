exports.seed = (knex, Promise) => {
  return knex('ingredients').truncate()
    .then(() => {
      return knex('ingredients').insert([
        { name: 'oat milk' },
        { name: 'cereal' },
        { name: 'cookies' },
        { name: 'boxed mac and chee' },
        { name: 'chai' },
        { name: 'cup noodles' },
        { name: 'water' },
        { name: 'shoyu' },
        { name: 'love' }
      ]);
    });
};