exports.seed = function(knex) {
  return knex('skills').truncate()
    .then(() => {
      return knex('skills').insert([
        {
            name: "javascript"
        },
        {
            name: "unix"
        }
      ]);
    })
};
