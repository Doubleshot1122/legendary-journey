exports.up = (knex) => {
  return knex.schema.createTable('skill_user', table => {
    table.integer('skill_id').notNullable()
    table.integer('user_id').notNullable()
    table.bigInteger('xp_gained').defaultTo(0).notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('skill_user')
}
