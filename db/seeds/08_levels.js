exports.seed = function(knex) {
  return knex('levels').truncate()
    .then(() => {
      return knex('levels').insert([
        {
            cap_amount: 200 //520000
        },
        {
            cap_amount: 400 //1040000
        },
        {
            cap_amount: 600 //1560000
        },
        {
            cap_amount: 800 //2080000
        },
        {
            cap_amount: 1000 //2600000
        },
        {
            cap_amount: 1200 //2600000
        }
      ]);
    })
};
