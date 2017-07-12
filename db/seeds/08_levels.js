exports.seed = function(knex) {
  return knex('levels').truncate()
    .then(() => {
      return knex('levels').insert([
        {
            cap_amount: 520000
        },
        {
            cap_amount: 1040000
        },
        {
            cap_amount: 1560000
        },
        {
            cap_amount: 2080000
        },
        {
            cap_amount: 2600000
        },
        {
            cap_amount: 3120000
        },
        {
            cap_amount: 3640000
        },
        {
            cap_amount: 4160000
        },
        {
            cap_amount: 4680000
        },
        {
            cap_amount: 5200000
        }
      ]);
    })
};
