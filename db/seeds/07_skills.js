exports.seed = function(knex) {
  return knex('skills').truncate()
    .then(() => {
      return knex('skills').insert([
        {
            name: "javascript"
        },
        {
            name: "bash"
        },
        {
            name: "angularjs"
        },
        {
            name: "html5"
        },
        {
            name: "css3"
        },
        {
            name: "expressjs"
        },
        {
            name: 'postgresql'
        },
        {
            name: 'powershell'
        }
      ]);
    })
};
