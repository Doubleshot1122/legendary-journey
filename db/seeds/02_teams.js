exports.seed = function(knex) {
  return knex('teams').truncate()
    .then(() => {
      return knex('teams').insert([
        {
            manager_id: 1,
            lead_id: 5,
            team_name: "Council of Ricks",
            avatar_url: "https://vignette3.wikia.nocookie.net/villains/images/8/8e/Transdimensional_council_of_ricks_pin_by_stewartisme-d7dtrr7.png/revision/latest?cb=20170406232952"
        },
        {
            manager_id: 4,
            lead_id: 7,
            team_name: "Needful Things",
            avatar_url: "http://i2.kym-cdn.com/photos/images/original/001/259/772/268.png"
        },
        {
            lead_id: 3,
            team_name: "Purge",
            avatar_url: "https://vignette1.wikia.nocookie.net/rickandmorty/images/4/49/Screenshot_2016-01-18_at_6.02.23_PM.png/revision/latest?cb=20160118232300"
        }
      ]);
    })
};
