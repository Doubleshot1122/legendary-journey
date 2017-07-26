exports.seed = function(knex) {
  return knex('skill_user').truncate()
    .then(() => {
      return knex('skill_user').insert([
        {
            skill_id: 1,
            user_id: 1,
            xp_gained: 450
        },
        {
            skill_id: 2,
            user_id: 1,
            xp_gained: 820
        },
        {
            skill_id: 3,
            user_id: 1,
            xp_gained: 150
        },
        {
            skill_id: 4,
            user_id: 1,
            xp_gained: 630
        },
        {
            skill_id: 5,
            user_id: 1,
            xp_gained: 630
        },
        {
            skill_id: 6,
            user_id: 1,
            xp_gained: 450
        },
        {
            skill_id: 7,
            user_id: 1,
            xp_gained: 601
        },
        {
            skill_id: 8,
            user_id: 1,
            xp_gained: 820
        },
        {
            skill_id: 1,
            user_id: 2,
            xp_gained: 260000
        },
        {
            skill_id: 2,
            user_id: 2,
            xp_gained: 2000000
        },
        {
            skill_id: 1,
            user_id: 3,
            xp_gained: 3000000
        },
        {
            skill_id: 2,
            user_id: 3,
            xp_gained: 150000
        },
        {
            skill_id: 1,
            user_id: 4,
            xp_gained: 10000
        },
        {
            skill_id: 2,
            user_id: 4,
            xp_gained: 40000
        },
        {
            skill_id: 1,
            user_id: 5,
            xp_gained: 10000
        },
        {
            skill_id: 2,
            user_id: 5,
            xp_gained: 90000
        },
        {
            skill_id: 2,
            user_id: 6,
            xp_gained: 3700000
        },
        {
            skill_id: 1,
            user_id: 7,
            xp_gained: 30000
        }
      ]);
    })
};
