exports.up = (knex) => {
  return knex.schema.createTable('quests', table => {
    table.increments()
    table.string('type').notNullable()
    table.string('name').notNullable()
    table.text('description').notNullable()
    table.bigInteger('xp_amount').notNullable()
    table.integer('project_id')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('quests')
}
