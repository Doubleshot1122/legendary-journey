exports.up = (knex) => {
  return knex.schema.createTable('tasks', table => {
    table.increments()
    table.string('quest_id').notNullable()
    table.string('description').notNullable()
    table.boolean('complete').defaultTo('false').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tasks')
}
