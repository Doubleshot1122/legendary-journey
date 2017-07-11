exports.up = (knex) => {
  return knex.schema.createTable('skill_quest', table => {
    table.integer('skill_id').notNullable()
    table.integer('quest_id').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('skill_quest')
}
