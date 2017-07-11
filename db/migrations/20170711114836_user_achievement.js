exports.up = (knex) => {
  return knex.schema.createTable('user_achievement', table => {
    table.integer('user_id').notNullable()
    table.integer('achievement_id').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('user_achievement')
}
